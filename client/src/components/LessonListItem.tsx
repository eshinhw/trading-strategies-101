import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { ModuleLessonSummary } from "../types/curriculum";

/** Shared between a course page's module sections and the standalone module page. */
export function LessonListItem({
  lesson,
  number,
  accent = "#7c6cff",
}: {
  lesson: ModuleLessonSummary;
  number?: number;
  accent?: string;
}) {
  return (
    <Link
      to={`/lesson/${lesson.slug}`}
      className="group flex items-center gap-3 rounded-xl border border-[#2a3040] bg-[#141821] p-3 transition duration-200 hover:-translate-y-px hover:border-[var(--item-accent)] hover:bg-[#171c26]"
      style={{ "--item-accent": `${accent}99` } as CSSProperties}
    >
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
          lesson.completed ? "bg-emerald-500/20 text-emerald-400" : "bg-[#1b2029] text-[#898781]"
        }`}
      >
        {lesson.completed ? "✓" : (number ?? "")}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium text-[#e6e8ec]">{lesson.title}</div>
        {lesson.summary && <div className="truncate text-xs text-[#898781]">{lesson.summary}</div>}
      </div>
      {lesson.isPaperStrategy && (
        <span
          className="shrink-0 rounded-full border px-2 py-0.5 text-xs"
          style={{ borderColor: `${accent}55`, background: `${accent}14`, color: accent }}
        >
          Strategy
        </span>
      )}
      {lesson.bestScore !== null && lesson.completed && (
        <span className="shrink-0 text-xs text-[#898781]">{Math.round(lesson.bestScore * 100)}%</span>
      )}
    </Link>
  );
}
