import { AnswerProgressBar, type AnswerStatus } from "./AnswerProgressBar";

export function QuizProgress({ current, total, statuses }: { current: number; total: number; statuses: AnswerStatus[] }) {
  const correct = statuses.filter((s) => s === "correct").length;
  const wrong = statuses.filter((s) => s === "wrong").length;
  return (
    <div className="mb-5">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Knowledge check</h3>
        <span className="text-xs text-[#898781]">
          Question {current + 1} of {total}
        </span>
      </div>
      <AnswerProgressBar
        statuses={statuses}
        label={`Question ${current + 1} of ${total}: ${correct} correct, ${wrong} wrong so far`}
      />
    </div>
  );
}
