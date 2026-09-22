import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCourses, fetchModules } from "../api";
import type { Course } from "../types/course";
import type { ModulesResponse } from "../types/curriculum";
import { Footer } from "../components/Footer";

export function CoursesPage() {
  const [courses, setCourses] = useState<Course[] | null>(null);
  const [optionsProgress, setOptionsProgress] = useState<ModulesResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchCourses().then(setCourses).catch((e) => setError(e.message));
    fetchModules().then(setOptionsProgress).catch(() => setOptionsProgress(null));
  }, []);

  const filteredCourses = useMemo(() => {
    if (!courses) return [];
    const q = query.trim().toLowerCase();
    if (q === "") return courses;
    return courses.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.strategyTitles?.some((t) => t.toLowerCase().includes(q)),
    );
  }, [courses, query]);

  return (
    <div>
      <div className="mx-auto max-w-5xl px-6 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#e6f2ec]">All courses</h1>
          <p className="mt-2 max-w-2xl text-[#8fada0]">
            One course per asset class — 18 in total. Options is live today; the rest are on the
            roadmap.
          </p>
        </header>

        {error && <p className="text-red-400">{error}</p>}
        {!courses && !error && <p className="text-[#6f8a7c]">Loading courses…</p>}

        {courses && (
          <>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses or strategies…"
              className="input mb-6 w-full sm:max-w-xs"
            />

            {filteredCourses.length === 0 ? (
              <p className="text-[#6f8a7c]">No courses match your search.</p>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {filteredCourses.map((c) => (
                  <CourseCard
                    key={c.slug}
                    course={c}
                    progress={c.slug === "options" ? optionsProgress : null}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

function CourseCard({ course, progress }: { course: Course; progress: ModulesResponse | null }) {
  const pct = progress ? Math.round((progress.totalCompleted / progress.totalLessons) * 100) : 0;

  return (
    <Link
      to={`/courses/${course.slug}`}
      className={`flex flex-col rounded-xl border p-5 transition ${
        course.status === "available"
          ? "border-[#1e3d2f] bg-[#0e2118] hover:border-[#34c98a]/50 hover:bg-[#12281d]"
          : "border-[#1e3d2f]/60 bg-[#0a1f16] hover:border-[#1e3d2f]"
      }`}
    >
      <div className="mb-1 flex items-center justify-between gap-2">
        <h3 className="font-semibold text-[#e6f2ec]">{course.title}</h3>
        {course.status === "available" ? (
          <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
            Available
          </span>
        ) : (
          <span className="shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
            Coming soon
          </span>
        )}
      </div>
      <p className="mt-1 text-sm leading-relaxed text-[#8fada0]">{course.description}</p>
      <div className="mt-auto pt-3">
        <div className="text-xs text-[#6f8a7c]">{course.strategyCount} strategies</div>
        {progress && (
          <div className="mt-3 flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#142b20]">
              <div className="h-full rounded-full bg-[#34c98a]" style={{ width: `${pct}%` }} />
            </div>
            <span className="text-xs text-[#6f8a7c]">
              {progress.totalCompleted}/{progress.totalLessons}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
