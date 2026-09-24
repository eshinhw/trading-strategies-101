import { Link } from "react-router-dom";
import type { Course } from "../types/course";
import type { ModulesResponse } from "../types/curriculum";

/**
 * Shared between CoursesPage's grid and the landing page's course preview —
 * `progress` is only fetched on CoursesPage (a signed-in learner's
 * completion), so it's optional and simply omitted on the landing page.
 */
export function CourseCard({ course, progress }: { course: Course; progress?: ModulesResponse | null }) {
  const pct = progress ? Math.round((progress.totalCompleted / progress.totalLessons) * 100) : 0;

  return (
    <Link
      to={`/courses/${course.slug}`}
      className={`flex flex-col rounded-xl border p-5 transition ${
        course.status === "available"
          ? "card-glow border-[#2a3040] bg-[#141821] hover:border-[#4f8cff]/50 hover:bg-[#171c26]"
          : "border-[#2a3040]/60 bg-[#101319] hover:border-[#2a3040]"
      }`}
    >
      <div className="mb-1 flex items-center justify-between gap-2">
        <h3 className="font-semibold text-[#e6e8ec]">{course.title}</h3>
        {course.status === "coming-soon" && (
          <span className="shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
            Coming soon
          </span>
        )}
      </div>
      <p className="mt-1 text-sm leading-relaxed text-[#9aa3b2]">{course.description}</p>
      <div className="mt-auto pt-3">
        <div className="text-xs text-[#898781]">{course.strategyCount} strategies</div>
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
      </div>
    </Link>
  );
}
