import { useCallback, useEffect, useMemo, useState, type CSSProperties } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchCourse, fetchLesson, fetchModules } from "../api";
import type { Course } from "../types/course";
import type { LessonDetail, ModulesResponse } from "../types/curriculum";
import { courseAccent } from "../lib/courseVisuals";
import { legsFromStrategy } from "../lib/strategyToLegs";
import type { ParamValues } from "../engine/payoff";
import { computePayoffStats, defaultRange } from "../engine/payoff";
import { OutlookBadge, PlainBadge } from "../components/Badge";
import { StaticPayoffDiagram } from "../components/StaticPayoffDiagram";
import { StatTile } from "../components/StatTile";
import { ConceptQuiz } from "../components/ConceptQuiz";
import { LessonDiagram } from "../components/LessonDiagram";
import { LessonVideo } from "../components/LessonVideo";
import { DisplayMath, InlineText, displayMathOf } from "../components/InlineText";
import type { LessonBlock } from "../types/curriculum";
import { useAuth } from "../auth/AuthContext";

interface LessonContext {
  course: Course | null;
  modules: ModulesResponse | null;
  accent: string;
  /** 1-based position within the module, and the module's lesson count */
  position: { index: number; total: number } | null;
  completed: boolean;
  titleOf: (slug: string | null) => string | null;
  refresh: () => void;
}

export function LessonPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuth();
  const [lesson, setLesson] = useState<LessonDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [modules, setModules] = useState<ModulesResponse | null>(null);
  const [textSize, setTextSize] = useTextSize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) return;
    setLesson(null);
    setError(null);
    fetchLesson(slug)
      .then(setLesson)
      .catch((e) => setError(e.message));
  }, [slug, user]);

  const courseSlug = lesson?.courseSlug ?? null;
  const loadModules = useCallback(() => {
    if (!courseSlug) return;
    fetchModules(courseSlug)
      .then(setModules)
      .catch(() => {});
  }, [courseSlug]);

  // Course title/colour and the module outline are decoration and navigation — if they fail to load
  // the lesson itself still renders.
  useEffect(() => {
    if (!courseSlug) return;
    setCourse(null);
    fetchCourse(courseSlug)
      .then(setCourse)
      .catch(() => {});
    loadModules();
  }, [courseSlug, loadModules, user]);

  const ctx = useMemo<LessonContext>(() => {
    const flat = (modules?.modules ?? [])
      .slice()
      .sort((a, b) => a.order - b.order)
      .flatMap((m) => m.lessons);
    const mod = modules?.modules.find((m) => m.lessons.some((l) => l.slug === slug));
    const idx = mod ? mod.lessons.findIndex((l) => l.slug === slug) : -1;
    return {
      course,
      modules,
      accent: courseSlug ? courseAccent(courseSlug) : "#7c6cff",
      position: mod && idx >= 0 ? { index: idx + 1, total: mod.lessons.length } : null,
      completed: mod && idx >= 0 ? mod.lessons[idx].completed : false,
      titleOf: (s) => (s ? (flat.find((l) => l.slug === s)?.title ?? null) : null),
      refresh: loadModules,
    };
  }, [course, modules, slug, courseSlug, loadModules]);

  // Left / right arrow keys move to the previous / next lesson, unless focus is in a form control (a quiz's
  // radio group uses the arrows itself).
  const prevSlug = lesson?.prevLessonSlug ?? null;
  const nextSlug = lesson?.nextLessonSlug ?? null;
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      const target = e.target as HTMLElement | null;
      if (target && (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) || target.isContentEditable)) return;
      if (e.key === "ArrowLeft" && prevSlug) navigate(`/lesson/${prevSlug}`);
      else if (e.key === "ArrowRight" && nextSlug) navigate(`/lesson/${nextSlug}`);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prevSlug, nextSlug, navigate]);

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-red-400">{error}</p>
        <Link to="/courses" className="mt-4 inline-block text-[#7c6cff] hover:underline">
          ← All Courses
        </Link>
      </div>
    );
  }

  if (!lesson) {
    return <div className="mx-auto max-w-3xl px-6 py-16 text-center text-[#898781]">Loading…</div>;
  }

  return (
    <div style={{ "--accent": ctx.accent, "--prose-size": `${TEXT_SIZES[textSize].px}px` } as CSSProperties}>
      <ReadingProgress accent={ctx.accent} />
      <StickyLessonBar
        title={lesson.kind === "strategy" ? lesson.strategy.name : lesson.title}
        position={ctx.position ? `Lesson ${ctx.position.index} of ${ctx.position.total}` : null}
        hasQuiz={lesson.quiz.length > 0}
      />
      <LessonHeader lesson={lesson} ctx={ctx} textSize={textSize} onTextSize={setTextSize} />
      <div className="mx-auto max-w-7xl px-6 py-10">
        {lesson.kind === "concept" && <GreeksExplorerCallout slug={lesson.slug} accent={ctx.accent} />}
        {lesson.kind === "concept" ? (
          <ConceptLessonBody lesson={lesson} ctx={ctx} />
        ) : (
          <StrategyLessonBody lesson={lesson} ctx={ctx} />
        )}
        <QuizBankNudge lesson={lesson} ctx={ctx} />
        <ModuleStrip lesson={lesson} ctx={ctx} />
        <LessonNav lesson={lesson} ctx={ctx} />
      </div>
    </div>
  );
}

