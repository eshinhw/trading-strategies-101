import type { CSSProperties, ReactNode } from "react";
import { CourseIcon, courseAccent } from "../lib/courseVisuals";
import { Link } from "react-router-dom";
import type { Course } from "../types/course";
import type { ModulesResponse } from "../types/curriculum";

// Course card used on the landing page and the Courses page: a per-course icon and accent colour,
// lesson/module counts, a hover lift, and — on the Courses page — the learner's progress.

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[#2a3040] bg-[#0e1117]/70 px-2.5 py-0.5 text-xs text-[#9aa3b2]">
      {children}
    </span>
  );
}

export function CourseCard({ course, progress }: { course: Course; progress?: ModulesResponse | null }) {
  const accent = courseAccent(course.slug);
  const available = course.status === "available";
  const pct = progress && progress.totalLessons > 0 ? Math.round((progress.totalCompleted / progress.totalLessons) * 100) : 0;

  return (
    <Link
      to={`/courses/${course.slug}`}
      style={{ "--accent": accent } as CSSProperties}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-[#181c28] to-[#12151d] p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] ${
        available ? "border-[#2a3040]" : "border-[#2a3040]/60 opacity-80"
      }`}
    >
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: accent, opacity: 0.14 }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: 0.6 }} />

      <div className="relative flex items-start justify-between gap-3">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105"
          style={{ background: `${accent}22`, borderColor: `${accent}55`, color: accent }}
        >
          <CourseIcon slug={course.slug} />
        </div>
        {!available && (
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
            Coming soon
          </span>
        )}
      </div>

      <h3 className="relative mt-4 text-lg font-semibold text-[#e6e8ec]">{course.title}</h3>
      <p className="relative mt-1.5 line-clamp-5 text-sm leading-relaxed text-[#9aa3b2]">{course.description}</p>

      {progress && (
        <div className="relative mt-4 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#1b2029]">
            <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: accent }} />
          </div>
          <span className="text-xs text-[#898781]">
            {progress.totalCompleted}/{progress.totalLessons}
          </span>
        </div>
      )}

      <div className="relative mt-auto flex items-center justify-between gap-3 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {!progress && course.lessonCount ? <Chip>{course.lessonCount} lessons</Chip> : null}
          {course.moduleCount ? <Chip>{course.moduleCount} modules</Chip> : null}
          {course.strategyCount > 0 ? <Chip>{course.strategyCount} strategies</Chip> : null}
        </div>
        <span
          className="shrink-0 translate-x-[-4px] text-sm opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          style={{ color: accent }}
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </Link>
  );
}
