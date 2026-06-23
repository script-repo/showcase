import type { DomainStat } from '../ui';

interface DashboardProps {
  questionCount: number;
  solvedCount: number;
  flaggedCount: number;
  overallReadiness: number;
  domainStatistics: DomainStat[];
  onLaunchTest: () => void;
  onEnterStudy: () => void;
}

export function Dashboard(props: DashboardProps) {
  const {
    questionCount,
    solvedCount,
    flaggedCount,
    overallReadiness,
    domainStatistics,
    onLaunchTest,
    onEnterStudy,
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
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Question Bank" value={`${questionCount} Qs`} color="text-indigo-400" />
        <StatCard label="Answered" value={String(solvedCount)} color="text-emerald-400" />
        <StatCard label="Flagged" value={String(flaggedCount)} color="text-amber-400" />
        <StatCard label="Accuracy" value={`${overallReadiness}%`} color="text-blue-400" />
      </div>

      <div className="bg-[#0e1424] border border-slate-800 p-6 rounded-3xl space-y-4">
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
