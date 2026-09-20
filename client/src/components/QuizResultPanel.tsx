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
      <p className="mt-1 text-sm text-[#9aa3b2]">
        {result.passed
          ? result.lessonNewlyCompleted
            ? "Lesson marked complete."
            : "Lesson already completed — this attempt updated your best score."
          : "Review the explanations above, then try again (need 70%+ to pass)."}
      </p>
      <button onClick={onRetry} className="mt-3 text-sm text-[#4f8cff] hover:underline">
        Try again
      </button>
    </div>
  );
}
