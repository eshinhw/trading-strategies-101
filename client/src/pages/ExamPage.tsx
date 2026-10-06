import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCourse, fetchExam, fetchExamStatus, submitExam } from "../api";
import type { Course } from "../types/course";
import type { ExamQuestion, ExamAnswerSubmission, ExamGradeResponse, ExamStatus } from "../types/exam";
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

type Stage = "intro" | "taking" | "review";

// An attempt in progress survives a refresh (or an accidental back-navigation) for as long as the tab lives:
// the question set is random per fetch, so the questions themselves are stored with the answers.
interface SavedExam {
  questions: ExamQuestion[];
  answers: Record<string, number>;
  flags: string[];
  index: number;
  stage: Stage;
}
const storageKey = (slug: string) => `exam:${slug}`;

function loadSaved(slug: string): SavedExam | null {
  try {
    const raw = sessionStorage.getItem(storageKey(slug));
    if (!raw) return null;
    const saved = JSON.parse(raw) as SavedExam;
    return Array.isArray(saved.questions) && saved.questions.length > 0 ? saved : null;
  } catch {
    return null;
  }
}
function persist(slug: string, saved: SavedExam | null) {
  try {
    if (saved) sessionStorage.setItem(storageKey(slug), JSON.stringify(saved));
    else sessionStorage.removeItem(storageKey(slug));
  } catch {
    // storage unavailable (private mode, quota) — the attempt just won't survive a refresh
  }
}

function FlagIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 17V3.5M5 4h9l-1.8 3L14 10H5" />
    </svg>
  );
}

