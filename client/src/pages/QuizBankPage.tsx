import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchBankCourses, fetchBankQuestions, fetchBankQuestionsByIds } from "../api";
import type { BankCourse, BankQuestion, QuestionKind } from "../types/practice";
import { QuizChoiceOption } from "../components/QuizChoiceOption";
import { QuizFeedback } from "../components/QuizFeedback";
import { AnswerProgressBar } from "../components/AnswerProgressBar";
import { InlineText } from "../components/InlineText";
import { ACCENT, COURSE_FAMILIES, courseAccent } from "../lib/courseVisuals";

// Open practice over every lesson's knowledge-check questions: pick courses and a session length, answer with instant
// explanations, then review what you missed. Nothing here touches course progress; the only thing kept is a running
// tally (questions answered, accuracy, best streak) in this browser.

type Phase = "setup" | "session" | "summary";

const LENGTHS = [10, 20, 30] as const;
const STATS_KEY = "quizbank:stats";

// Two kinds of question share the bank: concept checks test an idea directly, calculations are short business
// scenarios where you work out a number before choosing it. A session draws from one kind or both.
type KindFilter = QuestionKind | "all";
const KIND_KEY = "quizbank:kind";
const KIND_CHOICES: { id: KindFilter; label: string; blurb: string }[] = [
  { id: "concept", label: "Concept checks", blurb: "True/false and multiple choice that test an idea directly." },
  { id: "calc", label: "Calculations", blurb: "A short business scenario. Work out the number, then pick it." },
  { id: "all", label: "Mixed", blurb: "Both kinds, about one calculation for every two concept checks." },
];
const KIND_NAME: Record<QuestionKind, string> = { concept: "Concept check", calc: "Calculation" };
const isKind = (v: unknown): v is KindFilter => v === "all" || v === "concept" || v === "calc";
function loadKind(): KindFilter {
  try {
    const raw = localStorage.getItem(KIND_KEY);
    return isKind(raw) ? raw : "all";
  } catch {
    return "all";
  }
}

interface CourseTally {
  answered: number;
  correct: number;
}
interface BankStats {
  answered: number;
  correct: number;
  bestStreak: number;
  sessions: number;
  byCourse: Record<string, CourseTally>;
  byKind: Record<QuestionKind, CourseTally>;
}
const EMPTY_STATS: BankStats = {
  answered: 0,
  correct: 0,
  bestStreak: 0,
  sessions: 0,
  byCourse: {},
  byKind: { concept: { answered: 0, correct: 0 }, calc: { answered: 0, correct: 0 } },
};

function loadStats(): BankStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return EMPTY_STATS;
    const parsed = JSON.parse(raw) as Partial<BankStats>;
    const byCourse: Record<string, CourseTally> = {};
    for (const [slug, t] of Object.entries(parsed.byCourse ?? {})) {
      byCourse[slug] = { answered: Number(t?.answered) || 0, correct: Number(t?.correct) || 0 };
    }
    const kindTally = (k: QuestionKind): CourseTally => ({
      answered: Number(parsed.byKind?.[k]?.answered) || 0,
      correct: Number(parsed.byKind?.[k]?.correct) || 0,
    });
    return {
      answered: Number(parsed.answered) || 0,
      correct: Number(parsed.correct) || 0,
      bestStreak: Number(parsed.bestStreak) || 0,
      sessions: Number(parsed.sessions) || 0,
      byCourse,
      byKind: { concept: kindTally("concept"), calc: kindTally("calc") },
    };
  } catch {
    return EMPTY_STATS;
  }
}
function saveStats(stats: BankStats) {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // storage unavailable — the tally just won't persist
  }
}

