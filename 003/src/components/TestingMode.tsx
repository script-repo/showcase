import { formatTime } from '../lib/formatTime';
import type { Question } from '../types';
import type { AnswerMap, FlagMap } from '../ui';

interface TestingModeProps {
  questions: Question[];
  currentIndex: number;
  examTimer: number;
  isTimerHidden: boolean;
  onToggleTimer: () => void;
  selectedAnswers: AnswerMap;
  flaggedQuestions: FlagMap;
  onSelectOption: (idx: number) => void;
  onToggleFlag: () => void;
  onPrev: () => void;
  onNext: () => void;
  onOpenReview: () => void;
  showCalculator: boolean;
  onToggleCalculator: () => void;
  calcInput: string;
  onCalcKey: (key: string) => void;
}

const CALC_KEYS = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'];

export function TestingMode(props: TestingModeProps) {
  const {
    questions,
    currentIndex,
    examTimer,
    isTimerHidden,
    onToggleTimer,
    selectedAnswers,
    flaggedQuestions,
    onSelectOption,
    onToggleFlag,
    onPrev,
    onNext,
    onOpenReview,
    showCalculator,
    onToggleCalculator,
    calcInput,
    onCalcKey,
  } = props;

  const current = questions[currentIndex];
  if (!current) {
    return (
      <main className="flex-1 flex items-center justify-center text-slate-500 text-sm">
        No active exam. Start one from the dashboard.
      </main>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-slate-50 text-slate-900 select-text relative">
      <div className="bg-[#0b101d] text-white px-6 py-4 flex items-center justify-between shrink-0">
        <span className="text-xs font-black uppercase tracking-wider text-slate-300">Timed Exam Simulator</span>
        <div className="flex items-center gap-3 font-mono">
          <span className="text-xs text-slate-400">Time:</span>
          {!isTimerHidden ? (
            <span className={`text-sm font-bold ${examTimer < 300 ? 'text-rose-400' : 'text-emerald-400'}`}>
              {formatTime(examTimer)}
            </span>
          ) : (
            <span className="text-xs text-slate-500">[Hidden]</span>
          )}
          <button onClick={onToggleTimer} className="bg-slate-800 text-[10px] px-2 py-1 rounded text-slate-300">
            Toggle
          </button>
        </div>
      </div>

      <div className="bg-slate-100 border-b border-slate-200 px-6 py-2.5 flex items-center justify-between shrink-0">
        <span className="text-xs font-bold text-slate-600">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-slate-700">
            <input
              type="checkbox"
              checked={!!flaggedQuestions[current.id]}
              onChange={onToggleFlag}
              className="rounded text-indigo-600"
            />
            Flag
          </label>
          <button
            onClick={onToggleCalculator}
            className="bg-white border border-slate-300 text-[11px] font-bold px-2.5 py-1 rounded"
          >
            Calculator
          </button>
        </div>
      </div>

      <div className="flex-1 p-6 md:p-8 overflow-y-auto">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-[9px] uppercase font-bold text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded tracking-widest">
            {current.domain}
          </span>
          <h3 className="text-base md:text-lg font-bold text-slate-900 leading-relaxed border-b border-slate-100 pb-3">
            {current.question}
          </h3>
          <div className="space-y-3">
            {current.options.map((option, idx) => {
              const isSelected = selectedAnswers[current.id] === idx;
              return (
                <label
                  key={idx}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                    isSelected ? 'border-indigo-600 bg-indigo-50/60' : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    checked={isSelected}
                    onChange={() => onSelectOption(idx)}
                    className="mt-0.5 text-indigo-600"
                  />
                  <span className="text-xs md:text-sm font-medium text-slate-800">
                    <strong className="text-slate-400 mr-1.5">{String.fromCharCode(65 + idx)}.</strong>
                    {option}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {showCalculator && (
        <div className="absolute bottom-20 left-6 bg-[#0a0f1d] text-white p-3 rounded-xl border border-slate-800 shadow-2xl z-50 w-52 font-mono">
          <div className="bg-black p-2 rounded text-right text-sm mb-2 h-8 truncate">{calcInput || '0'}</div>
          <div className="grid grid-cols-4 gap-1 text-xs">
            {CALC_KEYS.map((b) => (
              <button key={b} onClick={() => onCalcKey(b)} className="p-2 bg-slate-800 rounded hover:bg-slate-700">
                {b}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="bg-slate-200 px-6 py-3.5 flex items-center justify-between shrink-0">
        <button
          onClick={onOpenReview}
          className="bg-[#111827] hover:bg-slate-800 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-lg"
        >
          Review &amp; Submit
        </button>
        <div className="flex gap-2">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="bg-white border border-slate-300 px-4 py-2 rounded-lg text-xs font-bold disabled:opacity-40"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            disabled={currentIndex === questions.length - 1}
            className="bg-white border border-slate-300 px-4 py-2 rounded-lg text-xs font-bold disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
