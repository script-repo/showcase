import { useEffect, useMemo, useState } from 'react';
import { QUESTION_BANK } from './data/questions';
import { DOMAINS, type Domain, type Question } from './types';
import type {
  AnswerMap,
  DomainStat,
  ExplainModalData,
  FeedbackMap,
  FlagMap,
  GeneratedQuestion,
} from './ui';
import { useSound } from './hooks/useSound';
import { usePersistedState } from './lib/usePersistedState';
import { pressCalculatorKey } from './lib/calculator';
import { generateContent } from './lib/gemini';
import { parseMarkdownBank } from './lib/parseMarkdown';
import { Dashboard } from './components/Dashboard';
import { StudyMode } from './components/StudyMode';
import { TestingMode } from './components/TestingMode';
import { ReviewMode } from './components/ReviewMode';
import { ResultsMode } from './components/ResultsMode';
import { ImportMode } from './components/ImportMode';
import { ApiKeyModal, ExplainModal } from './components/Modals';

type Mode = 'dashboard' | 'study' | 'testing' | 'review' | 'results' | 'import';

const EXAM_SECONDS = 5400; // 90 minutes
const EXAM_SIZE = 50;
const PASS_MARK = 75;

export default function App() {
  const [activeMode, setActiveMode] = useState<Mode>('dashboard');
  const [importedQuestions, setImportedQuestions] = usePersistedState<Question[]>('imported', []);
  const questionBank = useMemo(() => [...QUESTION_BANK, ...importedQuestions], [importedQuestions]);

  const [selectedDomain, setSelectedDomain] = useState<'All' | Domain>('All');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = usePersistedState<AnswerMap>('answers', {});
  const [flaggedQuestions, setFlaggedQuestions] = usePersistedState<FlagMap>('flags', {});
  const [studyFeedback, setStudyFeedback] = usePersistedState<FeedbackMap>('feedback', {});

  const [activeTestQuestions, setActiveTestQuestions] = useState<Question[]>([]);

  const [examTimer, setExamTimer] = useState(EXAM_SECONDS);
  const [isTimerHidden, setIsTimerHidden] = useState(false);
  const [examTimerActive, setExamTimerActive] = useState(false);

  const [rawMarkdown, setRawMarkdown] = useState('');
  const [importStatus, setImportStatus] = useState<{ success: boolean; count: number } | null>(null);

  const [showCalculator, setShowCalculator] = useState(false);
  const [calcInput, setCalcInput] = useState('');
  const [soundEnabled, setSoundEnabled] = usePersistedState('sound', true);
  const [geminiApiKey, setGeminiApiKey] = usePersistedState('gemini-key', '');
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);

  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const [aiStudyPlan, setAiStudyPlan] = useState('');
  const [activeExplainModal, setActiveExplainModal] = useState<ExplainModalData | null>(null);

  const [sandboxDomain, setSandboxDomain] = useState<Domain>('Kubernetes Fundamentals');
  const [generatedQuestion, setGeneratedQuestion] = useState<GeneratedQuestion | null>(null);
  const [sandboxAnswerSelected, setSandboxAnswerSelected] = useState<number | null>(null);
  const [sandboxVerified, setSandboxVerified] = useState(false);

  const play = useSound(soundEnabled);
  const hasApiKey = Boolean(geminiApiKey);

  const domainStatistics: DomainStat[] = useMemo(
    () =>
      DOMAINS.map((domain) => {
        const inDomain = questionBank.filter((q) => q.domain === domain);
        const correct = inDomain.filter((q) => selectedAnswers[q.id] === q.correctIndex).length;
        return {
          name: domain,
          total: inDomain.length,
          correct,
          rate: inDomain.length > 0 ? Math.round((correct / inDomain.length) * 100) : 0,
        };
      }),
    [selectedAnswers, questionBank],
  );

  const overallReadiness = useMemo(() => {
    const answered = Object.keys(selectedAnswers).length;
    if (answered === 0) return 0;
    const correct = questionBank.filter((q) => selectedAnswers[q.id] === q.correctIndex).length;
    return Math.round((correct / questionBank.length) * 100);
  }, [selectedAnswers, questionBank]);

  const studyQuestions = useMemo(
    () => (selectedDomain === 'All' ? questionBank : questionBank.filter((q) => q.domain === selectedDomain)),
    [selectedDomain, questionBank],
  );

  // Exam countdown
  useEffect(() => {
    if (!examTimerActive) return;
    if (examTimer <= 0) {
      setExamTimerActive(false);
      finishExam();
      return;
    }
    const interval = setInterval(() => setExamTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examTimerActive, examTimer]);

  const startTimedExam = () => {
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(EXAM_SIZE, shuffled.length));
    setActiveTestQuestions(selected);
    setSelectedAnswers({});
    setFlaggedQuestions({});
    setStudyFeedback({});
    setCurrentQuestionIndex(0);
    setExamTimer(EXAM_SECONDS);
    setExamTimerActive(true);
    setActiveMode('testing');
    play('success');
  };

  const finishExam = () => {
    setExamTimerActive(false);
    setActiveMode('results');
    play('click');
  };

  const activeQuestions = activeMode === 'study' ? studyQuestions : activeTestQuestions;

  const selectOption = (optIndex: number) => {
    play('click');
    const q = activeQuestions[currentQuestionIndex];
    if (!q) return;
    setSelectedAnswers((prev) => ({ ...prev, [q.id]: optIndex }));
  };

  const toggleFlag = () => {
    play('click');
    const q = activeQuestions[currentQuestionIndex];
    if (!q) return;
    setFlaggedQuestions((prev) => ({ ...prev, [q.id]: !prev[q.id] }));
  };

  const handleNext = () => {
    play('click');
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, activeQuestions.length - 1));
  };

  const handlePrev = () => {
    play('click');
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const verifyStudyAnswer = () => {
    const q = studyQuestions[currentQuestionIndex];
    if (!q) return;
    const chosen = selectedAnswers[q.id];
    if (chosen === undefined) return;
    const correct = chosen === q.correctIndex;
    setStudyFeedback((prev) => ({ ...prev, [q.id]: { checked: true, correct } }));
    play(correct ? 'success' : 'failure');
  };

  const handleCalcKey = (key: string) => {
    play('click');
    setCalcInput((prev) => pressCalculatorKey(prev, key));
  };

  const goToMode = (mode: Mode) => {
    play('click');
    setCurrentQuestionIndex(0);
    setActiveMode(mode);
  };

  // ---- AI features (require a user-supplied key) ----
  const requireKey = () => {
    if (!hasApiKey) {
      setAiError('Add a Gemini API key first (top-right ✨ Key button) to use AI features.');
      setShowApiKeyModal(true);
      return false;
    }
    return true;
  };

  const handleGenerateStudyPlan = async () => {
    if (!requireKey()) return;
    setAiLoading(true);
    setAiError('');
    setAiStudyPlan('');
    play('click');
    try {
      const stats = domainStatistics
        .map((s) => `- ${s.name}: ${s.correct}/${s.total} correct`)
        .join('\n');
      const response = await generateContent({
        apiKey: geminiApiKey,
        systemPrompt: 'You are an experienced SRE and Kubernetes trainer building certification study plans.',
        prompt: `Build an encouraging, well-organized 7-day study plan to master the KCNA exam. Focus on my weakest domains. My current performance:\n${stats}\n\nFor each day include: CNCF documentation reading targets, a hands-on lab goal using minikube or kind, and an exam-strategy checkpoint.`,
      });
      setAiStudyPlan(response);
      play('success');
    } catch {
      setAiError('Could not generate the study plan. Check your API key and connection.');
      play('failure');
    } finally {
      setAiLoading(false);
    }
  };

  const handleAiExplain = async () => {
    if (!requireKey()) return;
    const q = studyQuestions[currentQuestionIndex];
    if (!q) return;
    setAiLoading(true);
    setAiError('');
    setActiveExplainModal(null);
    play('click');
    try {
      const response = await generateContent({
        apiKey: geminiApiKey,
        systemPrompt: 'You are an expert Kubernetes trainer giving a clear conceptual deep-dive.',
        prompt: `Explain this KCNA question in depth.\nQuestion: "${q.question}"\nOptions:\n${q.options
          .map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`)
          .join('\n')}\nCorrect answer: "${q.options[q.correctIndex]}"\n\nInclude: (1) why the correct answer is right and the others are wrong, (2) a real-world analogy, and (3) 2-3 kubectl commands to explore this in a local cluster. Use clear markdown.`,
      });
      setActiveExplainModal({
        question: q.question,
        correctOption: q.options[q.correctIndex],
        response,
      });
    } catch {
      setAiError('Could not reach Gemini. Check your API key and connection.');
      play('failure');
    } finally {
      setAiLoading(false);
    }
  };

  const handleGenerateSandbox = async () => {
    if (!requireKey()) return;
    setAiLoading(true);
    setAiError('');
    setGeneratedQuestion(null);
    setSandboxAnswerSelected(null);
    setSandboxVerified(false);
    play('click');
    try {
      const response = await generateContent({
        apiKey: geminiApiKey,
        systemPrompt: 'You are a CNCF certification author. Always return valid JSON matching the schema.',
        prompt: `Generate one challenging, conceptual KCNA multiple-choice question in the domain "${sandboxDomain}". Provide exactly 4 plausible options, a correctIndex (0-3), and a clear explanation. Focus on real-world behavior, not trivia.`,
        responseSchema: {
          type: 'OBJECT',
          properties: {
            question: { type: 'STRING' },
            options: { type: 'ARRAY', items: { type: 'STRING' }, minItems: 4, maxItems: 4 },
            correctIndex: { type: 'INTEGER' },
            explanation: { type: 'STRING' },
          },
          required: ['question', 'options', 'correctIndex', 'explanation'],
        },
      });
      const parsed = JSON.parse(response) as GeneratedQuestion;
      setGeneratedQuestion(parsed);
      play('success');
    } catch {
      setAiError('Sandbox generation failed. Check your API key and try again.');
      play('failure');
    } finally {
      setAiLoading(false);
    }
  };

  const handleImportMarkdown = () => {
    if (!rawMarkdown.trim()) return;
    try {
      const startId = 100000 + importedQuestions.length;
      const parsed = parseMarkdownBank(rawMarkdown, startId);
      if (parsed.length > 0) {
        setImportedQuestions((prev) => [...prev, ...parsed]);
        setImportStatus({ success: true, count: parsed.length });
        setRawMarkdown('');
        play('success');
      } else {
        setImportStatus({ success: false, count: 0 });
        play('failure');
      }
    } catch {
      setImportStatus({ success: false, count: 0 });
      play('failure');
    }
  };

  const navButton = (mode: Mode, label: string, accent = false) => (
    <button
      onClick={() => (mode === 'testing' ? startTimedExam() : goToMode(mode))}
      className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
        activeMode === mode
          ? accent
            ? 'bg-rose-600 text-white'
            : 'bg-indigo-600 text-white'
          : accent
            ? 'text-rose-400 hover:bg-rose-500/10'
            : 'text-slate-400 hover:bg-slate-800/50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans antialiased">
      <header className="border-b border-slate-800 bg-[#04060a]/90 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600/20 p-2 rounded-xl border border-indigo-500/30">
            <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-400">KCNA Portal</span>
            <h1 className="text-base font-black tracking-tight text-white">Exam Study &amp; Simulator</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          {navButton('dashboard', 'Dashboard')}
          {navButton('study', 'Study Mode')}
          {navButton('testing', 'Timed Exam', true)}
          {navButton('import', 'Import')}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowApiKeyModal(true)}
            className={`p-2 rounded-lg border text-xs font-bold font-mono px-2.5 ${
              hasApiKey
                ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                : 'text-slate-400 bg-slate-800/50 border-slate-700'
            }`}
          >
            ✨ Key
          </button>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2 rounded-lg border text-xs font-bold font-mono px-2.5 ${
              soundEnabled
                ? 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
                : 'text-slate-500 bg-slate-800/50 border-transparent'
            }`}
          >
            {soundEnabled ? 'Sound On' : 'Muted'}
          </button>
        </div>
      </header>

      {/* Mobile nav */}
      <nav className="md:hidden flex items-center gap-2 px-4 py-2 overflow-x-auto border-b border-slate-800 bg-[#04060a]">
        {navButton('dashboard', 'Dashboard')}
        {navButton('study', 'Study')}
        {navButton('testing', 'Exam', true)}
        {navButton('import', 'Import')}
      </nav>

      {aiLoading && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-bold tracking-widest text-indigo-400 animate-pulse uppercase">Asking Gemini…</p>
        </div>
      )}

      {aiError && (
        <div className="bg-rose-950/80 border border-rose-500/40 p-4 mx-6 mt-4 rounded-xl flex items-center justify-between animate-fadeIn">
          <span className="text-xs font-bold text-rose-300">{aiError}</span>
          <button onClick={() => setAiError('')} className="text-rose-400 text-xs font-bold hover:underline">
            Dismiss
          </button>
        </div>
      )}

      {activeMode === 'dashboard' && (
        <Dashboard
          questionCount={questionBank.length}
          solvedCount={Object.keys(selectedAnswers).length}
          flaggedCount={Object.values(flaggedQuestions).filter(Boolean).length}
          overallReadiness={overallReadiness}
          domainStatistics={domainStatistics}
          hasApiKey={hasApiKey}
          aiStudyPlan={aiStudyPlan}
          onClearStudyPlan={() => setAiStudyPlan('')}
          onLaunchTest={startTimedExam}
          onEnterStudy={() => goToMode('study')}
          onGenerateStudyPlan={handleGenerateStudyPlan}
          sandboxDomain={sandboxDomain}
          onSandboxDomainChange={setSandboxDomain}
          onGenerateSandbox={handleGenerateSandbox}
          generatedQuestion={generatedQuestion}
          onCloseSandbox={() => setGeneratedQuestion(null)}
          sandboxAnswerSelected={sandboxAnswerSelected}
          onSandboxSelect={setSandboxAnswerSelected}
          sandboxVerified={sandboxVerified}
          onVerifySandbox={() => {
            setSandboxVerified(true);
            play(sandboxAnswerSelected === generatedQuestion?.correctIndex ? 'success' : 'failure');
          }}
        />
      )}

      {activeMode === 'study' && (
        <StudyMode
          questions={studyQuestions}
          selectedDomain={selectedDomain}
          onDomainChange={(d) => {
            play('click');
            setSelectedDomain(d);
            setCurrentQuestionIndex(0);
          }}
          currentIndex={currentQuestionIndex}
          onSelectOption={selectOption}
          onToggleFlag={toggleFlag}
          onPrev={handlePrev}
          onNext={handleNext}
          onVerify={verifyStudyAnswer}
          onExplainWithAi={handleAiExplain}
          hasApiKey={hasApiKey}
          selectedAnswers={selectedAnswers}
          flaggedQuestions={flaggedQuestions}
          studyFeedback={studyFeedback}
        />
      )}

      {activeMode === 'testing' && (
        <TestingMode
          questions={activeTestQuestions}
          currentIndex={currentQuestionIndex}
          examTimer={examTimer}
          isTimerHidden={isTimerHidden}
          onToggleTimer={() => setIsTimerHidden((v) => !v)}
          selectedAnswers={selectedAnswers}
          flaggedQuestions={flaggedQuestions}
          onSelectOption={selectOption}
          onToggleFlag={toggleFlag}
          onPrev={handlePrev}
          onNext={handleNext}
          onOpenReview={() => goToMode('review')}
          showCalculator={showCalculator}
          onToggleCalculator={() => setShowCalculator((v) => !v)}
          calcInput={calcInput}
          onCalcKey={handleCalcKey}
        />
      )}

      {activeMode === 'review' && (
        <ReviewMode
          questions={activeTestQuestions}
          selectedAnswers={selectedAnswers}
          flaggedQuestions={flaggedQuestions}
          onJumpTo={(idx) => {
            play('click');
            setCurrentQuestionIndex(idx);
            setActiveMode('testing');
          }}
          onResume={() => setActiveMode('testing')}
          onSubmit={finishExam}
        />
      )}

      {activeMode === 'results' && (
        <ResultsMode
          questions={activeTestQuestions.length > 0 ? activeTestQuestions : questionBank}
          selectedAnswers={selectedAnswers}
          onRetake={startTimedExam}
          onHome={() => goToMode('dashboard')}
        />
      )}

      {activeMode === 'import' && (
        <ImportMode
          rawMarkdown={rawMarkdown}
          onChange={setRawMarkdown}
          onImport={handleImportMarkdown}
          importStatus={importStatus}
        />
      )}

      {activeExplainModal && (
        <ExplainModal data={activeExplainModal} onClose={() => setActiveExplainModal(null)} />
      )}

      {showApiKeyModal && (
        <ApiKeyModal
          currentKey={geminiApiKey}
          onSave={(key) => {
            setGeminiApiKey(key);
            setShowApiKeyModal(false);
            if (key) setAiError('');
          }}
          onClose={() => setShowApiKeyModal(false)}
        />
      )}

      <footer className="bg-[#04060a] border-t border-slate-900 text-center py-3 text-[10px] font-mono font-bold text-slate-600 mt-auto">
        KCNA Study Portal · {questionBank.length} questions · {PASS_MARK}% pass mark · progress saved in your browser
      </footer>
    </div>
  );
}
