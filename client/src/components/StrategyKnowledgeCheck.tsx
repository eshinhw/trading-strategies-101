import { useState } from "react";
import type { StrategyQuestionPrompt, GradeResponse } from "../types/curriculum";
import type { ParamDef } from "../types/strategy";
import { submitLesson } from "../api";
import { QuizResultPanel } from "./QuizResultPanel";
import { QuizProgress } from "./QuizProgress";

type NumericAnswer = { unlimited: boolean; text: string };
const ADVANCE_DELAY_MS = 350;

function isNumericAnswered(a: NumericAnswer | undefined): boolean {
  return Boolean(a && (a.unlimited || a.text.trim() !== ""));
}

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numericAnswers, setNumericAnswers] = useState<Record<string, NumericAnswer>>({});
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<GradeResponse | null>(null);
  const [authRequired, setAuthRequired] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isLast = currentIndex === questions.length - 1;

  async function submit(finalNumeric: Record<string, NumericAnswer>, finalMcq: Record<string, number>) {
    setAuthRequired(false);
    setSubmitting(true);

    const answers: Record<string, unknown> = {};
    for (const q of questions) {
      if (q.type === "mcq") {
        answers[q.id] = finalMcq[q.id];
      } else {
        const a = finalNumeric[q.id];
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

  function advance() {
    if (isLast) {
      submit(numericAnswers, mcqAnswers);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  function selectChoice(questionId: string, choiceIndex: number) {
    const nextMcq = { ...mcqAnswers, [questionId]: choiceIndex };
    setMcqAnswers(nextMcq);
    // a single click fully answers an MCQ question, so advance automatically —
    // the brief delay just lets the selection register visually first.
    setTimeout(() => {
      if (isLast) {
        submit(numericAnswers, nextMcq);
      } else {
        setCurrentIndex((i) => i + 1);
      }
    }, ADVANCE_DELAY_MS);
  }

  function retry() {
    setResult(null);
    setNumericAnswers({});
    setMcqAnswers({});
    setCurrentIndex(0);
  }

  const givenPanel = (
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
  );

  if (result) {
    return (
      <div className="rounded-xl border border-[#2a3040] bg-[#141821] p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
          Knowledge check
        </h3>
        {givenPanel}
        <div className="flex flex-col gap-5">
          {questions.map((q, i) => {
            const questionResult = result.results.find((r) => r.questionId === q.id);
            return (
              <div key={q.id}>
                <p className="mb-2 text-sm text-[#e6e8ec]">
                  {i + 1}. {q.prompt}
                </p>
                {q.type === "numeric-or-unlimited" ? (
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#9aa3b2]">
                      Your answer:{" "}
                      {numericAnswers[q.id]?.unlimited ? "Unlimited" : `$${numericAnswers[q.id]?.text || "—"}`}
                    </span>
                    <span className={`text-sm ${questionResult?.correct ? "text-emerald-400" : "text-red-400"}`}>
                      {questionResult?.correct ? "Correct" : `Correct answer: ${questionResult?.correctAnswer}`}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1.5">
                    {q.choices!.map((choice, ci) => {
                      const isSelected = mcqAnswers[q.id] === ci;
                      const isCorrectChoice = questionResult && choice === questionResult.correctAnswer;
                      return (
                        <div
                          key={ci}
                          className={`rounded-md border px-3 py-2 text-sm capitalize ${
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
                )}
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
      {givenPanel}

      <p className="mb-3 text-sm text-[#e6e8ec]">{q.prompt}</p>

      {q.type === "numeric-or-unlimited" ? (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[#898781]">$</span>
            <input
              type="number"
              step="0.01"
              autoFocus
              disabled={submitting || numericAnswers[q.id]?.unlimited}
              value={numericAnswers[q.id]?.text ?? ""}
              onChange={(e) =>
                setNumericAnswers((a) => ({
                  ...a,
                  [q.id]: { unlimited: false, text: e.target.value },
                }))
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" && isNumericAnswered(numericAnswers[q.id])) advance();
              }}
              className="input w-32"
              placeholder="0.00"
            />
          </div>
          <label className="flex items-center gap-1.5 text-sm text-[#9aa3b2]">
            <input
              type="checkbox"
              disabled={submitting}
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
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          {q.choices!.map((choice, ci) => {
            const isSelected = mcqAnswers[q.id] === ci;
            return (
              <label
                key={ci}
                className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm capitalize transition ${
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
      )}

      <div className="mt-5 flex items-center justify-between">
        <button
          onClick={() => setCurrentIndex((i) => i - 1)}
          disabled={currentIndex === 0}
          className="text-sm text-[#4f8cff] hover:underline disabled:cursor-not-allowed disabled:text-[#898781] disabled:no-underline"
        >
          ← Back
        </button>
        {q.type === "numeric-or-unlimited" && (
          <button
            onClick={advance}
            disabled={!isNumericAnswered(numericAnswers[q.id]) || submitting}
            className="rounded-lg bg-[#4f8cff] px-4 py-2 text-sm font-medium text-white hover:bg-[#3d7ce0] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {submitting ? "Grading…" : isLast ? "Submit answers" : "Next question →"}
          </button>
        )}
        {q.type === "mcq" && submitting && <span className="text-sm text-[#898781]">Grading…</span>}
      </div>

      {authRequired && (
        <p className="mt-3 text-sm text-amber-400">
          Sign in to submit and save your progress on this lesson.
        </p>
      )}
    </div>
  );
}
