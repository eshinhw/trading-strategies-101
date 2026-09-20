import { useState } from "react";
import type { ConceptQuizPrompt } from "../types/curriculum";
import { submitLesson } from "../api";
import { QuizResultPanel } from "./QuizResultPanel";
import { QuizProgress } from "./QuizProgress";
import type { GradeResponse } from "../types/curriculum";

const ADVANCE_DELAY_MS = 350;

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
  const [result, setResult] = useState<GradeResponse | null>(null);
  const [authRequired, setAuthRequired] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isLast = currentIndex === questions.length - 1;

  async function submit(finalAnswers: Record<string, number>) {
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

  function selectChoice(questionId: string, choiceIndex: number) {
    const nextAnswers = { ...answers, [questionId]: choiceIndex };
    setAnswers(nextAnswers);
    // a single click fully answers an MCQ question, so advance automatically —
    // the brief delay just lets the selection register visually first.
    setTimeout(() => {
      if (isLast) {
        submit(nextAnswers);
      } else {
        setCurrentIndex((i) => i + 1);
      }
    }, ADVANCE_DELAY_MS);
  }

  function retry() {
    setResult(null);
    setAnswers({});
    setCurrentIndex(0);
  }

  if (result) {
    return (
      <div className="rounded-xl border border-[#2a3040] bg-[#141821] p-5">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
          Knowledge check
        </h3>
        <div className="flex flex-col gap-5">
          {questions.map((q, i) => {
            const questionResult = result.results.find((r) => r.questionId === q.id);
            return (
              <div key={q.id}>
                <p className="mb-2 text-sm text-[#e6e8ec]">
                  {i + 1}. {q.prompt}
                </p>
                <div className="flex flex-col gap-1.5">
                  {q.choices.map((choice, ci) => {
                    const isSelected = answers[q.id] === ci;
                    const isCorrectChoice = questionResult && choice === questionResult.correctAnswer;
                    return (
                      <div
                        key={ci}
                        className={`rounded-md border px-3 py-2 text-sm ${
                          isCorrectChoice
                            ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                            : isSelected
                              ? "border-red-500/40 bg-red-500/10 text-red-300"
                              : "border-[#2a3040] text-[#9aa3b2]"
                        }`}
                      >
                        {choice}
                      </div>
                    );
                  })}
                </div>
                <p className="mt-1.5 text-xs text-[#898781]">{questionResult?.explanation}</p>
              </div>
            );
          })}
        </div>
        <QuizResultPanel result={result} onRetry={retry} />
      </div>
    );
  }

  const q = questions[currentIndex];

  return (
    <div className="rounded-xl border border-[#2a3040] bg-[#141821] p-5">
      <QuizProgress current={currentIndex} total={questions.length} />

      <p className="mb-3 text-sm text-[#e6e8ec]">{q.prompt}</p>
      <div className="flex flex-col gap-1.5">
        {q.choices.map((choice, ci) => {
          const isSelected = answers[q.id] === ci;
          return (
            <label
              key={ci}
              className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm transition ${
                isSelected
                  ? "border-[#4f8cff] bg-[#4f8cff]/10 text-[#e6e8ec]"
                  : "border-[#2a3040] text-[#9aa3b2] hover:border-[#3a4150]"
              }`}
            >
              <input
                type="radio"
                name={q.id}
                className="accent-[#4f8cff]"
                disabled={submitting}
                checked={isSelected}
                onChange={() => selectChoice(q.id, ci)}
              />
              {choice}
            </label>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button
          onClick={() => setCurrentIndex((i) => i - 1)}
          disabled={currentIndex === 0}
          className="text-sm text-[#4f8cff] hover:underline disabled:cursor-not-allowed disabled:text-[#898781] disabled:no-underline"
        >
          ← Back
        </button>
        {submitting && <span className="text-sm text-[#898781]">Grading…</span>}
      </div>

      {authRequired && (
        <p className="mt-3 text-sm text-amber-400">
          Sign in to submit and save your progress on this lesson.
        </p>
      )}
    </div>
  );
}
