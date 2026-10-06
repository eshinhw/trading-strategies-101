import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCourse, fetchExam, submitExam } from "../api";
import type { Course } from "../types/course";
import type { ExamQuestion, ExamAnswerSubmission, ExamGradeResponse } from "../types/exam";
import { QuizChoiceOption } from "../components/QuizChoiceOption";
import { InlineText } from "../components/InlineText";
import { courseAccent } from "../lib/courseVisuals";

function isAnswered(a: number | undefined): boolean {
  return a !== undefined;
}

const PASS_PERCENT = 70;

// Shared banner for the quiz and its report, tinted with the course's accent colour.
function ExamHeader({
  slug,
  course,
  accent,
  eyebrow,
  title,
  children,
}: {
  slug: string;
  course: Course | null;
  accent: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-[#2a3040]">
      <div
        className="pointer-events-none absolute left-1/2 top-[-220px] h-[360px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: accent, opacity: 0.13 }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(rgba(154,163,178,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 pb-8 pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#898781]">
          <Link to="/courses" className="hover:text-[#e6e8ec]">
            Courses
          </Link>
          <span aria-hidden="true">/</span>
          <Link to={`/courses/${slug}`} className="hover:text-[#e6e8ec]" style={{ color: accent }}>
            {course?.title ?? "Course"}
          </Link>
        </nav>
        <div className="mt-5 text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: accent }}>
          {eyebrow}
        </div>
        <h1 className="mt-1 text-4xl font-bold text-[#e6e8ec]">{title}</h1>
        {children}
      </div>
    </header>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[#2a3040] bg-[#0e1117]/70 px-2.5 py-0.5 text-xs text-[#9aa3b2]">
      {children}
    </span>
  );
}

export function ExamPage() {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<ExamGradeResponse | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const accent = slug ? courseAccent(slug) : "#7c6cff";

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

  useEffect(() => {
    if (!slug) return;
    fetchCourse(slug)
      .then(setCourse)
      .catch(() => {});
  }, [slug]);

  const allAnswered = useMemo(() => (questions ?? []).every((q) => isAnswered(answers[q.id])), [questions, answers]);
  const answeredCount = useMemo(
    () => (questions ?? []).filter((q) => isAnswered(answers[q.id])).length,
    [questions, answers],
  );

  // Keyboard: A–D picks a choice.
  useEffect(() => {
    if (!questions || result) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "TEXTAREA" || target.tagName === "SELECT")) return;
      const q = questions[currentIndex];
      const letter = e.key.length === 1 ? e.key.toLowerCase().charCodeAt(0) - 97 : -1;
      if (letter >= 0 && letter < q.choices.length) {
        setAnswers((prev) => ({ ...prev, [q.id]: letter }));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [questions, result, currentIndex]);

  async function handleSubmit() {
    if (!questions || !slug) return;
    setSubmitting(true);
    setError(null);
    const submission: ExamAnswerSubmission[] = questions.map((q) => ({
      id: q.id,
      lessonSlug: q.lessonSlug,
      moduleTitle: q.moduleTitle,
      lessonTitle: q.lessonTitle,
      questionId: q.questionId,
      prompt: q.prompt,
      choiceIndex: answers[q.id],
    }));

    try {
      const res = await submitExam(slug, submission);
      setResult(res);
      window.scrollTo({ top: 0 });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  if (error && !questions) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400">
          !
        </div>
        <p className="text-amber-400">{error}</p>
        {slug && (
          <Link to={`/courses/${slug}`} className="mt-4 inline-block text-[#a99dff] hover:underline">
            ← Back to course
          </Link>
        )}
      </div>
    );
  }

  if (!questions) {
    return <div className="mx-auto max-w-3xl px-6 py-16 text-center text-[#898781]">Loading quiz…</div>;
  }

  if (result) {
    return (
      <div style={{ "--accent": accent } as CSSProperties}>
        <ExamReport result={result} slug={slug!} course={course} accent={accent} onRetake={loadFreshExam} />
      </div>
    );
  }

  const q = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const a = answers[q.id];
  const remaining = questions.length - answeredCount;
  const firstUnanswered = questions.findIndex((x) => !isAnswered(answers[x.id]));

  return (
    <div style={{ "--accent": accent } as CSSProperties}>
      <ExamHeader slug={slug!} course={course} accent={accent} eyebrow="Final quiz" title={course ? `${course.title} final quiz` : "Final quiz"}>
        <p className="mt-3 max-w-2xl leading-relaxed text-[#9aa3b2]">
          One no-hints test across every module. Nothing is graded until you submit, so go back and change anything
          before then.
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          <Chip>{questions.length} questions</Chip>
          <Chip>{PASS_PERCENT}% to pass</Chip>
          <Chip>Answers revealed at the end</Chip>
        </div>
      </ExamHeader>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[1fr_220px]">
        <section className="relative overflow-hidden rounded-2xl border border-[#2a3040] bg-gradient-to-b from-[#181c28] to-[#12151d] p-5 sm:p-6">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl"
            style={{ background: accent, opacity: 0.14 }}
          />
          <div className="relative">
            <div className="mb-1 flex items-center justify-between gap-3">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
                Question {currentIndex + 1} <span className="text-[#898781]">of {questions.length}</span>
              </h2>
              <span className="text-xs text-[#898781]">
                {answeredCount}/{questions.length} answered
              </span>
            </div>
            <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-[#1b2029]">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${(answeredCount / questions.length) * 100}%`, background: accent }}
              />
            </div>

            <span className="inline-block rounded-full border border-[#2a3040] bg-[#0e1117]/70 px-2.5 py-0.5 text-xs text-[#9aa3b2]">
              {q.moduleTitle}
            </span>

            <p className="mb-4 mt-3 text-lg font-medium leading-relaxed text-[#e6e8ec]">
              <InlineText text={q.prompt} />
            </p>

            <div className="flex flex-col gap-2">
              {q.choices.map((choice, ci) => (
                <QuizChoiceOption
                  key={`${q.id}-${ci}`}
                  name={q.id}
                  index={ci}
                  label={<InlineText text={choice} />}
                  isSelected={a === ci}
                  isCorrectChoice={false}
                  isChecked={false}
                  onSelect={() => setAnswers((prev) => ({ ...prev, [q.id]: ci }))}
                />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                onClick={() => setCurrentIndex((i) => i - 1)}
                disabled={currentIndex === 0}
                className="text-sm text-[#a99dff] hover:underline disabled:cursor-not-allowed disabled:text-[#898781] disabled:no-underline"
              >
                ← Back
              </button>
              {isLast ? (
                <button
                  onClick={handleSubmit}
                  disabled={!allAnswered || submitting}
                  className="rounded-lg bg-[#7c6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
                >
                  {submitting ? "Grading…" : "Submit quiz"}
                </button>
              ) : (
                <button
                  onClick={() => setCurrentIndex((i) => i + 1)}
                  className="rounded-lg bg-[#7c6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0]"
                >
                  Next question →
                </button>
              )}
            </div>

            {isLast && !allAnswered && (
              <p className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-300">
                {remaining} question{remaining === 1 ? "" : "s"} left to answer before you can submit.{" "}
                <button onClick={() => setCurrentIndex(firstUnanswered)} className="underline hover:text-amber-200">
                  Jump to question {firstUnanswered + 1}
                </button>
              </p>
            )}
            {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
            <p className="mt-5 hidden text-xs text-[#898781] sm:block">
              Tip: press A–D on your keyboard to pick an answer.
            </p>
          </div>
        </section>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-[#2a3040] bg-[#141821]/80 p-4">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Questions</h3>
            <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-8 lg:grid-cols-5">
              {questions.map((x, i) => {
                const answered = isAnswered(answers[x.id]);
                const current = i === currentIndex;
                return (
                  <button
                    key={x.id}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Question ${i + 1}${answered ? ", answered" : ", not answered"}`}
                    aria-current={current ? "step" : undefined}
                    className="flex h-9 items-center justify-center rounded-lg border text-xs font-semibold transition hover:brightness-125"
                    style={{
                      borderColor: current ? accent : answered ? `${accent}55` : "#2a3040",
                      background: answered ? `${accent}26` : "transparent",
                      color: answered || current ? "#e6e8ec" : "#898781",
                      boxShadow: current ? `0 0 0 2px ${accent}40` : undefined,
                    }}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <div className="mt-3 flex items-center gap-3 text-[11px] text-[#898781]">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm" style={{ background: `${accent}66` }} /> Answered
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm border border-[#2a3040]" /> Open
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ScoreRing({ score, passed }: { score: number; passed: boolean }) {
  const size = 132;
  const r = (size - 14) / 2;
  const c = 2 * Math.PI * r;
  const color = passed ? "#34d399" : "#fbbf24";
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#ffffff1a" strokeWidth="9" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - score)}
          style={{ filter: `drop-shadow(0 0 6px ${color}80)` }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#e6e8ec]">
        {Math.round(score * 100)}%
      </div>
    </div>
  );
}

function ExamReport({
  result,
  slug,
  course,
  accent,
  onRetake,
}: {
  result: ExamGradeResponse;
  slug: string;
  course: Course | null;
  accent: string;
  onRetake: () => void;
}) {
  const correctCount = result.results.filter((r) => r.correct).length;
  const missed = result.results.length - correctCount;
  const [filter, setFilter] = useState<"all" | "missed">(missed > 0 ? "missed" : "all");

  // Per-module tally, in the order modules first appear.
  const byModule = useMemo(() => {
    const map = new Map<string, { correct: number; total: number }>();
    for (const r of result.results) {
      const entry = map.get(r.moduleTitle) ?? { correct: 0, total: 0 };
      entry.total += 1;
      if (r.correct) entry.correct += 1;
      map.set(r.moduleTitle, entry);
    }
    return [...map.entries()];
  }, [result]);

  const shown = result.results
    .map((r, i) => ({ r, i }))
    .filter(({ r }) => filter === "all" || !r.correct);

  return (
    <>
      <ExamHeader
        slug={slug}
        course={course}
        accent={accent}
        eyebrow={result.passed ? "Quiz passed" : "Quiz results"}
        title={course ? `${course.title} final quiz` : "Final quiz"}
      />

      <div className="mx-auto max-w-5xl px-6 py-8">
        <div
          className={`flex flex-col items-center gap-6 rounded-2xl border p-6 sm:flex-row sm:p-8 ${
            result.passed ? "border-emerald-500/30 bg-emerald-500/10" : "border-amber-500/30 bg-amber-500/10"
          }`}
        >
          <ScoreRing score={result.score} passed={result.passed} />
          <div className="text-center sm:text-left">
            <div className={`text-2xl font-bold ${result.passed ? "text-emerald-300" : "text-amber-300"}`}>
              {result.passed ? "You passed the final quiz." : `Not quite — you need ${PASS_PERCENT}%+ to pass.`}
            </div>
            <p className="mt-2 text-[#9aa3b2]">
              {result.passed
                ? result.courseNewlyCompleted
                  ? "This course is now marked complete."
                  : `Course already completed — best score is now ${Math.round(result.bestScore * 100)}%.`
                : "Review what you missed below, then retake the quiz whenever you're ready. It's a fresh set of questions each time."}
            </p>
            <p className="mt-1 text-sm text-[#898781]">
              {correctCount} of {result.results.length} correct
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              <button
                onClick={onRetake}
                className="rounded-lg bg-[#7c6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0]"
              >
                Retake quiz
              </button>
              <Link to={`/courses/${slug}`} className="text-sm text-[#a99dff] hover:underline">
                Back to the course
              </Link>
            </div>
          </div>
        </div>

        {byModule.length > 1 && (
          <section className="mt-8">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">By module</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {byModule.map(([title, { correct, total }]) => {
                const pct = (correct / total) * 100;
                const good = pct >= PASS_PERCENT;
                return (
                  <div key={title} className="rounded-xl border border-[#2a3040] bg-[#141821] p-3.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="truncate text-sm font-medium text-[#e6e8ec]">{title}</span>
                      <span className={`shrink-0 text-xs ${good ? "text-emerald-400" : "text-amber-400"}`}>
                        {correct}/{total}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#1b2029]">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: good ? "#34d399" : "#fbbf24" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <section className="mt-10">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-[#e6e8ec]">Review your answers</h2>
            <div className="flex gap-1.5">
              {(
                [
                  ["missed", `Missed (${missed})`],
                  ["all", `All (${result.results.length})`],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  aria-pressed={filter === key}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                    filter === key
                      ? "border-[#7c6cff]/40 bg-[#7c6cff]/15 text-[#a99dff]"
                      : "border-[#2a3040] text-[#9aa3b2] hover:text-[#e6e8ec]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {shown.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[#2a3040] p-8 text-center text-[#9aa3b2]">
              Nothing missed — every answer was correct.
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {shown.map(({ r, i }) => (
                <article
                  key={r.id}
                  className={`flex gap-4 rounded-xl border p-4 ${
                    r.correct ? "border-emerald-500/25 bg-emerald-500/5" : "border-red-500/30 bg-red-500/5"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                      r.correct ? "bg-emerald-500 text-[#06281c]" : "bg-red-500 text-[#2b0a0a]"
                    }`}
                  >
                    {r.correct ? "✓" : "✕"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#898781]">
                      <span>Question {i + 1}</span>
                      <span className="rounded-full border border-[#2a3040] px-2 py-0.5">{r.moduleTitle}</span>
                    </div>
                    <p className="mt-1.5 font-medium leading-relaxed text-[#e6e8ec]">
                      <InlineText text={r.prompt} />
                    </p>
                    <p className={`mt-2 text-sm ${r.correct ? "text-emerald-300" : "text-red-300"}`}>
                      {r.correct ? (
                        "Correct"
                      ) : (
                        <>
                          Correct answer: <InlineText text={r.correctAnswer} />
                        </>
                      )}
                    </p>
                    {r.explanation && (
                      <p className="mt-1.5 text-sm leading-relaxed text-[#9aa3b2]">
                        <InlineText text={r.explanation} />
                      </p>
                    )}
                    <Link to={`/lesson/${r.lessonSlug}`} className="mt-2 inline-block text-xs text-[#a99dff] hover:underline">
                      Review “{r.lessonTitle}” →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
