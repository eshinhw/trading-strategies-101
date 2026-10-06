import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchConstructionExercise, fetchConstructionExercises, fetchLesson, submitConstruction } from "../api";
import type {
  ConstructionExerciseDetail,
  ConstructionExerciseSummary,
  ConstructionGradeResult,
} from "../types/construction";
import type { Strategy } from "../types/strategy";
import type { ParamValues } from "../engine/payoff";
import { computePayoffStats, defaultRange } from "../engine/payoff";
import { ParamControls } from "../components/ParamControls";
import { PayoffChart } from "../components/PayoffChart";
import { StatTile } from "../components/StatTile";
import { courseAccent } from "../lib/courseVisuals";

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
  // Which candidates have been checked so far in this exercise, and whether each one passed.
  const [tried, setTried] = useState<Record<string, boolean>>({});
  const [siblings, setSiblings] = useState<ConstructionExerciseSummary[]>([]);

  useEffect(() => {
    if (!slug) return;
    setExercise(null);
    setError(null);
    setPickedSlug(null);
    setStrategy(null);
    setResult(null);
    setTried({});
    fetchConstructionExercise(slug)
      .then(setExercise)
      .catch((e) => setError(e.message));
  }, [slug]);

  const moduleSlug = exercise?.moduleSlug;
  useEffect(() => {
    if (!moduleSlug) return;
    fetchConstructionExercises()
      .then((all) => setSiblings(all.filter((ex) => ex.moduleSlug === moduleSlug)))
      .catch(() => setSiblings([]));
  }, [moduleSlug]);

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
      setTried((prev) => ({ ...prev, [pickedSlug]: grade.passed }));
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
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400">
          !
        </div>
        <p className="text-amber-400">{error}</p>
        <Link to="/courses" className="mt-4 inline-block text-[#a99dff] hover:underline">
          ← All Courses
        </Link>
      </div>
    );
  }

  if (!exercise) {
    return <div className="mx-auto max-w-3xl px-6 py-16 text-center text-[#898781]">Loading…</div>;
  }

  // Which step the learner is on: 1 pick a strategy, 2 tune it, 3 see the verdict.
  const step = !pickedSlug ? 1 : result ? 3 : 2;
  const accent = courseAccent("options");
  const pickedName = exercise.candidates.find((c) => c.slug === pickedSlug)?.name;
  const position = siblings.findIndex((ex) => ex.slug === exercise.slug);
  const nextExercise = position >= 0 && position < siblings.length - 1 ? siblings[position + 1] : null;

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
        <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#898781]">
            <Link to="/courses/options" className="hover:text-[#e6e8ec]">
              Options
            </Link>
            <span aria-hidden="true">/</span>
            <Link to={`/module/${exercise.moduleSlug}`} className="hover:text-[#e6e8ec]">
              {exercise.moduleTitle ?? "Module"}
            </Link>
          </nav>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: accent }}>
              Construction exercise
            </span>
            {position >= 0 && siblings.length > 1 && (
              <span className="rounded-full border border-[#2a3040] bg-[#0e1117]/70 px-2.5 py-0.5 text-xs text-[#9aa3b2]">
                Exercise {position + 1} of {siblings.length}
              </span>
            )}
          </div>
          <h1 className="mt-1 text-4xl font-bold text-[#e6e8ec]">{exercise.title}</h1>
          <blockquote
            className="mt-4 max-w-3xl border-l-2 pl-4 text-lg leading-relaxed text-[#9aa3b2]"
            style={{ borderColor: `${accent}99` }}
          >
            {exercise.scenario}
          </blockquote>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-[1fr_280px]">
        <main className="min-w-0">
          <Stepper step={step} accent={accent} pickedName={pickedName} />

          {!pickedSlug ? (
            <section className="mt-6">
              <h2 className="text-xl font-bold text-[#e6e8ec]">Pick a strategy</h2>
              <p className="mt-1 text-sm text-[#9aa3b2]">
                Only one of these can meet every requirement. Choose the one you think fits, then tune it.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {exercise.candidates.map((c, i) => (
                  <button
                    key={c.slug}
                    onClick={() => pickCandidate(c.slug)}
                    className="group flex items-center gap-3 rounded-2xl border border-[#2a3040] bg-[#141821] p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[#171c26]"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border text-sm font-bold"
                      style={{ background: `${accent}22`, borderColor: `${accent}55`, color: accent }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1 font-semibold text-[#e6e8ec]">{c.name}</span>
                    {tried[c.slug] !== undefined && (
                      <span
                        className={`shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-medium ${
                          tried[c.slug]
                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                            : "border-amber-500/30 bg-amber-500/10 text-amber-400"
                        }`}
                      >
                        {tried[c.slug] ? "✓ Solved" : "Tried, not quite"}
                      </span>
                    )}
                    <span
                      className="opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                      style={{ color: accent }}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>
                ))}
              </div>
            </section>
          ) : !strategy || !stats ? (
            <p className="mt-6 text-[#898781]">Loading strategy…</p>
          ) : result ? (
            <ConstructionResult
              strategyName={strategy.name}
              result={result}
              moduleSlug={exercise.moduleSlug}
              nextExercise={nextExercise}
              onTryAgain={tryAgain}
              onChangeStrategy={changeStrategy}
            />
          ) : (
            <section className="mt-6 flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl font-bold text-[#e6e8ec]">
                  Building: <span style={{ color: accent }}>{strategy.name}</span>
                </h2>
                <button onClick={changeStrategy} className="text-sm text-[#a99dff] hover:underline">
                  ← Pick a different strategy
                </button>
              </div>

              <ParamControls
                params={strategy.params}
                values={params}
                onChange={(key, value) => setParams((prev) => ({ ...prev, [key]: value }))}
                onReset={() => setParams(defaultsFor(strategy.params))}
              />

              <div className="rounded-2xl border border-[#2a3040] bg-[#141821] card-glow p-5">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">
                  Payoff at expiration
                </h3>
                <PayoffChart
                  curve={stats.curve}
                  breakevens={stats.breakevens.filter((b) => b >= stats.displayRange[0] && b <= stats.displayRange[1])}
                  currentPrice={params.S0}
                />
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <StatTile label="Max profit" value={stats.maxProfit} tone="good" />
                  <StatTile label="Max loss" value={stats.maxLoss} tone="critical" />
                  <StatTile
                    label="Breakeven"
                    value={stats.breakevens.length === 0 ? "—" : stats.breakevens.map((b) => `$${b.toFixed(2)}`).join(" / ")}
                    tone="neutral"
                  />
                </div>
              </div>

              <div className="sticky bottom-0 z-20 -mx-6 flex flex-wrap items-center gap-4 border-t border-[#2a3040] bg-[#0b0d12]/90 px-6 py-3 backdrop-blur lg:static lg:mx-0 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="rounded-lg bg-[#7c6cff] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
                >
                  {submitting ? "Checking…" : "Check my build"}
                </button>
                <span className="text-xs text-[#898781]">Your build is checked against every requirement on the right.</span>
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}
            </section>
          )}
        </main>

        <aside className="order-first lg:sticky lg:top-24 lg:order-none lg:self-start">
          <Checklist items={exercise.goalChecklist} result={result} accent={accent} />
        </aside>
      </div>
    </div>
  );
}

