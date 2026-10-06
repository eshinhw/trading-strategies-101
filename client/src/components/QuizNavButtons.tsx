// Back / Next-or-Finish footer for the lesson quiz.
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
        className="text-sm text-[#a99dff] hover:underline disabled:cursor-not-allowed disabled:text-[#898781] disabled:no-underline"
      >
        ← Back
      </button>
      {isChecked && (
        <button
          onClick={onNext}
          disabled={submitting}
          className="rounded-lg bg-[#7c6cff] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {submitting ? "Grading…" : isLast ? "Finish" : "Next question →"}
        </button>
      )}
    </div>
  );
}
