import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ACCENT } from "../lib/courseVisuals";

// A small interactive taste of the Options Payoff Simulator for the landing page: pick a classic position, drag
// the stock price at expiration, and read the profit or loss at that price. The premiums are illustrative round
// numbers (the real simulator prices every leg with Black-Scholes); this is a teaching toy, not live data.
interface DemoLeg {
  type: "call" | "put";
  side: "long" | "short";
  strike: number;
  premium: number;
}

interface Demo {
  id: string; // matches a simulator preset, so "Open the full simulator" loads the same position
  name: string;
  blurb: string;
  legs: DemoLeg[];
  /** payoff keeps growing as the stock moves far enough in one direction */
  unlimitedProfit?: boolean;
}

const DEMOS: Demo[] = [
  {
    id: "long-call",
    name: "Long call",
    blurb: "Pay a small premium for the right to buy at $100. Losses are capped; gains are not.",
    legs: [{ type: "call", side: "long", strike: 100, premium: 3.5 }],
    unlimitedProfit: true,
  },
  {
    id: "bull-call-spread",
    name: "Bull call spread",
    blurb: "Buy the $100 call, sell the $110 call. Cheaper than a long call, with gains capped at $110.",
    legs: [
      { type: "call", side: "long", strike: 100, premium: 3.5 },
      { type: "call", side: "short", strike: 110, premium: 1 },
    ],
  },
  {
    id: "long-straddle",
    name: "Long straddle",
    blurb: "Buy a call and a put at $100. You profit from a big move in either direction.",
    legs: [
      { type: "call", side: "long", strike: 100, premium: 3.5 },
      { type: "put", side: "long", strike: 100, premium: 3 },
    ],
    unlimitedProfit: true,
  },
  {
    id: "long-iron-condor",
    name: "Iron condor",
    blurb: "Collect a credit while the stock stays between $95 and $105, with risk limited by the outer options.",
    legs: [
      { type: "put", side: "long", strike: 85, premium: 0.1 },
      { type: "put", side: "short", strike: 95, premium: 1.4 },
      { type: "call", side: "short", strike: 105, premium: 1.6 },
      { type: "call", side: "long", strike: 115, premium: 0.2 },
    ],
  },
];

const LO = 70;
const HI = 130;
const W = 420;
const H = 220;
const PAD = { l: 8, r: 8, t: 14, b: 22 };

function pnlAt(legs: DemoLeg[], price: number): number {
  return legs.reduce((sum, l) => {
    const intrinsic = l.type === "call" ? Math.max(price - l.strike, 0) : Math.max(l.strike - price, 0);
    const sign = l.side === "long" ? 1 : -1;
    return sum + sign * (intrinsic - l.premium);
  }, 0);
}

function money(n: number): string {
  const sign = n < 0 ? "-" : n > 0 ? "+" : "";
  return `${sign}$${Math.abs(n).toFixed(2)}`;
}