function Stepper({ step, accent, pickedName }: { step: number; accent: string; pickedName?: string }) {
  const steps = [
    { n: 1, label: "Pick a strategy", detail: undefined },
    { n: 2, label: "Tune the build", detail: pickedName },
    { n: 3, label: "See the verdict", detail: undefined },
  ];
  return (
    <ol className="flex items-center gap-2 sm:gap-3" aria-label="Progress">
      {steps.map((st, i) => {
        const done = step > st.n;
        const current = step === st.n;
        return (
          <li key={st.n} className="flex flex-1 items-center gap-2 sm:gap-3" aria-current={current ? "step" : undefined}>
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition"
              style={
                done
                  ? { background: "#34d39922", borderColor: "#34d39966", color: "#34d399" }
                  : current
                    ? { background: accent, borderColor: accent, color: "#0b0d12", boxShadow: `0 0 14px ${accent}66` }
                    : { background: "#141821", borderColor: "#2a3040", color: "#898781" }
              }
            >
              {done ? "✓" : st.n}
            </span>
            <span className={`hidden text-sm sm:block ${current ? "font-semibold text-[#e6e8ec]" : "text-[#898781]"}`}>
              {st.label}
            </span>
            {i < steps.length - 1 && <span className="h-px flex-1 bg-gradient-to-r from-[#2a3040] to-[#2a3040]/30" />}
          </li>
        );
      })}
    </ol>
  );
}

