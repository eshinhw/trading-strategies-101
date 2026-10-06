import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ACCENT, COURSE_FAMILIES, courseAccent } from "../lib/courseVisuals";

// The landing-page hero visual: an illustrative risk/return map. Strategy archetypes from across the
// asset classes sit under an "efficient frontier" curve, coloured by asset-class family. Hovering a
// point (or letting the tour cycle) opens its course. Positions are illustrative, not computed from
// real strategy data — the point is the way of thinking the courses teach, not live numbers.

interface Point {
  label: string;
  course: string; // course slug
  courseTitle: string;
  risk: number; // 0–100
  reward: number; // 0–100
  blurb: string;
  labelSide?: "left" | "right";
}

const POINTS: Point[] = [
  { label: "Repo", course: "cash", courseTitle: "Cash", risk: 6, reward: 10, blurb: "Secured short-term lending: steady carry, almost no price risk." },
  { label: "Bond Ladder", course: "fixed-income", courseTitle: "Fixed Income", risk: 15, reward: 22, blurb: "Staggered maturities smooth out rate risk and reinvestment." },
  { label: "Covered Call", course: "options", courseTitle: "Options", risk: 24, reward: 31, blurb: "Sell upside you don't expect to use in exchange for income now." },
  { label: "Carry Trade", course: "fx", courseTitle: "FX", risk: 28, reward: 49, labelSide: "left", blurb: "Borrow where rates are low, hold where they're high, and earn the gap." },
  { label: "Pairs Trade", course: "stocks", courseTitle: "Stocks", risk: 38, reward: 41, blurb: "Long one stock, short a close peer: bet on the spread, not the market." },
  { label: "Roll Yield", course: "commodities", courseTitle: "Commodities", risk: 48, reward: 30, blurb: "Earn or pay the slope of the futures curve as contracts roll." },
  { label: "Trend Following", course: "futures", courseTitle: "Futures", risk: 52, reward: 59, blurb: "Ride sustained moves across markets and cut losers quickly." },
  { label: "Distressed Debt", course: "distressed-assets", courseTitle: "Distressed Assets", risk: 62, reward: 66, labelSide: "left", blurb: "Buy troubled credit at a discount and profit from the restructuring." },
  { label: "Macro Momentum", course: "global-macro", courseTitle: "Global Macro", risk: 65, reward: 73, blurb: "Position for the next policy or growth shift before it is priced in." },
  { label: "Long Volatility", course: "volatility", courseTitle: "Volatility", risk: 73, reward: 45, blurb: "Pay a small premium for convex protection when markets break." },
  { label: "Short Strangle", course: "options", courseTitle: "Options", risk: 86, reward: 55, labelSide: "left", blurb: "Collect premium while the market stays quiet, and risk a lot when it doesn't." },
  { label: "Crypto Momentum", course: "cryptocurrencies", courseTitle: "Cryptocurrencies", risk: 94, reward: 86, labelSide: "left", blurb: "Large, fast trends and equally large drawdowns." },
];

// Plot geometry (SVG user units).
const W = 540;
const H = 400;
const PAD = { l: 46, r: 18, t: 22, b: 44 };
const PW = W - PAD.l - PAD.r;
const PH = H - PAD.t - PAD.b;
const px = (risk: number) => PAD.l + (risk / 100) * PW;
const py = (reward: number) => PAD.t + (1 - reward / 100) * PH;

// Concave frontier: more risk buys diminishing extra return.
const frontier = (risk: number) => 4 + (92 * (1 - Math.exp(-risk / 40))) / (1 - Math.exp(-100 / 40));
const FRONTIER_POINTS = Array.from({ length: 51 }, (_, i) => [px(i * 2), py(frontier(i * 2))] as const);
const FRONTIER_PATH = FRONTIER_POINTS.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
const AREA_PATH = `${FRONTIER_PATH} L${px(100)} ${py(0)} L${px(0)} ${py(0)} Z`;

const COURSE_COUNT = new Set(POINTS.map((p) => p.course)).size;
const familyOf = (slug: string) => COURSE_FAMILIES.find((f) => f.slugs.includes(slug));

