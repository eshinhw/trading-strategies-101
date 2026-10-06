export type AnswerStatus = "correct" | "wrong" | "current" | "pending";

const COLORS = { correct: "#34d399", wrong: "#f87171", pending: "#1b2029" } as const;

// One segment per question, coloured by how it went: green once answered correctly, red once answered wrongly, the
// current question lit in the accent colour, the rest dim. Shared by the lesson knowledge checks and the Quiz Bank.
export function AnswerProgressBar({
  statuses,
  label,
  accent = "#7c6cff",
}: {
  statuses: AnswerStatus[];
  /** spoken summary for assistive tech, since the segments themselves are decorative */
  label: string;
  accent?: string;
}) {
  return (
    <div role="img" aria-label={label} className="flex gap-1">
      {statuses.map((status, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="h-1.5 flex-1 rounded-full transition-colors duration-300"
          style={{
            background: status === "current" ? `${accent}99` : COLORS[status],
            boxShadow: status === "current" ? `0 0 0 1px ${accent}` : undefined,
          }}
        />
      ))}
    </div>
  );
}
