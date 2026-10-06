import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { fetchOptionsStrategies } from "../api";
import type { Strategy, OptionType, Side } from "../types/strategy";
import type { ParamValues } from "../engine/payoff";
import { computePayoffStats, defaultRange } from "../engine/payoff";
import { blackScholes } from "../engine/blackScholes";
import { buildSignatureIndex, matchStrategy } from "../engine/strategyMatcher";
import type { LegInput } from "../engine/strategyMatcher";
import { ParamControls } from "../components/ParamControls";
import { PayoffChart } from "../components/PayoffChart";
import { StatTile } from "../components/StatTile";
import { ParamNumberCard } from "../components/ParamNumberCard";
import { ACCENT } from "../lib/courseVisuals";

interface BuilderLeg {
  id: number;
  instrument: OptionType | "stock";
  side: Side;
  strike: number;
  qty: number;
}

const MAX_LEGS = 4;

const ENTRY_PARAMS = [
  { key: "S0", label: "Spot price", default: 100, min: 10, max: 400, step: 1 },
  { key: "iv", label: "Implied volatility (%)", default: 30, min: 5, max: 150, step: 1 },
  { key: "days", label: "Days to expiration", default: 30, min: 1, max: 365, step: 1 },
  { key: "rate", label: "Risk-free rate (%)", default: 2, min: 0, max: 10, step: 0.25 },
];

function defaultEntryValues(): ParamValues {
  const values: ParamValues = {};
  for (const p of ENTRY_PARAMS) values[p.key] = p.default;
  return values;
}

let nextLegId = 1;

function defaultLegs(spot: number): BuilderLeg[] {
  return [{ id: nextLegId++, instrument: "call", side: "long", strike: spot, qty: 1 }];
}

function fmtMoney(n: number): string {
  const sign = n < 0 ? "-" : "";
  return `${sign}$${Math.abs(n).toFixed(2)}`;
}

// One-click starting points. Strikes are offsets from the current spot price, so a preset always
// lands around the money wherever the learner has set the spot.
interface PresetLeg {
  instrument: BuilderLeg["instrument"];
  side: Side;
  offset: number;
  qty?: number;
}
const PRESETS: { name: string; legs: PresetLeg[] }[] = [
  { name: "Long call", legs: [{ instrument: "call", side: "long", offset: 0 }] },
  { name: "Long put", legs: [{ instrument: "put", side: "long", offset: 0 }] },
  {
    name: "Covered call",
    legs: [
      { instrument: "stock", side: "long", offset: 0 },
      { instrument: "call", side: "short", offset: 5 },
    ],
  },
  {
    name: "Bull call spread",
    legs: [
      { instrument: "call", side: "long", offset: 0 },
      { instrument: "call", side: "short", offset: 10 },
    ],
  },
  {
    name: "Long straddle",
    legs: [
      { instrument: "call", side: "long", offset: 0 },
      { instrument: "put", side: "long", offset: 0 },
    ],
  },
  {
    name: "Long strangle",
    legs: [
      { instrument: "call", side: "long", offset: 5 },
      { instrument: "put", side: "long", offset: -5 },
    ],
  },
  {
    name: "Long call butterfly",
    legs: [
      { instrument: "call", side: "long", offset: -10 },
      { instrument: "call", side: "short", offset: 0, qty: 2 },
      { instrument: "call", side: "long", offset: 10 },
    ],
  },
  {
    name: "Long iron condor",
    legs: [
      { instrument: "put", side: "long", offset: -15 },
      { instrument: "put", side: "short", offset: -5 },
      { instrument: "call", side: "short", offset: 5 },
      { instrument: "call", side: "long", offset: 15 },
    ],
  },
];

