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
import { FormulaReference } from "../components/FormulaReference";

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
      prev.length >= MAX_LEGS ? prev : [...prev, { id: nextLegId++, instrument: "call", side: "long", strike: entry.S0, qty: 1 }],
    );
  }

  function removeLeg(id: number) {
    setLegs((prev) => (prev.length <= 1 ? prev : prev.filter((l) => l.id !== id)));
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
    return legs.map((l) => (l.instrument === "stock" ? 0 : blackScholes(entry.S0 ?? 100, l.strike, years, rate, vol, l.instrument)));
  }, [legs, entry]);

  const netCF = useMemo(
    () =>
      legs.reduce((sum, l, i) => (l.instrument === "stock" ? sum : sum + (l.side === "short" ? 1 : -1) * l.qty * premiums[i]), 0),
    [legs, premiums],
  );

  const { virtualStrategy, virtualParams } = useMemo(() => {
    const params: Strategy["params"] = [{ key: "S0", label: "Spot", default: entry.S0 ?? 100, min: 0, max: 0, step: 1 }];
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
    return { ...computePayoffStats(virtualStrategy, virtualParams, lo, hi), displayRange: [lo, hi] as [number, number] };
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

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Link to="/practice" className="text-sm text-[#7c6cff] hover:underline">
        ← Practice
      </Link>

      <header className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-[#e6e8ec]">Option Payout Simulator</h1>
        <p className="mt-2 max-w-2xl text-[#9aa3b2]">
          Build a position leg by leg — stock, calls, puts, long or short — and watch the payoff update live. If
          what you've built matches a strategy from the course, its explanation shows up below automatically.
        </p>
      </header>

      {error && <p className="mb-4 text-red-400">{error}</p>}

      <div className="flex flex-col gap-6">
        <section className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Build your position</h3>
            <button onClick={resetAll} className="text-xs text-[#7c6cff] hover:underline">
              Reset
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {legs.map((leg, i) => (
              <LegRow
                key={leg.id}
                leg={leg}
                premium={premiums[i]}
                canRemove={legs.length > 1}
                onChange={(patch) => updateLeg(leg.id, patch)}
                onRemove={() => removeLeg(leg.id)}
              />
            ))}
          </div>
          <button
            onClick={addLeg}
            disabled={legs.length >= MAX_LEGS}
            className="mt-4 rounded-lg border border-dashed border-[#2a3040] px-4 py-2 text-sm text-[#9aa3b2] transition hover:border-[#7c6cff]/50 hover:text-[#e6e8ec] disabled:cursor-not-allowed disabled:opacity-40"
          >
            + Add leg {legs.length >= MAX_LEGS ? `(max ${MAX_LEGS})` : ""}
          </button>
        </section>

        <section>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
            Entry pricing
            <span className="ml-2 text-xs font-normal normal-case text-[#898781]">
              — used only to estimate each leg's premium today; the chart below shows value at expiration
            </span>
          </h3>
          <ParamControls
            params={ENTRY_PARAMS}
            values={entry}
            onChange={(key, value) => setEntry((prev) => ({ ...prev, [key]: value }))}
            onReset={() => setEntry(defaultEntryValues())}
          />
        </section>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile label="Max profit" value={stats.maxProfit} tone="good" />
          <StatTile label="Max loss" value={stats.maxLoss} tone="critical" />
          <StatTile
            label="Breakeven"
            value={stats.breakevens.length === 0 ? "—" : stats.breakevens.map((b) => `$${b.toFixed(2)}`).join(" / ")}
            tone="neutral"
          />
          <StatTile label="Net premium" value={netCF >= 0 ? `${fmtMoney(netCF)} credit` : `${fmtMoney(-netCF)} debit`} tone="neutral" />
        </div>

        <div className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Payoff at expiration</h3>
          <PayoffChart
            curve={stats.curve}
            breakevens={stats.breakevens.filter((b) => b >= stats.displayRange[0] && b <= stats.displayRange[1])}
            currentPrice={entry.S0}
          />
        </div>

        {matched ? (
          <section className="rounded-xl border border-[#7c6cff]/30 bg-[#7c6cff]/10 card-glow p-5">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#7c6cff]">
              This matches a strategy from the course
            </div>
            <h3 className="text-xl font-bold text-[#e6e8ec]">{matched.name}</h3>
            {matched.aka && <div className="mt-0.5 text-sm text-[#898781]">a.k.a. {matched.aka}</div>}
            <p className="mt-3 text-sm leading-relaxed text-[#e6e8ec]">{matched.content.summary}</p>
            <div className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
              <div>
                <div className="text-xs uppercase tracking-wide text-[#898781]">When to use it</div>
                <p className="mt-1 text-[#9aa3b2]">{matched.content.whenToUse}</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-[#898781]">Why use it</div>
                <p className="mt-1 text-[#9aa3b2]">{matched.content.whyUse}</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-[#898781]">How to use it</div>
                <p className="mt-1 text-[#9aa3b2]">{matched.content.howToUse}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Link to={`/lesson/${matched.slug}`} className="text-sm text-[#7c6cff] hover:underline">
                Open the full lesson →
              </Link>
              <FormulaReference strategy={matched} />
            </div>
          </section>
        ) : (
          <section className="rounded-xl border border-[#2a3040] bg-[#101319] p-5 text-center text-sm text-[#898781]">
            This combination doesn't match a strategy from the course yet — keep adjusting, or{" "}
            <Link to="/courses/options" className="text-[#7c6cff] hover:underline">
              browse the Options course
            </Link>{" "}
            for ideas.
          </section>
        )}
      </div>
    </div>
  );
}

function LegRow({
  leg,
  premium,
  canRemove,
  onChange,
  onRemove,
}: {
  leg: BuilderLeg;
  premium: number;
  canRemove: boolean;
  onChange: (patch: Partial<BuilderLeg>) => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-[#2a3040] bg-[#0e1117] p-3">
      <select
        value={leg.instrument}
        onChange={(e) => onChange({ instrument: e.target.value as BuilderLeg["instrument"] })}
        className="rounded-md border border-[#2a3040] bg-[#141821] px-2 py-1.5 text-sm text-[#e6e8ec]"
      >
        <option value="stock">Stock</option>
        <option value="call">Call</option>
        <option value="put">Put</option>
      </select>

      <select
        value={leg.side}
        onChange={(e) => onChange({ side: e.target.value as Side })}
        className="rounded-md border border-[#2a3040] bg-[#141821] px-2 py-1.5 text-sm text-[#e6e8ec]"
      >
        <option value="long">Long</option>
        <option value="short">Short</option>
      </select>

      {leg.instrument !== "stock" && (
        <label className="flex items-center gap-2 text-sm text-[#9aa3b2]">
          Strike
          <input
            type="number"
            min={1}
            step={1}
            value={leg.strike}
            onChange={(e) => onChange({ strike: Number(e.target.value) || 0 })}
            className="input w-20"
          />
        </label>
      )}

      <label className="flex items-center gap-2 text-sm text-[#9aa3b2]">
        Qty
        <input
          type="number"
          min={1}
          max={20}
          step={1}
          value={leg.qty}
          onChange={(e) => onChange({ qty: Math.max(1, Number(e.target.value) || 1) })}
          className="input w-16"
        />
      </label>

      <div className="ml-auto whitespace-nowrap text-sm text-[#898781]">
        {leg.instrument === "stock" ? null : (
          <span className={leg.side === "short" ? "text-emerald-400" : "text-red-400"}>
            {leg.side === "short" ? "+" : "-"}
            {fmtMoney(premium)}
          </span>
        )}
      </div>

      <button
        onClick={onRemove}
        disabled={!canRemove}
        aria-label="Remove leg"
        className="text-[#898781] transition hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-30"
      >
        ✕
      </button>
    </div>
  );
}
