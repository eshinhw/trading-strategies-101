import type { ReactNode } from "react";
import type { KeyboardEvent } from "react";

// Radio-choice row for ConceptQuiz: a lettered card with locked/selected/correct styling. The native
// radio stays in the DOM (visually hidden) so keyboard and screen-reader behaviour is unchanged;
// ConceptQuiz keeps it enabled after checking so Enter can still advance to the next question —
// selectChoice() already no-ops further changes once checked.
export function QuizChoiceOption({
  name,
  index,
  label,
  isSelected,
  isCorrectChoice,
  isChecked,
  disabled,
  capitalize,
  onSelect,
  onKeyDown,
}: {
  name: string;
  index: number;
  label: ReactNode;
  isSelected: boolean;
  isCorrectChoice: boolean;
  isChecked: boolean;
  disabled?: boolean;
  capitalize?: boolean;
  onSelect: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}) {
  const state = isChecked
    ? isCorrectChoice
      ? "correct"
      : isSelected
        ? "wrong"
        : "idle-locked"
    : isSelected
      ? "selected"
      : "idle";

  const cardClasses = {
    correct: "border-emerald-500/50 bg-emerald-500/10 text-emerald-200",
    wrong: "border-red-500/50 bg-red-500/10 text-red-200",
    "idle-locked": "border-[#2a3040] text-[#898781] opacity-70",
    selected: "border-[#7c6cff] bg-[#7c6cff]/10 text-[#e6e8ec]",
    idle: "border-[#2a3040] text-[#c3c9d4] hover:border-[#7c6cff]/50 hover:bg-[#7c6cff]/5",
  }[state];

  const badgeClasses = {
    correct: "bg-emerald-500 text-[#06281c]",
    wrong: "bg-red-500 text-[#2b0a0a]",
    "idle-locked": "bg-[#1b2029] text-[#898781]",
    selected: "bg-[#7c6cff] text-white",
    idle: "bg-[#1b2029] text-[#9aa3b2]",
  }[state];

  return (
    <label
      className={[
        "flex items-start gap-3 rounded-xl border px-3.5 py-3 text-[15px] leading-snug transition focus-within:ring-2 focus-within:ring-[#7c6cff]/50",
        capitalize ? "capitalize" : "",
        isChecked ? "" : "cursor-pointer",
        cardClasses,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <input
        type="radio"
        name={name}
        className="sr-only"
        disabled={disabled}
        checked={isSelected}
        onChange={onSelect}
        onKeyDown={onKeyDown}
      />
      <span
        className={`mt-px flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold transition ${badgeClasses}`}
        aria-hidden="true"
      >
        {state === "correct" ? "✓" : state === "wrong" ? "✕" : String.fromCharCode(65 + index)}
      </span>
      <span className="min-w-0 flex-1 pt-px">{label}</span>
    </label>
  );
}
