// The landing-page hero visual: a static, illustrative risk/reward scatter — strategy archetypes
// plotted by how much risk they take on versus what they're built to pay off, not tied to any one
// asset class. Positions are illustrative (not computed from real strategy data) since the point is
// to set expectations about the kind of thinking the course teaches, not to report live numbers.
const POINTS: { label: string; left: number; top: number; highlight?: boolean }[] = [
  { label: "Covered Call", left: 18, top: 35 },
  { label: "Credit Spread", left: 28, top: 56 },
  { label: "Carry Trade", left: 22, top: 70 },
  { label: "Pairs Trade", left: 38, top: 48 },
  { label: "Trend Following", left: 55, top: 42 },
  { label: "Momentum", left: 62, top: 22, highlight: true },
  { label: "Long Volatility", left: 78, top: 40 },
  { label: "Short Strangle", left: 85, top: 62 },
];

export function RiskRewardHero() {
  return (
    <div className="rounded-2xl border border-[#2a3040] bg-[#141821] card-glow p-5 shadow-2xl shadow-black/40">
      <div className="mb-3">
        <div className="text-xs uppercase tracking-wide text-[#898781]">Risk vs. reward</div>
        <h3 className="font-semibold text-[#e6e8ec]">See where a strategy sits</h3>
      </div>

      <div className="relative mx-2 mt-10 h-[280px] border-b border-l border-[#2a3040]">
        <span className="absolute -top-6 left-0 text-xs text-[#898781]">↑ Return</span>
        <span className="absolute -bottom-6 right-0 text-xs text-[#898781]">Risk →</span>

        {POINTS.map((p) => (
          <div
            key={p.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
          >
            <div
              className={
                p.highlight
                  ? "h-3.5 w-3.5 rounded-full bg-[#7c6cff] shadow-[0_0_0_4px_rgba(124,108,255,0.2)]"
                  : "h-2.5 w-2.5 rounded-full bg-[#9aa3b2]"
              }
            />
            <span
              className={`whitespace-nowrap text-[10px] ${
                p.highlight ? "font-semibold text-[#7c6cff]" : "text-[#9aa3b2]"
              }`}
            >
              {p.label}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-[#898781]">
        Positions are illustrative — exact risk and return depend on the parameters you choose.
      </p>
    </div>
  );
}
