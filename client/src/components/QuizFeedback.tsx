import type { ReactNode } from "react";

// Shared correct/incorrect banner shown after a question is checked —
// same styling in ConceptQuiz and StrategyKnowledgeCheck, only the message
// content (children) differs.
export function QuizFeedback({ correct, children }: { correct: boolean; children: ReactNode }) {
  return (
    <div
      className={`mt-3 rounded-md border px-3 py-2 text-sm ${
        correct
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
          : "border-red-500/30 bg-red-500/10 text-red-300"
      }`}
    >
      {children}
    </div>
  );
}
