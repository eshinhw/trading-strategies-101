// Identical Back/Next-or-Finish footer shared by ConceptQuiz and
// StrategyKnowledgeCheck — no domain differences between the two here.
export function QuizNavButtons({
  onBack,
  backDisabled,
  isChecked,
  isLast,
  submitting,
  onNext,
}: {
  onBack: () => void;
  backDisabled: boolean;
  isChecked: boolean;
  isLast: boolean;
  submitting: boolean;
  onNext: () => void;
}) {
  return (
    <div className="mt-5 flex items-center justify-between">
      <button
        onClick={onBack}
        disabled={backDisabled}
        className="text-sm text-[#f5a623] hover:underline disabled:cursor-not-allowed disabled:text-[#898781] disabled:no-underline"
      >
        ← Back
      </button>
      {isChecked && (
        <button
          onClick={onNext}
          disabled={submitting}
          className="rounded-lg bg-[#f5a623] px-4 py-2 text-sm font-medium text-[#0b0d12] hover:bg-[#d98f12] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {submitting ? "Grading…" : isLast ? "Finish" : "Next question →"}
        </button>
      )}
    </div>
  );
}
