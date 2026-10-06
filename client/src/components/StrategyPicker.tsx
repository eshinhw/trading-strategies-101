import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { Outlook, Strategy } from "../types/strategy";
import { PayoffSparkline } from "./PayoffSparkline";
import { ACCENT } from "../lib/courseVisuals";

// Popular, pre-defined options strategies for the Options Payoff Simulator, so a learner can jump straight to a
// payoff diagram. They are real course strategies, so picking one loads that strategy's own strikes and spot, and its
// lesson is one click away once the simulator has recognised the position.
const POPULAR_SLUGS = [
  "long-call",
  "long-put",
  "covered-call",
  "protective-put",
  "bull-call-spread",
  "bear-put-spread",
  "bull-put-spread",
  "bear-call-spread",
  "long-straddle",
  "long-strangle",
  "short-straddle",
  "short-strangle",
  "collar",
  "long-call-butterfly",
  "long-iron-condor",
  "short-put",
  "short-call",
  "covered-put",
];

const OUTLOOKS: { id: Outlook | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "bullish", label: "Bullish" },
  { id: "bearish", label: "Bearish" },
  { id: "neutral", label: "Neutral" },
];

const OUTLOOK_DOT: Record<Outlook, string> = { bullish: "#34d399", bearish: "#f87171", neutral: "#a99dff" };
const NET_LABEL: Partial<Record<Strategy["netPosition"], string>> = { debit: "Net debit", credit: "Net credit" };

export function StrategyPicker({
  strategies,
  activeSlug,
  onPick,
}: {
  strategies: Strategy[];
  /** the course strategy the simulator currently recognises, if any */
  activeSlug: string | null;
  onPick: (strategy: Strategy) => void;
}) {
  const [outlook, setOutlook] = useState<Outlook | "all">("all");

  const popular = useMemo(
    () => POPULAR_SLUGS.map((slug) => strategies.find((s) => s.slug === slug)).filter((s): s is Strategy => Boolean(s)),
    [strategies],
  );
  const visible = outlook === "all" ? popular : popular.filter((s) => s.outlook === outlook);
  const count = (o: Outlook | "all") => (o === "all" ? popular.length : popular.filter((s) => s.outlook === o).length);

  return (
    <section className="rounded-2xl border border-[#2a3040] bg-[#141821] card-glow p-5" aria-label="Pick a strategy">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Pick a strategy</h2>
          <p className="mt-1 max-w-2xl text-sm text-[#898781]">
            Popular strategies, ready to go. Choose one to load it and jump straight to its payoff diagram, then change
            the strikes to see how it moves.
          </p>
        </div>
        <div role="radiogroup" aria-label="Filter by outlook" className="flex w-full rounded-lg border border-[#2a3040] bg-[#0e1117] p-0.5 sm:w-auto">
          {OUTLOOKS.map((o) => (
            <button
              key={o.id}
              role="radio"
              aria-checked={outlook === o.id}
              onClick={() => setOutlook(o.id)}
              className={`flex flex-1 items-center justify-center gap-1 rounded-md px-1.5 py-1 text-xs font-medium sm:flex-none sm:gap-1.5 sm:px-3 transition ${
                outlook === o.id ? "bg-[#7c6cff]/25 text-[#e6e8ec]" : "text-[#898781] hover:text-[#e6e8ec]"
              }`}
            >
              {o.id !== "all" && <span className="h-1.5 w-1.5 rounded-full" style={{ background: OUTLOOK_DOT[o.id] }} />}
              {o.label}
              <span className="text-[#6b7280]">{count(o.id)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {visible.map((s) => {
          const active = s.slug === activeSlug;
          return (
            <button
              key={s.slug}
              onClick={() => onPick(s)}
              aria-pressed={active}
              className={`group flex flex-col rounded-xl border p-3 text-left transition duration-200 hover:-translate-y-0.5 ${
                active
                  ? "border-[#7c6cff] bg-[#7c6cff]/12 shadow-[0_0_0_1px_#7c6cff55]"
                  : "border-[#2a3040] bg-[#0e1117]/70 hover:border-[#7c6cff]/50"
              }`}
            >
              <div className="flex h-[52px] items-center justify-center rounded-lg bg-[#0b0d12]/60">
                <PayoffSparkline strategy={s} width={132} height={44} />
              </div>
              <span className="mt-2.5 text-sm font-semibold leading-snug text-[#e6e8ec]">{s.name}</span>
              <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-[#898781]">
                <span className="flex items-center gap-1 capitalize">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: OUTLOOK_DOT[s.outlook] }} />
                  {s.outlook}
                </span>
                {NET_LABEL[s.netPosition] && <span>· {NET_LABEL[s.netPosition]}</span>}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#898781]">
        <span>
          Showing {visible.length} of {popular.length} popular strategies. The simulator recognises {strategies.length} in all.
        </span>
        <Link to="/courses/options" className="hover:text-[#e6e8ec]" style={{ color: ACCENT.derivatives }}>
          See every strategy in the Options course →
        </Link>
      </div>
    </section>
  );
}
