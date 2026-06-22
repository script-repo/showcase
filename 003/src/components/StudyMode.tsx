import { DOMAINS, type Question } from '../types';
import type { AnswerMap, FeedbackMap, FlagMap } from '../ui';

interface StudyModeProps {
  questions: Question[];
  selectedDomain: 'All' | Question['domain'];
  onDomainChange: (domain: 'All' | Question['domain']) => void;
  currentIndex: number;
  onSelectOption: (idx: number) => void;
  onToggleFlag: () => void;
  onPrev: () => void;
  onNext: () => void;
  onVerify: () => void;
  onExplainWithAi: () => void;
  hasApiKey: boolean;
  selectedAnswers: AnswerMap;
  flaggedQuestions: FlagMap;
  studyFeedback: FeedbackMap;
}

export function StudyMode(props: StudyModeProps) {
  const {
    questions,
    selectedDomain,
    onDomainChange,
    currentIndex,
    onSelectOption,
    onToggleFlag,
    onPrev,
    onNext,
    onVerify,
    onExplainWithAi,
    hasApiKey,
    selectedAnswers,
    flaggedQuestions,
    studyFeedback,
  } = props;

  const current = questions[currentIndex];

  return (
    <main className="flex-1 max-w-4xl w-full mx-auto p-6 space-y-6">
      <div className="bg-[#0e1424] border border-slate-800 p-4 rounded-xl flex items-center justify-between">
        <select
          value={selectedDomain}
          onChange={(e) => onDomainChange(e.target.value as 'All' | Question['domain'])}
          className="bg-[#05070c] border border-slate-700 text-xs font-bold p-2 rounded-lg focus:outline-none text-slate-300"
        >
          <option value="All">All Domains</option>
          {DOMAINS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <span className="text-xs text-slate-400 font-bold font-mono">
          {questions.length === 0 ? '0 of 0' : `${currentIndex + 1} of ${questions.length}`}
        </span>
      </div>

      {current ? (
        <div className="bg-[#0e1424]/40 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-[10px] uppercase font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/20">
              {current.domain}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={onExplainWithAi}
                disabled={!hasApiKey}
                title={hasApiKey ? undefined : 'Add a Gemini API key (top-right) to enable AI features'}
                className="text-xs font-bold text-indigo-400 hover:text-indigo-300 disabled:text-slate-600 transition-all flex items-center gap-1 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded"
              >
                Explain with AI ✨
              </button>
              <button
                onClick={onToggleFlag}
                className={`text-xs font-mono font-bold ${flaggedQuestions[current.id] ? 'text-amber-400' : 'text-slate-500'}`}
              >
                {flaggedQuestions[current.id] ? '🚩 Flagged' : '🏳️ Flag'}
              </button>
            </div>
          </div>
          <h4 className="text-sm md:text-base font-bold text-slate-100">{current.question}</h4>
          <div className="space-y-2">
            {current.options.map((option, idx) => {
              const isSelected = selectedAnswers[current.id] === idx;
              const isChecked = studyFeedback[current.id]?.checked;
              const isCorrect = current.correctIndex === idx;
              let btnColor = 'border-slate-800 bg-[#05070c]/50 hover:bg-[#05070c]';
              if (isSelected) btnColor = 'border-indigo-500 bg-indigo-500/10 text-white';
              if (isChecked) {
                if (isCorrect) btnColor = 'border-emerald-500 bg-emerald-500/10 text-emerald-300';
                else if (isSelected) btnColor = 'border-rose-500 bg-rose-500/10 text-rose-300';
              }
              return (
                <button
                  key={idx}
                  onClick={() => !isChecked && onSelectOption(idx)}
                  disabled={isChecked}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs md:text-sm transition-all flex items-center gap-3 ${btnColor}`}
                >
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between border-t border-slate-800 pt-4">
            <button
              onClick={onVerify}
              disabled={selectedAnswers[current.id] === undefined || studyFeedback[current.id]?.checked}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl"
            >
              Check Answer
            </button>
            <div className="flex gap-1">
              <button
                onClick={onPrev}
                disabled={currentIndex === 0}
                className="p-2.5 bg-slate-800 rounded-xl disabled:opacity-30"
              >
                ◀
              </button>
              <button
                onClick={onNext}
                disabled={currentIndex === questions.length - 1}
                className="p-2.5 bg-slate-800 rounded-xl disabled:opacity-30"
              >
                ▶
              </button>
            </div>
          </div>

          {studyFeedback[current.id]?.checked && (
            <div className="bg-[#05070c] p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-1">
              <span className="text-indigo-400 font-extrabold uppercase tracking-wider block text-[10px]">Explanation</span>
              <p>{current.explanation || 'No explanation provided for this question.'}</p>
              {current.reference && (
                <a
                  href={current.reference}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-indigo-400 hover:text-indigo-300 font-bold pt-1"
                >
                  Learn more →
                </a>
              )}
              <p className="text-slate-600 text-[10px] pt-1">{current.source}</p>
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-slate-500 py-10">No questions in this domain.</p>
      )}
    </main>
  );
}