// Questions answered wrongly and not yet answered correctly since, so they can be practised on their own.
const MISSED_KEY = "quizbank:missed";
const MISSED_CAP = 300;
function loadMissed(): string[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(MISSED_KEY) ?? "[]") as unknown;
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}
function saveMissed(ids: string[]) {
  try {
    localStorage.setItem(MISSED_KEY, JSON.stringify(ids));
  } catch {
    // storage unavailable — the list just won't persist
  }
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const accent = ACCENT.derivatives;

function BankHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
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
      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#898781]">
          <Link to="/practice" className="hover:text-[#e6e8ec]">
            Practice
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#9aa3b2]">Quiz Bank</span>
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

export function QuizBankPage() {
  const [searchParams] = useSearchParams();
  const [phase, setPhase] = useState<Phase>("setup");
  const [bankCourses, setBankCourses] = useState<BankCourse[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Empty selection means "every course".
  const [selected, setSelected] = useState<Set<string>>(new Set());
  // Optional: narrow the chosen courses to specific modules (empty means every module).
  const [selectedModules, setSelectedModules] = useState<Set<string>>(new Set());
  const [count, setCount] = useState<number>(10);
  const [kind, setKindState] = useState<KindFilter>(() => {
    const fromUrl = searchParams.get("kind");
    return isKind(fromUrl) ? fromUrl : loadKind();
  });
  const [starting, setStarting] = useState(false);
  const [startError, setStartError] = useState<string | null>(null);

  const [questions, setQuestions] = useState<BankQuestion[]>([]);
  const [requestedCount, setRequestedCount] = useState(10);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [streak, setStreak] = useState(0);
  const [sessionBest, setSessionBest] = useState(0);
  const [stats, setStats] = useState<BankStats>(loadStats);
  const [missedIds, setMissedIds] = useState<string[]>(loadMissed);

  useEffect(() => {
    fetchBankCourses()
      .then((courses) => {
        setBankCourses(courses);
        // ?course=options or ?courses=options,fx preselects courses (the lesson pages link here)
        const wanted = (searchParams.get("courses") ?? searchParams.get("course") ?? "")
          .split(",")
          .map((s) => s.trim())
          .filter((s) => courses.some((c) => c.slug === s));
        const wantedModules = (searchParams.get("modules") ?? searchParams.get("module") ?? "")
          .split(",")
          .map((s) => s.trim())
          .filter((m) => courses.some((c) => c.modules.some((x) => x.slug === m)));
        // a module link selects its course too, even if the link didn't name one
        const courseOfModules = courses.filter((c) => c.modules.some((m) => wantedModules.includes(m.slug))).map((c) => c.slug);
        const allWanted = [...new Set([...wanted, ...courseOfModules])];
        if (allWanted.length > 0) setSelected(new Set(allWanted));
        if (wantedModules.length > 0) setSelectedModules(new Set(wantedModules));
      })
      .catch((e) => setLoadError(e.message));
    // the query string only seeds the initial selection
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // How many questions of the chosen kind a course or module holds.
  const kindCount = (x: { questionCount: number; conceptCount: number; calcCount: number }) =>
    kind === "all" ? x.questionCount : kind === "calc" ? x.calcCount : x.conceptCount;

  // Totals per kind across the whole bank, for the type picker.
  const totals = useMemo(() => {
    const t = { concept: 0, calc: 0, all: 0 };
    for (const c of bankCourses ?? []) {
      t.concept += c.conceptCount;
      t.calc += c.calcCount;
      t.all += c.questionCount;
    }
    return t;
  }, [bankCourses]);

  const available = useMemo(() => {
    if (!bankCourses) return 0;
    const inScope = bankCourses.filter((c) => selected.size === 0 || selected.has(c.slug));
    if (selectedModules.size === 0) return inScope.reduce((n, c) => n + kindCount(c), 0);
    return inScope.reduce(
      (n, c) => n + c.modules.filter((m) => selectedModules.has(m.slug)).reduce((k, m) => k + kindCount(m), 0),
      0,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bankCourses, selected, selectedModules, kind]);

  // Switching kind drops any chosen course or module that has none of that kind, so the selection never points at nothing.
  function setKind(next: KindFilter) {
    setKindState(next);
    try {
      localStorage.setItem(KIND_KEY, next);
    } catch {
      // storage unavailable — the choice just won't persist
    }
    if (!bankCourses) return;
    const has = (x: { questionCount: number; conceptCount: number; calcCount: number }) =>
      next === "all" ? x.questionCount > 0 : next === "calc" ? x.calcCount > 0 : x.conceptCount > 0;
    setSelected((prev) => new Set([...prev].filter((slug) => has(bankCourses.find((c) => c.slug === slug) ?? { questionCount: 0, conceptCount: 0, calcCount: 0 }))));
    setSelectedModules((prev) => {
      const ok = new Set(bankCourses.flatMap((c) => c.modules.filter(has).map((m) => m.slug)));
      return new Set([...prev].filter((slug) => ok.has(slug)));
    });
  }

  function toggleCourse(slug: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
    // dropping a course drops any modules chosen from it
    setSelectedModules((prev) => {
      const course = bankCourses?.find((c) => c.slug === slug);
      if (!course || prev.size === 0) return prev;
      const next = new Set(prev);
      for (const m of course.modules) next.delete(m.slug);
      return next;
    });
  }

  function toggleModule(slug: string) {
    setSelectedModules((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  function beginSession(qs: BankQuestion[], asked: number) {
    setQuestions(qs);
    setRequestedCount(asked);
    setIndex(0);
    setAnswers({});
    setStreak(0);
    setSessionBest(0);
    setPhase("session");
    window.scrollTo({ top: 0 });
  }

  async function start() {
    setStarting(true);
    setStartError(null);
    try {
      const qs = await fetchBankQuestions([...selected], count, [...selectedModules], kind);
      if (qs.length === 0) setStartError("There are no questions for that selection yet.");
      else beginSession(qs, count);
    } catch (e) {
      setStartError(e instanceof Error ? e.message : "Couldn't load questions.");
    } finally {
      setStarting(false);
    }
  }

  async function startMissed() {
    setStarting(true);
    setStartError(null);
    try {
      const qs = await fetchBankQuestionsByIds(missedIds, count);
      if (qs.length === 0) {
        // none of them exist any more (the lesson was reworked), so there is nothing left to practise
        setMissedIds([]);
        saveMissed([]);
        setStartError("Those questions are no longer available.");
      } else {
        // the list is the whole set, so there is no "asked for more than were available" to report
        beginSession(qs, qs.length);
      }
    } catch (e) {
      setStartError(e instanceof Error ? e.message : "Couldn't load questions.");
    } finally {
      setStarting(false);
    }
  }

  // From the results: another session on just one module the learner struggled with.
  async function startFocus(courseSlug: string, moduleSlug: string) {
    setStarting(true);
    setStartError(null);
    try {
      const qs = await fetchBankQuestions([courseSlug], 10, [moduleSlug], kind);
      if (qs.length === 0) setStartError("There are no questions for that module.");
      else beginSession(qs, 10);
    } catch (e) {
      setStartError(e instanceof Error ? e.message : "Couldn't load questions.");
    } finally {
      setStarting(false);
    }
  }

  function toggleFamily(slugs: string[]) {
    setSelected((prev) => {
      const next = new Set(prev);
      const allOn = slugs.every((s) => next.has(s));
      for (const s of slugs) {
        if (allOn) next.delete(s);
        else next.add(s);
      }
      return next;
    });
  }

  const q = questions[index];
  const answered = q ? answers[q.id] !== undefined : false;

  function pick(choiceIndex: number) {
    if (!q || answers[q.id] !== undefined) return;
    const correct = choiceIndex === q.correctIndex;
    setAnswers((prev) => ({ ...prev, [q.id]: choiceIndex }));
    const nextStreak = correct ? streak + 1 : 0;
    setStreak(nextStreak);
    setSessionBest((b) => Math.max(b, nextStreak));
    setStats((prev) => {
      const tally = prev.byCourse[q.courseSlug] ?? { answered: 0, correct: 0 };
      const next = {
        ...prev,
        answered: prev.answered + 1,
        correct: prev.correct + (correct ? 1 : 0),
        bestStreak: Math.max(prev.bestStreak, nextStreak),
        byKind: {
          ...prev.byKind,
          [q.kind]: { answered: prev.byKind[q.kind].answered + 1, correct: prev.byKind[q.kind].correct + (correct ? 1 : 0) },
        },
        byCourse: {
          ...prev.byCourse,
          [q.courseSlug]: { answered: tally.answered + 1, correct: tally.correct + (correct ? 1 : 0) },
        },
      };
      saveStats(next);
      return next;
    });
    setMissedIds((prev) => {
      const without = prev.filter((id) => id !== q.id);
      const next = correct ? without : [q.id, ...without].slice(0, MISSED_CAP);
      saveMissed(next);
      return next;
    });
  }

  function finish() {
    setStats((prev) => {
      const next = { ...prev, sessions: prev.sessions + 1 };
      saveStats(next);
      return next;
    });
    setPhase("summary");
    window.scrollTo({ top: 0 });
  }

  function next() {
    if (index < questions.length - 1) setIndex(index + 1);
    else finish();
  }

  // Keyboard while answering: A–D picks a choice, Enter goes on once answered.
  useEffect(() => {
    if (phase !== "session" || !q) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "TEXTAREA" || target.tagName === "SELECT")) return;
      if (e.key === "Enter") {
        if (target && (target.tagName === "BUTTON" || target.tagName === "A")) return;
        if (answers[q.id] !== undefined) {
          e.preventDefault();
          if (index < questions.length - 1) setIndex(index + 1);
          else finish();
        }
        return;
      }
      const letter = e.key.length === 1 ? e.key.toLowerCase().charCodeAt(0) - 97 : -1;
      if (letter >= 0 && letter < q.choices.length) pick(letter);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // pick/finish read the latest state through the dependencies below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, q, answers, index, questions.length, streak]);

  // ---------- setup ----------
  if (phase === "setup") {
    const accuracy = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : null;
    return (
      <div style={{ "--accent": accent } as CSSProperties}>
        <BankHeader eyebrow="Practice" title="Quiz Bank">
          <p className="mt-3 max-w-2xl leading-relaxed text-[#9aa3b2]">
            Concept checks and calculation problems from every lesson. Nothing here affects your course progress.
          </p>
          {stats.answered > 0 && (
            <div className="mt-5 flex flex-wrap gap-6">
              {[
                [stats.answered, "answered"],
                [accuracy === null ? "—" : `${accuracy}%`, "accuracy"],
                [stats.bestStreak, "best streak"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold leading-none text-[#e6e8ec]">{value}</div>
                  <div className="mt-1 text-xs text-[#898781]">{label}</div>
                </div>
              ))}
            </div>
          )}
        </BankHeader>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[1fr_300px]">
          <section>
            {missedIds.length > 0 && (
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-4">
                <div>
                  <div className="font-semibold text-amber-100">
                    {missedIds.length} question{missedIds.length === 1 ? "" : "s"} to revisit
                  </div>
                  <p className="mt-0.5 text-sm text-[#9aa3b2]">
                    Get one right and it drops off the list.
                  </p>
                </div>
                <button
                  onClick={startMissed}
                  disabled={starting}
                  className="shrink-0 rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-[#2b1a02] transition hover:brightness-110 disabled:opacity-60"
                >
                  {starting ? "Loading…" : "Practice them"}
                </button>
              </div>
            )}
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Question type</h2>
            <div role="radiogroup" aria-label="Question type" className="mt-3 mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {KIND_CHOICES.map((k) => {
                const on = kind === k.id;
                const total = totals[k.id];
                const t = k.id === "all" ? null : stats.byKind[k.id];
                const pct = t && t.answered >= 3 ? Math.round((t.correct / t.answered) * 100) : null;
                return (
                  <button
                    key={k.id}
                    role="radio"
                    aria-checked={on}
                    onClick={() => setKind(k.id)}
                    disabled={!bankCourses || total === 0}
                    className={`flex flex-col rounded-2xl border p-4 text-left transition hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50 ${
                      on ? "border-[#7c6cff]/70 bg-[#7c6cff]/12 shadow-[0_0_0_1px_#7c6cff40]" : "border-[#2a3040] bg-[#141821] hover:border-[#3a4150]"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2 font-semibold text-[#e6e8ec]">
                        <span
                          aria-hidden="true"
                          className={`flex h-4 w-4 items-center justify-center rounded-full border ${on ? "border-[#7c6cff]" : "border-[#4a5263]"}`}
                        >
                          {on && <span className="h-2 w-2 rounded-full bg-[#a99dff]" />}
                        </span>
                        {k.label}
                      </span>
                      {bankCourses && <span className="text-xs tabular-nums text-[#898781]">{total.toLocaleString()}</span>}
                    </span>
                    <span className="mt-1.5 text-xs leading-relaxed text-[#9aa3b2]">{k.blurb}</span>
                    {pct !== null && (
                      <span className={`mt-2 text-[11px] font-medium ${pct >= 70 ? "text-emerald-400" : "text-amber-400"}`}>
                        Your accuracy: {pct}%
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Pick your courses</h2>
              <button
                onClick={() => setSelected(new Set())}
                aria-pressed={selected.size === 0}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                  selected.size === 0
                    ? "border-[#7c6cff]/50 bg-[#7c6cff]/15 text-[#e6e8ec]"
                    : "border-[#2a3040] text-[#9aa3b2] hover:text-[#e6e8ec]"
                }`}
              >
                All courses
              </button>
            </div>

            {loadError && <p className="mt-4 text-red-400">{loadError}</p>}
            {!bankCourses && !loadError && <p className="mt-4 text-[#898781]">Loading courses…</p>}

            {bankCourses && (
              <div className="mt-4 flex flex-col gap-5">
                {COURSE_FAMILIES.map((family) => {
                  const members = family.slugs
                    .map((slug) => bankCourses.find((c) => c.slug === slug))
                    .filter((c): c is BankCourse => Boolean(c));
                  if (members.length === 0) return null;
                  return (
                    <div key={family.name}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: family.accent }}>
                          <span className="h-2 w-2 rounded-full" style={{ background: family.accent }} />
                          {family.name}
                        </div>
                        <button
                          onClick={() => toggleFamily(members.filter((m) => kindCount(m) > 0).map((m) => m.slug))}
                          className="text-xs text-[#898781] transition hover:text-[#e6e8ec]"
                        >
                          {members.filter((m) => kindCount(m) > 0).every((m) => selected.has(m.slug)) ? "Clear" : "Select all"}
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {members.map((c) => {
                          const on = selected.has(c.slug);
                          const color = courseAccent(c.slug);
                          const none = kindCount(c) === 0;
                          return (
                            <button
                              key={c.slug}
                              onClick={() => toggleCourse(c.slug)}
                              aria-pressed={on}
                              disabled={none}
                              title={none ? `No ${kind === "calc" ? "calculation" : "concept"} questions in ${c.title} yet` : undefined}
                              className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                              style={{
                                borderColor: on ? `${color}99` : "#2a3040",
                                background: on ? `${color}22` : "#141821",
                                color: on ? "#e6e8ec" : "#c3c9d4",
                              }}
                            >
                              {c.title}
                              <span className="text-xs text-[#898781]">{kindCount(c)}</span>
                              {(() => {
                                const t = stats.byCourse[c.slug];
                                if (!t || t.answered < 3) return null;
                                const pct = Math.round((t.correct / t.answered) * 100);
                                return (
                                  <span
                                    className={`rounded-full px-1.5 py-px text-[10px] font-semibold ${
                                      pct >= 70 ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"
                                    }`}
                                    title={`${t.correct} of ${t.answered} answered correctly`}
                                  >
                                    {pct}%
                                  </span>
                                );
                              })()}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {bankCourses && selected.size > 0 && selected.size <= 3 && (
              <div className="mt-6 rounded-2xl border border-[#2a3040] bg-[#141821]/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">
                    Narrow to modules <span className="font-normal normal-case tracking-normal">(optional)</span>
                  </h3>
                  {selectedModules.size > 0 && (
                    <button onClick={() => setSelectedModules(new Set())} className="text-xs text-[#a99dff] hover:underline">
                      Use every module
                    </button>
                  )}
                </div>
                <div className="mt-3 flex flex-col gap-4">
                  {bankCourses
                    .filter((c) => selected.has(c.slug))
                    .map((c) => (
                      <div key={c.slug}>
                        {selected.size > 1 && <div className="mb-1.5 text-xs text-[#9aa3b2]">{c.title}</div>}
                        <div className="flex flex-wrap gap-1.5">
                          {c.modules.filter((m) => kindCount(m) > 0).map((m) => {
                            const on = selectedModules.has(m.slug);
                            const color = courseAccent(c.slug);
                            return (
                              <button
                                key={m.slug}
                                onClick={() => toggleModule(m.slug)}
                                aria-pressed={on}
                                className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition"
                                style={{
                                  borderColor: on ? `${color}99` : "#2a3040",
                                  background: on ? `${color}22` : "transparent",
                                  color: on ? "#e6e8ec" : "#9aa3b2",
                                }}
                              >
                                {m.title}
                                <span className="text-[#898781]">{kindCount(m)}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </section>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-[#2a3040] bg-gradient-to-b from-[#181c28] to-[#12151d] p-5">
              <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Session</h2>
              <p className="mt-3 text-sm text-[#9aa3b2]">
                {selected.size === 0 ? "Every course" : `${selected.size} course${selected.size === 1 ? "" : "s"}`}
                {selectedModules.size > 0 ? `, ${selectedModules.size} module${selectedModules.size === 1 ? "" : "s"}` : ""} ·{" "}
                <span className="text-[#e6e8ec]">{available}</span>{" "}
                {kind === "calc" ? "calculation questions" : kind === "concept" ? "concept checks" : "questions"} available
              </p>

              <div className="mt-4 text-xs text-[#898781]">Length</div>
              <div role="radiogroup" aria-label="Session length" className="mt-1.5 flex gap-1.5">
                {LENGTHS.map((n) => (
                  <button
                    key={n}
                    role="radio"
                    aria-checked={count === n}
                    onClick={() => setCount(n)}
                    className={`flex-1 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                      count === n
                        ? "border-[#7c6cff]/60 bg-[#7c6cff]/20 text-[#e6e8ec]"
                        : "border-[#2a3040] text-[#9aa3b2] hover:text-[#e6e8ec]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>

              <button
                onClick={start}
                disabled={starting || !bankCourses || available === 0}
                className="mt-5 w-full rounded-lg px-5 py-3 text-sm font-semibold text-[#0b0d12] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                style={{ background: accent }}
              >
                {starting ? "Loading…" : "Start the session →"}
              </button>
              {startError && <p className="mt-3 text-sm text-red-400">{startError}</p>}
              <p className="mt-3 text-xs leading-relaxed text-[#898781]">
                Press A–D to answer, Enter for the next question. Drawn evenly across your courses.
              </p>
            </div>
          </aside>
        </div>

        {/* On a phone the Start button would sit below every course chip, so keep it in reach. */}
        <div className="h-20 lg:hidden" aria-hidden="true" />
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#2a3040] bg-[#0b0d12]/95 px-4 py-3 backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <div className="min-w-0 flex-1 text-xs text-[#9aa3b2]">
              <span className="font-semibold text-[#e6e8ec]">{count}</span>{" "}
              {kind === "calc" ? "calculations" : kind === "concept" ? "concept checks" : "questions"} ·{" "}
              {selected.size === 0 ? "every course" : `${selected.size} course${selected.size === 1 ? "" : "s"}`}
              {selectedModules.size > 0 ? `, ${selectedModules.size} module${selectedModules.size === 1 ? "" : "s"}` : ""}
            </div>
            <button
              onClick={start}
              disabled={starting || !bankCourses || available === 0}
              className="shrink-0 rounded-lg px-5 py-2.5 text-sm font-semibold text-[#0b0d12] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
              style={{ background: accent }}
            >
              {starting ? "Loading…" : "Start →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- session ----------
  if (phase === "session" && q) {
    const picked = answers[q.id];
    const correct = picked === q.correctIndex;
    const answeredCount = Object.keys(answers).length;
    const correctCount = questions.filter((x) => answers[x.id] === x.correctIndex).length;
    const color = courseAccent(q.courseSlug);
    return (
      <div style={{ "--accent": color } as CSSProperties}>
        <div className="mx-auto min-h-[640px] max-w-3xl px-6 py-8">
          <div className="flex items-center justify-between gap-3 text-sm">
            <Link to="/practice" className="text-[#898781] hover:text-[#e6e8ec]">
              ← Practice
            </Link>
            <button onClick={finish} className="text-[#a99dff] hover:underline">
              End session
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <h1 className="text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
              Question {index + 1} <span className="text-[#898781]">of {questions.length}</span>
            </h1>
            <div className="flex items-center gap-4 text-xs">
              <span className="text-[#898781]">
                {correctCount}/{answeredCount} correct
              </span>
              <span
                className={`rounded-full border px-2.5 py-0.5 font-medium transition ${
                  streak >= 3
                    ? "border-amber-400/50 bg-amber-400/15 text-amber-300"
                    : "border-[#2a3040] text-[#9aa3b2]"
                }`}
                aria-live="polite"
              >
                Streak {streak}
              </span>
            </div>
          </div>
          <div className="mt-2">
            <AnswerProgressBar
              accent={color}
              label={`Question ${index + 1} of ${questions.length}: ${correctCount} correct, ${answeredCount - correctCount} wrong so far`}
              statuses={questions.map((x, i) =>
                answers[x.id] === undefined ? (i === index ? "current" : "pending") : answers[x.id] === x.correctIndex ? "correct" : "wrong",
              )}
            />
          </div>

          <section className="relative mt-5 overflow-hidden rounded-2xl border border-[#2a3040] bg-gradient-to-b from-[#181c28] to-[#12151d] p-5 sm:p-6">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl"
              style={{ background: color, opacity: 0.14 }}
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                  style={{ borderColor: `${color}55`, background: `${color}18`, color }}
                >
                  {q.courseTitle}
                </span>
                <span className="rounded-full border border-[#2a3040] bg-[#0e1117]/70 px-2.5 py-0.5 text-xs text-[#9aa3b2]">
                  {q.moduleTitle}
                </span>
                <span
                  className={`ml-auto rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                    q.kind === "calc"
                      ? "border-sky-400/40 bg-sky-400/10 text-sky-300"
                      : "border-[#2a3040] bg-transparent text-[#9aa3b2]"
                  }`}
                >
                  {KIND_NAME[q.kind]}
                </span>
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
                    isSelected={picked === ci}
                    isCorrectChoice={ci === q.correctIndex}
                    isChecked={answered}
                    onSelect={() => pick(ci)}
                  />
                ))}
              </div>

              {answered && (
                <>
                  <QuizFeedback correct={correct}>
                    <span className="font-medium">{correct ? "Correct." : "Not quite."}</span>{" "}
                    <span className="text-[#9aa3b2]">
                      <InlineText text={q.explanation} />
                    </span>
                  </QuizFeedback>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <Link to={`/lesson/${q.lessonSlug}`} className="text-xs text-[#a99dff] hover:underline">
                      Review “{q.lessonTitle}” →
                    </Link>
                    <button
                      onClick={next}
                      className="rounded-lg bg-[#7c6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0]"
                    >
                      {index < questions.length - 1 ? "Next question →" : "See results →"}
                    </button>
                  </div>
                </>
              )}
              {!answered && (
                <p className="mt-4 text-xs text-[#898781]">
                  {q.kind === "calc" ? "Work it out first, then pick an answer (or press A–D)." : "Pick an answer, or press A–D."}
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    );
  }

  // ---------- summary ----------
  const results = questions.filter((x) => answers[x.id] !== undefined).map((x) => ({ q: x, correct: answers[x.id] === x.correctIndex }));
  const total = results.length;
  const correctTotal = results.filter((r) => r.correct).length;
  const missed = results.filter((r) => !r.correct).map((r) => r.q);
  const score = total > 0 ? correctTotal / total : 0;
  const byCourse = new Map<string, { title: string; correct: number; total: number }>();
  for (const r of results) {
    const entry = byCourse.get(r.q.courseSlug) ?? { title: r.q.courseTitle, correct: 0, total: 0 };
    entry.total += 1;
    if (r.correct) entry.correct += 1;
    byCourse.set(r.q.courseSlug, entry);
  }
  // When a session mixed both kinds, show how each kind went.
  const kindResults = (["concept", "calc"] as const)
    .map((k) => {
      const of = results.filter((r) => r.q.kind === k);
      return { kind: k, total: of.length, correct: of.filter((r) => r.correct).length };
    })
    .filter((k) => k.total > 0);
  // Modules with at least one miss, most missed first, for the "practise again" row.
  const focusMap = new Map<string, { slug: string; title: string; courseSlug: string; missed: number }>();
  for (const m of missed) {
    const entry = focusMap.get(m.moduleSlug) ?? { slug: m.moduleSlug, title: m.moduleTitle, courseSlug: m.courseSlug, missed: 0 };
    entry.missed += 1;
    focusMap.set(m.moduleSlug, entry);
  }
  const focusModules = [...focusMap.values()].sort((a, b) => b.missed - a.missed).slice(0, 4);
  const ringColor = score >= 0.7 ? "#34d399" : "#fbbf24";
  const radius = 38;
  const circumference = 2 * Math.PI * radius;

  return (
    <div style={{ "--accent": accent } as CSSProperties}>
      <BankHeader eyebrow="Session complete" title="Quiz Bank" />
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-[#2a3040] bg-[#141821] p-6 sm:flex-row sm:p-8">
          <div className="relative h-[100px] w-[100px] shrink-0">
            <svg viewBox="0 0 100 100" className="-rotate-90" aria-hidden="true">
              <circle cx="50" cy="50" r={radius} fill="none" stroke="#ffffff1a" strokeWidth="8" />
              <circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke={ringColor}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - score)}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-[#e6e8ec]">
              {Math.round(score * 100)}%
            </div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl font-bold text-[#e6e8ec]">
              {correctTotal} of {total} correct
            </div>
            <p className="mt-1 text-sm text-[#9aa3b2]">
              Best streak this session: <span className="font-semibold text-[#e6e8ec]">{sessionBest}</span>
              {questions.length < requestedCount ? ` · only ${questions.length} questions were available for that selection` : ""}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              {missed.length > 0 && (
                <button
                  onClick={() => beginSession(shuffle(missed), missed.length)}
                  className="rounded-lg bg-[#7c6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0]"
                >
                  Retry the {missed.length} I missed
                </button>
              )}
              <button
                onClick={() => setPhase("setup")}
                className={
                  missed.length > 0
                    ? "text-sm text-[#a99dff] hover:underline"
                    : "rounded-lg bg-[#7c6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0]"
                }
              >
                New session
              </button>
              <Link to="/practice" className="text-sm text-[#898781] hover:text-[#e6e8ec]">
                Back to Practice
              </Link>
            </div>
          </div>
        </div>

        {kindResults.length > 1 && (
          <section className="mt-8">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">By question type</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {kindResults.map((k) => {
                const pct = (k.correct / k.total) * 100;
                return (
                  <div key={k.kind} className="rounded-xl border border-[#2a3040] bg-[#141821] p-3.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-sm font-medium text-[#e6e8ec]">{k.kind === "calc" ? "Calculations" : "Concept checks"}</span>
                      <span className={`shrink-0 text-xs ${pct >= 70 ? "text-emerald-400" : "text-amber-400"}`}>
                        {k.correct}/{k.total}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#1b2029]">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: pct >= 70 ? "#34d399" : "#fbbf24" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {byCourse.size > 1 && (
          <section className="mt-8">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">By course</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[...byCourse.entries()].map(([slug, c]) => {
                const pct = (c.correct / c.total) * 100;
                return (
                  <div key={slug} className="rounded-xl border border-[#2a3040] bg-[#141821] p-3.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="truncate text-sm font-medium text-[#e6e8ec]">{c.title}</span>
                      <span className={`shrink-0 text-xs ${pct >= 70 ? "text-emerald-400" : "text-amber-400"}`}>
                        {c.correct}/{c.total}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#1b2029]">
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: pct >= 70 ? "#34d399" : "#fbbf24" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {focusModules.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Practise these modules again</h2>
            <div className="flex flex-wrap gap-2">
              {focusModules.map((m) => (
                <button
                  key={m.slug}
                  onClick={() => startFocus(m.courseSlug, m.slug)}
                  disabled={starting}
                  className="flex items-center gap-2 rounded-xl border border-[#2a3040] bg-[#141821] px-3 py-2 text-sm text-[#e6e8ec] transition hover:-translate-y-px hover:border-[#7c6cff]/50 disabled:opacity-60"
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: courseAccent(m.courseSlug) }} />
                  {m.title}
                  <span className="rounded-full bg-red-500/15 px-1.5 py-px text-[10px] font-semibold text-red-300">
                    {m.missed} missed
                  </span>
                </button>
              ))}
            </div>
            {startError && <p className="mt-2 text-sm text-red-400">{startError}</p>}
          </section>
        )}

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#e6e8ec]">{missed.length > 0 ? "What you missed" : "Nothing missed"}</h2>
          {missed.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-dashed border-[#2a3040] p-8 text-center text-[#9aa3b2]">
              Every answer was correct. Try a longer session or a different mix of courses.
            </div>
          ) : (
            <div className="mt-4 flex flex-col gap-3">
              {missed.map((m) => (
                <article key={m.id} className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#898781]">
                    <span className="rounded-full border border-[#2a3040] px-2 py-0.5">{m.courseTitle}</span>
                    <span>{m.moduleTitle}</span>
                  </div>
                  <p className="mt-1.5 font-medium leading-relaxed text-[#e6e8ec]">
                    <InlineText text={m.prompt} />
                  </p>
                  <p className="mt-2 text-sm text-[#9aa3b2]">
                    Your answer: <InlineText text={m.choices[answers[m.id]]} />
                  </p>
                  <p className="mt-1 text-sm text-emerald-300">
                    Correct answer: <InlineText text={m.choices[m.correctIndex]} />
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#9aa3b2]">
                    <InlineText text={m.explanation} />
                  </p>
                  <Link to={`/lesson/${m.lessonSlug}`} className="mt-2 inline-block text-xs text-[#a99dff] hover:underline">
                    Review “{m.lessonTitle}” →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
