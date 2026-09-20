import { useState } from "react";
import type { StrategyQuestionPrompt, GradeResponse } from "../types/curriculum";
import type { ParamDef } from "../types/strategy";
import { submitLesson } from "../api";
import { QuizResultPanel } from "./QuizResultPanel";

type NumericAnswer = { unlimited: boolean; text: string };

export function StrategyKnowledgeCheck({
  lessonSlug,
  params,
  practiceParams,
  questions,
}: {
  lessonSlug: string;
  params: ParamDef[];
  practiceParams: Record<string, number>;
  questions: StrategyQuestionPrompt[];
}) {
  const [numericAnswers, setNumericAnswers] = useState<Record<string, NumericAnswer>>({});
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<GradeResponse | null>(null);
  const [authRequired, setAuthRequired] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const allAnswered = questions.every((q) => {
    if (q.type === "mcq") return mcqAnswers[q.id] !== undefined;
    const a = numericAnswers[q.id];
    return a && (a.unlimited || a.text.trim() !== "");
  });

  async function handleSubmit() {
    setAuthRequired(false);
    setSubmitting(true);

    const answers: Record<string, unknown> = {};
    for (const q of questions) {
      if (q.type === "mcq") {
        answers[q.id] = mcqAnswers[q.id];
      } else {
        const a = numericAnswers[q.id];
        answers[q.id] = a?.unlimited ? { unlimited: true } : { value: Number(a?.text ?? NaN) };
      }
    }

    try {
      const res = await submitLesson(lessonSlug, { practiceParams, answers });
      setResult(res);
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
    setNumericAnswers({});
    setMcqAnswers({});
  }

  return (
    <div className="rounded-xl border border-[#2a3040] bg-[#141821] p-5">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
        Knowledge check
      </h3>

      <div className="mb-5 rounded-lg border border-[#2a3040] bg-[#0e1117] p-4">
        <div className="mb-2 text-xs uppercase tracking-wide text-[#898781]">Given</div>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
          {params.map((p) => (
            <span key={p.key} className="text-[#e6e8ec]">
              <span className="text-[#898781]">{p.label}:</span>{" "}
              <span className="font-mono text-[#4f8cff]">{practiceParams[p.key]}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {questions.map((q, i) => {
          const questionResult = result?.results.find((r) => r.questionId === q.id);
          return (
            <div key={q.id}>
              <p className="mb-2 text-sm text-[#e6e8ec]">
                {i + 1}. {q.prompt}
              </p>

              {q.type === "numeric-or-unlimited" ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#898781]">$</span>
                    <input
                      type="number"
                      step="0.01"
                      disabled={Boolean(result) || numericAnswers[q.id]?.unlimited}
                      value={numericAnswers[q.id]?.text ?? ""}
                      onChange={(e) =>
                        setNumericAnswers((a) => ({
                          ...a,
                          [q.id]: { unlimited: false, text: e.target.value },
                        }))
                      }
                      className="input w-32"
                      placeholder="0.00"
                    />
                  </div>
                  <label className="flex items-center gap-1.5 text-sm text-[#9aa3b2]">
                    <input
                      type="checkbox"
                      disabled={Boolean(result)}
                      checked={numericAnswers[q.id]?.unlimited ?? false}
                      onChange={(e) =>
                        setNumericAnswers((a) => ({
                          ...a,
                          [q.id]: { unlimited: e.target.checked, text: a[q.id]?.text ?? "" },
                        }))
                      }
                      className="accent-[#4f8cff]"
                    />
                    Unlimited
                  </label>
                  {questionResult && (
                    <span className={`text-sm ${questionResult.correct ? "text-emerald-400" : "text-red-400"}`}>
                      {questionResult.correct ? "Correct" : `Correct answer: ${questionResult.correctAnswer}`}
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex flex-col gap-1.5">
                  {q.choices!.map((choice, ci) => {
                    const isSelected = mcqAnswers[q.id] === ci;
                    const isCorrectChoice = questionResult && choice === questionResult.correctAnswer;
                    return (
                      <label
                        key={ci}
                        className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm capitalize transition ${
                          result
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
                          onChange={() => setMcqAnswers((a) => ({ ...a, [q.id]: ci }))}
                        />
                        {choice}
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
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
