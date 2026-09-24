import { useEffect, useMemo, useState } from "react";
import { fetchCourses, fetchModules } from "../api";
import type { Course } from "../types/course";
import type { ModulesResponse } from "../types/curriculum";
import { CourseCard } from "../components/CourseCard";

export function CoursesPage() {
  const [courses, setCourses] = useState<Course[] | null>(null);
  const [progressByCourse, setProgressByCourse] = useState<Record<string, ModulesResponse>>({});
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

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
    if (q === "") return courses;
    return courses.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.strategyTitles?.some((t) => t.toLowerCase().includes(q)),
    );
  }, [courses, query]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-[#e6e8ec]">All Courses</h1>
      </header>

      {error && <p className="text-red-400">{error}</p>}
      {!courses && !error && <p className="text-[#898781]">Loading courses…</p>}

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
            <p className="text-[#898781]">No courses match your search.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((c) => (
                <CourseCard key={c.slug} course={c} progress={progressByCourse[c.slug] ?? null} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