// Reading text size, remembered on this device. Three steps are enough: the default is already comfortable.
const TEXT_SIZES = [
  { id: "small", label: "Small", px: 15 },
  { id: "default", label: "Default", px: 17 },
  { id: "large", label: "Large", px: 19 },
] as const;
const TEXT_SIZE_KEY = "lesson:textSize";

function useTextSize() {
  const [index, setIndex] = useState(() => {
    try {
      const raw = localStorage.getItem(TEXT_SIZE_KEY);
      const saved = raw === null ? NaN : Number(raw);
      return Number.isInteger(saved) && saved >= 0 && saved < TEXT_SIZES.length ? saved : 1;
    } catch {
      return 1;
    }
  });
  const update = (i: number) => {
    setIndex(i);
    try {
      localStorage.setItem(TEXT_SIZE_KEY, String(i));
    } catch {
      // storage unavailable — the choice just won't persist
    }
  };
  return [index, update] as const;
}

function TextSizeControl({ index, onChange }: { index: number; onChange: (i: number) => void }) {
  return (
    <div role="radiogroup" aria-label="Text size" className="flex items-center rounded-lg border border-[#2a3040] bg-[#0e1117]/70 p-0.5">
      {TEXT_SIZES.map((t, i) => (
        <button
          key={t.id}
          role="radio"
          aria-checked={index === i}
          aria-label={`${t.label} text`}
          title={`${t.label} text`}
          onClick={() => onChange(i)}
          className={`flex h-6 w-7 items-center justify-center rounded-md font-semibold transition ${
            index === i ? "bg-[#7c6cff]/25 text-[#e6e8ec]" : "text-[#898781] hover:text-[#e6e8ec]"
          }`}
          style={{ fontSize: 10 + i * 2.5 }}
        >
          A
        </button>
      ))}
    </div>
  );
}

// A slim bar under the navbar that appears once the lesson header has scrolled away: it keeps the lesson's name in
// view and offers a shortcut straight to the knowledge check.
function StickyLessonBar({ title, position, hasQuiz }: { title: string; position: string | null; hasQuiz: boolean }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const header = document.getElementById("lesson-header");
    if (!header || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting), { rootMargin: "-64px 0px 0px 0px" });
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 top-16 z-30 border-b border-[#2a3040] bg-[#0e1117]/90 backdrop-blur-md transition duration-200 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2">
        <div className="min-w-0 text-sm">
          <span className="truncate font-medium text-[#e6e8ec]">{title}</span>
          {position && <span className="ml-2 hidden text-xs text-[#898781] sm:inline">{position}</span>}
        </div>
        {hasQuiz && (
          <button
            tabIndex={show ? 0 : -1}
            onClick={() => document.getElementById("knowledge-check")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="shrink-0 rounded-lg border border-[#7c6cff]/40 bg-[#7c6cff]/15 px-3 py-1 text-xs font-semibold text-[#c4bbff] transition hover:bg-[#7c6cff]/25"
          >
            Knowledge check ↓
          </button>
        )}
      </div>
    </div>
  );
}

