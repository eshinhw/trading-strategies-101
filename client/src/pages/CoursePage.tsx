import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCourse, fetchModules, fetchExamStatus } from "../api";
import type { Course } from "../types/course";
import type { ModulesResponse } from "../types/curriculum";
import type { ExamStatus } from "../types/exam";
import { LessonListItem } from "../components/LessonListItem";
import { COURSE_FAMILIES, CourseIcon, courseAccent } from "../lib/courseVisuals";

type ModuleSummary = ModulesResponse["modules"][number];

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[#2a3040] bg-[#0e1117]/70 px-2.5 py-0.5 text-xs text-[#9aa3b2]">
      {children}
    </span>
  );
}

function LockIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4.5" y="9" width="11" height="8" rx="2" />
      <path d="M7 9V6.5a3 3 0 0 1 6 0V9" />
    </svg>
  );
}

function ProgressRing({ pct, accent, size = 88 }: { pct: number; accent: string; size?: number }) {
  const r = (size - 10) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#1b2029" strokeWidth="7" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={accent}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct / 100)}
          style={{ transition: "stroke-dashoffset 0.6s ease", filter: `drop-shadow(0 0 5px ${accent}80)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold text-[#e6e8ec]">{pct}%</span>
      </div>
    </div>
  );
}

export function CoursePage() {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [data, setData] = useState<ModulesResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [modulesError, setModulesError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setCourse(null);
    setData(null);
    setError(null);
    setModulesError(null);
    fetchCourse(slug)
      .then((c) => {
        setCourse(c);
        if (c.status === "available") {
          fetchModules(slug)
            .then(setData)
            .catch((e) => setModulesError(e.message));
        }
      })
      .catch((e) => setError(e.message));
  }, [slug]);

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <p className="text-red-400">{error}</p>
        <Link to="/courses" className="mt-4 inline-block text-[#7c6cff] hover:underline">
          ← All Courses
        </Link>
      </div>
    );
  }

  if (!course) {
    return <div className="mx-auto max-w-7xl px-6 py-16 text-center text-[#898781]">Loading…</div>;
  }

  const accent = courseAccent(course.slug);
  const family = COURSE_FAMILIES.find((f) => f.slugs.includes(course.slug));

  return (
    <div style={{ "--accent": accent } as CSSProperties}>
      <header className="relative overflow-hidden border-b border-[#2a3040]">
        <div
          className="pointer-events-none absolute left-1/2 top-[-220px] h-[380px] w-[860px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: accent, opacity: 0.14 }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(rgba(154,163,178,0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#898781]">
            <Link to="/courses" className="hover:text-[#e6e8ec]">
              Courses
            </Link>
            <span aria-hidden="true">/</span>
            {family && <span style={{ color: family.accent }}>{family.name}</span>}
            {family && <span aria-hidden="true">/</span>}
            <span className="text-[#9aa3b2]">{course.title}</span>
          </nav>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border"
              style={{ background: `${accent}22`, borderColor: `${accent}66`, color: accent, boxShadow: `0 0 30px ${accent}33` }}
            >
              <CourseIcon slug={course.slug} className="h-8 w-8" />
            </div>
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-4xl font-bold text-[#e6e8ec]">{course.title}</h1>
                {course.status === "coming-soon" && (
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                    Coming soon
                  </span>
                )}
              </div>
              <p className="mt-3 leading-relaxed text-[#9aa3b2]">{course.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {data ? <Chip>{data.modules.length} modules</Chip> : null}
                {data ? <Chip>{data.totalLessons} lessons</Chip> : null}
                {course.strategyCount > 0 ? <Chip>{course.strategyCount} strategies</Chip> : null}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {course.status === "available" ? (
          modulesError ? (
            <p className="text-red-400">{modulesError}</p>
          ) : !data ? (
            <p className="text-[#898781]">Loading modules…</p>
          ) : (
            <AvailableCourse course={course} data={data} accent={accent} />
          )
        ) : (
          <ComingSoonStrategies course={course} />
        )}
      </div>
    </div>
  );
}

function AvailableCourse({ course, data, accent }: { course: Course; data: ModulesResponse; accent: string }) {
  const modules = useMemo(() => data.modules.slice().sort((a, b) => a.order - b.order), [data]);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const pct = data.totalLessons > 0 ? Math.round((data.totalCompleted / data.totalLessons) * 100) : 0;
  const started = data.totalCompleted > 0;
  const finished = data.totalLessons > 0 && data.totalCompleted >= data.totalLessons;

  // The first lesson the learner hasn't completed, in module order — where "Start" / "Continue" goes.
  const nextLesson = useMemo(() => {
    for (const m of modules) {
      if (!m.unlocked) continue;
      const lesson = m.lessons.find((l) => !l.completed);
      if (lesson) return { lesson, module: m };
    }
    return null;
  }, [modules]);

  const allCollapsed = collapsed.size === modules.length;
  const toggle = (slug: string) =>
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });

  const jumpTo = (slug: string) => {
    setCollapsed((prev) => {
      if (!prev.has(slug)) return prev;
      const next = new Set(prev);
      next.delete(slug);
      return next;
    });
    document.getElementById(`module-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
      <main>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Curriculum</h2>
          <button
            onClick={() => setCollapsed(allCollapsed ? new Set() : new Set(modules.map((m) => m.slug)))}
            className="text-xs text-[#a99dff] hover:underline"
          >
            {allCollapsed ? "Expand all" : "Collapse all"}
          </button>
        </div>

        <div className="flex flex-col">
          {modules.map((m, i) => (
            <ModuleSection
              key={m.slug}
              module={m}
              index={i}
              isLast={false}
              accent={accent}
              allModules={modules}
              collapsed={collapsed.has(m.slug)}
              onToggle={() => toggle(m.slug)}
            />
          ))}
          <ExamSection slug={course.slug} accent={accent} />
        </div>
      </main>

      <aside className="order-first lg:sticky lg:top-24 lg:order-none lg:self-start">
        <div className="rounded-2xl border border-[#2a3040] bg-gradient-to-b from-[#181c28] to-[#12151d] p-5">
          <div className="flex items-center gap-4">
            <ProgressRing pct={pct} accent={accent} />
            <div>
              <div className="text-sm font-semibold text-[#e6e8ec]">
                {finished ? "Course complete" : started ? "In progress" : "Not started"}
              </div>
              <div className="mt-0.5 text-xs text-[#898781]">
                {data.totalCompleted} of {data.totalLessons} lessons
              </div>
            </div>
          </div>

          {nextLesson && (
            <Link
              to={`/lesson/${nextLesson.lesson.slug}`}
              className="mt-5 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-[#0b0d12] transition hover:brightness-110"
              style={{ background: accent }}
            >
              {started ? "Continue" : "Start the course"} →
            </Link>
          )}
          {nextLesson && (
            <p className="mt-2 text-center text-xs text-[#898781]">
              Next: <span className="text-[#9aa3b2]">{nextLesson.lesson.title}</span>
            </p>
          )}
          {!data.signedIn && (
            <p className="mt-4 border-t border-[#2a3040] pt-3 text-xs leading-relaxed text-[#898781]">
              <Link to="/login" className="text-[#a99dff] hover:underline">
                Sign in
              </Link>{" "}
              to save your progress and unlock the final quiz.
            </p>
          )}
        </div>

        <div className="mt-4 hidden rounded-2xl border border-[#2a3040] bg-[#141821]/80 p-4 lg:block">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Modules</h3>
          <ol className="flex max-h-[44vh] flex-col overflow-y-auto [scrollbar-color:#2a3040_transparent] [scrollbar-width:thin]">
            {modules.map((m, i) => (
              <li key={m.slug}>
                <button
                  onClick={() => jumpTo(m.slug)}
                  className="group flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-sm text-[#9aa3b2] transition hover:bg-white/5 hover:text-[#e6e8ec]"
                >
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold"
                    style={
                      m.completed
                        ? { background: "#34d39933", color: "#34d399" }
                        : { background: "#1b2029", color: "#898781" }
                    }
                  >
                    {m.completed ? "✓" : i + 1}
                  </span>
                  <span className="min-w-0 flex-1 truncate">{m.title}</span>
                  {!m.unlocked && <LockIcon className="h-3 w-3 shrink-0 text-[#898781]" />}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </aside>
    </div>
  );
}

function joinNaturally(items: string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function ModuleSection({
  module: m,
  index,
  isLast,
  accent,
  allModules,
  collapsed,
  onToggle,
}: {
  module: ModuleSummary;
  index: number;
  isLast: boolean;
  accent: string;
  allModules: ModuleSummary[];
  collapsed: boolean;
  onToggle: () => void;
}) {
  const prerequisiteTitles = m.prerequisiteModuleSlugs.map(
    (slug) => allModules.find((other) => other.slug === slug)?.title ?? slug,
  );
  const modulePct = m.totalLessons > 0 ? (m.completedLessons / m.totalLessons) * 100 : 0;

  return (
    <section id={`module-${m.slug}`} className="relative flex gap-4 scroll-mt-24 pb-8">
      {/* timeline rail */}
      <div className="flex flex-col items-center">
        <div
          className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold"
          style={
            m.completed
              ? { background: "#34d39922", borderColor: "#34d39966", color: "#34d399" }
              : m.unlocked
                ? { background: `${accent}22`, borderColor: `${accent}66`, color: accent }
                : { background: "#141821", borderColor: "#2a3040", color: "#898781" }
          }
        >
          {m.completed ? "✓" : m.unlocked ? index + 1 : <LockIcon />}
        </div>
        {!isLast && <div className="mt-1 w-px flex-1 bg-gradient-to-b from-[#2a3040] to-[#2a3040]/30" />}
      </div>

      <div className="min-w-0 flex-1">
        <button
          onClick={onToggle}
          aria-expanded={!collapsed}
          className="flex w-full items-start justify-between gap-3 text-left"
        >
          <div className="min-w-0">
            <h3 className={`text-lg font-semibold ${m.unlocked ? "text-[#e6e8ec]" : "text-[#898781]"}`}>{m.title}</h3>
            {m.description && <p className="mt-0.5 text-sm leading-relaxed text-[#898781]">{m.description}</p>}
          </div>
          <div className="flex shrink-0 items-center gap-3 pt-1">
            {m.unlocked && (
              <div className="flex items-center gap-2">
                <div className="hidden h-1.5 w-20 overflow-hidden rounded-full bg-[#1b2029] sm:block">
                  <div className="h-full rounded-full" style={{ width: `${modulePct}%`, background: m.completed ? "#34d399" : accent }} />
                </div>
                <span className="whitespace-nowrap text-xs text-[#898781]">
                  {m.completedLessons}/{m.totalLessons}
                </span>
              </div>
            )}
            <svg
              viewBox="0 0 20 20"
              className={`h-4 w-4 text-[#898781] transition-transform ${collapsed ? "-rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m5 8 5 5 5-5" />
            </svg>
          </div>
        </button>

        {!collapsed &&
          (!m.unlocked ? (
            <p className="mt-3 rounded-lg border border-dashed border-[#2a3040] px-4 py-3 text-sm text-[#898781]">
              {prerequisiteTitles.length > 0
                ? `Complete ${joinNaturally(prerequisiteTitles)} to unlock.`
                : "Complete the prerequisite module(s) above to unlock."}
            </p>
          ) : (
            <div className="mt-3 grid grid-cols-1 gap-2 xl:grid-cols-2">
              {m.lessons.map((lesson, i) => (
                <LessonListItem key={lesson.slug} lesson={lesson} number={i + 1} accent={accent} />
              ))}
            </div>
          ))}
      </div>
    </section>
  );
}

function ExamSection({ slug, accent }: { slug: string; accent: string }) {
  const [status, setStatus] = useState<ExamStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchExamStatus(slug)
      .then(setStatus)
      .catch((e) => setError(e.message));
  }, [slug]);

  if (error || !status) return null; // no exam for this course, or still loading — stay quiet either way

  const passed = status.progress?.passed ?? false;

  return (
    <section className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm"
          style={
            passed
              ? { background: "#34d39922", borderColor: "#34d39966", color: "#34d399" }
              : status.unlocked
                ? { background: `${accent}22`, borderColor: `${accent}66`, color: accent }
                : { background: "#141821", borderColor: "#2a3040", color: "#898781" }
          }
        >
          {passed ? "✓" : status.unlocked ? "★" : <LockIcon />}
        </div>
      </div>
      <div
        className={`min-w-0 flex-1 rounded-2xl border p-5 ${
          status.unlocked
            ? passed
              ? "card-glow border-emerald-500/30 bg-emerald-500/10"
              : "card-glow border-[#7c6cff]/30 bg-[#7c6cff]/10"
            : "border-[#2a3040]/60 bg-[#101319]"
        }`}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-lg font-semibold ${status.unlocked ? "text-[#e6e8ec]" : "text-[#898781]"}`}>Final Quiz</h3>
              {passed && (
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                  Completed
                </span>
              )}
              {!status.unlocked && (
                <span className="rounded-full border border-[#2a3040] px-2 py-0.5 text-xs text-[#898781]">Locked</span>
              )}
            </div>
            <p className="mt-1 text-sm text-[#9aa3b2]">
              {status.unlocked
                ? passed
                  ? `You've completed this course — best score ${Math.round((status.progress?.bestScore ?? 0) * 100)}%. Retake any time.`
                  : "A no-hints test across every module, answers revealed only at the end — the real capstone for this course."
                : "Complete every module above to unlock the final quiz."}
            </p>
          </div>
          {status.unlocked && (
            <Link
              to={`/courses/${slug}/exam`}
              className="shrink-0 rounded-lg bg-[#7c6cff] px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#6552f0]"
            >
              {passed ? "Retake quiz" : "Take the quiz"}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

function ComingSoonStrategies({ course }: { course: Course }) {
  return (
    <div className="rounded-2xl border border-[#2a3040] bg-[#141821] card-glow p-6">
      <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">What this course will cover</h3>
      <p className="mb-4 text-sm text-[#898781]">
        {course.strategyCount} strategies from §{course.section} of the curriculum — lessons for this course haven't
        been built yet.
      </p>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
        {course.strategyTitles?.map((title) => (
          <li key={title} className="flex items-start gap-2 text-sm text-[#e6e8ec]">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#7c6cff]" />
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}
