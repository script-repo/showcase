import { useEffect, useMemo, useState } from 'react';
import { QUESTION_BANK } from './data/questions';
import { DOMAINS, type Domain, type Question } from './types';
import type { AnswerMap, DomainStat, FeedbackMap, FlagMap } from './ui';
import { useSound } from './hooks/useSound';
import { usePersistedState } from './lib/usePersistedState';
import { pressCalculatorKey } from './lib/calculator';
import { parseMarkdownBank } from './lib/parseMarkdown';
import { shuffle, shuffleQuestionOptions, type ShuffledQuestion } from './lib/shuffle';
import { Dashboard } from './components/Dashboard';
import { StudyMode } from './components/StudyMode';
import { TestingMode } from './components/TestingMode';
import { ReviewMode } from './components/ReviewMode';
import { ResultsMode } from './components/ResultsMode';
import { ImportMode } from './components/ImportMode';

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

  const [activeTestQuestions, setActiveTestQuestions] = useState<ShuffledQuestion[]>([]);
  const [studyQuestions, setStudyQuestions] = useState<ShuffledQuestion[]>([]);

  const [examTimer, setExamTimer] = useState(EXAM_SECONDS);
  const [isTimerHidden, setIsTimerHidden] = useState(false);
  const [examTimerActive, setExamTimerActive] = useState(false);

  const [rawMarkdown, setRawMarkdown] = useState('');
  const [importStatus, setImportStatus] = useState<{ success: boolean; count: number } | null>(null);

  const [showCalculator, setShowCalculator] = useState(false);
  const [calcInput, setCalcInput] = useState('');
  const [soundEnabled, setSoundEnabled] = usePersistedState('sound', true);

  const play = useSound(soundEnabled);

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

  // Build a freshly shuffled set of study questions (order + options) for a domain.
  const buildStudyQuestions = (domain: 'All' | Domain): ShuffledQuestion[] => {
    const pool = domain === 'All' ? questionBank : questionBank.filter((q) => q.domain === domain);
    return shuffle(pool).map(shuffleQuestionOptions);
  };

  // Translate canonical (stored) answer indices into the displayed positions for a
  // given (possibly shuffled) set of questions, so components render in displayed space.
  const toDisplayed = (qs: Question[]): AnswerMap => {
    const map: AnswerMap = {};
    for (const q of qs) {
      const canonical = selectedAnswers[q.id];
      if (canonical === undefined) continue;
      const order = (q as ShuffledQuestion).optionOrder;
      map[q.id] = order ? order.indexOf(canonical) : canonical;
    }
    return map;
  };

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
    const selected = shuffle(questionBank)
      .slice(0, Math.min(EXAM_SIZE, questionBank.length))
      .map(shuffleQuestionOptions);
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

  const selectOption = (displayedIdx: number) => {
    play('click');
    const q = activeQuestions[currentQuestionIndex];
    if (!q) return;
    const canonical = q.optionOrder[displayedIdx];
    setSelectedAnswers((prev) => ({ ...prev, [q.id]: canonical }));
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
    const correct = chosen === q.optionOrder[q.correctIndex];
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
    if (mode === 'study') setStudyQuestions(buildStudyQuestions(selectedDomain));
    setActiveMode(mode);
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

  const resultsQuestions = activeTestQuestions.length > 0 ? activeTestQuestions : questionBank;

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

      {activeMode === 'dashboard' && (
        <Dashboard
          questionCount={questionBank.length}
          solvedCount={Object.keys(selectedAnswers).length}
          flaggedCount={Object.values(flaggedQuestions).filter(Boolean).length}
          overallReadiness={overallReadiness}
          domainStatistics={domainStatistics}
          onLaunchTest={startTimedExam}
          onEnterStudy={() => goToMode('study')}
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
            setStudyQuestions(buildStudyQuestions(d));
          }}
          currentIndex={currentQuestionIndex}
          onSelectOption={selectOption}
          onToggleFlag={toggleFlag}
          onPrev={handlePrev}
          onNext={handleNext}
          onVerify={verifyStudyAnswer}
          selectedAnswers={toDisplayed(studyQuestions)}
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
          selectedAnswers={toDisplayed(activeTestQuestions)}
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
          selectedAnswers={toDisplayed(activeTestQuestions)}
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
          questions={resultsQuestions}
          selectedAnswers={toDisplayed(resultsQuestions)}
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

      <footer className="bg-[#04060a] border-t border-slate-900 text-center py-3 text-[10px] font-mono font-bold text-slate-600 mt-auto">
        KCNA Study Portal · {questionBank.length} questions · {PASS_MARK}% pass mark · progress saved in your browser
      </footer>
    </div>
  );
}
