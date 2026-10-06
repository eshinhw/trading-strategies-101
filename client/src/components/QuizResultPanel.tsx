import { Link } from "react-router-dom";
import type { GradeResponse } from "../types/curriculum";

export interface QuizNext {
  to: string;
  label: string;
}

export function QuizResultPanel({
  result,
  onRetry,
  next,
}: {
  result: GradeResponse;
  onRetry: () => void;
  next?: QuizNext;
}) {
  const pct = Math.round(result.score * 100);
  const color = result.passed ? "#34d399" : "#fbbf24";
  const r = 34;
  const c = 2 * Math.PI * r;

  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border p-5 sm:flex-row sm:items-center ${
        result.passed ? "border-emerald-500/30 bg-emerald-500/10" : "border-amber-500/30 bg-amber-500/10"
      }`}
    >
      <div className="relative h-[84px] w-[84px] shrink-0">
        <svg viewBox="0 0 84 84" className="-rotate-90" aria-hidden="true">
          <circle cx="42" cy="42" r={r} fill="none" stroke="#ffffff1a" strokeWidth="7" />
          <circle
            cx="42"
            cy="42"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - result.score)}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-[#e6e8ec]">{pct}%</div>
      </div>
      <div className="min-w-0 flex-1">
        <div className={`text-lg font-semibold ${result.passed ? "text-emerald-300" : "text-amber-300"}`}>
          {result.passed ? "Nice work — lesson passed." : "Not quite there yet."}
        </div>
        <p className="mt-1 text-sm text-[#9aa3b2]">
          {result.passed
            ? result.lessonNewlyCompleted
              ? "Lesson marked complete."
              : "Lesson already completed — this attempt updated your best score."
            : "You saw the correct answer on each question as you went — try again to improve your score (need 70%+ to pass)."}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-4">
          {result.passed && next && (
            <Link
              to={next.to}
              className="rounded-lg bg-[#7c6cff] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 hover:bg-[#6552f0]"
            >
              {next.label}
            </Link>
          )}
          <button
            onClick={onRetry}
            autoFocus={!(result.passed && next)}
            onKeyDown={(e) => {
              // most browsers already activate a focused <button> on Enter, but
              // that native behavior isn't reliable everywhere — handle it
              // explicitly so the shortcut always works.
              if (e.key === "Enter") {
                e.preventDefault();
                onRetry();
              }
            }}
            className="text-sm text-[#a99dff] hover:underline"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