export function OptionPayoutSimulatorPage() {
  const [strategies, setStrategies] = useState<Strategy[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [entry, setEntry] = useState<ParamValues>(defaultEntryValues());
  const [legs, setLegs] = useState<BuilderLeg[]>(() => defaultLegs(defaultEntryValues().S0));

  useEffect(() => {
    fetchOptionsStrategies()
      .then((d) => setStrategies(d.strategies))
      .catch((e) => setError(e.message));
  }, []);

  const signatureIndex = useMemo(() => (strategies ? buildSignatureIndex(strategies) : null), [strategies]);

  function updateLeg(id: number, patch: Partial<BuilderLeg>) {
    setLegs((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  }

  function addLeg() {
    setLegs((prev) =>
      prev.length >= MAX_LEGS
        ? prev
        : [...prev, { id: nextLegId++, instrument: "call", side: "long", strike: entry.S0, qty: 1 }],
    );
  }

  function removeLeg(id: number) {
    setLegs((prev) => (prev.length <= 1 ? prev : prev.filter((l) => l.id !== id)));
  }

  function applyPreset(preset: (typeof PRESETS)[number]) {
    const spot = entry.S0 ?? 100;
    setLegs(
      preset.legs.map((l) => ({
        id: nextLegId++,
        instrument: l.instrument,
        side: l.side,
        strike: Math.max(1, Math.round(spot + l.offset)),
        qty: l.qty ?? 1,
      })),
    );
  }

  function resetAll() {
    setEntry(defaultEntryValues());
    setLegs(defaultLegs(defaultEntryValues().S0));
  }

  // Each option leg's premium, estimated today via Black-Scholes from the shared entry inputs —
  // the payoff chart itself still shows value at expiration using plain intrinsic value, exactly
  // like every predefined strategy in the course. This is only to avoid making the learner guess
  // a plausible premium number by hand.
  const premiums = useMemo(() => {
    const years = (entry.days ?? 30) / 365;
    const vol = (entry.iv ?? 30) / 100;
    const rate = (entry.rate ?? 2) / 100;
    return legs.map((l) =>
      l.instrument === "stock" ? 0 : blackScholes(entry.S0 ?? 100, l.strike, years, rate, vol, l.instrument),
    );
  }, [legs, entry]);

  const netCF = useMemo(
    () =>
      legs.reduce(
        (sum, l, i) => (l.instrument === "stock" ? sum : sum + (l.side === "short" ? 1 : -1) * l.qty * premiums[i]),
        0,
      ),
    [legs, premiums],
  );

  const { virtualStrategy, virtualParams } = useMemo(() => {
    const params: Strategy["params"] = [
      { key: "S0", label: "Spot", default: entry.S0 ?? 100, min: 0, max: 0, step: 1 },
    ];
    const values: ParamValues = { S0: entry.S0 ?? 100, netCF };

    const vLegs = legs.map((l, i) => {
      if (l.instrument === "stock") return { instrument: "stock" as const, side: l.side, qty: l.qty };
      const key = `K${i}`;
      params.push({ key, label: key, default: l.strike, min: 0, max: 0, step: 1 });
      values[key] = l.strike;
      return { instrument: l.instrument, side: l.side, qty: l.qty, strikeKey: key };
    });

    const strategy: Strategy = {
      slug: "custom",
      name: "Custom Position",
      section: "",
      outlook: "neutral",
      style: "income",
      netPosition: "either",
      legCount: legs.length,
      engine: "intrinsic",
      legs: vLegs,
      params,
      content: { summary: "", whenToUse: "", whyUse: "", howToUse: "", scenario: "" },
      formulas: { payoff: "", breakeven: "", maxProfit: "", maxLoss: "" },
    };
    return { virtualStrategy: strategy, virtualParams: values };
  }, [legs, entry.S0, netCF]);

  const stats = useMemo(() => {
    const [lo, hi] = defaultRange(virtualStrategy, virtualParams);
    return {
      ...computePayoffStats(virtualStrategy, virtualParams, lo, hi),
      displayRange: [lo, hi] as [number, number],
    };
  }, [virtualStrategy, virtualParams]);

  const matched = useMemo(() => {
    if (!signatureIndex) return null;
    const matchLegs: LegInput[] = legs.map((l) => ({
      instrument: l.instrument,
      side: l.side,
      strike: l.instrument === "stock" ? undefined : l.strike,
      qty: l.qty,
    }));
    return matchStrategy(matchLegs, signatureIndex);
  }, [legs, signatureIndex]);

  const accent = ACCENT.derivatives;
  const longLegs = legs.filter((l) => l.side === "long").length;

  return (
    <div>
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
        <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#898781]">
            <Link to="/practice" className="hover:text-[#e6e8ec]">
              Practice
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#9aa3b2]">Options Payoff Simulator</span>
          </nav>
          <div className="mt-5 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: accent }}>
            Options
          </div>
          <h1 className="mt-1 text-4xl font-bold text-[#e6e8ec]">Options Payoff Simulator</h1>
          <p className="mt-3 max-w-2xl leading-relaxed text-[#9aa3b2]">
            Build a position leg by leg and watch the payoff update live. If what you build matches a strategy from the
            course, its explanation appears below the chart.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {error && <p className="mb-4 text-red-400">{error}</p>}

        <div className="flex flex-col gap-6">
          <section>
            <ParamControls
              params={ENTRY_PARAMS}
              values={entry}
              onChange={(key, value) => setEntry((prev) => ({ ...prev, [key]: value }))}
              onReset={() => setEntry(defaultEntryValues())}
              gridClassName="grid grid-cols-2 gap-4 lg:grid-cols-4"
              compact
            />
          </section>

          <section className="rounded-2xl border border-[#2a3040] bg-[#141821] card-glow p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Build Legs</h3>
                <span className="rounded-full border border-[#2a3040] bg-[#0e1117]/70 px-2 py-0.5 text-xs text-[#898781]">
                  {legs.length}/{MAX_LEGS}
                </span>
              </div>
              <button onClick={resetAll} className="text-xs text-[#a99dff] hover:underline">
                Reset everything
              </button>
            </div>

            <div className="mb-4">
              <div className="mb-2 text-xs text-[#898781]">Start from a common strategy</div>
              <div className="flex flex-wrap gap-1.5">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => applyPreset(preset)}
                    className="rounded-full border border-[#2a3040] px-3 py-1 text-xs font-medium text-[#9aa3b2] transition hover:border-[#7c6cff]/50 hover:bg-[#7c6cff]/10 hover:text-[#e6e8ec]"
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {legs.map((leg, i) => (
                <LegRow
                  key={leg.id}
                  index={i + 1}
                  leg={leg}
                  premium={premiums[i]}
                  canRemove={legs.length > 1}
                  onChange={(patch) => updateLeg(leg.id, patch)}
                  onRemove={() => removeLeg(leg.id)}
                />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <span className="text-xs text-[#898781]">
                {longLegs} long · {legs.length - longLegs} short
              </span>
              <button
                onClick={addLeg}
                disabled={legs.length >= MAX_LEGS}
                className="rounded-lg border border-dashed border-[#2a3040] px-4 py-2 text-sm text-[#9aa3b2] transition hover:border-[#7c6cff]/50 hover:text-[#e6e8ec] disabled:cursor-not-allowed disabled:opacity-40"
              >
                + Add leg {legs.length >= MAX_LEGS ? `(max ${MAX_LEGS})` : ""}
              </button>
            </div>
          </section>

          <section className="rounded-2xl border border-[#2a3040] bg-[#141821] card-glow p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Payoff at expiration</h3>
              {matched && (
                <span
                  className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                  style={{ borderColor: `${accent}55`, background: `${accent}18`, color: "#a99dff" }}
                >
                  {matched.name}
                </span>
              )}
            </div>
            <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatTile label="Max profit" value={stats.maxProfit} tone="good" />
              <StatTile label="Max loss" value={stats.maxLoss} tone="critical" />
              <StatTile
                label="Breakeven"
                value={stats.breakevens.length === 0 ? "—" : stats.breakevens.map((b) => `$${b.toFixed(2)}`).join(" / ")}
                tone="neutral"
              />
              <StatTile
                label="Net premium"
                value={netCF >= 0 ? `${fmtMoney(netCF)} credit` : `${fmtMoney(-netCF)} debit`}
                tone="neutral"
              />
            </div>
            <PayoffChart
              curve={stats.curve}
              breakevens={stats.breakevens.filter((b) => b >= stats.displayRange[0] && b <= stats.displayRange[1])}
              currentPrice={entry.S0}
            />
          </section>

          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Strategy match</h3>

            {matched ? (
              <div
                className="relative overflow-hidden rounded-2xl border p-5 sm:p-6"
                style={{ borderColor: `${accent}55`, background: `${accent}12` }}
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full blur-3xl" style={{ background: accent, opacity: 0.2 }} />
                <div className="relative">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: "#a99dff" }}>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7c6cff] text-[11px] text-white">✓</span>
                    This matches a strategy from the course
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-[#e6e8ec]">{matched.name}</h3>
                  {matched.aka && <div className="mt-0.5 text-sm text-[#898781]">a.k.a. {matched.aka}</div>}
                  <p className="mt-3 max-w-3xl leading-relaxed text-[#d5d9e0]">{matched.content.summary}</p>
                  <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
                    <MatchInfo step="When" color="#5aa9ff" text={matched.content.whenToUse} />
                    <MatchInfo step="Why" color="#2dd4bf" text={matched.content.whyUse} />
                    <MatchInfo step="How" color="#a99dff" text={matched.content.howToUse} />
                  </div>
                  <Link
                    to={`/lesson/${matched.slug}`}
                    className="mt-5 inline-block rounded-lg bg-[#7c6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0]"
                  >
                    Open the full lesson →
                  </Link>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#2a3040] bg-[#101319] p-6 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#2a3040] text-[#898781]">
                  ?
                </div>
                <p className="text-sm text-[#9aa3b2]">This combination doesn't match a strategy from the course yet.</p>
                <p className="mt-1 text-sm text-[#898781]">
                  Try a starting point above, keep adjusting, or{" "}
                  <Link to="/courses/options" className="text-[#a99dff] hover:underline">
                    browse the Options course
                  </Link>{" "}
                  for ideas.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

function MatchInfo({ step, color, text }: { step: string; color: string; text: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <span
        className="inline-block rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em]"
        style={{ borderColor: `${color}55`, background: `${color}1a`, color }}
      >
        {step}
      </span>
      <p className="mt-2 text-sm leading-relaxed text-[#9aa3b2]">{text}</p>
    </div>
  );
}

// A small radio-style toggle used for a leg's instrument type and its long/short side.
function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string; activeClass?: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="rounded-lg border border-[#2a3040] bg-[#0e1117] px-2 py-1.5">
      <div className="text-[10px] text-[#9aa3b2]">{label}</div>
      <div role="radiogroup" aria-label={label} className="mt-1 flex gap-1">
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={o.value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(o.value)}
              className={`flex-1 rounded-md px-2.5 py-1 text-sm font-semibold transition ${
                active
                  ? (o.activeClass ?? "bg-[#7c6cff]/20 text-[#e6e8ec] ring-1 ring-[#7c6cff]/60")
                  : "text-[#898781] hover:bg-white/5 hover:text-[#e6e8ec]"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const cardClass = "rounded-lg border border-[#2a3040] bg-[#0e1117] px-2 py-1.5";
const cardLabelClass = "block text-[10px] text-[#9aa3b2]";

function LegRow({
  index,
  leg,
  premium,
  canRemove,
  onChange,
  onRemove,
}: {
  index: number;
  leg: BuilderLeg;
  premium: number;
  canRemove: boolean;
  onChange: (patch: Partial<BuilderLeg>) => void;
  onRemove: () => void;
}) {
  const long = leg.side === "long";
  return (
    <div
      className="flex flex-wrap items-stretch gap-3 rounded-xl border border-[#2a3040] bg-[#101319] p-3"
      style={{ borderLeftWidth: 3, borderLeftColor: long ? "#34d399" : "#f87171" }}
    >
      <div
        aria-hidden="true"
        className="hidden h-7 w-7 shrink-0 items-center justify-center self-center rounded-full bg-[#1b2029] text-xs font-semibold text-[#9aa3b2] sm:flex"
      >
        {index}
      </div>

      <div className="min-w-[200px] flex-[1.3]">
        <Segmented<BuilderLeg["instrument"]>
          label="Type"
          value={leg.instrument}
          onChange={(instrument) => onChange({ instrument })}
          options={[
            { value: "stock", label: "Stock" },
            { value: "call", label: "Call" },
            { value: "put", label: "Put" },
          ]}
        />
      </div>

      <div className="min-w-[150px] flex-1">
        <Segmented<Side>
          label="Side"
          value={leg.side}
          onChange={(side) => onChange({ side })}
          options={[
            { value: "long", label: "Long", activeClass: "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/50" },
            { value: "short", label: "Short", activeClass: "bg-red-500/20 text-red-300 ring-1 ring-red-500/50" },
          ]}
        />
      </div>

      {leg.instrument !== "stock" && (
        <div className="min-w-[120px] flex-1">
          <ParamNumberCard
            label="Strike"
            value={leg.strike}
            min={1}
            max={100000}
            step={1}
            onCommit={(n) => onChange({ strike: n })}
            compact
          />
        </div>
      )}

      <div className="min-w-[110px] flex-1">
        <ParamNumberCard
          label="Qty"
          value={leg.qty}
          min={1}
          max={20}
          step={1}
          onCommit={(n) => onChange({ qty: n })}
          compact
        />
      </div>

      {leg.instrument !== "stock" && (
        <div className={`${cardClass} min-w-[110px] flex-1`}>
          <div className={cardLabelClass}>Premium</div>
          <div className={`mt-1 whitespace-nowrap text-sm font-semibold ${long ? "text-red-400" : "text-emerald-400"}`}>
            {long ? "-" : "+"}
            {fmtMoney(premium)}
          </div>
        </div>
      )}

      <button
        onClick={onRemove}
        disabled={!canRemove}
        aria-label={`Remove leg ${index}`}
        className="shrink-0 self-center rounded-md px-2 py-1 text-[#898781] transition hover:bg-red-500/10 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-30"
      >
        ✕
      </button>
    </div>
  );
}
