import type { KeyboardEvent } from "react";

// Shared radio-choice row for ConceptQuiz and StrategyKnowledgeCheck's MCQ
// questions — same locked/selected/correct styling in both, parameterized
// because the two callers differ in how "disabled" and keyboard handling
// work: ConceptQuiz keeps the input enabled after checking so Enter can
// still advance to the next question (see its onKeyDown comment), while
// StrategyKnowledgeCheck just disables it outright.
export function QuizChoiceOption({
  name,
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
  label: string;
  isSelected: boolean;
  isCorrectChoice: boolean;
  isChecked: boolean;
  disabled?: boolean;
  capitalize?: boolean;
  onSelect: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}) {
  const stateClasses = isChecked
    ? isCorrectChoice
      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
      : isSelected
        ? "border-red-500/40 bg-red-500/10 text-red-300"
        : "border-[#2a3040] text-[#9aa3b2]"
    : isSelected
      ? "border-[#4f8cff] bg-[#4f8cff]/10 text-[#e6e8ec]"
      : "border-[#2a3040] text-[#9aa3b2] hover:border-[#3a4150]";

  return (
    <label
      className={[
        "flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition",
        capitalize ? "capitalize" : "",
        isChecked ? "" : "cursor-pointer",
        stateClasses,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <input
        type="radio"
        name={name}
        className="accent-[#4f8cff]"
        disabled={disabled}
        checked={isSelected}
        onChange={onSelect}
        onKeyDown={onKeyDown}
      />
      {label}
    </label>
  );
}
