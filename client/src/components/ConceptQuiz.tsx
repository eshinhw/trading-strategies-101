import { useState } from "react";
import type { ConceptQuizPrompt } from "../types/curriculum";
import { submitLesson } from "../api";
import { QuizResultPanel } from "./QuizResultPanel";
import { QuizProgress } from "./QuizProgress";
import type { GradeResponse } from "../types/curriculum";

export function ConceptQuiz({
  lessonSlug,
  questions,
  onGraded,
}: {
  lessonSlug: string;
  questions: ConceptQuizPrompt[];
  onGraded?: (result: GradeResponse) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [result, setResult] = useState<GradeResponse | null>(null);
  const [authRequired, setAuthRequired] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const q = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const isChecked = Boolean(checked[q?.id]);
  const isCorrect = answers[q?.id] === q?.correctIndex;

  function selectChoice(choiceIndex: number) {
    if (isChecked) return; // locked once checked — no changing your answer after seeing it
    setAnswers((a) => ({ ...a, [q.id]: choiceIndex }));
    setChecked((c) => ({ ...c, [q.id]: true }));
  }

  async function finish(finalAnswers: Record<string, number>) {
    setAuthRequired(false);
    setSubmitting(true);
    try {
      const res = await submitLesson(lessonSlug, { answers: finalAnswers });
      setResult(res);
      onGraded?.(res);
    } catch (err) {
      if (err instanceof Error && err.message.toLowerCase().includes("not signed in")) {
        setAuthRequired(true);
      }
    } finally {
      setSubmitting(false);
    }
  }

  function next() {
    if (isLast) {
      finish(answers);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  function retry() {
    setResult(null);
    setAnswers({});
    setChecked({});
    setCurrentIndex(0);
  }

  if (result) {
    return (
      <div className="rounded-xl border border-[#1e3d2f] bg-[#0e2118] p-5">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#8fada0]">
          Knowledge check
        </h3>
        <QuizResultPanel result={result} onRetry={retry} />
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#1e3d2f] bg-[#0e2118] p-5">
      <QuizProgress current={currentIndex} total={questions.length} />

      <p className="mb-3 text-sm text-[#e6f2ec]">{q.prompt}</p>
      <div className="flex flex-col gap-1.5">
        {q.choices.map((choice, ci) => {
          const isSelected = answers[q.id] === ci;
          const isCorrectChoice = ci === q.correctIndex;
          return (
            <label
              key={ci}
              className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition ${
                isChecked ? "" : "cursor-pointer"
              } ${
                isChecked
                  ? isCorrectChoice
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                    : isSelected
                      ? "border-red-500/40 bg-red-500/10 text-red-300"
                      : "border-[#1e3d2f] text-[#8fada0]"
                  : isSelected
                    ? "border-[#34c98a] bg-[#34c98a]/10 text-[#e6f2ec]"
                    : "border-[#1e3d2f] text-[#8fada0] hover:border-[#2c5942]"
              }`}
            >
              <input
                type="radio"
                name={q.id}
                className="accent-[#34c98a]"
                checked={isSelected}
                onChange={() => selectChoice(ci)}
                onKeyDown={(e) => {
                  // once checked, Enter advances — kept on the input (rather
                  // than disabling it) so it's still focused and can receive
                  // the keypress; selectChoice() already no-ops further
                  // changes once checked.
                  if (e.key === "Enter" && isChecked) {
                    e.preventDefault();
                    next();
                  }
                }}
              />
              {choice}
            </label>
          );
        })}
      </div>

      {isChecked && (
        <div
          className={`mt-3 rounded-md border px-3 py-2 text-sm ${
            isCorrect ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-red-500/30 bg-red-500/10 text-red-300"
          }`}
        >
          <span className="font-medium">{isCorrect ? "Correct." : "Not quite."}</span>{" "}
          <span className="text-[#8fada0]">{q.explanation}</span>
        </div>
      )}

      <div className="mt-5 flex items-center justify-between">
        <button
          onClick={() => setCurrentIndex((i) => i - 1)}
          disabled={currentIndex === 0}
          className="text-sm text-[#34c98a] hover:underline disabled:cursor-not-allowed disabled:text-[#6f8a7c] disabled:no-underline"
        >
          ← Back
        </button>
        {isChecked && (
          <button
            onClick={next}
            disabled={submitting}
            className="rounded-lg bg-[#34c98a] px-4 py-2 text-sm font-medium text-white hover:bg-[#2bb37a] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {submitting ? "Grading…" : isLast ? "Finish" : "Next question →"}
          </button>
        )}
      </div>

      {authRequired && (
        <p className="mt-3 text-sm text-amber-400">
          Sign in to submit and save your progress on this lesson.
        </p>
      )}
    </div>
  );
}
