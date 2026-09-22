import { useMemo, useState } from "react";
import type { StrategyQuestionPrompt, GradeResponse } from "../types/curriculum";
import type { Strategy } from "../types/strategy";
import { computePayoffStats, defaultRange } from "../engine/payoff";
import { submitLesson } from "../api";
import { QuizResultPanel } from "./QuizResultPanel";
import { QuizProgress } from "./QuizProgress";

type NumericAnswer = { unlimited: boolean; text: string };

function isNumericAnswered(a: NumericAnswer | undefined): boolean {
  return Boolean(a && (a.unlimited || a.text.trim() !== ""));
}

function numericIsCorrect(correct: number | "unlimited", a: NumericAnswer | undefined): boolean {
  if (!a) return false;
  if (correct === "unlimited") return a.unlimited;
  if (a.unlimited) return false;
  const value = Number(a.text);
  if (Number.isNaN(value)) return false;
  const tolerance = Math.max(0.5, Math.abs(correct) * 0.05);
  return Math.abs(value - correct) <= tolerance;
}

function fmtAnswer(v: number | "unlimited"): string {
  return v === "unlimited" ? "Unlimited" : `$${v.toFixed(2)}`;
}

export function StrategyKnowledgeCheck({
  lessonSlug,
  strategy,
  practiceParams,
  questions,
}: {
  lessonSlug: string;
  strategy: Strategy;
  practiceParams: Record<string, number>;
  questions: StrategyQuestionPrompt[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numericAnswers, setNumericAnswers] = useState<Record<string, NumericAnswer>>({});
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [result, setResult] = useState<GradeResponse | null>(null);
  const [authRequired, setAuthRequired] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // the same engine that drives the interactive sandbox above — reused here so
  // each answer can be graded the instant it's given, not just in one batch
  // at the end.
  const stats = useMemo(() => {
    const [lo, hi] = defaultRange(strategy, practiceParams);
    return computePayoffStats(strategy, practiceParams, lo, hi);
  }, [strategy, practiceParams]);

  function correctAnswerFor(q: StrategyQuestionPrompt): string {
    if (q.id === "maxProfit") return fmtAnswer(stats.maxProfit);
    if (q.id === "maxLoss") return fmtAnswer(stats.maxLoss);
    if (q.id === "outlook") return strategy.outlook;
    return strategy.netPosition === "debit" ? "Net debit — I pay to enter" : "Net credit — I receive money to enter";
  }

  function isQuestionCorrect(q: StrategyQuestionPrompt): boolean {
    if (q.id === "maxProfit") return numericIsCorrect(stats.maxProfit, numericAnswers[q.id]);
    if (q.id === "maxLoss") return numericIsCorrect(stats.maxLoss, numericAnswers[q.id]);
    if (q.id === "outlook") return q.choices?.[mcqAnswers[q.id]] === strategy.outlook;
    const correctIndex = strategy.netPosition === "debit" ? 0 : 1;
    return mcqAnswers[q.id] === correctIndex;
  }

  const q = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const isChecked = Boolean(checked[q?.id]);

  function checkNumeric() {
    if (!isNumericAnswered(numericAnswers[q.id])) return;
    setChecked((c) => ({ ...c, [q.id]: true }));
  }

  function selectChoice(choiceIndex: number) {
    if (isChecked) return; // locked once checked — no changing your answer after seeing it
    setMcqAnswers((a) => ({ ...a, [q.id]: choiceIndex }));
    setChecked((c) => ({ ...c, [q.id]: true }));
  }

  async function finish() {
    setAuthRequired(false);
    setSubmitting(true);

    const answers: Record<string, unknown> = {};
    for (const question of questions) {
      if (question.type === "mcq") {
        answers[question.id] = mcqAnswers[question.id];
      } else {
        const a = numericAnswers[question.id];
        answers[question.id] = a?.unlimited ? { unlimited: true } : { value: Number(a?.text ?? NaN) };
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

  function next() {
    if (isLast) {
      finish();
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }

  function retry() {
    setResult(null);
    setNumericAnswers({});
    setMcqAnswers({});
    setChecked({});
    setCurrentIndex(0);
  }

  const givenPanel = (
    <div className="mb-5 rounded-lg border border-[#1e3d2f] bg-[#081a13] p-4">
      <div className="mb-2 text-xs uppercase tracking-wide text-[#6f8a7c]">Given</div>
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
        {strategy.params.map((p) => (
          <span key={p.key} className="text-[#e6f2ec]">
            <span className="text-[#6f8a7c]">{p.label}:</span>{" "}
            <span className="font-mono text-[#14b8a6]">{practiceParams[p.key]}</span>
          </span>
        ))}
      </div>
    </div>
  );

  if (result) {
    return (
      <div className="rounded-xl border border-[#1e3d2f] bg-[#0e2118] p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#8fada0]">
          Knowledge check
        </h3>
        <QuizResultPanel result={result} onRetry={retry} />
      </div>
    );
  }

  const correct = isChecked ? isQuestionCorrect(q) : false;

  return (
    <div className="rounded-xl border border-[#1e3d2f] bg-[#0e2118] p-5">
      <QuizProgress current={currentIndex} total={questions.length} />
      {givenPanel}

      <p className="mb-3 text-sm text-[#e6f2ec]">{q.prompt}</p>

      {q.type === "numeric-or-unlimited" ? (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[#6f8a7c]">$</span>
            <input
              type="number"
              step="0.01"
              autoFocus
              readOnly={isChecked || numericAnswers[q.id]?.unlimited}
              value={numericAnswers[q.id]?.text ?? ""}
              onChange={(e) =>
                setNumericAnswers((a) => ({
                  ...a,
                  [q.id]: { unlimited: false, text: e.target.value },
                }))
              }
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                e.preventDefault();
                // once checked, Enter advances too — full keyboard flow: type a
                // value, Enter to check it, Enter again to move on.
                if (isChecked) {
                  next();
                } else if (isNumericAnswered(numericAnswers[q.id])) {
                  checkNumeric();
                }
              }}
              className="input w-32"
              placeholder="0.00"
            />
          </div>
          <label className="flex items-center gap-1.5 text-sm text-[#8fada0]">
            <input
              type="checkbox"
              disabled={isChecked}
              checked={numericAnswers[q.id]?.unlimited ?? false}
              onChange={(e) =>
                setNumericAnswers((a) => ({
                  ...a,
                  [q.id]: { unlimited: e.target.checked, text: a[q.id]?.text ?? "" },
                }))
              }
              className="accent-[#14b8a6]"
            />
            Unlimited
          </label>
          {!isChecked && (
            <button
              onClick={checkNumeric}
              disabled={!isNumericAnswered(numericAnswers[q.id])}
              className="rounded-lg bg-[#14b8a6] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#0d9488] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Check answer
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          {q.choices!.map((choice, ci) => {
            const isSelected = mcqAnswers[q.id] === ci;
            const isCorrectChoice = choice === correctAnswerFor(q);
            return (
              <label
                key={ci}
                className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm capitalize transition ${
                  isChecked ? "" : "cursor-pointer"
                } ${
                  isChecked
                    ? isCorrectChoice
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                      : isSelected
                        ? "border-red-500/40 bg-red-500/10 text-red-300"
                        : "border-[#1e3d2f] text-[#8fada0]"
                    : isSelected
                      ? "border-[#14b8a6] bg-[#14b8a6]/10 text-[#e6f2ec]"
                      : "border-[#1e3d2f] text-[#8fada0] hover:border-[#2c5942]"
                }`}
              >
                <input
                  type="radio"
                  name={q.id}
                  className="accent-[#14b8a6]"
                  disabled={isChecked}
                  checked={isSelected}
                  onChange={() => selectChoice(ci)}
                />
                {choice}
              </label>
            );
          })}
        </div>
      )}

      {isChecked && (
        <div
          className={`mt-3 rounded-md border px-3 py-2 text-sm ${
            correct ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-red-500/30 bg-red-500/10 text-red-300"
          }`}
        >
          {correct ? "Correct." : `Not quite — correct answer: ${correctAnswerFor(q)}`}
        </div>
      )}

      <div className="mt-5 flex items-center justify-between">
        <button
          onClick={() => setCurrentIndex((i) => i - 1)}
          disabled={currentIndex === 0}
          className="text-sm text-[#14b8a6] hover:underline disabled:cursor-not-allowed disabled:text-[#6f8a7c] disabled:no-underline"
        >
          ← Back
        </button>
        {isChecked && (
          <button
            onClick={next}
            disabled={submitting}
            className="rounded-lg bg-[#14b8a6] px-4 py-2 text-sm font-medium text-white hover:bg-[#0d9488] disabled:cursor-not-allowed disabled:opacity-40"
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