function Checklist({
  items,
  result,
  accent,
}: {
  items: string[];
  result: ConstructionGradeResult | null;
  accent: string;
}) {
  const metCount = result ? result.checklist.filter((c) => c.met).length : 0;
  return (
    <div className="rounded-2xl border border-[#2a3040] bg-gradient-to-b from-[#181c28] to-[#12151d] p-5">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Your build must hit</h3>
        {result && (
          <span className={`text-xs font-medium ${result.passed ? "text-emerald-400" : "text-amber-400"}`}>
            {metCount}/{items.length}
          </span>
        )}
      </div>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((label, i) => {
          const check = result?.checklist[i];
          return (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span
                aria-hidden="true"
                className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold"
                style={
                  check
                    ? check.met
                      ? { background: "#34d399", borderColor: "#34d399", color: "#06281c" }
                      : { background: "#f87171", borderColor: "#f87171", color: "#2b0a0a" }
                    : { borderColor: `${accent}66`, color: accent }
                }
              >
                {check ? (check.met ? "✓" : "✕") : i + 1}
              </span>
              <span className={check ? (check.met ? "text-emerald-100" : "text-red-200") : "text-[#e6e8ec]"}>{label}</span>
              {check && <span className="sr-only">{check.met ? "met" : "not met"}</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function fmtMoney(v: number | "unlimited"): string {
  return v === "unlimited" ? "Unlimited" : `${v < 0 ? "-" : ""}$${Math.abs(v).toFixed(2)}`;
}

function ResultStat({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-left">
      <div className="text-[11px] uppercase tracking-wide text-[#898781]">{label}</div>
      <div className="mt-0.5 font-semibold text-[#e6e8ec]">{children}</div>
    </div>
  );
}

function ConstructionResult({
  strategyName,
  result,
  moduleSlug,
  nextExercise,
  onTryAgain,
  onChangeStrategy,
}: {
  strategyName: string;
  result: ConstructionGradeResult;
  moduleSlug: string;
  nextExercise: ConstructionExerciseSummary | null;
  onTryAgain: () => void;
  onChangeStrategy: () => void;
}) {
  return (
    <section
      className={`rr-point mt-6 rounded-2xl border p-6 sm:p-8 ${
        result.passed ? "border-emerald-500/30 bg-emerald-500/10" : "border-amber-500/30 bg-amber-500/10"
      }`}
    >
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold ${
            result.passed ? "bg-emerald-500 text-[#06281c]" : "bg-amber-400 text-[#2b1a02]"
          }`}
        >
          {result.passed ? "✓" : "!"}
        </span>
        <div>
          <div className={`text-2xl font-bold ${result.passed ? "text-emerald-300" : "text-amber-300"}`}>
            {result.passed ? `Your ${strategyName} works.` : "Not quite — check the list."}
          </div>
          <p className="mt-1 text-[#9aa3b2]">
            {result.passed
              ? "This build satisfies every requirement in the goal."
              : "Some requirements are still unmet. Adjust the parameters, or try a different strategy entirely."}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <ResultStat label="Max profit">{fmtMoney(result.stats.maxProfit)}</ResultStat>
        <ResultStat label="Max loss">{fmtMoney(result.stats.maxLoss)}</ResultStat>
        <ResultStat label="Breakeven">
          {result.stats.breakevens.length === 0 ? "—" : result.stats.breakevens.map((b) => `$${b.toFixed(2)}`).join(" / ")}
        </ResultStat>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          onClick={onTryAgain}
          className="rounded-lg bg-[#7c6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0]"
        >
          Adjust and retry
        </button>
        <button onClick={onChangeStrategy} className="text-sm text-[#a99dff] hover:underline">
          Try a different strategy
        </button>
        {result.passed && nextExercise && (
          <Link
            to={`/construction/${nextExercise.slug}`}
            className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
          >
            Next exercise: {nextExercise.title} →
          </Link>
        )}
        {result.passed && (
          <Link to={`/module/${moduleSlug}`} className="text-sm text-[#9aa3b2] hover:text-[#e6e8ec]">
            Back to the module →
          </Link>
        )}
      </div>
    </section>
  );
}
