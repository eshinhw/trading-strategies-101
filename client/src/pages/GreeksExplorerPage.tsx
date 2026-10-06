import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { greeksOf, type GreekInputs, type GreekName, type OptionKind } from "../engine/greeks";
import { ParamControls } from "../components/ParamControls";
import { ACCENT } from "../lib/courseVisuals";

// An interactive look at how an option's price and its Greeks respond to the stock price, volatility, time and
// rates. Everything is computed in the browser from the Black-Scholes formulas, per share.

const accent = ACCENT.derivatives;

const PARAMS = [
  { key: "spot", label: "Stock price", default: 100, min: 20, max: 200, step: 1 },
  { key: "strike", label: "Strike", default: 100, min: 20, max: 200, step: 1 },
  { key: "vol", label: "Implied volatility (%)", default: 30, min: 5, max: 120, step: 1 },
  { key: "days", label: "Days to expiration", default: 30, min: 1, max: 365, step: 1 },
  { key: "rate", label: "Risk-free rate (%)", default: 2, min: 0, max: 10, step: 0.25 },
];

type Values = Record<string, number>;
const defaults = (): Values => Object.fromEntries(PARAMS.map((p) => [p.key, p.default]));

interface GreekInfo {
  id: GreekName;
  label: string;
  unit: string;
  lesson: string | null; // lesson that explains it
  decimals: number;
  money: boolean;
  /** what to notice in the chart */
  notice: string;
}

const GREEKS: GreekInfo[] = [
  {
    id: "price",
    label: "Price",
    unit: "premium",
    lesson: "concept-how-options-are-priced",
    decimals: 2,
    money: true,
    notice:
      "The curve sits above the expiration payoff by the option's time value, and the gap is widest at the money. Time value shrinks as expiration nears.",
  },
  {
    id: "delta",
    label: "Delta",
    unit: "per $1 move",
    lesson: "greeks-delta",
    decimals: 2,
    money: false,
    notice:
      "Delta runs from 0 to 1 for a call (0 to −1 for a put) and is about 0.5 at the money. It heads toward 1 as the option goes deeper in the money, and it changes faster near the strike when expiration is close.",
  },
  {
    id: "gamma",
    label: "Gamma",
    unit: "delta change per $1",
    lesson: "greeks-gamma",
    decimals: 3,
    money: false,
    notice:
      "Gamma peaks near the strike and fades on either side. With less time left (or lower volatility) the peak gets taller and narrower, which is why near-expiry options can swing so sharply.",
  },
  {
    id: "theta",
    label: "Theta",
    unit: "per day",
    lesson: "greeks-theta",
    decimals: 3,
    money: true,
    notice:
      "Theta is time decay: what a long option loses each day if nothing else moves. It is most negative at the money and gets steeper as expiration approaches.",
  },
  {
    id: "vega",
    label: "Vega",
    unit: "per 1 vol point",
    lesson: "greeks-vega",
    decimals: 3,
    money: true,
    notice:
      "Vega is largest at the money and grows with time to expiration. A long option gains when implied volatility rises, and the same effect works against a short option.",
  },
  {
    id: "rho",
    label: "Rho",
    unit: "per 1 rate point",
    lesson: "greeks-rho",
    decimals: 3,
    money: true,
    notice:
      "Rho is usually the smallest of the Greeks. It is positive for calls and negative for puts, and it is larger for longer-dated options.",
  },
];

const SCENARIOS: { label: string; apply: (v: Values) => Values }[] = [
  { label: "At the money", apply: (v) => ({ ...v, spot: 100, strike: 100 }) },
  { label: "In the money", apply: (v) => ({ ...v, spot: 115, strike: 100 }) },
  { label: "Out of the money", apply: (v) => ({ ...v, spot: 85, strike: 100 }) },
  { label: "Near expiry", apply: (v) => ({ ...v, days: 3 }) },
  { label: "High volatility", apply: (v) => ({ ...v, vol: 70 }) },
];

type Compare = "none" | "half-time" | "vol-up" | "opposite";
const COMPARES: { id: Compare; label: string }[] = [
  { id: "none", label: "Nothing" },
  { id: "half-time", label: "Half the time left" },
  { id: "vol-up", label: "Volatility +15 points" },
  { id: "opposite", label: "The other option type" },
];

function formatValue(info: GreekInfo, v: number): string {
  const sign = v < 0 ? "-" : "";
  const abs = Math.abs(v).toFixed(info.decimals);
  return info.money ? `${sign}$${abs}` : `${v < 0 ? "-" : ""}${abs}`;
}

// A plain-language reading of the current number for the selected Greek.
function sentenceFor(id: GreekName, g: ReturnType<typeof greeksOf>, type: OptionKind): string {
  const money = (n: number) => `$${Math.abs(n).toFixed(2)}`;
  switch (id) {
    case "price":
      return `This ${type} costs ${money(g.price)} per share (${money(g.price * 100)} for one contract of 100 shares).`;
    case "delta":
      return g.delta >= 0
        ? `For each $1 the stock rises, this option gains about ${money(g.delta)}.`
        : `For each $1 the stock rises, this option loses about ${money(g.delta)}.`;
    case "gamma":
      return `For each $1 the stock moves, delta changes by about ${Math.abs(g.gamma).toFixed(3)}.`;
    case "theta":
      return g.theta <= 0
        ? `Holding one more day, all else equal, costs about ${money(g.theta)} of value.`
        : `Holding one more day, all else equal, adds about ${money(g.theta)} of value.`;
    case "vega":
      return `If implied volatility rises one point, the option gains about ${money(g.vega)}.`;
    case "rho":
      return g.rho >= 0
        ? `If interest rates rise one point, the option gains about ${money(g.rho)}.`
        : `If interest rates rise one point, the option loses about ${money(g.rho)}.`;
  }
}

