import { Link } from "react-router-dom";
import type { ModuleLessonSummary } from "../types/curriculum";

/** Shared between a course page's module sections and the standalone module page. */
export function LessonListItem({ lesson }: { lesson: ModuleLessonSummary }) {
  return (
    <Link
      to={`/lesson/${lesson.slug}`}
      className="flex items-center gap-3 rounded-lg border border-[#2a3040] bg-[#141821] card-glow p-3 transition hover:border-[#4f8cff]/50 hover:bg-[#171c26]"
    >
      <div
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
          lesson.completed ? "bg-emerald-500/20 text-emerald-400" : "bg-[#1b2029] text-[#898781]"
        }`}
      >
        {lesson.completed ? "✓" : ""}
      </div>
      <div className="min-w-0 flex-1 truncate text-sm text-[#e6e8ec]">{lesson.title}</div>
      {lesson.isPaperStrategy && (
        <span className="shrink-0 rounded-full border border-[#2a3040] px-2 py-0.5 text-xs text-[#898781]">
          Strategy
        </span>
      )}
    </Link>
  );
}