export function PayoffPlayground() {
  const [demoId, setDemoId] = useState(DEMOS[0].id);
  const [price, setPrice] = useState(100);
  const demo = DEMOS.find((d) => d.id === demoId) ?? DEMOS[0];

  const model = useMemo(() => {
    const points: [number, number][] = [];
    for (let p = LO; p <= HI; p += 1) points.push([p, pnlAt(demo.legs, p)]);
    const ys = points.map(([, y]) => y);
    const yMin = Math.min(0, ...ys);
    const yMax = Math.max(0, ...ys);
    const span = yMax - yMin || 1;
    const x = (p: number) => PAD.l + ((p - LO) / (HI - LO)) * (W - PAD.l - PAD.r);
    const y = (v: number) => PAD.t + (1 - (v - yMin) / span) * (H - PAD.t - PAD.b);
    const breakevens: number[] = [];
    for (let i = 0; i < points.length - 1; i++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[i + 1];
      if (y1 === 0) breakevens.push(x1);
      else if (y1 * y2 < 0) breakevens.push(x1 + (y1 / (y1 - y2)) * (x2 - x1));
    }
    return { points, x, y, zeroY: y(0), maxProfit: Math.max(...ys), maxLoss: Math.min(...ys), breakevens };
  }, [demo]);

  const pnl = pnlAt(demo.legs, price);
  const line = model.points.map(([p, v], i) => `${i === 0 ? "M" : "L"}${model.x(p).toFixed(1)} ${model.y(v).toFixed(1)}`).join(" ");
  const area = `${line} L${model.x(HI)} ${model.zeroY} L${model.x(LO)} ${model.zeroY} Z`;
  const positive = pnl >= 0;

  return (
    <section className="relative overflow-hidden border-t border-[#2a3040] py-16">
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#7c6cff] opacity-10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="order-last lg:order-first">
          <div className="relative overflow-hidden rounded-2xl border border-[#2a3040] bg-[#141821] p-5 shadow-2xl shadow-black/40 sm:p-6">
            <div role="tablist" aria-label="Example position" className="mb-4 flex flex-wrap gap-1.5">
              {DEMOS.map((d) => {
                const active = d.id === demo.id;
                return (
                  <button
                    key={d.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setDemoId(d.id)}
                    className="rounded-full border px-3 py-1 text-xs font-medium transition"
                    style={{
                      borderColor: active ? `${ACCENT.derivatives}80` : "#2a3040",
                      background: active ? `${ACCENT.derivatives}22` : "transparent",
                      color: active ? "#e6e8ec" : "#9aa3b2",
                    }}
                  >
                    {d.name}
                  </button>
                );
              })}
            </div>

            <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`${demo.name} payoff at expiration`}>
              <defs>
                <clipPath id="pg-top">
                  <rect x="0" y="0" width={W} height={model.zeroY} />
                </clipPath>
                <clipPath id="pg-bottom">
                  <rect x="0" y={model.zeroY} width={W} height={H - model.zeroY} />
                </clipPath>
              </defs>
              <path d={area} fill="#34d399" fillOpacity="0.2" clipPath="url(#pg-top)" />
              <path d={area} fill="#f87171" fillOpacity="0.22" clipPath="url(#pg-bottom)" />
              <line x1={PAD.l} x2={W - PAD.r} y1={model.zeroY} y2={model.zeroY} stroke="#9aa3b2" strokeOpacity="0.5" />
              {demo.legs.map((l, i) => (
                <line
                  key={i}
                  x1={model.x(l.strike)}
                  x2={model.x(l.strike)}
                  y1={PAD.t}
                  y2={H - PAD.b}
                  stroke="#2a3040"
                  strokeDasharray="3 4"
                />
              ))}
              <path d={line} fill="none" stroke="#a99dff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              {model.breakevens.map((b) => (
                <circle key={b} cx={model.x(b)} cy={model.zeroY} r="3.5" fill="#0e1117" stroke="#e6e8ec" strokeWidth="1.5" />
              ))}
              {/* the price you are dragging */}
              <line x1={model.x(price)} x2={model.x(price)} y1={PAD.t} y2={H - PAD.b} stroke={positive ? "#34d399" : "#f87171"} strokeOpacity="0.7" />
              <circle
                cx={model.x(price)}
                cy={model.y(pnl)}
                r="6"
                fill={positive ? "#34d399" : "#f87171"}
                stroke="#0e1117"
                strokeWidth="2"
              />
              {[LO, 100, HI].map((p) => (
                <text key={p} x={model.x(p)} y={H - 6} fontSize="10" fill="#898781" textAnchor={p === LO ? "start" : p === HI ? "end" : "middle"}>
                  ${p}
                </text>
              ))}
            </svg>

            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-[#898781]">
                <label htmlFor="pg-price">Stock price at expiration</label>
                <span className="font-semibold text-[#e6e8ec]">${price}</span>
              </div>
              <input
                id="pg-price"
                type="range"
                min={LO}
                max={HI}
                step={1}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="mt-2 w-full accent-[#7c6cff]"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className={`col-span-2 rounded-lg border px-3 py-2 sm:col-span-1 ${positive ? "border-emerald-500/30 bg-emerald-500/10" : "border-red-500/30 bg-red-500/10"}`}>
                <div className="text-[11px] uppercase tracking-wide text-[#898781]">P&amp;L at ${price}</div>
                <div className={`text-lg font-bold ${positive ? "text-emerald-400" : "text-red-400"}`} aria-live="polite">
                  {money(pnl)}
                </div>
              </div>
              {[
                ["Max profit", demo.unlimitedProfit ? "Unlimited" : money(model.maxProfit), "text-emerald-400"],
                ["Max loss", money(model.maxLoss), "text-red-400"],
                [
                  "Break-even",
                  model.breakevens.length ? model.breakevens.map((b) => `$${b.toFixed(2)}`).join(" / ") : "—",
                  "text-[#e6e8ec]",
                ],
              ].map(([label, value, color]) => (
                <div key={label} className="rounded-lg border border-[#2a3040] bg-[#0e1117]/70 px-3 py-2">
                  <div className="text-[11px] uppercase tracking-wide text-[#898781]">{label}</div>
                  <div className={`text-sm font-semibold ${color}`}>{value}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-[#898781]">{demo.blurb}</p>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7c6cff]">Hands-on practice</div>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-[#e6e8ec] sm:text-4xl">Drag the price. Watch the payoff.</h2>
          <ul className="mt-6 flex flex-col gap-3 text-sm text-[#c3c9d4]">
            {[
              "Four classic positions, one slider",
              "Break-evens, max profit and max loss update as you go",
              "Premiums here are illustrative; the simulator estimates them with Black-Scholes",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#7c6cff]/50 bg-[#7c6cff]/20 text-[11px] font-bold text-[#c4bbff]">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
          <Link
            to={`/practice/options-payoff-simulator?preset=${demo.id}`}
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#7c6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0]"
          >
            Open the simulator with {demo.name.toLowerCase()} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