// What the chart's horizontal axis can show. Stock price is the default; "time" and "volatility" sweep those inputs
// instead, so you can see how each Greek behaves as expiration nears or as volatility changes.
type XAxis = "spot" | "days" | "vol";
interface AxisConfig {
  id: XAxis;
  label: string; // the control
  noun: string; // "<Greek> vs. <noun>"
  range: (v: Values) => [number, number];
  /** overrides applied to the Greek inputs for a given x value */
  override: (x: number) => Partial<GreekInputs>;
  current: (v: Values) => number;
  tick: (x: number) => string;
  hover: (x: number) => string;
  nowLabel: string;
  /** days to expiration count down as time passes, so that axis runs right to left */
  flip?: boolean;
}
const AXES: AxisConfig[] = [
  {
    id: "spot",
    label: "Stock price",
    noun: "stock price",
    range: (v) => [Math.max(1, v.strike * 0.6), v.strike * 1.4],
    override: (x) => ({ spot: x }),
    current: (v) => v.spot,
    tick: (x) => `$${x.toFixed(0)}`,
    hover: (x) => `Stock $${x.toFixed(2)}`,
    nowLabel: "Where the stock is now",
  },
  {
    id: "days",
    label: "Time",
    noun: "days to expiration",
    range: () => [1, 180],
    override: (x) => ({ days: x }),
    current: (v) => v.days,
    tick: (x) => `${x.toFixed(0)}d`,
    hover: (x) => `${x.toFixed(0)} days left`,
    nowLabel: "Days left now",
    flip: true,
  },
  {
    id: "vol",
    label: "Volatility",
    noun: "implied volatility",
    range: () => [5, 120],
    override: (x) => ({ vol: x / 100 }),
    current: (v) => v.vol,
    tick: (x) => `${x.toFixed(0)}%`,
    hover: (x) => `Volatility ${x.toFixed(0)}%`,
    nowLabel: "Volatility now",
  },
];

const W = 720;
const H = 340;
const M = { top: 20, right: 24, bottom: 44, left: 64 };

function niceStep(range: number, target = 4): number {
  const raw = range / target;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const frac = raw / pow;
  return (frac < 1.5 ? 1 : frac < 3.5 ? 2 : frac < 7.5 ? 5 : 10) * pow;
}

// Which of the five inputs, the option type, the Greek on the chart and the comparison are in the URL, so a
// scenario can be shared and survives a refresh. Only values that differ from the defaults are written.
function valuesFromParams(params: URLSearchParams): Values {
  const v = defaults();
  for (const p of PARAMS) {
    const raw = params.get(p.key);
    const n = raw === null ? NaN : Number(raw);
    if (Number.isFinite(n)) v[p.key] = Math.min(p.max, Math.max(p.min, n));
  }
  return v;
}

const CHALLENGES_KEY = "greeks:challenges";
function loadChallenges(): string[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(CHALLENGES_KEY) ?? "[]") as unknown;
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

// Goals that send the learner hunting for the behaviour a lesson describes. Each is checked against the current
// numbers, and none is already true at the starting values.
interface Challenge {
  id: string;
  title: string;
  hint: string;
  met: (g: ReturnType<typeof greeksOf>) => boolean;
}
const CHALLENGES: Challenge[] = [
  {
    id: "delta-75",
    title: "Find a delta of about 0.75",
    hint: "Delta grows as the option moves in the money. Try raising the stock price above the strike.",
    met: (g) => Math.abs(Math.abs(g.delta) - 0.75) < 0.04,
  },
  {
    id: "gamma-10",
    title: "Push gamma above 0.10",
    hint: "Gamma peaks at the strike and builds as expiration nears. Try the Near expiry scenario.",
    met: (g) => g.gamma > 0.1,
  },
  {
    id: "theta-15",
    title: "Make theta cost more than $0.15 a day",
    hint: "Time decay is steepest at the money, close to expiration, and when volatility is high.",
    met: (g) => g.theta < -0.15,
  },
  {
    id: "vega-02",
    title: "Get vega under $0.02",
    hint: "Vega fades far from the strike. Try moving the stock price well away from it.",
    met: (g) => g.vega < 0.02,
  },
  {
    id: "price-50",
    title: "Find an option priced under $0.50",
    hint: "Out-of-the-money options with little time left are cheap.",
    met: (g) => g.price < 0.5,
  },
];

