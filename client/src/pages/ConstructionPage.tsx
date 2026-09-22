import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchConstructionExercise, fetchLesson, submitConstruction } from "../api";
import type { ConstructionExerciseDetail, ConstructionGradeResult } from "../types/construction";
import type { Strategy } from "../types/strategy";
import type { ParamValues } from "../engine/payoff";
import { computePayoffStats, defaultRange } from "../engine/payoff";
import { ParamControls } from "../components/ParamControls";
import { PayoffChart } from "../components/PayoffChart";
import { StatTile } from "../components/StatTile";

function defaultsFor(params: { key: string; default: number }[]): ParamValues {
  const values: ParamValues = {};
  for (const p of params) values[p.key] = p.default;
  return values;
}

export function ConstructionPage() {
  const { slug } = useParams<{ slug: string }>();
  const [exercise, setExercise] = useState<ConstructionExerciseDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [pickedSlug, setPickedSlug] = useState<string | null>(null);
  const [strategy, setStrategy] = useState<Strategy | null>(null);
  const [params, setParams] = useState<ParamValues>({});
  const [result, setResult] = useState<ConstructionGradeResult | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setExercise(null);
    setError(null);
    setPickedSlug(null);
    setStrategy(null);
    setResult(null);
    fetchConstructionExercise(slug)
      .then(setExercise)
      .catch((e) => setError(e.message));
  }, [slug]);

  function pickCandidate(candidateSlug: string) {
    setPickedSlug(candidateSlug);
    setStrategy(null);
    setResult(null);
    fetchLesson(candidateSlug).then((lesson) => {
      if (lesson.kind === "strategy") {
        setStrategy(lesson.strategy);
        setParams(defaultsFor(lesson.strategy.params));
      }
    });
  }

  const stats = useMemo(() => {
    if (!strategy) return null;
    const [lo, hi] = defaultRange(strategy, params);
    return { ...computePayoffStats(strategy, params, lo, hi), displayRange: [lo, hi] as [number, number] };
  }, [strategy, params]);

  async function handleSubmit() {
    if (!exercise || !pickedSlug) return;
    setSubmitting(true);
    setError(null);
    try {
      const grade = await submitConstruction(exercise.slug, pickedSlug, params);
      setResult(grade);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  function tryAgain() {
    setResult(null);
  }

  function changeStrategy() {
    setPickedSlug(null);
    setStrategy(null);
    setResult(null);
  }

  if (error && !exercise) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-amber-400">{error}</p>
        <Link to="/courses" className="mt-4 inline-block text-[#4f8cff] hover:underline">
          ← All courses
        </Link>
      </div>
    );
  }

  if (!exercise) {
    return <div className="mx-auto max-w-3xl px-6 py-16 text-center text-[#898781]">Loading…</div>;
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Link to={`/module/${exercise.moduleSlug}`} className="text-sm text-[#4f8cff] hover:underline">
        ← {exercise.moduleTitle ?? "Back to module"}
      </Link>

      <header className="mt-4 mb-6">
        <span className="rounded-full border border-[#2a3040] px-2.5 py-0.5 text-xs font-medium text-[#9aa3b2]">
          Construction exercise
        </span>
        <h1 className="mt-3 text-2xl font-bold text-[#e6e8ec]">{exercise.title}</h1>
        <p className="mt-2 text-[#9aa3b2]">{exercise.scenario}</p>
      </header>

      <div className="mb-6 rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Your build must hit</h3>
        <ul className="flex flex-col gap-1.5">
          {exercise.goalChecklist.map((label, i) => {
            const check = result?.checklist[i];
            return (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className={check ? (check.met ? "text-emerald-400" : "text-red-400") : "text-[#898781]"}>
                  {check ? (check.met ? "✓" : "✗") : "–"}
                </span>
                <span className="text-[#e6e8ec]">{label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {!pickedSlug ? (
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Pick a strategy</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {exercise.candidates.map((c) => (
              <button
                key={c.slug}
                onClick={() => pickCandidate(c.slug)}
                className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-4 text-left transition hover:border-[#4f8cff]/50 hover:bg-[#171c26]"
              >
                <div className="font-medium text-[#e6e8ec]">{c.name}</div>
              </button>
            ))}
          </div>
        </div>
      ) : !strategy || !stats ? (
        <p className="text-[#898781]">Loading strategy…</p>
      ) : result ? (
        <ConstructionResult
          strategyName={strategy.name}
          result={result}
          onTryAgain={tryAgain}
          onChangeStrategy={changeStrategy}
        />
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="font-medium text-[#e6e8ec]">Building: {strategy.name}</div>
            <button onClick={changeStrategy} className="text-xs text-[#4f8cff] hover:underline">
              Pick a different strategy
            </button>
          </div>

          <ParamControls
            params={strategy.params}
            values={params}
            onChange={(key, value) => setParams((prev) => ({ ...prev, [key]: value }))}
            onReset={() => setParams(defaultsFor(strategy.params))}
          />

          <div className="grid grid-cols-2 gap-3">
            <StatTile label="Max profit" value={stats.maxProfit} tone="good" />
            <StatTile label="Max loss" value={stats.maxLoss} tone="critical" />
          </div>

          <div className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
              Payoff at expiration
            </h3>
            <PayoffChart
              curve={stats.curve}
              breakevens={stats.breakevens.filter((b) => b >= stats.displayRange[0] && b <= stats.displayRange[1])}
              currentPrice={params.S0}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="self-start rounded-lg bg-[#4f8cff] px-4 py-2 text-sm font-medium text-white hover:bg-[#3d7ce0] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Checking…" : "Check my build"}
          </button>

          {error && <p className="text-sm text-red-400">{error}</p>}
        </div>
      )}
    </div>
  );
}

function ConstructionResult({
  strategyName,
  result,
  onTryAgain,
  onChangeStrategy,
}: {
  strategyName: string;
  result: ConstructionGradeResult;
  onTryAgain: () => void;
  onChangeStrategy: () => void;
}) {
  return (
    <div
      className={`rounded-xl border p-6 text-center ${
        result.passed ? "border-emerald-500/30 bg-emerald-500/10" : "border-amber-500/30 bg-amber-500/10"
      }`}
    >
      <div className={`text-xl font-semibold ${result.passed ? "text-emerald-400" : "text-amber-400"}`}>
        {result.passed ? `Your ${strategyName} works.` : "Not quite — check the list above."}
      </div>
      <p className="mt-2 text-sm text-[#9aa3b2]">
        {result.passed
          ? "This build satisfies every requirement in the goal."
          : "Adjust the parameters, or try a different strategy entirely."}
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={onTryAgain}
          className="rounded-lg bg-[#4f8cff] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#3d7ce0]"
        >
          Adjust and retry
        </button>
        <button onClick={onChangeStrategy} className="text-sm text-[#9aa3b2] hover:text-[#e6e8ec]">
          Try a different strategy
        </button>
      </div>
    </div>
  );
}
