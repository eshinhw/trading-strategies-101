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
        className="text-sm text-[#7c6cff] hover:underline disabled:cursor-not-allowed disabled:text-[#898781] disabled:no-underline"
      >
        ← Back
      </button>
      {isChecked && (
        <button
          onClick={onNext}
          disabled={submitting}
          className="rounded-lg bg-[#7c6cff] px-4 py-2 text-sm font-medium text-white hover:bg-[#6552f0] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {submitting ? "Grading…" : isLast ? "Finish" : "Next question →"}
        </button>
      )}
    </div>
  );
}
