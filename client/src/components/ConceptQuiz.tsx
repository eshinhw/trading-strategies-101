import { useState } from "react";
import type { ConceptQuizPrompt } from "../types/curriculum";
import { submitLesson } from "../api";
import { QuizResultPanel } from "./QuizResultPanel";
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
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<GradeResponse | null>(null);
  const [authRequired, setAuthRequired] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  async function handleSubmit() {
    setAuthRequired(false);
    setSubmitting(true);
    try {
      const res = await submitLesson(lessonSlug, { answers });
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

  function retry() {
    setResult(null);
    setAnswers({});
  }

  return (
    <div className="rounded-xl border border-[#2a3040] bg-[#141821] p-5">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
        Knowledge check
      </h3>
      <div className="flex flex-col gap-5">
        {questions.map((q, i) => (
          <div key={q.id}>
            <p className="mb-2 text-sm text-[#e6e8ec]">
              {i + 1}. {q.prompt}
            </p>
            <div className="flex flex-col gap-1.5">
              {q.choices.map((choice, ci) => {
                const questionResult = result?.results.find((r) => r.questionId === q.id);
                const isSelected = answers[q.id] === ci;
                const showFeedback = Boolean(result);
                const isCorrectChoice = questionResult && choice === questionResult.correctAnswer;
                return (
                  <label
                    key={ci}
                    className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm transition ${
                      showFeedback
                        ? isCorrectChoice
                          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                          : isSelected
                            ? "border-red-500/40 bg-red-500/10 text-red-300"
                            : "border-[#2a3040] text-[#9aa3b2]"
                        : isSelected
                          ? "border-[#4f8cff] bg-[#4f8cff]/10 text-[#e6e8ec]"
                          : "border-[#2a3040] text-[#9aa3b2] hover:border-[#3a4150]"
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      className="accent-[#4f8cff]"
                      disabled={Boolean(result)}
                      checked={isSelected}
                      onChange={() => setAnswers((a) => ({ ...a, [q.id]: ci }))}
                    />
                    {choice}
                  </label>
                );
              })}
            </div>
            {result && (
              <p className="mt-1.5 text-xs text-[#898781]">
                {result.results.find((r) => r.questionId === q.id)?.explanation}
              </p>
            )}
          </div>
        ))}
      </div>

      {!result ? (
        <button
          onClick={handleSubmit}
          disabled={!allAnswered || submitting}
          className="mt-5 rounded-lg bg-[#4f8cff] px-4 py-2 text-sm font-medium text-white hover:bg-[#3d7ce0] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {submitting ? "Grading…" : "Submit answers"}
        </button>
      ) : (
        <QuizResultPanel result={result} onRetry={retry} />
      )}

      {authRequired && (
        <p className="mt-3 text-sm text-amber-400">
          Sign in to submit and save your progress on this lesson.
        </p>
      )}
    </div>
  );
}