// The shape of one Greek across the stock-price range, with a dot where the stock is now.
function TileSpark({ ys, at, color }: { ys: number[]; at: number | null; color: string }) {
  const w = 100;
  const h = 26;
  const min = Math.min(...ys);
  const max = Math.max(...ys);
  const span = max - min || 1;
  const px = (i: number) => (i / (ys.length - 1)) * w;
  const py = (v: number) => 3 + (1 - (v - min) / span) * (h - 6);
  const line = ys.map((v, i) => `${i === 0 ? "M" : "L"}${px(i).toFixed(1)} ${py(v).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 h-6 w-full" aria-hidden="true" preserveAspectRatio="none">
      <path d={line} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      {at !== null && <circle cx={px(at)} cy={py(ys[at])} r="2.6" fill="#34d399" stroke="#0e1117" strokeWidth="1" vectorEffect="non-scaling-stroke" />}
    </svg>
  );
}

// "What if?" turns the Greeks into a profit-and-loss estimate: move the stock, let some days pass, shift volatility,
// and see how much of the price change each Greek explains versus what the option is really worth afterwards.
function WhatIf({ values, type, now }: { values: Values; type: OptionKind; now: ReturnType<typeof greeksOf> }) {
  const [dS, setDS] = useState(5);
  const [dDays, setDDays] = useState(0);
  const [dVol, setDVol] = useState(0);

  const maxDays = Math.max(0, Math.floor(values.days) - 1);
  const days = Math.min(dDays, maxDays);

  const after = greeksOf({
    spot: Math.max(1, values.spot + dS),
    strike: values.strike,
    days: Math.max(values.days - days, 0.05),
    vol: Math.max(values.vol + dVol, 1) / 100,
    rate: values.rate / 100,
    type,
  });

  const parts = [
    { id: "delta", label: "Delta", note: "from the stock move", value: now.delta * dS },
    { id: "gamma", label: "Gamma", note: "the curve in that move", value: 0.5 * now.gamma * dS * dS },
    { id: "theta", label: "Theta", note: "from time passing", value: now.theta * days },
    { id: "vega", label: "Vega", note: "from volatility", value: now.vega * dVol },
  ];
  const estimate = now.price + parts.reduce((n, p) => n + p.value, 0);
  const gap = after.price - estimate;
  const biggest = Math.max(0.0001, ...parts.map((p) => Math.abs(p.value)));
  const money = (n: number) => `${n < 0 ? "-" : n > 0 ? "+" : ""}$${Math.abs(n).toFixed(2)}`;

  const slider = (label: string, value: number, set: (n: number) => void, min: number, max: number, step: number, suffix: string) => (
    <label className="block text-xs text-[#898781]">
      <span className="flex items-center justify-between">
        {label}
        <span className="font-semibold text-[#e6e8ec]">
          {value > 0 && suffix !== " days" ? "+" : ""}
          {value}
          {suffix}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="mt-1.5 w-full accent-[#7c6cff]"
      />
    </label>
  );

  return (
    <section className="rounded-2xl border border-[#2a3040] bg-[#141821] p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">What if the stock moves?</h2>
      <p className="mt-1 text-sm text-[#898781]">
        The Greeks estimate how the price will change. Try a move, some time passing and a volatility shift, then compare
        the estimate with what the option is really worth afterwards.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-6 xl:grid-cols-[260px_minmax(0,1fr)]">
        <div className="flex flex-col gap-4">
          {slider("Stock moves", dS, setDS, -25, 25, 0.5, "")}
          {slider("Days pass", days, setDDays, 0, Math.max(1, maxDays), 1, " days")}
          {slider("Volatility changes", dVol, setDVol, -20, 20, 1, " pts")}
          <button
            onClick={() => {
              setDS(0);
              setDDays(0);
              setDVol(0);
            }}
            className="w-fit text-xs text-[#a99dff] hover:underline"
          >
            Reset the what-if
          </button>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            {parts.map((p) => (
              <li key={p.id} className="grid grid-cols-[84px_minmax(0,1fr)_70px] items-center gap-3 text-sm">
                <span className="text-[#e6e8ec]">{p.label}</span>
                <span className="relative h-2 rounded-full bg-[#1b2029]" aria-hidden="true">
                  <span className="absolute inset-y-0 left-1/2 w-px bg-[#2a3040]" />
                  <span
                    className="absolute inset-y-0 rounded-full"
                    style={{
                      background: p.value >= 0 ? "#34d399" : "#f87171",
                      width: `${(Math.abs(p.value) / biggest) * 50}%`,
                      left: p.value >= 0 ? "50%" : undefined,
                      right: p.value < 0 ? "50%" : undefined,
                    }}
                  />
                </span>
                <span className={`text-right font-semibold tabular-nums ${p.value >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                  {money(p.value)}
                </span>
                <span className="col-span-3 -mt-1 pl-[96px] text-[11px] text-[#898781]">{p.note}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#2a3040] bg-[#0e1117]/70 px-3 py-2.5">
              <div className="text-[11px] uppercase tracking-wide text-[#898781]">Price now</div>
              <div className="text-lg font-bold text-[#e6e8ec]">${now.price.toFixed(2)}</div>
            </div>
            <div className="rounded-xl border border-[#2a3040] bg-[#0e1117]/70 px-3 py-2.5">
              <div className="text-[11px] uppercase tracking-wide text-[#898781]">Greeks estimate</div>
              <div className="text-lg font-bold text-[#c4bbff]">${Math.max(estimate, 0).toFixed(2)}</div>
            </div>
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2.5">
              <div className="text-[11px] uppercase tracking-wide text-[#898781]">Actually worth</div>
              <div className="text-lg font-bold text-emerald-300">${after.price.toFixed(2)}</div>
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-[#898781]" aria-live="polite">
            {Math.abs(gap) < 0.005
              ? "The estimate matches almost exactly for a change this small."
              : `The estimate is off by $${Math.abs(gap).toFixed(2)} (${gap > 0 ? "the option is worth more than estimated" : "the option is worth less than estimated"}). The Greeks are approximations that are best for small moves, and the gap grows as the moves get bigger.`}
          </p>
        </div>
      </div>
    </section>
  );
}

export function GreeksExplorerPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGreek = GREEKS.find((g) => g.id === searchParams.get("greek"))?.id ?? "delta";

  const [values, setValues] = useState<Values>(() => valuesFromParams(searchParams));
  const [type, setType] = useState<OptionKind>(searchParams.get("type") === "put" ? "put" : "call");
  const [selected, setSelected] = useState<GreekName>(initialGreek);
  const [compare, setCompare] = useState<Compare>(
    COMPARES.find((c) => c.id === searchParams.get("compare"))?.id ?? "none",
  );
  const [xAxis, setXAxis] = useState<XAxis>(AXES.find((a) => a.id === searchParams.get("x"))?.id ?? "spot");
  const [lockScale, setLockScale] = useState(false);
  const [done, setDone] = useState<string[]>(loadChallenges);
  const [hoverSpot, setHoverSpot] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  // The replay borrows the Days input: it remembers what the learner had set, counts down from it, and puts it back.
  const [replaying, setReplaying] = useState(false);
  const startDaysRef = useRef<number | null>(null);
  const holdTimerRef = useRef<number | undefined>(undefined);
  const svgRef = useRef<SVGSVGElement>(null);

  const info = GREEKS.find((g) => g.id === selected) ?? GREEKS[1];
  const axis = AXES.find((a) => a.id === xAxis) ?? AXES[0];

  const inputs = (v: Values, overrides: Partial<GreekInputs> = {}): GreekInputs => ({
    spot: v.spot,
    strike: v.strike,
    days: v.days,
    vol: v.vol / 100,
    rate: v.rate / 100,
    type,
    ...overrides,
  });

  const now = useMemo(() => greeksOf(inputs(values)), [values, type]); // eslint-disable-line react-hooks/exhaustive-deps

  const chart = useMemo(() => {
    const [lo, hi] = axis.range(values);
    const steps = 90;
    const xs = Array.from({ length: steps + 1 }, (_, i) => lo + ((hi - lo) * i) / steps);
    const curveFor = (overrides: Partial<GreekInputs>) =>
      xs.map((s) => greeksOf(inputs(values, { ...axis.override(s), ...overrides }))[selected]);

    const main = curveFor({});
    // A comparison only makes sense when it varies something other than the x axis itself.
    let second: number[] | null = null;
    if (compare === "half-time" && xAxis !== "days") second = curveFor({ days: Math.max(1, values.days / 2) });
    if (compare === "vol-up" && xAxis !== "vol") second = curveFor({ vol: (values.vol + 15) / 100 });
    if (compare === "opposite") second = curveFor({ type: type === "call" ? "put" : "call" });
    // the price chart also shows the payoff if the option were held to expiration
    const payoff =
      selected === "price" && xAxis === "spot"
        ? xs.map((s) => (type === "call" ? Math.max(s - values.strike, 0) : Math.max(values.strike - s, 0)))
        : null;

    // With the scale locked (or while the decay replay runs) the axis covers every time to expiration, so changes in
    // the curve's height are visible instead of being rescaled away.
    const lockedExtras: number[] = [];
    if ((lockScale || playing) && xAxis === "spot") {
      const top = Math.max(2, (playing ? startDaysRef.current : null) ?? values.days);
      for (let i = 0; i <= 7; i++) lockedExtras.push(...curveFor({ days: Math.max(1, (top * i) / 7) }));
    }
    const all = [...main, ...(second ?? []), ...(payoff ?? []), ...lockedExtras];
    let yMin = Math.min(...all);
    let yMax = Math.max(...all);
    if (selected !== "price") {
      yMin = Math.min(yMin, 0);
      yMax = Math.max(yMax, 0);
    }
    const pad = (yMax - yMin || 1) * 0.08;
    yMax += pad;
    if (selected === "price" || yMin !== 0) yMin -= pad;
    const step = niceStep(yMax - yMin);
    const ticks: number[] = [];
    for (let t = Math.ceil(yMin / step) * step; t <= yMax + 1e-9; t += step) ticks.push(Number(t.toFixed(6)));

    const frac = (s: number) => (axis.flip ? (hi - s) / (hi - lo) : (s - lo) / (hi - lo));
    const x = (s: number) => M.left + frac(s) * (W - M.left - M.right);
    const valueAt = (f: number) => (axis.flip ? hi - f * (hi - lo) : lo + f * (hi - lo));
    const y = (v: number) => M.top + (1 - (v - yMin) / (yMax - yMin)) * (H - M.top - M.bottom);
    const path = (ys: number[]) => ys.map((v, i) => `${i === 0 ? "M" : "L"}${x(xs[i]).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
    return { lo, hi, xs, main, second, payoff, ticks, x, y, path, yMin, yMax, valueAt };
  }, [values, type, selected, compare, lockScale, playing, xAxis]); // eslint-disable-line react-hooks/exhaustive-deps

  // A small curve for every Greek across the stock-price range, so each tile shows its shape. (Always against the
  // stock price, whatever the chart's x axis is.)
  const spotRange = useMemo(() => [Math.max(1, values.strike * 0.6), values.strike * 1.4] as const, [values.strike]);
  const sparks = useMemo(() => {
    const [lo, hi] = spotRange;
    const spots = Array.from({ length: 61 }, (_, i) => lo + ((hi - lo) * i) / 60);
    const out = {} as Record<GreekName, number[]>;
    for (const g of GREEKS) out[g.id] = spots.map((sp) => greeksOf(inputs(values, { spot: sp }))[g.id]);
    return out;
  }, [values, type, spotRange]); // eslint-disable-line react-hooks/exhaustive-deps

  function onMove(e: React.PointerEvent<SVGSVGElement>) {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const f = (px - M.left) / (W - M.left - M.right);
    setHoverSpot(f < 0 || f > 1 ? null : chart.valueAt(f));
  }

  // hoverSpot is the value on the chart's current x axis (a stock price, a number of days or a volatility).
  const hoverIndex =
    hoverSpot === null ? null : Math.round(((hoverSpot - chart.lo) / (chart.hi - chart.lo)) * (chart.xs.length - 1));
  const hoverValue = hoverIndex === null ? null : chart.main[hoverIndex];
  const currentX = axis.current(values);
  const spotInRange = currentX >= chart.lo && currentX <= chart.hi;
  const currentValue = now[selected];
  const daysShown = Math.round(values.days * 10) / 10;

  // Keep the URL in step with the controls (not while the replay is running, which would rewrite it every frame).
  useEffect(() => {
    if (playing) return;
    const id = window.setTimeout(() => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          for (const p of PARAMS) {
            if (values[p.key] === p.default) next.delete(p.key);
            else next.set(p.key, String(Math.round(values[p.key] * 100) / 100));
          }
          if (type === "call") next.delete("type");
          else next.set("type", type);
          if (selected === "delta") next.delete("greek");
          else next.set("greek", selected);
          if (compare === "none") next.delete("compare");
          else next.set("compare", compare);
          if (xAxis === "spot") next.delete("x");
          else next.set("x", xAxis);
          return next;
        },
        { replace: true },
      );
    }, 250);
    return () => window.clearTimeout(id);
  }, [values, type, selected, compare, xAxis, playing, setSearchParams]);

  // A challenge counts the moment the numbers satisfy it, and stays done (remembered in this browser).
  useEffect(() => {
    if (replaying) return; // the replay moves the numbers, not the learner
    const newlyMet = CHALLENGES.filter((c) => !done.includes(c.id) && c.met(now)).map((c) => c.id);
    if (newlyMet.length === 0) return;
    const next = [...done, ...newlyMet];
    setDone(next);
    try {
      localStorage.setItem(CHALLENGES_KEY, JSON.stringify(next));
    } catch {
      // storage unavailable — progress just won't persist
    }
  }, [now, done, replaying]);

  // Time-decay replay: the days to expiration the learner has set count down to 1, so they can watch theta and gamma
  // take over for their own option. Their setting is put back when it finishes or they press Stop.
  function endReplay(restore: boolean) {
    window.clearTimeout(holdTimerRef.current);
    setPlaying(false);
    setReplaying(false);
    const from = startDaysRef.current;
    startDaysRef.current = null;
    if (restore && from !== null) setValues((v) => ({ ...v, days: from }));
  }

  useEffect(() => {
    if (!playing) return;
    const from = startDaysRef.current ?? 30;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    // about six seconds whatever the starting point (a handful of jumps if motion is reduced)
    const step = Math.max(0.05, (from - 1) / (reduce ? 8 : 100));
    let days = from;
    const id = window.setInterval(() => {
      days -= step;
      if (days <= 1) {
        window.clearInterval(id);
        setValues((v) => ({ ...v, days: 1 }));
        setPlaying(false);
        // hold on the last day for a moment, then put the learner's setting back
        holdTimerRef.current = window.setTimeout(() => endReplay(true), 800);
        return;
      }
      setValues((v) => ({ ...v, days }));
    }, 60);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  useEffect(() => () => window.clearTimeout(holdTimerRef.current), []);

  const canReplay = values.days > 2;
  function playDecay() {
    if (playing || replaying) {
      endReplay(true);
      return;
    }
    if (!canReplay) return;
    startDaysRef.current = values.days;
    setReplaying(true);
    setPlaying(true);
  }

  // The tiles and the plain-language reading follow the pointer while it is over the chart, so you can read every
  // Greek at any stock price; otherwise they show the stock price set on the left.
  const shown = useMemo(
    () => (hoverSpot === null ? now : greeksOf(inputs(values, axis.override(hoverSpot)))),
    [hoverSpot, now, values, type, xAxis], // eslint-disable-line react-hooks/exhaustive-deps
  );
  const compareLabel = (id: Compare) =>
    id === "opposite" ? `As a ${type === "call" ? "put" : "call"}` : (COMPARES.find((c) => c.id === id)?.label ?? "");

  // Picking new numbers mid-replay ends it without putting the old Days value back.
  const abandonReplay = () => endReplay(false);
  const setParam = (key: string, value: number) => {
    if (key === "days" && (playing || replaying)) abandonReplay();
    setValues((v) => ({ ...v, [key]: value }));
  };

  return (
    <div style={{ "--accent": accent } as CSSProperties}>
      <header className="relative overflow-hidden border-b border-[#2a3040]">
        <div
          className="pointer-events-none absolute left-1/2 top-[-220px] h-[360px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: accent, opacity: 0.13 }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: "radial-gradient(rgba(154,163,178,0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-7 pt-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#898781]">
            <Link to="/practice" className="hover:text-[#e6e8ec]">
              Practice
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#9aa3b2]">Greeks Explorer</span>
          </nav>
          <div className="mt-4 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: accent }}>
            Options
          </div>
          <h1 className="mt-1 text-4xl font-bold text-[#e6e8ec]">Greeks Explorer</h1>
          <p className="mt-2 max-w-2xl leading-relaxed text-[#9aa3b2]">
            See how an option's price and each Greek react to the stock price, volatility, time and interest rates.
            Change a number on the left, or hover the chart, and watch everything move.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[320px_minmax(0,1fr)]">
        {/* On a phone the inputs sit above the results, so keep the headline numbers pinned while you adjust them. */}
        <div className="sticky top-16 z-20 -mx-6 flex items-center justify-between gap-3 border-b border-[#2a3040] bg-[#0e1117]/95 px-6 py-2 backdrop-blur lg:hidden">
          <div className="min-w-0 text-xs text-[#898781]">
            <span className="font-semibold capitalize text-[#e6e8ec]">{type}</span> ·{" "}
            <span className="font-semibold text-[#e6e8ec]">${now.price.toFixed(2)}</span>
          </div>
          <div className="text-xs text-[#898781]">
            {info.label}{" "}
            <span className="font-semibold text-[#c4bbff]">{formatValue(info, now[selected])}</span>
          </div>
        </div>

        {/* Inputs stay in view beside the chart, so changing a number never scrolls the result away. */}
        <aside className="flex flex-col gap-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto [scrollbar-color:#2a3040_transparent] [scrollbar-width:thin]">
          <ParamControls
            params={PARAMS}
            values={values}
            onChange={setParam}
            onReset={() => {
              abandonReplay();
              setValues(defaults());
            }}
            gridClassName="grid grid-cols-2 gap-x-3 gap-y-4"
            compact
          />

          <div className="rounded-xl border border-[#2a3040] bg-[#141821] p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs text-[#898781]">Option</span>
              <div role="radiogroup" aria-label="Option type" className="flex rounded-lg border border-[#2a3040] bg-[#0e1117] p-0.5">
                {(["call", "put"] as const).map((t) => (
                  <button
                    key={t}
                    role="radio"
                    aria-checked={type === t}
                    onClick={() => setType(t)}
                    className={`rounded-md px-4 py-1.5 text-sm font-semibold capitalize transition ${
                      type === t ? "bg-[#7c6cff]/25 text-[#e6e8ec]" : "text-[#898781] hover:text-[#e6e8ec]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 text-xs text-[#898781]">Try a scenario</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {SCENARIOS.map((sc) => (
                <button
                  key={sc.label}
                  onClick={() => {
                    abandonReplay();
                    setValues(sc.apply);
                  }}
                  className="rounded-full border border-[#2a3040] px-3 py-1 text-xs font-medium text-[#9aa3b2] transition hover:border-[#7c6cff]/50 hover:bg-[#7c6cff]/10 hover:text-[#e6e8ec]"
                >
                  {sc.label}
                </button>
              ))}
            </div>

            <button
              onClick={playDecay}
              disabled={!playing && !replaying && !canReplay}
              aria-pressed={playing || replaying}
              title={!canReplay && !playing && !replaying ? "Set more than 2 days to expiration to replay the decay" : undefined}
              className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${
                playing || replaying
                  ? "border-amber-400/50 bg-amber-400/15 text-amber-200"
                  : "border-[#7c6cff]/40 bg-[#7c6cff]/15 text-[#c4bbff] hover:bg-[#7c6cff]/25"
              }`}
            >
              <span aria-hidden="true">{playing || replaying ? "■" : "▶"}</span>
              {playing || replaying ? `Stop (${daysShown.toFixed(0)} days left)` : "Watch time decay"}
            </button>
            <p className="mt-2 text-xs leading-relaxed text-[#898781]">
              {playing || replaying
                ? `Counting down from your ${Math.round(startDaysRef.current ?? values.days)} days. Press Stop to go back to your setting.`
                : canReplay
                  ? `Counts your ${Math.round(values.days)} days to expiration down to 1 so you can see time value drain away and gamma build, then puts your setting back.`
                  : "Set more than 2 days to expiration to replay the decay."}
            </p>
          </div>
        </aside>

        <main className="flex min-w-0 flex-col gap-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
            {GREEKS.map((g) => {
              const active = g.id === selected;
              return (
                <button
                  key={g.id}
                  onClick={() => setSelected(g.id)}
                  aria-pressed={active}
                  className={`rounded-xl border px-4 py-3 text-left transition hover:-translate-y-px ${
                    active ? "border-[#7c6cff] bg-[#7c6cff]/12" : "border-[#2a3040] bg-[#141821] hover:border-[#7c6cff]/50"
                  }`}
                >
                  <div className="text-xs uppercase tracking-wide text-[#898781]">{g.label}</div>
                  <div className="mt-1 text-xl font-bold text-[#e6e8ec]">{formatValue(g, shown[g.id])}</div>
                  <div className="mt-0.5 text-[11px] text-[#898781]">{g.unit}</div>
                  <TileSpark
                    ys={sparks[g.id]}
                    color={active ? "#a99dff" : "#6b7280"}
                    at={(() => {
                      // the mini curves are always against the stock price; follow the pointer only on that axis
                      const sp = xAxis === "spot" && hoverSpot !== null ? hoverSpot : values.spot;
                      const [lo, hi] = spotRange;
                      if (sp < lo || sp > hi) return null;
                      return Math.round(((sp - lo) / (hi - lo)) * 60);
                    })()}
                  />
                </button>
              );
            })}
          </div>
          <p className="-mt-3 text-xs text-[#898781]" aria-live="polite">
            {hoverSpot !== null ? (
              <>
                Showing every value at <span className="font-semibold text-[#e6e8ec]">{axis.hover(hoverSpot).toLowerCase()}</span>{" "}
                (from the chart).
              </>
            ) : (
              <>
                Showing every value at the inputs you set. Hover the chart to read them at any other{" "}
                {xAxis === "spot" ? "stock price" : xAxis === "days" ? "time to expiration" : "volatility"}.
              </>
            )}
          </p>

          <section className="rounded-2xl border border-[#2a3040] bg-[#141821] card-glow p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
                {info.label} vs. {axis.noun}
              </h2>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <div role="radiogroup" aria-label="Horizontal axis" className="flex rounded-lg border border-[#2a3040] bg-[#0e1117] p-0.5">
                {AXES.map((a) => (
                  <button
                    key={a.id}
                    role="radio"
                    aria-checked={xAxis === a.id}
                    onClick={() => {
                      setXAxis(a.id);
                      setHoverSpot(null);
                    }}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                      xAxis === a.id ? "bg-[#7c6cff]/25 text-[#e6e8ec]" : "text-[#898781] hover:text-[#e6e8ec]"
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-1.5 text-xs text-[#898781]" title="Keep the vertical axis wide enough for every time to expiration, so the curve's height visibly changes as time passes">
                <input
                  type="checkbox"
                  checked={(lockScale || playing) && xAxis === "spot"}
                  disabled={playing || replaying || xAxis !== "spot"}
                  onChange={(e) => setLockScale(e.target.checked)}
                  className="accent-[#7c6cff]"
                />
                Keep the scale fixed
              </label>
              <label className="flex items-center gap-2 text-xs text-[#898781]">
                Compare with
                <select
                  value={compare}
                  onChange={(e) => setCompare(e.target.value as Compare)}
                  className="rounded-lg border border-[#2a3040] bg-[#0e1117] px-2.5 py-1.5 text-xs text-[#e6e8ec] focus:border-[#7c6cff] focus:outline-none [&>option]:bg-[#141821]"
                >
                  {COMPARES.map((c) => (
                    <option
                      key={c.id}
                      value={c.id}
                      disabled={(c.id === "half-time" && xAxis === "days") || (c.id === "vol-up" && xAxis === "vol")}
                    >
                      {compareLabel(c.id)}
                    </option>
                  ))}
                </select>
              </label>
              </div>
            </div>

            <svg
              ref={svgRef}
              viewBox={`0 0 ${W} ${H}`}
              className="w-full touch-pan-y select-none"
              role="img"
              aria-label={`${info.label} of a ${type} against ${axis.noun}`}
              onPointerMove={onMove}
              onPointerLeave={() => setHoverSpot(null)}
            >
              {/* in the money / out of the money */}
              {xAxis === "spot" && (() => {
                const strikeX = chart.x(values.strike);
                const itmRight = type === "call";
                const left = M.left;
                const right = W - M.right;
                return (
                  <>
                    <rect
                      x={itmRight ? strikeX : left}
                      y={M.top}
                      width={itmRight ? right - strikeX : strikeX - left}
                      height={H - M.top - M.bottom}
                      fill="#34d399"
                      fillOpacity="0.05"
                    />
                    <text x={itmRight ? right - 6 : left + 6} y={H - M.bottom - 8} textAnchor={itmRight ? "end" : "start"} fontSize="10" fill="#34d399" fillOpacity="0.8">
                      in the money
                    </text>
                    <text x={itmRight ? left + 6 : right - 6} y={H - M.bottom - 8} textAnchor={itmRight ? "start" : "end"} fontSize="10" fill="#898781">
                      out of the money
                    </text>
                  </>
                );
              })()}

              {/* grid + y axis */}
              {chart.ticks.map((t) => (
                <g key={t}>
                  <line x1={M.left} x2={W - M.right} y1={chart.y(t)} y2={chart.y(t)} stroke="#2a3040" strokeOpacity={t === 0 ? 1 : 0.5} strokeDasharray={t === 0 ? undefined : "2 5"} />
                  <text x={M.left - 8} y={chart.y(t) + 3.5} textAnchor="end" fontSize="10.5" fill="#898781">
                    {info.money ? `${t < 0 ? "-" : ""}$${Math.abs(t).toFixed(Math.max(0, info.decimals - (Math.abs(t) >= 1 ? 1 : 0)))}` : t.toFixed(info.decimals)}
                  </text>
                </g>
              ))}
              {/* x axis */}
              {[0, 0.25, 0.5, 0.75, 1].map((f) => {
                const sp = chart.valueAt(f);
                return (
                  <text key={f} x={M.left + f * (W - M.left - M.right)} y={H - 22} textAnchor="middle" fontSize="10.5" fill="#898781">
                    {axis.tick(sp)}
                  </text>
                );
              })}
              <text x={M.left + (W - M.left - M.right) / 2} y={H - 6} textAnchor="middle" fontSize="11" fill="#9aa3b2">
                {xAxis === "days" ? "Days to expiration (time passes left to right)" : axis.label}
              </text>

              {/* strike */}
              {xAxis === "spot" && (
                <>
                  <line x1={chart.x(values.strike)} x2={chart.x(values.strike)} y1={M.top} y2={H - M.bottom} stroke="#a99dff" strokeOpacity="0.4" strokeDasharray="4 4" />
                  <text x={chart.x(values.strike) + 4} y={M.top + 10} fontSize="10" fill="#a99dff">
                    strike ${values.strike}
                  </text>
                </>
              )}

              {chart.payoff && (
                <path d={chart.path(chart.payoff)} fill="none" stroke="#9aa3b2" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="5 4" />
              )}
              {chart.second && (
                <path d={chart.path(chart.second)} fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" />
              )}
              <path d={chart.path(chart.main)} fill="none" stroke="#7c6cff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 5px rgba(124,108,255,0.55))" }} />

              {/* where the inputs currently are on this axis */}
              {spotInRange && (
                <>
                  <line x1={chart.x(currentX)} x2={chart.x(currentX)} y1={M.top} y2={H - M.bottom} stroke="#34d399" strokeOpacity="0.5" />
                  <circle cx={chart.x(currentX)} cy={chart.y(currentValue)} r="6" fill="#34d399" stroke="#0e1117" strokeWidth="2" />
                </>
              )}

              {/* hover read-out */}
              {hoverSpot !== null && hoverValue !== null && (
                <g pointerEvents="none">
                  <line x1={chart.x(hoverSpot)} x2={chart.x(hoverSpot)} y1={M.top} y2={H - M.bottom} stroke="#e6e8ec" strokeOpacity="0.3" />
                  <circle cx={chart.x(hoverSpot)} cy={chart.y(hoverValue)} r="4.5" fill="#e6e8ec" />
                  <g transform={`translate(${Math.min(chart.x(hoverSpot) + 10, W - 150)} ${Math.max(chart.y(hoverValue) - 34, M.top)})`}>
                    <rect width="138" height="34" rx="6" fill="#1b2029" stroke="#2a3040" />
                    <text x="8" y="14" fontSize="10.5" fill="#898781">
                      {axis.hover(hoverSpot)}
                    </text>
                    <text x="8" y="28" fontSize="12" fontWeight="600" fill="#e6e8ec">
                      {info.label} {formatValue(info, hoverValue)}
                    </text>
                  </g>
                </g>
              )}
            </svg>

            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-[#898781]">
              <span className="flex items-center gap-1.5">
                <span className="h-0.5 w-5 rounded bg-[#7c6cff]" /> {info.label}, as set on the left
              </span>
              {chart.second && (
                <span className="flex items-center gap-1.5">
                  <span className="h-0.5 w-5 rounded bg-[#fbbf24]" /> {compareLabel(compare)}
                </span>
              )}
              {chart.payoff && (
                <span className="flex items-center gap-1.5">
                  <span className="h-0.5 w-5 rounded bg-[#9aa3b2]" /> Value at expiration
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" /> {axis.nowLabel}
              </span>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <div className="rounded-2xl border p-5" style={{ borderColor: `${accent}55`, background: `${accent}12` }}>
              <div className="text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: "#a99dff" }}>
                {hoverSpot !== null ? `At ${axis.tick(hoverSpot)}` : "Right now"}
              </div>
              <p className="mt-2 leading-relaxed text-[#e6e8ec]">{sentenceFor(selected, shown, type)}</p>
              <p className="mt-2 text-xs text-[#898781]">Figures are per share. One option contract covers 100 shares.</p>
            </div>
            <div className="rounded-2xl border border-[#2a3040] bg-[#141821] p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[#898781]">What to notice</div>
              <p className="mt-2 text-sm leading-relaxed text-[#9aa3b2]">{info.notice}</p>
              {info.lesson && (
                <Link to={`/lesson/${info.lesson}`} className="mt-3 inline-block text-sm text-[#a99dff] hover:underline">
                  Read the {info.label.toLowerCase()} lesson →
                </Link>
              )}
            </div>
          </section>

          <WhatIf values={values} type={type} now={now} />

          <section className="rounded-2xl border border-[#2a3040] bg-[#141821] p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Challenges</h2>
                <p className="mt-1 text-sm text-[#898781]">
                  Change the inputs until the numbers do what each goal asks. A goal checks off the moment you get there.
                </p>
              </div>
              <span className="rounded-full border border-[#2a3040] bg-[#0e1117]/70 px-2.5 py-0.5 text-xs text-[#9aa3b2]">
                {CHALLENGES.filter((c) => done.includes(c.id)).length} of {CHALLENGES.length} done
              </span>
            </div>
            <ul className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
              {CHALLENGES.map((c) => {
                const isDone = done.includes(c.id);
                return (
                  <li
                    key={c.id}
                    className={`flex items-start gap-3 rounded-xl border px-3.5 py-3 transition ${
                      isDone ? "border-emerald-500/30 bg-emerald-500/10" : "border-[#2a3040] bg-[#0e1117]/60"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${
                        isDone ? "border-emerald-500 bg-emerald-500 text-[#06281c]" : "border-[#2a3040] text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                    <span className="min-w-0">
                      <span className={`block text-sm font-medium ${isDone ? "text-emerald-200" : "text-[#e6e8ec]"}`}>
                        {c.title}
                        {isDone && <span className="sr-only"> (done)</span>}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-[#898781]">{c.hint}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
            {done.length > 0 && (
              <button
                onClick={() => {
                  setDone([]);
                  try {
                    localStorage.removeItem(CHALLENGES_KEY);
                  } catch {
                    // nothing to clear
                  }
                }}
                className="mt-3 text-xs text-[#898781] hover:text-[#e6e8ec]"
              >
                Reset challenges
              </button>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
