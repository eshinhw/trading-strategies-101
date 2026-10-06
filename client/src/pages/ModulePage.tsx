import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchConstructionExercises, fetchCourse, fetchModule, fetchModules, fetchOptionsStrategies } from "../api";
import type { Course } from "../types/course";
import type { ModuleDetail, ModulesResponse } from "../types/curriculum";
import type { Strategy } from "../types/strategy";
import type { ConstructionExerciseSummary } from "../types/construction";
import { useAuth } from "../auth/AuthContext";
import { LessonListItem } from "../components/LessonListItem";
import { PayoffSparkline } from "../components/PayoffSparkline";
import { courseAccent } from "../lib/courseVisuals";

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[#2a3040] bg-[#0e1117]/70 px-2.5 py-0.5 text-xs text-[#9aa3b2]">
      {children}
    </span>
  );
}

function ModuleNavCard({
  to,
  direction,
  title,
  accent,
}: {
  to: string;
  direction: "prev" | "next";
  title: string;
  accent: string;
}) {
  return (
    <Link
      to={to}
      className={`group flex flex-1 flex-col rounded-xl border border-[#2a3040] bg-[#141821] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] ${
        direction === "prev" ? "items-start text-left" : "items-end text-right"
      }`}
    >
      <span className="text-xs uppercase tracking-[0.1em] text-[#898781]">
        {direction === "prev" ? "Previous module" : "Next module"}
      </span>
      <span className="mt-1 flex items-center gap-2 font-semibold text-[#e6e8ec]">
        {direction === "prev" && (
          <span aria-hidden="true" className="transition group-hover:-translate-x-0.5" style={{ color: accent }}>
            ←
          </span>
        )}
        {title}
        {direction === "next" && (
          <span aria-hidden="true" className="transition group-hover:translate-x-0.5" style={{ color: accent }}>
            →
          </span>
        )}
      </span>
    </Link>
  );
}

