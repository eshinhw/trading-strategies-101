import type { GradeResponse } from "../types/curriculum";

export function QuizResultPanel({ result, onRetry }: { result: GradeResponse; onRetry: () => void }) {
  const pct = Math.round(result.score * 100);
  return (
    <div
      className={`mt-5 rounded-lg border px-4 py-3 ${
        result.passed ? "border-emerald-500/30 bg-emerald-500/10" : "border-amber-500/30 bg-amber-500/10"
      }`}
    >
      <div className={`font-semibold ${result.passed ? "text-emerald-400" : "text-amber-400"}`}>
        {result.passed ? `Nice work — ${pct}% correct.` : `${pct}% correct — not quite there yet.`}
      </div>
      <p className="mt-1 text-sm text-[#8fada0]">
        {result.passed
          ? result.lessonNewlyCompleted
            ? "Lesson marked complete."
            : "Lesson already completed — this attempt updated your best score."
          : "You saw the correct answer on each question as you went — try again to improve your score (need 70%+ to pass)."}
      </p>
      <button
        onClick={onRetry}
        autoFocus
        onKeyDown={(e) => {
          // most browsers already activate a focused <button> on Enter, but
          // that native behavior isn't reliable everywhere — handle it
          // explicitly so the shortcut always works.
          if (e.key === "Enter") {
            e.preventDefault();
            onRetry();
          }
        }}
        className="mt-3 text-sm text-[#14b8a6] hover:underline"
      >
        Try again
      </button>
    </div>
  );
}