// Lessons that have a matching interactive: the Greeks Explorer opens on the Greek the lesson is about.
const GREEKS_EXPLORER_FOR: Record<string, { greek: string; about: string }> = {
  "greeks-introduction": { greek: "delta", about: "the Greeks" },
  "greeks-delta": { greek: "delta", about: "delta" },
  "greeks-gamma": { greek: "gamma", about: "gamma" },
  "greeks-theta": { greek: "theta", about: "theta" },
  "greeks-vega": { greek: "vega", about: "vega" },
  "greeks-rho": { greek: "rho", about: "rho" },
  "concept-how-options-are-priced": { greek: "price", about: "an option's price" },
};

function GreeksExplorerCallout({ slug, accent }: { slug: string; accent: string }) {
  const target = GREEKS_EXPLORER_FOR[slug];
  if (!target) return null;
  return (
    <Link
      to={`/practice/greeks-explorer?greek=${target.greek}`}
      className="group mb-8 flex max-w-3xl items-center gap-4 rounded-2xl border p-4 transition duration-200 hover:-translate-y-px"
      style={{ borderColor: `${accent}55`, background: `${accent}12` }}
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-lg"
        style={{ borderColor: `${accent}66`, background: `${accent}22` }}
        aria-hidden="true"
      >
        📈
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-[#e6e8ec]">See {target.about} move for yourself</span>
        <span className="block text-sm text-[#9aa3b2]">
          Change the stock price, volatility or time in the Greeks Explorer and watch the curve respond.
        </span>
      </span>
      <span aria-hidden="true" className="shrink-0 text-[#a99dff] transition group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}

// A pointer from a lesson's quiz to open practice over the whole course.
function QuizBankNudge({ lesson, ctx }: { lesson: LessonDetail; ctx: LessonContext }) {
  if (!lesson.courseSlug || lesson.quiz.length === 0) return null;
  return (
    <p className="mt-4 max-w-3xl text-sm text-[#898781]">
      Want more reps on {lesson.moduleTitle ?? ctx.course?.title ?? "this course"}?{" "}
      <Link
        to={`/practice/quiz-bank?course=${lesson.courseSlug}${lesson.moduleSlug ? `&module=${lesson.moduleSlug}` : ""}`}
        className="text-[#a99dff] hover:underline"
      >
        Practice it in the Quiz Bank →
      </Link>
    </p>
  );
}

// A thin bar under the navbar showing how far through the page you've scrolled.
function ReadingProgress({ accent }: { accent: string }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-16 z-30 h-0.5 bg-transparent" aria-hidden="true">
      <div className="h-full transition-[width] duration-100" style={{ width: `${pct}%`, background: accent, boxShadow: `0 0 8px ${accent}` }} />
    </div>
  );
}

function readingMinutes(body: LessonBlock[]): number {
  const words = body.reduce((n, b) => {
    if (b.type === "paragraph" || b.type === "heading" || b.type === "subheading") return n + b.text.split(/\s+/).length;
    if (b.type === "list") return n + b.items.join(" ").split(/\s+/).length;
    return n;
  }, 0);
  return Math.max(1, Math.round(words / 200));
}

function LessonHeader({
  lesson,
  ctx,
  textSize,
  onTextSize,
}: {
  lesson: LessonDetail;
  ctx: LessonContext;
  textSize: number;
  onTextSize: (i: number) => void;
}) {
  const { accent } = ctx;
  const strategy = lesson.kind === "strategy" ? lesson.strategy : null;
  const title = lesson.kind === "strategy" ? lesson.strategy.name : lesson.title;
  const summary = lesson.kind === "strategy" ? lesson.strategy.content.summary : lesson.summary;
  const courseHref = lesson.courseSlug ? `/courses/${lesson.courseSlug}` : "/courses";
  const minutes = lesson.kind === "concept" ? readingMinutes(lesson.body) : null;

  return (
    <header id="lesson-header" className="relative overflow-hidden border-b border-[#2a3040]">
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
      <div className="relative mx-auto max-w-7xl px-6 pb-9 pt-6">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#898781]">
          <Link to="/courses" className="hover:text-[#e6e8ec]">
            Courses
          </Link>
          <span aria-hidden="true">/</span>
          <Link to={courseHref} className="hover:text-[#e6e8ec]" style={{ color: accent }}>
            {ctx.course?.title ?? "Course"}
          </Link>
          {lesson.moduleSlug && (
            <>
              <span aria-hidden="true">/</span>
              <Link to={`/module/${lesson.moduleSlug}`} className="hover:text-[#e6e8ec]">
                {lesson.moduleTitle}
              </Link>
            </>
          )}
        </nav>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {ctx.position && (
            <span className="rounded-full border px-2.5 py-0.5 text-xs font-medium" style={{ borderColor: `${accent}55`, background: `${accent}18`, color: accent }}>
              Lesson {ctx.position.index} of {ctx.position.total}
            </span>
          )}
          {lesson.isPaperStrategy && <PlainBadge>Strategy</PlainBadge>}
          {strategy && <OutlookBadge outlook={strategy.outlook} />}
          {strategy && <PlainBadge>{strategy.style.replace("-", " ")}</PlainBadge>}
          {strategy && <PlainBadge>{strategy.netPosition.replace("-", " ")}</PlainBadge>}
          {minutes !== null && <span className="text-xs text-[#898781]">{minutes} min read</span>}
          {ctx.completed && (
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
              ✓ Completed
            </span>
          )}
          <span className="ml-auto">
            <TextSizeControl index={textSize} onChange={onTextSize} />
          </span>
        </div>

        <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-[#e6e8ec]">{title}</h1>
        {strategy?.aka && <div className="mt-1 text-sm text-[#898781]">a.k.a. {strategy.aka}</div>}
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-[#9aa3b2]">{summary}</p>
      </div>
    </header>
  );
}

// Every lesson in this lesson's module as a compact row of chips, so you can see where you are and hop elsewhere
// without going back to the module page. Needs the module outline; renders nothing until that has loaded.
function ModuleStrip({ lesson, ctx }: { lesson: LessonDetail; ctx: LessonContext }) {
  const currentSlug = lesson.kind === "strategy" ? lesson.strategy.slug : lesson.slug;
  const mod = ctx.modules?.modules.find((m) => m.lessons.some((l) => l.slug === currentSlug));
  if (!mod || mod.lessons.length < 2) return null;
  return (
    <section className="mt-12 rounded-2xl border border-[#2a3040] bg-[#141821]/70 p-5" aria-label={`In ${mod.title}`}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">
          In this module <span className="ml-1 normal-case tracking-normal text-[#9aa3b2]">{mod.title}</span>
        </h2>
        <Link to={`/module/${mod.slug}`} className="text-xs text-[#a99dff] hover:underline">
          Module overview →
        </Link>
      </div>
      <ol className="flex flex-wrap gap-1.5">
        {mod.lessons.map((l, i) => {
          const current = l.slug === currentSlug;
          return (
            <li key={l.slug}>
              <Link
                to={`/lesson/${l.slug}`}
                aria-current={current ? "page" : undefined}
                className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-sm transition ${
                  current
                    ? "border-[var(--accent)] bg-[var(--accent)]/15 font-medium text-[#e6e8ec]"
                    : "border-[#2a3040] text-[#9aa3b2] hover:border-[#3a4150] hover:text-[#e6e8ec]"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
                    l.completed ? "bg-emerald-500/20 text-emerald-400" : "bg-[#1b2029] text-[#898781]"
                  }`}
                >
                  {l.completed ? "✓" : i + 1}
                </span>
                {l.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function NavCard({ to, direction, title, accent }: { to: string; direction: "prev" | "next" | "back"; title: string; accent: string }) {
  const label = direction === "prev" ? "Previous lesson" : direction === "next" ? "Next lesson" : "Finished the module";
  return (
    <Link
      to={to}
      className={`group flex flex-1 flex-col rounded-xl border border-[#2a3040] bg-[#141821] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] ${
        direction === "prev" ? "items-start text-left" : "items-end text-right"
      }`}
    >
      <span className="text-xs uppercase tracking-[0.1em] text-[#898781]">{label}</span>
      <span className="mt-1 flex items-center gap-2 font-semibold text-[#e6e8ec]">
        {direction === "prev" && (
          <span aria-hidden="true" className="transition group-hover:-translate-x-0.5" style={{ color: accent }}>
            ←
          </span>
        )}
        {title}
        {direction !== "prev" && (
          <span aria-hidden="true" className="transition group-hover:translate-x-0.5" style={{ color: accent }}>
            →
          </span>
        )}
      </span>
    </Link>
  );
}

function LessonNav({ lesson, ctx }: { lesson: LessonDetail; ctx: LessonContext }) {
  if (!lesson.prevLessonSlug && !lesson.nextLessonSlug && !lesson.courseSlug) return null;
  const prevTitle = ctx.titleOf(lesson.prevLessonSlug) ?? "Previous lesson";
  const nextTitle = ctx.titleOf(lesson.nextLessonSlug) ?? "Next lesson";
  return (
    <div className="mt-12 flex flex-col gap-3 border-t border-[#2a3040] pt-8 sm:flex-row sm:flex-wrap">
      {lesson.prevLessonSlug ? (
        <NavCard to={`/lesson/${lesson.prevLessonSlug}`} direction="prev" title={prevTitle} accent={ctx.accent} />
      ) : (
        <div className="hidden flex-1 sm:block" />
      )}
      {lesson.nextLessonSlug ? (
        <NavCard to={`/lesson/${lesson.nextLessonSlug}`} direction="next" title={nextTitle} accent={ctx.accent} />
      ) : (
        lesson.courseSlug && (
          <NavCard to={`/courses/${lesson.courseSlug}`} direction="back" title="Back to the course" accent={ctx.accent} />
        )
      )}
      {(lesson.prevLessonSlug || lesson.nextLessonSlug) && (
        <p className="hidden w-full text-center text-xs text-[#898781] sm:block sm:basis-full">
          Tip: press ← or → to move between lessons.
        </p>
      )}
    </div>
  );
}

// Groups consecutive paragraph blocks into one shared card (matching the
// original all-prose look) while letting an image or video block break out
// into its own full-width card at the point in the body where it appears. A
// heading block starts a fresh paragraph card labeled with that heading,
// rather than just being one more line inside the running card, so a lesson
// with genuinely distinct sub-topics reads as separated sections instead of
// one undifferentiated block of prose.
type BodyItem = { kind: "p"; text: string } | { kind: "sub"; level: 3 | 4 | 5; text: string } | { kind: "list"; items: string[]; ordered: boolean };

type BodySegment =
  | { kind: "paragraphs"; heading?: string; items: BodyItem[] }
  | { kind: "image"; diagramId: string; caption?: string }
  | { kind: "video"; url: string; caption?: string };

function groupBodySegments(body: LessonBlock[]): BodySegment[] {
  const segments: BodySegment[] = [];
  for (const block of body) {
    if (block.type === "heading") {
      segments.push({ kind: "paragraphs", heading: block.text, items: [] });
    } else if (block.type === "paragraph" || block.type === "subheading" || block.type === "list") {
      const item: BodyItem =
        block.type === "paragraph"
          ? { kind: "p", text: block.text }
          : block.type === "subheading"
            ? { kind: "sub", level: block.level, text: block.text }
            : { kind: "list", items: block.items, ordered: block.ordered ?? false };
      const last = segments[segments.length - 1];
      if (last?.kind === "paragraphs") last.items.push(item);
      else segments.push({ kind: "paragraphs", items: [item] });
    } else if (block.type === "image") {
      segments.push({ kind: "image", diagramId: block.diagramId, caption: block.caption });
    } else {
      segments.push({ kind: "video", url: block.url, caption: block.caption });
    }
  }
  return segments;
}

// Distinguishes these recurring section types at a glance in both the
// section heading itself and the "on this page" outline — every lesson uses
// this exact heading text (see conceptLessons/*.ts), so a lookup here covers
// all of them without touching 100+ content files. "Example" is the
// shared heading for a lesson's worked scenario.
const HEADING_EMOJI: Record<string, string> = {
  Example: "💡",
  "A Worked Example": "📐",
};

function headingWithEmoji(heading: string): string {
  const emoji = HEADING_EMOJI[heading];
  return emoji ? `${emoji} ${heading}` : heading;
}

function ConceptLessonBody({ lesson, ctx }: { lesson: Extract<LessonDetail, { kind: "concept" }>; ctx: LessonContext }) {
  const { accent } = ctx;
  const segments = useMemo(() => groupBodySegments(lesson.body), [lesson.body]);
  const outlineItems = useMemo(
    () =>
      segments
        .map((seg, i) =>
          seg.kind === "paragraphs" && seg.heading ? { id: `section-${i}`, text: headingWithEmoji(seg.heading) } : null,
        )
        .filter((item): item is { id: string; text: string } => item !== null)
        .concat(lesson.quiz.length > 0 ? [{ id: "knowledge-check", text: "Knowledge check" }] : []),
    [segments, lesson.quiz.length],
  );
  const nextTitle = ctx.titleOf(lesson.nextLessonSlug);

  return (
    <div>
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start lg:gap-12">
        <div className="mb-10 flex max-w-3xl flex-col gap-10">
          {segments.map((seg, i) => {
            if (seg.kind === "paragraphs") {
              const isExample = seg.heading !== undefined && seg.heading in HEADING_EMOJI;
              return (
                <div
                  key={i}
                  id={seg.heading ? `section-${i}` : undefined}
                  className={`scroll-mt-32 flex flex-col gap-4 ${isExample ? "rounded-2xl border p-5 sm:p-6" : ""}`}
                  style={isExample ? { borderColor: `${accent}40`, background: `${accent}0d` } : undefined}
                >
                  {seg.heading && (
                    <h3 className="flex items-center gap-3 text-2xl font-semibold text-[#e6e8ec]">
                      {!isExample && <span className="h-6 w-1 shrink-0 rounded-full" style={{ background: accent }} />}
                      {headingWithEmoji(seg.heading)}
                    </h3>
                  )}
                  {seg.items.map((item, j) => {
                    if (item.kind === "sub") {
                      const Tag = item.level === 3 ? "h4" : item.level === 4 ? "h5" : "h6";
                      const style =
                        item.level === 3
                          ? "text-base font-semibold text-[#e6e8ec]"
                          : item.level === 4
                            ? "text-sm font-semibold text-[#e6e8ec]"
                            : "text-sm font-medium text-[#9aa3b2]";
                      return (
                        <Tag key={j} className={`mt-2 ${style}`}>
                          {item.text}
                        </Tag>
                      );
                    }
                    if (item.kind === "p") {
                      const display = displayMathOf(item.text);
                      if (display !== null) return <DisplayMath key={j} latex={display} />;
                      return (
                        <p key={j} className="text-[length:var(--prose-size)] leading-[1.8] text-[#d5d9e0]">
                          <InlineText text={item.text} />
                        </p>
                      );
                    }
                    const ListTag = item.ordered ? "ol" : "ul";
                    return (
                      <ListTag
                        key={j}
                        className={`flex flex-col gap-2.5 pl-6 text-[length:var(--prose-size)] leading-[1.8] text-[#d5d9e0] marker:font-semibold marker:text-[var(--accent)] ${
                          item.ordered ? "list-decimal" : "list-disc"
                        }`}
                      >
                        {item.items.map((li, k) => (
                          <li key={k}>
                            <InlineText text={li} />
                          </li>
                        ))}
                      </ListTag>
                    );
                  })}
                </div>
              );
            }
            if (seg.kind === "image") return <LessonDiagram key={i} diagramId={seg.diagramId} caption={seg.caption} />;
            return <LessonVideo key={i} url={seg.url} caption={seg.caption} />;
          })}
        </div>

        <LessonOutline items={outlineItems} />
      </div>

      <div className="max-w-3xl">
        <ConceptQuiz
          lessonSlug={lesson.slug}
          questions={lesson.quiz}
          progress={lesson.progress}
          onGraded={ctx.refresh}
          nextLesson={
            lesson.nextLessonSlug
              ? { to: `/lesson/${lesson.nextLessonSlug}`, label: `Next: ${nextTitle ?? "lesson"} →` }
              : lesson.courseSlug
                ? { to: `/courses/${lesson.courseSlug}`, label: "Back to the course →" }
                : undefined
          }
        />
      </div>
    </div>
  );
}

// Sticky "on this page" jump-nav, scoped to concept lessons (the "block
// format" heading+paragraph lessons) rather than strategy lessons, which
// already have fixed, named sections (When to use it, Scenario, Try it
// yourself, ...) instead of a variable-length run of prose. Hidden below the
// lg breakpoint — on a narrow screen it would just add scroll noise above
// the content it's meant to help navigate.
function LessonOutline({ items }: { items: { id: string; text: string }[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (items.length === 0) return;
    const elements = items
      .map((item) => ({ id: item.id, el: document.getElementById(item.id) }))
      .filter((e): e is { id: string; el: HTMLElement } => e.el !== null);

    // "Active" is whichever heading's top has most recently crossed the
    // reading line (READING_LINE px from the top) — the standard scrollspy
    // approach, and one that (unlike diffing IntersectionObserver entries)
    // gives a correct answer immediately after a direct anchor jump, not
    // just while scrolling continuously past each section in order.
    const READING_LINE = 120;
    function updateActive() {
      let current = elements[0]?.id ?? null;
      for (const { id, el } of elements) {
        if (el.getBoundingClientRect().top <= READING_LINE) current = id;
        else break;
      }
      setActiveId(current);
    }

    updateActive();
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="sticky top-32 mb-8 hidden lg:block" aria-label="On this page">
      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">On this page</div>
      <ul className="mt-3 flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block border-l-2 py-1 pl-3 text-sm transition ${
                activeId === item.id
                  ? "border-[var(--accent)] font-medium text-[var(--accent)]"
                  : "border-[#2a3040] text-[#898781] hover:border-[#3a4150] hover:text-[#e6e8ec]"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function defaultsFor(params: { key: string; default: number }[]): ParamValues {
  const values: ParamValues = {};
  for (const p of params) values[p.key] = p.default;
  return values;
}

function StrategyLessonBody({ lesson, ctx }: { lesson: Extract<LessonDetail, { kind: "strategy" }>; ctx: LessonContext }) {
  const { strategy } = lesson;
  const { accent } = ctx;
  const nextTitle = ctx.titleOf(lesson.nextLessonSlug);
  // Only strategies the simulator can represent get the link.
  const simulatorHref = legsFromStrategy(strategy)
    ? `/practice/options-payoff-simulator?strategy=${strategy.slug}`
    : null;

  // Static picture only: computed once from the strategy's own default numbers. (Hands-on exploring
  // lives in Practice > Options Payoff Simulator.)
  const { stats, markers } = useMemo(() => {
    const params = defaultsFor(strategy.params);
    const [lo, hi] = defaultRange(strategy, params);
    const result = computePayoffStats(strategy, params, lo, hi);
    const strikeKeys = strategy.calendar
      ? [strategy.calendar.shortStrikeKey, strategy.calendar.longStrikeKey]
      : strategy.params.map((p) => p.key).filter((k) => /^K/i.test(k));
    const keys = params.S0 !== undefined ? ["S0", ...strikeKeys] : strikeKeys;
    return {
      stats: { ...result, displayRange: [lo, hi] as [number, number] },
      markers: [...new Set(keys)].filter((k) => params[k] !== undefined).map((k) => ({ value: params[k], label: k })),
    };
  }, [strategy]);

  return (
    <div>
      <section className="mb-8 rounded-2xl border border-[#2a3040] bg-[#141821] card-glow p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">Payoff at expiration</h3>
          {simulatorHref && (
            <Link
              to={simulatorHref}
              className="rounded-lg border px-3 py-1.5 text-xs font-semibold transition hover:brightness-125"
              style={{ borderColor: `${accent}66`, background: `${accent}18`, color: "#c4bbff" }}
            >
              Try it in the simulator →
            </Link>
          )}
        </div>
        <div className="mx-auto max-w-3xl">
          <StaticPayoffDiagram
            curve={stats.curve}
            breakevens={stats.breakevens}
            markers={markers}
            maxProfit={stats.maxProfit}
            maxLoss={stats.maxLoss}
            title={strategy.name}
          />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile label="Max profit" value={stats.maxProfit} tone="good" />
          <StatTile label="Max loss" value={stats.maxLoss} tone="critical" />
          <StatTile
            label="Breakeven"
            value={stats.breakevens.length === 0 ? "—" : stats.breakevens.map((b) => `$${b.toFixed(2)}`).join(" / ")}
            tone="neutral"
          />
          <StatTile label="Legs" value={String(strategy.legCount)} tone="neutral" />
        </div>
        <p className="mt-3 text-xs text-[#898781]">
          Drawn with the example numbers in the scenario below.
          {simulatorHref
            ? " Open it in the simulator to change the strikes and see the payoff move."
            : " To try your own, use the "}
          {!simulatorHref && (
            <>
              <Link to="/practice/options-payoff-simulator" className="text-[#7c6cff] hover:underline">
                Options Payoff Simulator
              </Link>
              .
            </>
          )}
        </p>
      </section>

      <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <InfoCard step="When" title="When to use it" text={strategy.content.whenToUse} color="#5aa9ff" />
        <InfoCard step="Why" title="Why use it" text={strategy.content.whyUse} color="#2dd4bf" />
        <InfoCard step="How" title="How to use it" text={strategy.content.howToUse} color="#a99dff" />
      </section>

      <section
        className="mb-10 rounded-2xl border p-5 sm:p-6"
        style={{ borderColor: `${accent}40`, background: `${accent}0d` }}
      >
        <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-[#e6e8ec]">
          <span aria-hidden="true">💡</span> Scenario
        </h3>
        <p className="text-[length:var(--prose-size)] leading-[1.8] text-[#d5d9e0]">{strategy.content.scenario}</p>
      </section>

      <ConceptQuiz
        lessonSlug={strategy.slug}
        questions={lesson.quiz}
        progress={lesson.progress}
        onGraded={ctx.refresh}
        nextLesson={
          lesson.nextLessonSlug
            ? { to: `/lesson/${lesson.nextLessonSlug}`, label: `Next: ${nextTitle ?? "lesson"} →` }
            : lesson.courseSlug
              ? { to: `/courses/${lesson.courseSlug}`, label: "Back to the course →" }
              : undefined
        }
      />
    </div>
  );
}

function InfoCard({ step, title, text, color }: { step: string; title: string; text: string; color: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#2a3040] bg-[#141821] p-5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
      <span
        className="inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.08em]"
        style={{ borderColor: `${color}55`, background: `${color}1a`, color }}
      >
        {step}
      </span>
      <h3 className="mt-3 text-sm font-semibold text-[#e6e8ec]">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[#9aa3b2]">{text}</p>
    </div>
  );
}