export function ExamPage() {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [status, setStatus] = useState<ExamStatus | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [stage, setStage] = useState<Stage>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flags, setFlags] = useState<Set<string>>(new Set());
  const [result, setResult] = useState<ExamGradeResponse | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const accent = slug ? courseAccent(slug) : "#7c6cff";

  function loadFreshExam(skipIntro = false) {
    if (!slug) return;
    persist(slug, null);
    setQuestions(null);
    setError(null);
    setCurrentIndex(0);
    setAnswers({});
    setFlags(new Set());
    setResult(null);
    setStage(skipIntro ? "taking" : "intro");
    fetchExam(slug)
      .then(setQuestions)
      .catch((e) => setError(e.message));
  }

  useEffect(() => {
    if (!slug) return;
    const saved = loadSaved(slug);
    if (saved) {
      setQuestions(saved.questions);
      setAnswers(saved.answers);
      setFlags(new Set(saved.flags));
      setCurrentIndex(Math.min(saved.index, saved.questions.length - 1));
      setStage(saved.stage === "intro" ? "taking" : saved.stage);
      setResult(null);
      setError(null);
    } else {
      loadFreshExam(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    fetchCourse(slug)
      .then(setCourse)
      .catch(() => {});
    fetchExamStatus(slug)
      .then(setStatus)
      .catch(() => {});
  }, [slug]);

  // Keep the attempt saved while it's in progress.
  useEffect(() => {
    if (!slug || !questions || result || stage === "intro") return;
    persist(slug, { questions, answers, flags: [...flags], index: currentIndex, stage });
  }, [slug, questions, answers, flags, currentIndex, stage, result]);

  const allAnswered = useMemo(() => (questions ?? []).every((q) => isAnswered(answers[q.id])), [questions, answers]);
  const answeredCount = useMemo(
    () => (questions ?? []).filter((q) => isAnswered(answers[q.id])).length,
    [questions, answers],
  );

  // Keyboard: A–D picks a choice while answering.
  useEffect(() => {
    if (!questions || result || stage !== "taking") return;
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
  }, [questions, result, stage, currentIndex]);

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
      persist(slug, null);
      setResult(res);
      window.scrollTo({ top: 0 });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  function toggleFlag(id: string) {
    setFlags((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
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
        <ExamReport result={result} slug={slug!} course={course} accent={accent} onRetake={() => loadFreshExam(true)} />
      </div>
    );
  }

  const title = course ? `${course.title} final quiz` : "Final quiz";

  if (stage === "intro") {
    // How many questions come from each module, in the order modules first appear.
    const perModule = new Map<string, number>();
    for (const q of questions) perModule.set(q.moduleTitle, (perModule.get(q.moduleTitle) ?? 0) + 1);
    const best = status?.progress?.bestScore;

    return (
      <div style={{ "--accent": accent } as CSSProperties}>
        <ExamHeader slug={slug!} course={course} accent={accent} eyebrow="Final quiz" title={title}>
          <p className="mt-3 max-w-2xl leading-relaxed text-[#9aa3b2]">
            The capstone for this course: one no-hints test across every module.
          </p>
        </ExamHeader>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 py-8 md:grid-cols-[1fr_1fr]">
          <section className="rounded-2xl border border-[#2a3040] bg-[#141821] p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">What to expect</h2>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-[#c3c9d4]">
              {[
                `${questions.length} multiple-choice questions, drawn across the whole course`,
                `You need ${PASS_PERCENT}% to pass`,
                "No hints along the way. Answers and explanations appear after you submit",
                "Go back and change any answer, or flag a question to return to it",
                "A fresh set of questions each attempt",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold"
                    style={{ borderColor: `${accent}66`, background: `${accent}22`, color: accent }}
                  >
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            {best !== null && best !== undefined && (
              <p className="mt-5 rounded-lg border border-[#2a3040] bg-[#0e1117]/70 px-3 py-2 text-sm text-[#9aa3b2]">
                Your best so far: <span className="font-semibold text-[#e6e8ec]">{Math.round(best * 100)}%</span>
                {status?.progress && ` · ${status.progress.attempts} attempt${status.progress.attempts === 1 ? "" : "s"}`}
              </p>
            )}
          </section>

          <section className="rounded-2xl border border-[#2a3040] bg-[#141821] p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Covered in this attempt</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {[...perModule.entries()].map(([moduleTitle, count]) => (
                <li key={moduleTitle} className="flex items-center justify-between gap-3 rounded-lg border border-[#2a3040] bg-[#0e1117]/70 px-3 py-2 text-sm">
                  <span className="truncate text-[#e6e8ec]">{moduleTitle}</span>
                  <span className="shrink-0 text-xs text-[#898781]">
                    {count} question{count === 1 ? "" : "s"}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setStage("taking")}
              className="mt-6 w-full rounded-lg px-5 py-3 text-sm font-semibold text-[#0b0d12] transition hover:brightness-110"
              style={{ background: accent }}
            >
              Start the quiz →
            </button>
            <Link to={`/courses/${slug}`} className="mt-3 block text-center text-sm text-[#898781] hover:text-[#e6e8ec]">
              Not yet, back to the course
            </Link>
          </section>
        </div>
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
      <ExamHeader slug={slug!} course={course} accent={accent} eyebrow="Final quiz" title={title}>
        <p className="mt-3 max-w-2xl leading-relaxed text-[#9aa3b2]">
          Nothing is graded until you submit, so go back and change anything before then. Your answers are kept if you
          refresh this page.
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          <Chip>{questions.length} questions</Chip>
          <Chip>{PASS_PERCENT}% to pass</Chip>
          <Chip>Answers revealed at the end</Chip>
        </div>
      </ExamHeader>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[1fr_220px]">
        {stage === "review" ? (
          <section className="relative overflow-hidden rounded-2xl border border-[#2a3040] bg-gradient-to-b from-[#181c28] to-[#12151d] p-5 sm:p-6">
            <h2 className="text-xl font-bold text-[#e6e8ec]">Review and submit</h2>
            <p className="mt-1 text-sm text-[#9aa3b2]">
              {allAnswered
                ? "Every question is answered. Revisit anything you flagged, or submit when you're ready."
                : `${remaining} question${remaining === 1 ? "" : "s"} still need an answer before you can submit.`}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                ["Answered", `${answeredCount}/${questions.length}`, "#34d399"],
                ["Unanswered", String(remaining), remaining > 0 ? "#fbbf24" : "#898781"],
                ["Flagged", String(flags.size), flags.size > 0 ? accent : "#898781"],
              ].map(([label, value, color]) => (
                <div key={label} className="rounded-xl border border-[#2a3040] bg-[#0e1117]/70 px-3 py-3">
                  <div className="text-2xl font-bold" style={{ color }}>
                    {value}
                  </div>
                  <div className="mt-0.5 text-xs text-[#898781]">{label}</div>
                </div>
              ))}
            </div>

            {questions.some((x) => !isAnswered(answers[x.id]) || flags.has(x.id)) && (
              <ul className="mt-5 flex flex-col gap-2">
                {questions.map((x, i) => {
                  const unanswered = !isAnswered(answers[x.id]);
                  const flagged = flags.has(x.id);
                  if (!unanswered && !flagged) return null;
                  return (
                    <li key={x.id}>
                      <button
                        onClick={() => {
                          setCurrentIndex(i);
                          setStage("taking");
                        }}
                        className="group flex w-full items-center gap-3 rounded-lg border border-[#2a3040] bg-[#0e1117]/70 px-3 py-2.5 text-left text-sm transition hover:border-[var(--accent)]"
                      >
                        <span className="w-20 shrink-0 font-medium text-[#e6e8ec]">Question {i + 1}</span>
                        <span className="min-w-0 flex-1 truncate text-[#898781]">{x.moduleTitle}</span>
                        {unanswered && (
                          <span className="shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-400">
                            Unanswered
                          </span>
                        )}
                        {flagged && (
                          <span
                            className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-medium"
                            style={{ borderColor: `${accent}55`, background: `${accent}18`, color: accent }}
                          >
                            Flagged
                          </span>
                        )}
                        <span aria-hidden="true" className="shrink-0 text-[#a99dff] transition group-hover:translate-x-0.5">
                          →
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <button onClick={() => setStage("taking")} className="text-sm text-[#a99dff] hover:underline">
                ← Back to the questions
              </button>
              <button
                onClick={handleSubmit}
                disabled={!allAnswered || submitting}
                className="rounded-lg bg-[#7c6cff] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
              >
                {submitting ? "Grading…" : "Submit quiz"}
              </button>
            </div>
            {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          </section>
        ) : (
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

              <div className="flex items-center justify-between gap-3">
                <span className="inline-block rounded-full border border-[#2a3040] bg-[#0e1117]/70 px-2.5 py-0.5 text-xs text-[#9aa3b2]">
                  {q.moduleTitle}
                </span>
                <button
                  onClick={() => toggleFlag(q.id)}
                  aria-pressed={flags.has(q.id)}
                  className={`flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition ${
                    flags.has(q.id)
                      ? "border-[var(--accent)] bg-[var(--accent)]/15 text-[var(--accent)]"
                      : "border-[#2a3040] text-[#898781] hover:text-[#e6e8ec]"
                  }`}
                >
                  <FlagIcon filled={flags.has(q.id)} />
                  {flags.has(q.id) ? "Flagged" : "Flag for review"}
                </button>
              </div>

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
                    onClick={() => setStage("review")}
                    className="rounded-lg bg-[#7c6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0]"
                  >
                    Review and submit →
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
        )}

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-[#2a3040] bg-[#141821]/80 p-4">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Questions</h3>
            <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-8 lg:grid-cols-5">
              {questions.map((x, i) => {
                const answered = isAnswered(answers[x.id]);
                const current = stage === "taking" && i === currentIndex;
                const flagged = flags.has(x.id);
                return (
                  <button
                    key={x.id}
                    onClick={() => {
                      setCurrentIndex(i);
                      setStage("taking");
                    }}
                    aria-label={`Question ${i + 1}${answered ? ", answered" : ", not answered"}${flagged ? ", flagged" : ""}`}
                    aria-current={current ? "step" : undefined}
                    className="relative flex h-9 items-center justify-center rounded-lg border text-xs font-semibold transition hover:brightness-125"
                    style={{
                      borderColor: current ? accent : answered ? `${accent}55` : "#2a3040",
                      background: answered ? `${accent}26` : "transparent",
                      color: answered || current ? "#e6e8ec" : "#898781",
                      boxShadow: current ? `0 0 0 2px ${accent}40` : undefined,
                    }}
                  >
                    {i + 1}
                    {flagged && (
                      <span
                        className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full ring-2 ring-[#141821]"
                        style={{ background: "#fbbf24" }}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#898781]">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm" style={{ background: `${accent}66` }} /> Answered
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm border border-[#2a3040]" /> Open
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#fbbf24]" /> Flagged
              </span>
            </div>
            {stage === "taking" && (
              <button
                onClick={() => setStage("review")}
                className="mt-4 w-full rounded-lg border border-[#2a3040] px-3 py-2 text-xs font-medium text-[#c3c9d4] transition hover:border-[#7c6cff]/50 hover:text-[#e6e8ec]"
              >
                Review and submit
              </button>
            )}
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

  // The lessons behind the questions that were missed, most-missed first, so the review has a clear next step.
  const revisit = useMemo(() => {
    const map = new Map<string, { slug: string; title: string; moduleTitle: string; missed: number }>();
    for (const r of result.results) {
      if (r.correct) continue;
      const entry = map.get(r.lessonSlug) ?? { slug: r.lessonSlug, title: r.lessonTitle, moduleTitle: r.moduleTitle, missed: 0 };
      entry.missed += 1;
      map.set(r.lessonSlug, entry);
    }
    return [...map.values()].sort((x, y) => y.missed - x.missed);
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

        {revisit.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Lessons to revisit</h2>
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {revisit.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={`/lesson/${l.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-[#2a3040] bg-[#141821] px-4 py-3 transition duration-200 hover:-translate-y-px hover:border-[var(--accent)]"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium text-[#e6e8ec]">{l.title}</span>
                      <span className="block truncate text-xs text-[#898781]">{l.moduleTitle}</span>
                    </span>
                    <span className="shrink-0 rounded-full border border-red-500/30 bg-red-500/10 px-2 py-0.5 text-[11px] font-medium text-red-300">
                      {l.missed} missed
                    </span>
                    <span aria-hidden="true" className="shrink-0 text-[#a99dff] transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

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
