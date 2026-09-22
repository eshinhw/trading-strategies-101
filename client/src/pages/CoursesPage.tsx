import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCourses, fetchModules } from "../api";
import type { Course } from "../types/course";
import type { ModulesResponse } from "../types/curriculum";
import { Footer } from "../components/Footer";

export function CoursesPage() {
  const [courses, setCourses] = useState<Course[] | null>(null);
  const [optionsProgress, setOptionsProgress] = useState<ModulesResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCourses().then(setCourses).catch((e) => setError(e.message));
    fetchModules().then(setOptionsProgress).catch(() => setOptionsProgress(null));
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-5xl px-6 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#e6e8ec]">All courses</h1>
          <p className="mt-2 max-w-2xl text-[#9aa3b2]">
            One course per asset class — 18 in total. Options is live today; the rest are on the
            roadmap.
          </p>
        </header>

        {error && <p className="text-red-400">{error}</p>}
        {!courses && !error && <p className="text-[#898781]">Loading courses…</p>}

        {courses && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {courses.map((c) => (
              <CourseCard
                key={c.slug}
                course={c}
                progress={c.slug === "options" ? optionsProgress : null}
              />
            ))}
          </div>
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
          ? "border-[#2a3040] bg-[#141821] hover:border-[#4f8cff]/50 hover:bg-[#171c26]"
          : "border-[#2a3040]/60 bg-[#101319] hover:border-[#2a3040]"
      }`}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-[#2a3040] px-2 py-0.5 text-xs text-[#898781]">
          §{course.section}
        </span>
        {course.status === "available" ? (
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
            Available
          </span>
        ) : (
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
            Coming soon
          </span>
        )}
      </div>
      <h3 className="font-semibold text-[#e6e8ec]">{course.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-[#9aa3b2]">{course.description}</p>
      <div className="mt-3 text-xs text-[#898781]">{course.strategyCount} strategies</div>
      {progress && (
        <div className="mt-3 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#1b2029]">
            <div className="h-full rounded-full bg-[#4f8cff]" style={{ width: `${pct}%` }} />
          </div>
          <span className="text-xs text-[#898781]">
            {progress.totalCompleted}/{progress.totalLessons}
          </span>
        </div>
      )}
    </Link>
  );
}
