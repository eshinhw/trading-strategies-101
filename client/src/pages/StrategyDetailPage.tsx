import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchStrategy } from "../api";
import type { Strategy } from "../types/strategy";
import type { ParamValues } from "../engine/payoff";
import { computePayoffStats, defaultRange } from "../engine/payoff";
import { OutlookBadge, PlainBadge } from "../components/Badge";
import { ParamControls } from "../components/ParamControls";
import { PayoffChart } from "../components/PayoffChart";
import { StatTile } from "../components/StatTile";

function defaultsFor(strategy: Strategy): ParamValues {
  const values: ParamValues = {};
  for (const p of strategy.params) values[p.key] = p.default;
  return values;
}

export function StrategyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [strategy, setStrategy] = useState<Strategy | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState<ParamValues>({});
  const [showMath, setShowMath] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setStrategy(null);
    fetchStrategy(slug)
      .then((s) => {
        setStrategy(s);
        setParams(defaultsFor(s));
      })
      .catch((e) => setError(e.message));
  }, [slug]);

  const stats = useMemo(() => {
    if (!strategy || Object.keys(params).length === 0) return null;
    const [lo, hi] = defaultRange(strategy, params);
    const result = computePayoffStats(strategy, params, lo, hi);
    return { ...result, displayRange: [lo, hi] as [number, number] };
  }, [strategy, params]);

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-red-400">{error}</p>
        <Link to="/" className="mt-4 inline-block text-[#4f8cff] hover:underline">
          ← Back to all strategies
        </Link>
      </div>
    );
  }

  if (!strategy) {
    return <div className="mx-auto max-w-3xl px-6 py-16 text-center text-[#898781]">Loading…</div>;
  }

  const currentPrice = params.S0 ?? params.K ?? undefined;

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Link to="/" className="text-sm text-[#4f8cff] hover:underline">
        ← All strategies
      </Link>

      <header className="mt-4 mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <OutlookBadge outlook={strategy.outlook} />
          <PlainBadge>{strategy.style.replace("-", " ")}</PlainBadge>
          <PlainBadge>{strategy.netPosition.replace("-", " ")}</PlainBadge>
          <PlainBadge>§{strategy.section}</PlainBadge>
        </div>
        <h1 className="text-3xl font-bold text-[#e6e8ec]">{strategy.name}</h1>
        {strategy.aka && <div className="mt-1 text-sm text-[#898781]">a.k.a. {strategy.aka}</div>}
        <p className="mt-3 max-w-3xl text-lg text-[#9aa3b2]">{strategy.content.summary}</p>
      </header>

      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <InfoCard title="When to use it" text={strategy.content.whenToUse} />
        <InfoCard title="Why use it" text={strategy.content.whyUse} />
        <InfoCard title="How to use it" text={strategy.content.howToUse} />
      </section>

      <section className="mb-8 rounded-xl border border-[#2a3040] bg-[#141821] p-5">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
          Scenario
        </h3>
        <p className="leading-relaxed text-[#e6e8ec]">{strategy.content.scenario}</p>
      </section>

      <section className="mb-6">
        <ParamControls
          params={strategy.params}
          values={params}
          onChange={(key, value) => setParams((prev) => ({ ...prev, [key]: value }))}
          onReset={() => setParams(defaultsFor(strategy))}
        />
      </section>

      {stats && (
        <>
          <section className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatTile label="Max profit" value={stats.maxProfit} tone="good" />
            <StatTile label="Max loss" value={stats.maxLoss} tone="critical" />
            <StatTile
              label="Breakeven"
              value={
                stats.breakevens.length === 0
                  ? "—"
                  : stats.breakevens.map((b) => `$${b.toFixed(2)}`).join(" / ")
              }
              tone="neutral"
            />
            <StatTile label="Legs" value={String(strategy.legCount)} tone="neutral" />
          </section>

          <section className="mb-8 rounded-xl border border-[#2a3040] bg-[#141821] p-5">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
              Payoff at expiration
            </h3>
            <PayoffChart
              curve={stats.curve}
              breakevens={stats.breakevens.filter(
                (b) => b >= stats.displayRange[0] && b <= stats.displayRange[1],
              )}
              currentPrice={currentPrice}
            />
          </section>
        </>
      )}

      <section className="mb-12">
        <button
          onClick={() => setShowMath((v) => !v)}
          className="text-sm text-[#4f8cff] hover:underline"
        >
          {showMath ? "Hide" : "Show"} the paper's formulas (§{strategy.section})
        </button>
        {showMath && (
          <div className="mt-3 grid grid-cols-1 gap-3 rounded-xl border border-[#2a3040] bg-[#141821] p-5 font-mono text-sm text-[#9aa3b2] sm:grid-cols-2">
            <FormulaRow label="Payoff" value={strategy.formulas.payoff} />
            <FormulaRow label="Breakeven" value={strategy.formulas.breakeven} />
            <FormulaRow label="Max profit" value={strategy.formulas.maxProfit} />
            <FormulaRow label="Max loss" value={strategy.formulas.maxLoss} />
          </div>
        )}
      </section>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-[#2a3040] bg-[#141821] p-5">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[#e6e8ec]">{text}</p>
    </div>
  );
}

function FormulaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-[#898781]">{label}</div>
      <div className="mt-0.5 break-words text-[#e6e8ec]">{value}</div>
    </div>
  );
}