export function ModulePage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuth();
  const [module, setModule] = useState<ModuleDetail | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [outline, setOutline] = useState<ModulesResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [exercises, setExercises] = useState<ConstructionExerciseSummary[]>([]);
  // Options strategies by slug, so each strategy lesson in an Options module can show its payoff shape.
  const [strategyBySlug, setStrategyBySlug] = useState<Map<string, Strategy>>(new Map());

  useEffect(() => {
    if (!slug) return;
    setModule(null);
    setError(null);
    fetchModule(slug)
      .then(setModule)
      .catch((e) => setError(e.message));
    fetchConstructionExercises()
      .then((all) => setExercises(all.filter((ex) => ex.moduleSlug === slug)))
      .catch(() => setExercises([]));
  }, [slug, user]);

  // The course title and the sibling modules are context and navigation only — if they fail to load the
  // module itself still renders.
  const courseSlug = module?.courseSlug;
  useEffect(() => {
    if (!courseSlug) return;
    fetchCourse(courseSlug)
      .then(setCourse)
      .catch(() => {});
    fetchModules(courseSlug)
      .then(setOutline)
      .catch(() => {});
  }, [courseSlug, user]);

  useEffect(() => {
    if (courseSlug !== "options") return;
    fetchOptionsStrategies()
      .then((d) => setStrategyBySlug(new Map(d.strategies.map((st) => [st.slug, st]))))
      .catch(() => {});
  }, [courseSlug]);

  const siblings = useMemo(() => (outline?.modules ?? []).slice().sort((a, b) => a.order - b.order), [outline]);
  const position = siblings.findIndex((m) => m.slug === slug);
  const prevModule = position > 0 ? siblings[position - 1] : null;
  const nextModule = position >= 0 && position < siblings.length - 1 ? siblings[position + 1] : null;

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <p className="text-red-400">{error}</p>
        <Link to="/courses" className="mt-4 inline-block text-[#a99dff] hover:underline">
          ← All Courses
        </Link>
      </div>
    );
  }

  if (!module) {
    return <div className="mx-auto max-w-7xl px-6 py-16 text-center text-[#898781]">Loading…</div>;
  }

  const accent = courseAccent(module.courseSlug);
  const total = module.lessons.length;
  const done = module.lessons.filter((l) => l.completed).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const strategies = module.lessons.filter((l) => l.isPaperStrategy).length;
  const nextLesson = module.lessons.find((l) => !l.completed) ?? null;
  const started = done > 0;

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
        <div className="relative mx-auto max-w-7xl px-6 pb-9 pt-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#898781]">
            <Link to="/courses" className="hover:text-[#e6e8ec]">
              Courses
            </Link>
            <span aria-hidden="true">/</span>
            <Link to={`/courses/${module.courseSlug}`} className="hover:text-[#e6e8ec]" style={{ color: accent }}>
              {course?.title ?? "Course"}
            </Link>
          </nav>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {position >= 0 && (
              <span
                className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                style={{ borderColor: `${accent}55`, background: `${accent}18`, color: accent }}
              >
                Module {position + 1} of {siblings.length}
              </span>
            )}
            {module.completed && (
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                ✓ Completed
              </span>
            )}
          </div>

          <h1 className="mt-3 text-4xl font-bold text-[#e6e8ec]">{module.title}</h1>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-[#9aa3b2]">{module.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            <Chip>{total} lessons</Chip>
            {strategies > 0 && <Chip>{strategies} strategies</Chip>}
            {exercises.length > 0 && <Chip>{exercises.length} construction exercises</Chip>}
          </div>

          {module.unlocked && total > 0 && (
            <div className="mt-6 flex max-w-xl flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex min-w-[220px] flex-1 items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#1b2029]">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${pct}%`, background: module.completed ? "#34d399" : accent, boxShadow: `0 0 10px ${accent}66` }}
                  />
                </div>
                <span className="whitespace-nowrap text-sm text-[#9aa3b2]">
                  {done} / {total}
                </span>
              </div>
              {nextLesson && (
                <Link
                  to={`/lesson/${nextLesson.slug}`}
                  className="rounded-lg px-5 py-2.5 text-sm font-semibold text-[#0b0d12] transition hover:brightness-110"
                  style={{ background: accent }}
                >
                  {started ? "Continue" : "Start the module"} →
                </Link>
              )}
            </div>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {!module.unlocked ? (
          <div className="flex items-start gap-4 rounded-2xl border border-dashed border-[#2a3040] bg-[#141821]/60 p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2a3040] bg-[#141821] text-[#898781]">
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4.5" y="9" width="11" height="8" rx="2" />
                <path d="M7 9V6.5a3 3 0 0 1 6 0V9" />
              </svg>
            </span>
            <div>
              <div className="font-semibold text-[#e6e8ec]">This module is locked</div>
              <p className="mt-1 text-sm text-[#898781]">
                Complete its prerequisite module(s) first.{" "}
                <Link to={`/courses/${module.courseSlug}`} className="text-[#a99dff] hover:underline">
                  See the course outline
                </Link>
              </p>
            </div>
          </div>
        ) : (
          <section>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Lessons</h2>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {module.lessons.map((lesson, i) => {
                const strategy = strategyBySlug.get(lesson.slug);
                return (
                  <LessonListItem
                    key={lesson.slug}
                    lesson={lesson}
                    number={i + 1}
                    accent={accent}
                    marker={nextLesson?.slug === lesson.slug && !module.completed ? (started ? "Up next" : "Start here") : undefined}
                    thumbnail={strategy ? <PayoffSparkline strategy={strategy} /> : undefined}
                  />
                );
              })}
            </div>
          </section>
        )}

        {module.unlocked && exercises.length > 0 && (
          <section className="mt-10">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-8 w-1 shrink-0 rounded-full" style={{ background: accent, boxShadow: `0 0 14px ${accent}80` }} />
              <div>
                <h2 className="text-xl font-bold text-[#e6e8ec]">Construction exercises</h2>
                <p className="mt-0.5 text-sm text-[#9aa3b2]">
                  No pre-picked strategy: you're given a goal, then pick and configure the strategy yourself.
                </p>
              </div>
            </div>
            <ol className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
              {exercises.map((ex, i) => (
                <li key={ex.slug}>
                  <Link
                    to={`/construction/${ex.slug}`}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-[#2a3040] bg-[#141821] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[#171c26]"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-sm font-bold"
                      style={{ background: `${accent}22`, borderColor: `${accent}55`, color: accent }}
                    >
                      {i + 1}
                    </span>
                    <span className="min-w-0 flex-1 font-semibold leading-snug text-[#e6e8ec]">{ex.title}</span>
                    <span
                      className="shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium"
                      style={{ borderColor: `${accent}55`, background: `${accent}14`, color: accent }}
                    >
                      Build it
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        )}

        {(prevModule || nextModule) && (
          <div className="mt-12 flex flex-col gap-3 border-t border-[#2a3040] pt-8 sm:flex-row">
            {prevModule ? (
              <ModuleNavCard to={`/module/${prevModule.slug}`} direction="prev" title={prevModule.title} accent={accent} />
            ) : (
              <div className="hidden flex-1 sm:block" />
            )}
            {nextModule ? (
              <ModuleNavCard to={`/module/${nextModule.slug}`} direction="next" title={nextModule.title} accent={accent} />
            ) : (
              <div className="hidden flex-1 sm:block" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
