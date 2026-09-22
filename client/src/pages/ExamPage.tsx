import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchExam, submitExam } from "../api";
import type { ExamQuestion, ExamAnswerSubmission, ExamGradeResponse } from "../types/exam";
import { QuizProgress } from "../components/QuizProgress";

type AnswerState = { kind: "mcq"; choiceIndex: number } | { kind: "numeric"; unlimited: boolean; text: string };

function isAnswered(a: AnswerState | undefined): boolean {
  if (!a) return false;
  if (a.kind === "mcq") return true;
  return a.unlimited || a.text.trim() !== "";
}

export function ExamPage() {
  const { slug } = useParams<{ slug: string }>();
  const [questions, setQuestions] = useState<ExamQuestion[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [result, setResult] = useState<ExamGradeResponse | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function loadFreshExam() {
    if (!slug) return;
    setQuestions(null);
    setError(null);
    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
    fetchExam(slug)
      .then(setQuestions)
      .catch((e) => setError(e.message));
  }

  useEffect(loadFreshExam, [slug]);

  const allAnswered = useMemo(() => (questions ?? []).every((q) => isAnswered(answers[q.id])), [questions, answers]);
  const answeredCount = useMemo(
    () => (questions ?? []).filter((q) => isAnswered(answers[q.id])).length,
    [questions, answers],
  );

  async function handleSubmit() {
    if (!questions || !slug) return;
    setSubmitting(true);
    setError(null);
    const submission: ExamAnswerSubmission[] = questions.map((q) => {
      const a = answers[q.id];
      const base: ExamAnswerSubmission = {
        id: q.id,
        lessonSlug: q.lessonSlug,
        moduleTitle: q.moduleTitle,
        lessonTitle: q.lessonTitle,
        kind: q.kind,
        questionId: q.questionId,
        prompt: q.prompt,
        practiceParams: q.practiceParams,
      };
      if (a?.kind === "mcq") return { ...base, choiceIndex: a.choiceIndex };
      if (a?.kind === "numeric") {
        return { ...base, numeric: a.unlimited ? { unlimited: true } : { unlimited: false, value: Number(a.text) } };
      }
      return base;
    });

    try {
      const res = await submitExam(slug, submission);
      setResult(res);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  if (error && !questions) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-amber-400">{error}</p>
        {slug && (
          <Link to={`/courses/${slug}`} className="mt-4 inline-block text-[#34c98a] hover:underline">
            ← Back to course
          </Link>
        )}
      </div>
    );
  }

  if (!questions) {
    return <div className="mx-auto max-w-3xl px-6 py-16 text-center text-[#6f8a7c]">Loading quiz…</div>;
  }

  if (result) {
    return <ExamReport result={result} courseSlug={slug!} onRetake={loadFreshExam} />;
  }

  const q = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const a = answers[q.id];

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Link to={`/courses/${slug}`} className="text-sm text-[#34c98a] hover:underline">
        ← Exit quiz
      </Link>

      <header className="mt-4 mb-6">
        <h1 className="text-2xl font-bold text-[#e6f2ec]">Final Quiz</h1>
        <p className="mt-1 text-sm text-[#8fada0]">
          {questions.length} questions across every module. Answers aren't graded until you submit — go back and change
          anything before then.
        </p>
      </header>

      <div className="rounded-xl border border-[#1e3d2f] bg-[#0e2118] p-5">
        <QuizProgress current={currentIndex} total={questions.length} />

        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[#1e3d2f] px-2 py-0.5 text-xs text-[#6f8a7c]">
            {q.moduleTitle}
          </span>
        </div>

        {q.kind === "strategy" && q.paramDefs && q.practiceParams && (
          <div className="mb-4 rounded-lg border border-[#1e3d2f] bg-[#081a13] p-4">
            <div className="mb-2 text-xs uppercase tracking-wide text-[#6f8a7c]">Given</div>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
              {q.paramDefs.map((p) => (
                <span key={p.key} className="text-[#e6f2ec]">
                  <span className="text-[#6f8a7c]">{p.label}:</span>{" "}
                  <span className="font-mono text-[#34c98a]">{q.practiceParams![p.key]}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        <p className="mb-3 text-sm text-[#e6f2ec]">{q.prompt}</p>

        {q.type === "numeric-or-unlimited" ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[#6f8a7c]">$</span>
              <input
                type="number"
                step="0.01"
                autoFocus
                disabled={a?.kind === "numeric" && a.unlimited}
                value={a?.kind === "numeric" ? a.text : ""}
                onChange={(e) =>
                  setAnswers((prev) => ({
                    ...prev,
                    [q.id]: { kind: "numeric", unlimited: false, text: e.target.value },
                  }))
                }
                className="input w-32"
                placeholder="0.00"
              />
            </div>
            <label className="flex items-center gap-1.5 text-sm text-[#8fada0]">
              <input
                type="checkbox"
                checked={a?.kind === "numeric" && a.unlimited}
                onChange={(e) =>
                  setAnswers((prev) => ({
                    ...prev,
                    [q.id]: { kind: "numeric", unlimited: e.target.checked, text: a?.kind === "numeric" ? a.text : "" },
                  }))
                }
                className="accent-[#34c98a]"
              />
              Unlimited
            </label>
          </div>
        ) : (
          <div className="flex flex-col gap-1.5">
            {q.choices!.map((choice, ci) => {
              const isSelected = a?.kind === "mcq" && a.choiceIndex === ci;
              return (
                <label
                  key={ci}
                  className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm capitalize transition ${
                    isSelected
                      ? "border-[#34c98a] bg-[#34c98a]/10 text-[#e6f2ec]"
                      : "border-[#1e3d2f] text-[#8fada0] hover:border-[#2c5942]"
                  }`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    className="accent-[#34c98a]"
                    checked={isSelected}
                    onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: { kind: "mcq", choiceIndex: ci } }))}
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
            className="text-sm text-[#34c98a] hover:underline disabled:cursor-not-allowed disabled:text-[#6f8a7c] disabled:no-underline"
          >
            ← Back
          </button>
          {isLast ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered || submitting}
              className="rounded-lg bg-[#34c98a] px-4 py-2 text-sm font-medium text-white hover:bg-[#2bb37a] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {submitting ? "Grading…" : "Submit quiz"}
            </button>
          ) : (
            <button
              onClick={() => setCurrentIndex((i) => i + 1)}
              className="rounded-lg bg-[#34c98a] px-4 py-2 text-sm font-medium text-white hover:bg-[#2bb37a]"
            >
              Next question →
            </button>
          )}
        </div>

        {isLast && !allAnswered && (
          <p className="mt-3 text-sm text-amber-400">
            {questions.length - answeredCount} question{questions.length - answeredCount === 1 ? "" : "s"} left to
            answer before you can submit.
          </p>
        )}
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </div>
    </div>
  );
}

function ExamReport({
  result,
  courseSlug,
  onRetake,
}: {
  result: ExamGradeResponse;
  courseSlug: string;
  onRetake: () => void;
}) {
  const pct = Math.round(result.score * 100);
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Link to={`/courses/${courseSlug}`} className="text-sm text-[#34c98a] hover:underline">
        ← Back to course
      </Link>

      <div
        className={`mt-4 rounded-xl border p-6 text-center ${
          result.passed ? "border-emerald-500/30 bg-emerald-500/10" : "border-amber-500/30 bg-amber-500/10"
        }`}
      >
        <div className={`text-3xl font-bold ${result.passed ? "text-emerald-400" : "text-amber-400"}`}>{pct}%</div>
        <div className={`mt-1 font-semibold ${result.passed ? "text-emerald-400" : "text-amber-400"}`}>
          {result.passed ? "You passed the final quiz." : "Not quite — need 70%+ to pass."}
        </div>
        <p className="mt-2 text-sm text-[#8fada0]">
          {result.passed
            ? result.courseNewlyCompleted
              ? "This course is now marked complete."
              : `Course already completed — best score is now ${Math.round(result.bestScore * 100)}%.`
            : "Review what you missed below, then retake the quiz whenever you're ready — it's a fresh set of questions each time."}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {result.results.map((r, i) => (
          <div
            key={r.id}
            className={`rounded-lg border p-4 ${
              r.correct ? "border-emerald-500/30 bg-emerald-500/5" : "border-red-500/30 bg-red-500/5"
            }`}
          >
            <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-[#6f8a7c]">
              <span>{i + 1}.</span>
              <span className="rounded-full border border-[#1e3d2f] px-2 py-0.5">{r.moduleTitle}</span>
              <span>{r.lessonTitle}</span>
            </div>
            <p className="text-sm text-[#e6f2ec]">{r.prompt}</p>
            <p className={`mt-1 text-sm ${r.correct ? "text-emerald-400" : "text-red-400"}`}>
              {r.correct ? "Correct" : `Correct answer: ${r.correctAnswer}`}
            </p>
            {r.explanation && <p className="mt-1 text-xs text-[#6f8a7c]">{r.explanation}</p>}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={onRetake}
          className="rounded-lg bg-[#34c98a] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#2bb37a]"
        >
          Retake quiz
        </button>
        <Link to={`/courses/${courseSlug}`} className="text-sm text-[#8fada0] hover:text-[#e6f2ec]">
          Back to course
        </Link>
      </div>
    </div>
  );
}
