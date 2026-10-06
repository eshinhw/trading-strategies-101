import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Link, useSearchParams } from "react-router-dom";
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

type StatusFilter = "all" | "in-progress" | "not-started" | "completed";
const STATUS_FILTERS: { id: StatusFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "in-progress", label: "In progress" },
  { id: "not-started", label: "Not started" },
  { id: "completed", label: "Completed" },
];

type SortId = "recommended" | "az" | "lessons" | "strategies";
const SORTS: { id: SortId; label: string }[] = [
  { id: "recommended", label: "By asset class" },
  { id: "az", label: "A to Z" },
  { id: "lessons", label: "Most lessons" },
  { id: "strategies", label: "Most strategies" },
];

function statusOf(progress: ModulesResponse | undefined): Exclude<StatusFilter, "all"> {
  if (!progress || progress.totalCompleted === 0) return "not-started";
  return progress.totalCompleted >= progress.totalLessons ? "completed" : "in-progress";
}

// Compact one-row version of a course for the List layout.
function CourseRow({ course, progress }: { course: Course; progress: ModulesResponse | null }) {
  const accent = courseAccent(course.slug);
  const pct = progress && progress.totalLessons > 0 ? (progress.totalCompleted / progress.totalLessons) * 100 : 0;
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group flex items-center gap-4 rounded-xl border border-[#2a3040] bg-[#141821] px-4 py-3 transition duration-200 hover:border-[var(--accent)]"
      style={{ "--accent": accent } as CSSProperties}
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
        style={{ background: `${accent}22`, borderColor: `${accent}55`, color: accent }}
      >
        <CourseIcon slug={course.slug} className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-[#e6e8ec]">{course.title}</span>
        <span className="block truncate text-sm text-[#9aa3b2]">{course.description}</span>
      </span>
      <span className="hidden shrink-0 items-center gap-3 text-xs text-[#898781] md:flex">
        {course.lessonCount ? <span>{course.lessonCount} lessons</span> : null}
        {course.strategyCount > 0 ? <span>{course.strategyCount} strategies</span> : null}
      </span>
      {progress && progress.totalCompleted > 0 && (
        <span className="hidden w-20 shrink-0 sm:block" aria-label={`${Math.round(pct)}% complete`}>
          <span className="block h-1.5 overflow-hidden rounded-full bg-[#1b2029]">
            <span className="block h-full rounded-full" style={{ width: `${pct}%`, background: accent }} />
          </span>
        </span>
      )}
      <span aria-hidden="true" className="shrink-0 text-[#a99dff] transition group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}

export function CoursesPage() {
  const [courses, setCourses] = useState<Course[] | null>(null);
  const [progressByCourse, setProgressByCourse] = useState<Record<string, ModulesResponse>>({});
  const [error, setError] = useState<string | null>(null);
  // Filters, sort and layout live in the URL (?q=&family=&status=&sort=&view=) so a view can be shared and
  // survives a refresh or the back button.
  const [searchParams, setSearchParams] = useSearchParams();
  const setParams = (updates: Record<string, string | null>) =>
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        for (const [key, value] of Object.entries(updates)) {
          if (value === null || value === "") next.delete(key);
          else next.set(key, value);
        }
        return next;
      },
      { replace: true },
    );
  const query = searchParams.get("q") ?? "";
  const familyParam = searchParams.get("family");
  const family = COURSE_FAMILIES.some((f) => f.name === familyParam) ? (familyParam as string) : "all";
  const statusParam = searchParams.get("status");
  const status: StatusFilter = STATUS_FILTERS.some((x) => x.id === statusParam) ? (statusParam as StatusFilter) : "all";
  const sortParam = searchParams.get("sort");
  const sortId: SortId = SORTS.some((x) => x.id === sortParam) ? (sortParam as SortId) : "recommended";
  const view: "cards" | "list" = searchParams.get("view") === "list" ? "list" : "cards";
  const setQuery = (v: string) => setParams({ q: v });
  const setFamily = (v: string) => setParams({ family: v === "all" ? null : v });
  const setStatus = (v: StatusFilter) => setParams({ status: v === "all" ? null : v });
  const setSortId = (v: SortId) => setParams({ sort: v === "recommended" ? null : v });
  const setView = (v: "cards" | "list") => setParams({ view: v === "cards" ? null : v });

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
    const matching = courses.filter((c) => {
      const inFamily = family === "all" || COURSE_FAMILIES.find((f) => f.name === family)?.slugs.includes(c.slug);
      const matches =
        q === "" ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.strategyTitles?.some((t) => t.toLowerCase().includes(q));
      const matchesStatus = status === "all" || statusOf(progressByCourse[c.slug]) === status;
      return inFamily && matches && matchesStatus;
    });
    switch (sortId) {
      case "az":
        return matching.slice().sort((a, b) => a.title.localeCompare(b.title));
      case "lessons":
        return matching.slice().sort((a, b) => (b.lessonCount ?? 0) - (a.lessonCount ?? 0));
      case "strategies":
        return matching.slice().sort((a, b) => b.strategyCount - a.strategyCount);
      default:
        return matching;
    }
  }, [courses, query, family, status, sortId, progressByCourse]);

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
  const filtersActive = query.trim() !== "" || family !== "all" || status !== "all";
  const clearFilters = () => setParams({ q: null, family: null, status: null });
  // Status filters only mean something once the learner has progress to filter on.
  const hasProgress = Object.values(progressByCourse).some((p) => p.totalCompleted > 0);

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
              {hasProgress && (
                <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-[#2a3040] pt-3">
                  <span className="mr-1 text-xs text-[#898781]">Status</span>
                  {STATUS_FILTERS.map((x) => (
                    <FilterChip key={x.id} label={x.label} active={status === x.id} onClick={() => setStatus(x.id)} />
                  ))}
                </div>
              )}
            </div>

            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-[#898781]">
                Showing <span className="font-medium text-[#e6e8ec]">{filteredCourses.length}</span> of {courses.length} courses
                {filtersActive && (
                  <button onClick={clearFilters} className="ml-3 text-[#a99dff] hover:underline">
                    Clear filters
                  </button>
                )}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <label className="flex items-center gap-2 text-xs text-[#898781]">
                  Sort
                  <select
                    value={sortId}
                    onChange={(e) => setSortId(e.target.value as SortId)}
                    className="rounded-lg border border-[#2a3040] bg-[#141821] px-2.5 py-1.5 text-xs text-[#e6e8ec] focus:border-[#7c6cff] focus:outline-none [&>option]:bg-[#141821]"
                  >
                    {SORTS.map((x) => (
                      <option key={x.id} value={x.id}>
                        {x.label}
                      </option>
                    ))}
                  </select>
                </label>
                <div role="radiogroup" aria-label="Layout" className="flex rounded-lg border border-[#2a3040] bg-[#141821] p-0.5">
                  {(
                    [
                      ["cards", "Cards"],
                      ["list", "List"],
                    ] as const
                  ).map(([key, label]) => (
                    <button
                      key={key}
                      role="radio"
                      aria-checked={view === key}
                      onClick={() => setView(key)}
                      className={`rounded-md px-3 py-1 text-xs font-medium transition ${
                        view === key ? "bg-[#7c6cff]/20 text-[#e6e8ec]" : "text-[#898781] hover:text-[#e6e8ec]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {filteredCourses.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#2a3040] p-10 text-center">
                <p className="text-[#9aa3b2]">No courses match your search.</p>
                {filtersActive && (
                  <button onClick={clearFilters} className="mt-3 text-sm text-[#a99dff] hover:underline">
                    Clear filters
                  </button>
                )}
              </div>
            ) : sortId !== "recommended" ? (
              // A sort order cuts across asset classes, so show one flat list instead of grouped sections.
              view === "list" ? (
                <div className="flex flex-col gap-2">
                  {filteredCourses.map((c) => (
                    <CourseRow key={c.slug} course={c} progress={progressByCourse[c.slug] ?? null} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredCourses.map((c) => (
                    <CourseCard key={c.slug} course={c} progress={progressByCourse[c.slug] ?? null} />
                  ))}
                </div>
              )
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
                      {view === "list" ? (
                        <div className="mt-5 flex flex-col gap-2">
                          {members.map((c) => (
                            <CourseRow key={c.slug} course={c} progress={progressByCourse[c.slug] ?? null} />
                          ))}
                        </div>
                      ) : (
                        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {members.map((c) => (
                            <CourseCard key={c.slug} course={c} progress={progressByCourse[c.slug] ?? null} />
                          ))}
                        </div>
                      )}
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
