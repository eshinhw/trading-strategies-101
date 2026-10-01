import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { fetchModules, fetchLesson } from "../api";
import type { ModuleSummary } from "../types/curriculum";
import type { Strategy } from "../types/strategy";
import type { ParamValues } from "../engine/payoff";
import { computePayoffStats, defaultRange } from "../engine/payoff";
import { ParamControls } from "../components/ParamControls";
import { PayoffChart } from "../components/PayoffChart";
import { StatTile } from "../components/StatTile";
import { FormulaReference } from "../components/FormulaReference";

function defaultsFor(params: { key: string; default: number }[]): ParamValues {
  const values: ParamValues = {};
  for (const p of params) values[p.key] = p.default;
  return values;
}

export function OptionPayoutSimulatorPage() {
  const [modules, setModules] = useState<ModuleSummary[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const [pickedSlug, setPickedSlug] = useState<string | null>(null);
  const [strategy, setStrategy] = useState<Strategy | null>(null);
  const [params, setParams] = useState<ParamValues>({});

  useEffect(() => {
    fetchModules("options")
      .then((data) => setModules(data.modules))
      .catch((e) => setError(e.message));
  }, []);

  function pickStrategy(slug: string) {
    setPickedSlug(slug);
    setStrategy(null);
    fetchLesson(slug).then((lesson) => {
      if (lesson.kind === "strategy") {
        setStrategy(lesson.strategy);
        setParams(defaultsFor(lesson.strategy.params));
      }
    });
  }

  function changeStrategy() {
    setPickedSlug(null);
    setStrategy(null);
  }

  const groups = useMemo(() => {
    if (!modules) return [];
    const q = query.trim().toLowerCase();
    return modules
      .map((m) => ({
        title: m.title,
        lessons: m.lessons.filter((l) => l.kind === "strategy" && (q === "" || l.title.toLowerCase().includes(q))),
      }))
      .filter((g) => g.lessons.length > 0);
  }, [modules, query]);

  const stats = useMemo(() => {
    if (!strategy) return null;
    const [lo, hi] = defaultRange(strategy, params);
    return { ...computePayoffStats(strategy, params, lo, hi), displayRange: [lo, hi] as [number, number] };
  }, [strategy, params]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Link to="/practice" className="text-sm text-[#7c6cff] hover:underline">
        ← Practice
      </Link>

      <header className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-[#e6e8ec]">Option Payout Simulator</h1>
        <p className="mt-2 max-w-2xl text-[#9aa3b2]">
          Pick any strategy from the Options course and freely tweak its parameters — nothing to submit, no right
          answer, just a sandbox to build intuition for how strikes, premiums, and volatility shape a payoff.
        </p>
      </header>

      {error && <p className="text-red-400">{error}</p>}

      {!pickedSlug ? (
        <div>
          {!modules && !error && <p className="text-[#898781]">Loading strategies…</p>}
          {modules && (
            <>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search strategies…"
                className="input mb-6 w-full sm:max-w-xs"
              />
              {groups.length === 0 ? (
                <p className="text-[#898781]">No strategies match your search.</p>
              ) : (
                <div className="flex flex-col gap-8">
                  {groups.map((g) => (
                    <section key={g.title}>
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">{g.title}</h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {g.lessons.map((l) => (
                          <button
                            key={l.slug}
                            onClick={() => pickStrategy(l.slug)}
                            className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-4 text-left transition hover:border-[#7c6cff]/50 hover:bg-[#171c26]"
                          >
                            <div className="font-medium text-[#e6e8ec]">{l.title}</div>
                          </button>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      ) : !strategy || !stats ? (
        <p className="text-[#898781]">Loading strategy…</p>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-[#e6e8ec]">{strategy.name}</div>
              {strategy.aka && <div className="text-sm text-[#898781]">a.k.a. {strategy.aka}</div>}
            </div>
            <button onClick={changeStrategy} className="text-xs text-[#7c6cff] hover:underline">
              Pick a different strategy
            </button>
          </div>

          <ParamControls
            params={strategy.params}
            values={params}
            onChange={(key, value) => setParams((prev) => ({ ...prev, [key]: value }))}
            onReset={() => setParams(defaultsFor(strategy.params))}
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatTile label="Max profit" value={stats.maxProfit} tone="good" />
            <StatTile label="Max loss" value={stats.maxLoss} tone="critical" />
            <StatTile
              label="Breakeven"
              value={stats.breakevens.length === 0 ? "—" : stats.breakevens.map((b) => `$${b.toFixed(2)}`).join(" / ")}
              tone="neutral"
            />
            <StatTile label="Legs" value={String(strategy.legCount)} tone="neutral" />
          </div>

          <div className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Payoff at expiration</h3>
            <PayoffChart
              curve={stats.curve}
              breakevens={stats.breakevens.filter((b) => b >= stats.displayRange[0] && b <= stats.displayRange[1])}
              currentPrice={params.S0}
            />
          </div>

          <FormulaReference strategy={strategy} />
        </div>
      )}
    </div>
  );
}
