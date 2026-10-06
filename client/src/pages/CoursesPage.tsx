import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { fetchCourses, fetchModules } from "../api";
import type { Course } from "../types/course";
import type { ModulesResponse } from "../types/curriculum";
import { CourseCard } from "../components/CourseCard";
import { COURSE_FAMILIES, CourseIcon, courseAccent } from "../lib/courseVisuals";

function FilterChip({
  label,
  count,
  accent,
  active,
  onClick,
}: {
  label: string;
  count?: number;
  accent?: string;
  active: boolean;
  onClick: () => void;
}) {
  const color = accent ?? "#7c6cff";
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className="flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition hover:text-[#e6e8ec]"
      style={{
        borderColor: active ? `${color}80` : "#2a3040",
        background: active ? `${color}22` : "transparent",
        color: active ? "#e6e8ec" : "#9aa3b2",
      }}
    >
      {accent && <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />}
      {label}
      {count !== undefined && <span className="text-[#898781]">{count}</span>}
    </button>
  );
}

// A compact "pick up where you left off" tile for a course the learner has started but not finished.
function ContinueTile({ course, progress }: { course: Course; progress: ModulesResponse }) {
  const accent = courseAccent(course.slug);
  const pct = Math.round((progress.totalCompleted / progress.totalLessons) * 100);
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group flex items-center gap-3 rounded-xl border border-[#2a3040] bg-[#141821] p-3.5 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]"
      style={{ "--accent": accent } as CSSProperties}
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
        style={{ background: `${accent}22`, borderColor: `${accent}55`, color: accent }}
      >
        <CourseIcon slug={course.slug} className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-baseline justify-between gap-2">
          <span className="truncate text-sm font-semibold text-[#e6e8ec]">{course.title}</span>
          <span className="shrink-0 text-xs text-[#898781]">{pct}%</span>
        </span>
        <span className="mt-1.5 block h-1.5 overflow-hidden rounded-full bg-[#1b2029]">
          <span className="block h-full rounded-full" style={{ width: `${pct}%`, background: accent }} />
        </span>
        <span className="mt-1 block text-xs text-[#898781]">
          {progress.totalCompleted} of {progress.totalLessons} lessons
        </span>
      </span>
      <span className="text-sm opacity-0 transition group-hover:opacity-100" style={{ color: accent }} aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export function CoursesPage() {
  const [courses, setCourses] = useState<Course[] | null>(null);
  const [progressByCourse, setProgressByCourse] = useState<Record<string, ModulesResponse>>({});
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState<string>("all");

  useEffect(() => {
    fetchCourses()
      .then((cs) => {
        setCourses(cs);
        for (const c of cs.filter((c) => c.status === "available")) {
          fetchModules(c.slug)
            .then((data) => setProgressByCourse((prev) => ({ ...prev, [c.slug]: data })))
            .catch(() => {});
        }
      })
      .catch((e) => setError(e.message));
  }, []);

  const filteredCourses = useMemo(() => {
    if (!courses) return [];
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      const inFamily = family === "all" || COURSE_FAMILIES.find((f) => f.name === family)?.slugs.includes(c.slug);
      const matches =
        q === "" ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.strategyTitles?.some((t) => t.toLowerCase().includes(q));
      return inFamily && matches;
    });
  }, [courses, query, family]);

  const familyCounts = useMemo(
    () => new Map(COURSE_FAMILIES.map((f) => [f.name, (courses ?? []).filter((c) => f.slugs.includes(c.slug)).length])),
    [courses],
  );

  // Courses the learner has started but not finished, most complete first.
  const inProgress = useMemo(
    () =>
      (courses ?? [])
        .map((c) => ({ course: c, progress: progressByCourse[c.slug] }))
        .filter(({ progress }) => progress && progress.totalCompleted > 0 && progress.totalCompleted < progress.totalLessons)
        .sort((a, b) => b.progress.totalCompleted / b.progress.totalLessons - a.progress.totalCompleted / a.progress.totalLessons)
        .slice(0, 3),
    [courses, progressByCourse],
  );

  const totalLessons = (courses ?? []).reduce((n, c) => n + (c.lessonCount ?? 0), 0);
  const totalStrategies = (courses ?? []).reduce((n, c) => n + c.strategyCount, 0);
  const filtersActive = query.trim() !== "" || family !== "all";

  return (
    <div>
      <header className="relative overflow-hidden border-b border-[#2a3040]">
        <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[360px] w-[820px] -translate-x-1/2 rounded-full bg-[#7c6cff] opacity-10 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(rgba(154,163,178,0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7c6cff]">Curriculum</div>
            <h1 className="mt-2 text-4xl font-bold text-[#e6e8ec]">All Courses</h1>
            <p className="mt-3 leading-relaxed text-[#9aa3b2]">
              One course per asset class. Each starts with what the asset is and why it exists, moves on to how it's priced
              and used, and ends with the strategies built on it.
            </p>
          </div>
          {courses && (
            <div className="flex gap-6 sm:pb-1">
              <div className="sm:text-right">
                <div className="text-2xl font-bold text-[#e6e8ec]">{courses.length}</div>
                <div className="text-xs text-[#898781]">courses</div>
              </div>
              <div className="sm:text-right">
                <div className="text-2xl font-bold text-[#e6e8ec]">{totalLessons}</div>
                <div className="text-xs text-[#898781]">lessons</div>
              </div>
              <div className="sm:text-right">
                <div className="text-2xl font-bold text-[#e6e8ec]">{totalStrategies}</div>
                <div className="text-xs text-[#898781]">strategies</div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {error && <p className="text-red-400">{error}</p>}
        {!courses && !error && <p className="text-[#898781]">Loading courses…</p>}

        {courses && (
          <>
            {inProgress.length > 0 && (
              <section className="mb-8">
                <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Continue learning</h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {inProgress.map(({ course, progress }) => (
                    <ContinueTile key={course.slug} course={course} progress={progress} />
                  ))}
                </div>
              </section>
            )}

            <div className="mb-8 rounded-2xl border border-[#2a3040] bg-[#141821]/80 p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="relative w-full lg:max-w-sm">
                  <svg
                    viewBox="0 0 20 20"
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#898781]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <circle cx="9" cy="9" r="5.5" />
                    <path d="m13.5 13.5 3.5 3.5" />
                  </svg>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search courses or strategies…"
                    aria-label="Search courses or strategies"
                    className="input w-full !pl-9"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <FilterChip label="All" count={courses.length} active={family === "all"} onClick={() => setFamily("all")} />
                  {COURSE_FAMILIES.map((f) => (
                    <FilterChip
                      key={f.name}
                      label={f.name}
                      count={familyCounts.get(f.name)}
                      accent={f.accent}
                      active={family === f.name}
                      onClick={() => setFamily(family === f.name ? "all" : f.name)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {filteredCourses.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#2a3040] p-10 text-center">
                <p className="text-[#9aa3b2]">No courses match your search.</p>
                {filtersActive && (
                  <button
                    onClick={() => {
                      setQuery("");
                      setFamily("all");
                    }}
                    className="mt-3 text-sm text-[#a99dff] hover:underline"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-12">
                {COURSE_FAMILIES.map((f) => {
                  const members = filteredCourses.filter((c) => f.slugs.includes(c.slug));
                  if (members.length === 0) return null;
                  return (
                    <section key={f.name}>
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1.5 h-8 w-1 shrink-0 rounded-full"
                          style={{ background: f.accent, boxShadow: `0 0 14px ${f.accent}80` }}
                        />
                        <div>
                          <h2 className="flex items-center gap-2.5 text-xl font-bold text-[#e6e8ec]">
                            {f.name}
                            <span
                              className="rounded-full border px-2 py-0.5 text-xs font-medium"
                              style={{ borderColor: `${f.accent}50`, background: `${f.accent}18`, color: f.accent }}
                            >
                              {members.length}
                            </span>
                          </h2>
                          {f.note && <p className="mt-0.5 text-sm text-[#9aa3b2]">{f.note}</p>}
                        </div>
                      </div>
                      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((c) => (
                          <CourseCard key={c.slug} course={c} progress={progressByCourse[c.slug] ?? null} />
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
