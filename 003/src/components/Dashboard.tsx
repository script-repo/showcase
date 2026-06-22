import { DOMAINS, type Domain } from '../types';
import type { DomainStat, GeneratedQuestion } from '../ui';

interface DashboardProps {
  questionCount: number;
  solvedCount: number;
  flaggedCount: number;
  overallReadiness: number;
  domainStatistics: DomainStat[];
  hasApiKey: boolean;
  aiStudyPlan: string;
  onClearStudyPlan: () => void;
  onLaunchTest: () => void;
  onEnterStudy: () => void;
  onGenerateStudyPlan: () => void;
  sandboxDomain: Domain;
  onSandboxDomainChange: (domain: Domain) => void;
  onGenerateSandbox: () => void;
  generatedQuestion: GeneratedQuestion | null;
  onCloseSandbox: () => void;
  sandboxAnswerSelected: number | null;
  onSandboxSelect: (idx: number) => void;
  sandboxVerified: boolean;
  onVerifySandbox: () => void;
}

export function Dashboard(props: DashboardProps) {
  const {
    questionCount,
    solvedCount,
    flaggedCount,
    overallReadiness,
    domainStatistics,
    hasApiKey,
    aiStudyPlan,
    onClearStudyPlan,
    onLaunchTest,
    onEnterStudy,
    onGenerateStudyPlan,
    sandboxDomain,
    onSandboxDomainChange,
    onGenerateSandbox,
    generatedQuestion,
    onCloseSandbox,
    sandboxAnswerSelected,
    onSandboxSelect,
    sandboxVerified,
    onVerifySandbox,
  } = props;

  return (
    <main className="flex-1 max-w-6xl w-full mx-auto p-6 space-y-6">
      <div className="bg-gradient-to-br from-[#111827] to-[#0b101d] p-6 md:p-8 rounded-3xl border border-slate-800 space-y-3">
        <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
          KCNA Exam Prep
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-white">Kubernetes &amp; Cloud Native Knowledge Base</h2>
        <p className="text-slate-400 text-xs md:text-sm max-w-2xl">
          Practice with {questionCount} real-style KCNA questions across all four exam domains, or run a timed
          50-question mock exam to benchmark your readiness before the real thing.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={onLaunchTest}
            className="bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs px-5 py-3 rounded-xl transition-all"
          >
            Start Timed Exam (50 Questions)
          </button>
          <button
            onClick={onEnterStudy}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-5 py-3 rounded-xl border border-slate-700 transition-all"
          >
            Enter Study Mode
          </button>
          <button
            onClick={onGenerateStudyPlan}
            disabled={!hasApiKey}
            title={hasApiKey ? undefined : 'Add a Gemini API key (top-right) to enable AI features'}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-black text-xs px-5 py-3 rounded-xl border border-indigo-500/30 transition-all"
          >
            Generate AI Study Plan ✨
          </button>
        </div>
      </div>

      {aiStudyPlan && (
        <div className="bg-gradient-to-br from-[#0c1325] to-[#060a14] border border-indigo-500/20 p-6 rounded-3xl space-y-4 animate-fadeIn relative">
          <div className="absolute top-4 right-4">
            <button onClick={onClearStudyPlan} className="text-slate-400 hover:text-white text-xs font-bold">
              ✕ Close Plan
            </button>
          </div>
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <span className="text-indigo-400 text-lg">✨</span>
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-200">Custom 7-Day AI Study Plan</h3>
          </div>
          <div className="text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-wrap select-text max-h-96 overflow-y-auto pr-3 font-mono">
            {aiStudyPlan}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Question Bank" value={`${questionCount} Qs`} color="text-indigo-400" />
        <StatCard label="Answered" value={String(solvedCount)} color="text-emerald-400" />
        <StatCard label="Flagged" value={String(flaggedCount)} color="text-amber-400" />
        <StatCard label="Accuracy" value={`${overallReadiness}%`} color="text-blue-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#0e1424] border border-slate-800 p-6 rounded-3xl space-y-4">
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-400">Domain Performance</h3>
          <div className="space-y-4">
            {domainStatistics.map((stat) => (
              <div key={stat.name} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">{stat.name}</span>
                  <span className="font-mono text-slate-400">
                    {stat.correct}/{stat.total} ({stat.rate}%)
                  </span>
                </div>
                <div className="h-2 w-full bg-[#05070c] rounded-full overflow-hidden border border-slate-800">
                  <div
                    className={`h-full transition-all duration-300 ${stat.rate >= 75 ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                    style={{ width: `${stat.rate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0c1425] to-[#070b14] border border-indigo-500/20 p-6 rounded-3xl flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-indigo-400 tracking-wider">
              <span>✨</span> AI Practice Sandbox
            </div>
            <h3 className="text-sm font-black text-slate-200">On-Demand Practice Questions</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {hasApiKey
                ? 'Pick a domain and let Gemini generate a fresh, exam-style question.'
                : 'Add your own Gemini API key (top-right) to unlock AI-generated questions.'}
            </p>
            <select
              value={sandboxDomain}
              onChange={(e) => onSandboxDomainChange(e.target.value as Domain)}
              className="w-full bg-[#05070c] border border-slate-700 text-xs font-bold p-2.5 rounded-lg focus:outline-none mt-2 text-slate-300"
            >
              {DOMAINS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={onGenerateSandbox}
            disabled={!hasApiKey}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold py-3 text-xs uppercase tracking-wider rounded-xl transition-all border border-indigo-500/30"
          >
            Generate Question ✨
          </button>
        </div>
      </div>

      {generatedQuestion && (
        <div className="bg-[#0e1424] border-2 border-indigo-500/30 p-6 rounded-3xl space-y-4 animate-fadeIn relative select-text">
          <div className="absolute top-4 right-4">
            <button onClick={onCloseSandbox} className="text-slate-400 hover:text-white text-xs font-bold">
              ✕ Close
            </button>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <span className="text-xs font-black text-indigo-400 uppercase tracking-widest flex items-center gap-1">
              ✨ Sandbox: {sandboxDomain}
            </span>
          </div>
          <h4 className="text-sm font-bold text-slate-200">{generatedQuestion.question}</h4>
          <div className="space-y-2 pt-2">
            {generatedQuestion.options.map((opt, idx) => {
              let optColor = 'border-slate-800 bg-[#05070c]/50 hover:bg-[#05070c]';
              if (sandboxAnswerSelected === idx) optColor = 'border-indigo-500 bg-indigo-500/10 text-white';
              if (sandboxVerified) {
                if (idx === generatedQuestion.correctIndex)
                  optColor = 'border-emerald-500 bg-emerald-500/10 text-emerald-300';
                else if (sandboxAnswerSelected === idx)
                  optColor = 'border-rose-500 bg-rose-500/10 text-rose-300';
              }
              return (
                <button
                  key={idx}
                  onClick={() => !sandboxVerified && onSandboxSelect(idx)}
                  disabled={sandboxVerified}
                  className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center gap-3 ${optColor}`}
                >
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-[10px]">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
          <div className="flex justify-between items-center border-t border-slate-800 pt-4">
            <button
              onClick={onVerifySandbox}
              disabled={sandboxAnswerSelected === null || sandboxVerified}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all"
            >
              Check Answer
            </button>
            <button
              onClick={onGenerateSandbox}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs px-4 py-2 rounded-xl border border-slate-700 transition-all"
            >
              Next Question ✨
            </button>
          </div>
          {sandboxVerified && (
            <div className="bg-[#05070c] p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-1">
              <span className="text-indigo-400 font-extrabold uppercase tracking-wider block text-[10px]">Explanation</span>
              <p>{generatedQuestion.explanation}</p>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-[#0e1424] border border-slate-800 p-5 rounded-2xl">
      <span className="text-[10px] uppercase font-bold text-slate-500">{label}</span>
      <p className={`text-2xl font-black mt-1 ${color}`}>{value}</p>
    </div>
  );
}