export function RiskRewardHero() {
  const [activeIndex, setActiveIndex] = useState(6);
  const [paused, setPaused] = useState(false);

  // A gentle guided tour through the points until the visitor takes over.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActiveIndex((i) => (i + 1) % POINTS.length), 3600);
    return () => window.clearInterval(id);
  }, [paused]);

  const active = POINTS[activeIndex];
  const activeAccent = courseAccent(active.course);
  const families = useMemo(
    () =>
      COURSE_FAMILIES.map((f) => ({ ...f, used: POINTS.some((p) => f.slugs.includes(p.course)) })).filter((f) => f.used),
    [],
  );

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-[#2a3040] bg-[#141821] card-glow p-5 shadow-2xl shadow-black/40"
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl transition-colors duration-700"
        style={{ background: activeAccent, opacity: 0.16 }}
      />

      <div className="relative mb-2 flex items-start justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-wide text-[#898781]">Risk vs. reward</div>
          <h3 className="font-semibold text-[#e6e8ec]">Every strategy is a trade-off</h3>
        </div>
        <span className="mt-0.5 shrink-0 whitespace-nowrap rounded-full border max-sm:hidden border-[#2a3040] bg-[#0e1117]/70 px-2.5 py-0.5 text-[11px] text-[#9aa3b2]">
          {POINTS.length} strategies · {COURSE_COUNT} courses
        </span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="relative w-full" role="img" aria-label="Illustrative risk versus reward map of strategies across asset classes">
        <defs>
          <linearGradient id="rr-frontier" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor={ACCENT.rates} />
            <stop offset="0.5" stopColor={ACCENT.derivatives} />
            <stop offset="1" stopColor={ACCENT.macro} />
          </linearGradient>
          <linearGradient id="rr-area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#7c6cff" stopOpacity="0.2" />
            <stop offset="1" stopColor="#7c6cff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* grid */}
        {[0, 25, 50, 75, 100].map((t) => (
          <g key={t}>
            <line x1={PAD.l} x2={W - PAD.r} y1={py(t)} y2={py(t)} stroke="#2a3040" strokeOpacity={t === 0 ? 1 : 0.5} strokeDasharray={t === 0 ? undefined : "2 5"} />
            <line y1={PAD.t} y2={H - PAD.b} x1={px(t)} x2={px(t)} stroke="#2a3040" strokeOpacity={t === 0 ? 1 : 0.5} strokeDasharray={t === 0 ? undefined : "2 5"} />
          </g>
        ))}

        {/* achievable region + frontier */}
        <path d={AREA_PATH} fill="url(#rr-area)" />
        <path
          d={FRONTIER_PATH}
          fill="none"
          stroke="url(#rr-frontier)"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength={1}
          className="rr-frontier"
        />
        <text x={px(2)} y={py(98)} fill="#898781" fontSize="10" letterSpacing="0.08em">
          THE FRONTIER
        </text>
        <text x={px(98)} y={py(7)} fill="#898781" fontSize="10" textAnchor="end" letterSpacing="0.08em">
          WHERE ALMOST EVERYTHING SITS
        </text>

        {/* axes */}
        <text x={PAD.l + PW / 2} y={H - 8} fill="#9aa3b2" fontSize="11" textAnchor="middle">
          Risk →
        </text>
        <text transform={`translate(13 ${PAD.t + PH / 2}) rotate(-90)`} fill="#9aa3b2" fontSize="11" textAnchor="middle">
          Reward →
        </text>
        <text x={PAD.l - 6} y={py(0) + 12} fill="#898781" fontSize="9" textAnchor="end">
          Low
        </text>
        <text x={PAD.l - 6} y={py(100) + 4} fill="#898781" fontSize="9" textAnchor="end">
          High
        </text>

        {/* guide lines from the active point to the axes */}
        <g className="transition-opacity" stroke={activeAccent} strokeOpacity="0.5" strokeDasharray="3 4">
          <line x1={px(active.risk)} x2={px(active.risk)} y1={py(active.reward)} y2={py(0)} />
          <line x1={PAD.l} x2={px(active.risk)} y1={py(active.reward)} y2={py(active.reward)} />
        </g>

        {/* points */}
        {POINTS.map((p, i) => {
          const accent = courseAccent(p.course);
          const isActive = i === activeIndex;
          const cx = px(p.risk);
          const cy = py(p.reward);
          const left = p.labelSide === "left";
          return (
            <g
              key={p.label}
              tabIndex={0}
              role="button"
              aria-label={`${p.label}, ${p.courseTitle}`}
              className="rr-point cursor-pointer outline-none"
              style={{ animationDelay: `${0.5 + i * 0.07}s` }}
              onMouseEnter={() => {
                setActiveIndex(i);
                setPaused(true);
              }}
              onFocus={() => {
                setActiveIndex(i);
                setPaused(true);
              }}
              onClick={() => setActiveIndex(i)}
            >
              <circle cx={cx} cy={cy} r={16} fill="transparent" />
              {isActive && <circle cx={cx} cy={cy} r={11} fill={accent} className="rr-pulse" />}
              {isActive && <circle cx={cx} cy={cy} r={9} fill={accent} fillOpacity="0.25" stroke={accent} strokeOpacity="0.6" />}
              <circle cx={cx} cy={cy} r={isActive ? 5.5 : 4} fill={accent} className="transition-all duration-200" />
              <text
                x={cx + (left ? -11 : 11)}
                y={cy + 3.5}
                textAnchor={left ? "end" : "start"}
                fontSize="10.5"
                className="max-sm:hidden"
                fontWeight={isActive ? 600 : 400}
                fill={isActive ? "#e6e8ec" : "#9aa3b2"}
                paintOrder="stroke"
                stroke="#141821"
                strokeWidth="3"
                strokeLinejoin="round"
              >
                {p.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* detail for the active strategy */}
      <div
        className="relative mt-1 rounded-xl border bg-[#0e1117]/80 p-3.5 transition-colors duration-500"
        style={{ borderColor: `${activeAccent}66` }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: activeAccent }}>
              <span className="h-2 w-2 rounded-full" style={{ background: activeAccent }} />
              {active.courseTitle}
              <span className="font-normal normal-case tracking-normal text-[#898781]">· {familyOf(active.course)?.name}</span>
            </div>
            <div className="mt-0.5 font-semibold text-[#e6e8ec]">{active.label}</div>
          </div>
          <Link
            to={`/courses/${active.course}`}
            className="shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold text-[#0b0d12] transition hover:brightness-110"
            style={{ background: activeAccent }}
          >
            Open course →
          </Link>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-[#9aa3b2]">{active.blurb}</p>
      </div>

      <div className="relative mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
        {families.map((f) => (
          <span key={f.name} className="flex items-center gap-1.5 text-[11px] text-[#898781]">
            <span className="h-2 w-2 rounded-full" style={{ background: f.accent }} />
            {f.name}
          </span>
        ))}
        <span className="ml-auto text-[11px] text-[#898781]">Illustrative positions</span>
      </div>
    </div>
  );
}
