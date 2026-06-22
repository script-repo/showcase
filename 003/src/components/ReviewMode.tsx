import type { Question } from '../types';
import type { AnswerMap, FlagMap } from '../ui';

interface ReviewModeProps {
  questions: Question[];
  selectedAnswers: AnswerMap;
  flaggedQuestions: FlagMap;
  onJumpTo: (idx: number) => void;
  onResume: () => void;
  onSubmit: () => void;
}

export function ReviewMode({
  questions,
  selectedAnswers,
  flaggedQuestions,
  onJumpTo,
  onResume,
  onSubmit,
}: ReviewModeProps) {
  const answeredCount = questions.filter((q) => selectedAnswers[q.id] !== undefined).length;

  return (
    <main className="flex-1 max-w-4xl w-full mx-auto p-6 space-y-6">
      <div className="bg-[#0e1424] border border-slate-800 p-5 rounded-2xl space-y-1">
        <h2 className="text-lg font-black text-white">Review Your Answers</h2>
        <p className="text-xs text-slate-400">
          {answeredCount} of {questions.length} answered. Click any question to jump back to it, then submit when ready.
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-2.5">
        {questions.map((q, idx) => {
          const isAnswered = selectedAnswers[q.id] !== undefined;
          const isFlagged = flaggedQuestions[q.id];
          return (
            <button
              key={q.id}
              onClick={() => onJumpTo(idx)}
              className={`p-2 rounded-xl border text-center flex flex-col justify-between h-14 font-mono text-[11px] ${
                isFlagged
                  ? 'border-amber-500 bg-amber-500/10'
                  : isAnswered
                    ? 'border-indigo-500 bg-indigo-500/10'
                    : 'border-slate-800 bg-slate-900/40'
              }`}
            >
              <span className="text-slate-500 font-bold">Q{idx + 1}</span>
              <span className="text-white font-black">{isAnswered ? 'DONE' : '—'}</span>
            </button>
          );
        })}
      </div>

      <div className="flex justify-between items-center border-t border-slate-800 pt-4">
        <button onClick={onResume} className="bg-slate-800 px-4 py-2 rounded-lg text-xs font-bold border border-slate-700">
          Resume Exam
        </button>
        <button
          onClick={onSubmit}
          className="bg-rose-600 hover:bg-rose-500 px-5 py-2.5 rounded-lg text-xs font-extrabold text-white"
        >
          Submit Exam
        </button>
      </div>
    </main>
  );
}
