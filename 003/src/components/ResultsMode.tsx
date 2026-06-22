import type { Question } from '../types';
import type { AnswerMap } from '../ui';

interface ResultsModeProps {
  questions: Question[];
  selectedAnswers: AnswerMap;
  onRetake: () => void;
  onHome: () => void;
}

export function ResultsMode({ questions, selectedAnswers, onRetake, onHome }: ResultsModeProps) {
  const total = questions.length || 1;
  const correctCount = questions.filter((q) => selectedAnswers[q.id] === q.correctIndex).length;
  const score = Math.round((correctCount / total) * 100);
  const passed = score >= 75;

  return (
    <main className="flex-1 max-w-3xl w-full mx-auto p-6 space-y-6">
      <div
        className={`p-8 rounded-3xl text-center space-y-3 border ${
          passed ? 'bg-emerald-950/40 border-emerald-500/20' : 'bg-rose-950/40 border-rose-500/20'
        }`}
      >
        <span className="text-[10px] font-black uppercase tracking-widest block text-slate-300">
          {passed ? 'Passing Score' : 'Below Passing Score'}
        </span>
        <h2 className="text-3xl font-black text-white">Score: {score}%</h2>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          {correctCount} of {questions.length} correct.{' '}
          {passed
            ? 'Nice work — you cleared the 75% target used for the KCNA.'
            : 'Keep practicing the domains below to reach the 75% target.'}
        </p>
        <div className="flex justify-center gap-2 pt-2">
          <button onClick={onRetake} className="bg-white text-slate-950 font-black text-xs px-4 py-2 rounded-lg">
            Retake Exam
          </button>
          <button
            onClick={onHome}
            className="bg-slate-800 border border-slate-700 text-xs font-bold px-4 py-2 rounded-lg text-slate-200"
          >
            Back to Dashboard
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs uppercase font-black text-slate-400 tracking-wider">Answer Breakdown</h3>
        {questions.map((q, idx) => {
          const chosen = selectedAnswers[q.id];
          const correct = chosen === q.correctIndex;
          return (
            <div key={q.id} className="bg-[#0e1424] border border-slate-800 p-4 rounded-xl text-xs space-y-2">
              <div className="flex justify-between text-[10px] uppercase font-bold">
                <span className="text-slate-500">
                  Q{idx + 1} — {q.domain}
                </span>
                <span className={correct ? 'text-emerald-400' : 'text-rose-400'}>{correct ? 'Correct' : 'Incorrect'}</span>
              </div>
              <p className="font-bold text-slate-200">{q.question}</p>
              <p className="text-slate-400">
                Your answer:{' '}
                <span className={correct ? 'text-emerald-400' : 'text-rose-400'}>
                  {chosen !== undefined ? q.options[chosen] : '(skipped)'}
                </span>
              </p>
              {!correct && (
                <p className="text-slate-400">
                  Correct answer: <span className="text-emerald-400 font-bold">{q.options[q.correctIndex]}</span>
                </p>
              )}
              {q.explanation && (
                <div className="bg-[#05070c] p-3 rounded-lg border border-slate-800/60 text-slate-400">{q.explanation}</div>
              )}
              {q.reference && (
                <a
                  href={q.reference}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-indigo-400 hover:text-indigo-300 font-bold"
                >
                  Learn more →
                </a>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
