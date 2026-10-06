import type { ReactNode } from "react";

// Correct/incorrect banner shown after a question is checked — only the message content (children)
// differs between uses.
export function QuizFeedback({ correct, children }: { correct: boolean; children: ReactNode }) {
  return (
    <div
      role="status"
      className={`mt-4 flex gap-3 rounded-xl border px-4 py-3 text-sm leading-relaxed ${
        correct
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
          : "border-amber-500/30 bg-amber-500/10 text-amber-100"
      }`}
    >
      <span
        aria-hidden="true"
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
          correct ? "bg-emerald-500 text-[#06281c]" : "bg-amber-400 text-[#2b1a02]"
        }`}
      >
        {correct ? "✓" : "!"}
      </span>
      <div>{children}</div>
    </div>
  );
}
