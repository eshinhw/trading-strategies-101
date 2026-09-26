import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchLesson } from "../api";
import type { LessonDetail } from "../types/curriculum";
import type { ParamValues } from "../engine/payoff";
import { computePayoffStats, defaultRange } from "../engine/payoff";
import { OutlookBadge, PlainBadge } from "../components/Badge";
import { ParamControls } from "../components/ParamControls";
import { PayoffChart } from "../components/PayoffChart";
import { StatTile } from "../components/StatTile";
import { ConceptQuiz } from "../components/ConceptQuiz";
import { StrategyKnowledgeCheck } from "../components/StrategyKnowledgeCheck";
import { Formula } from "../components/Formula";
import { LessonDiagram } from "../components/LessonDiagram";
import { LessonVideo } from "../components/LessonVideo";
import type { LessonBlock } from "../types/curriculum";
import { useAuth } from "../auth/AuthContext";

export function LessonPage() {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState<LessonDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setLesson(null);
    fetchLesson(slug)
      .then(setLesson)
      .catch((e) => setError(e.message));
  }, [slug, user]);

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="text-red-400">{error}</p>
        <Link to="/courses" className="mt-4 inline-block text-[#4f8cff] hover:underline">
          ← All Courses
        </Link>
      </div>
    );
  }

  if (!lesson) {
    return <div className="mx-auto max-w-3xl px-6 py-16 text-center text-[#898781]">Loading…</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <Breadcrumb lesson={lesson} />
      {lesson.kind === "concept" ? <ConceptLessonBody lesson={lesson} /> : <StrategyLessonBody lesson={lesson} />}
      <LessonNav lesson={lesson} onNavigate={(s) => navigate(`/lesson/${s}`)} />
    </div>
  );
}

function Breadcrumb({ lesson }: { lesson: LessonDetail }) {
  return (
    <div className="mb-4 flex items-center gap-2 text-sm">
      <Link
        to={lesson.courseSlug ? `/courses/${lesson.courseSlug}` : "/courses"}
        className="text-[#4f8cff] hover:underline"
      >
        Course
      </Link>
      {lesson.moduleSlug && (
        <>
          <span className="text-[#898781]">/</span>
          <Link to={`/module/${lesson.moduleSlug}`} className="text-[#4f8cff] hover:underline">
            {lesson.moduleTitle}
          </Link>
        </>
      )}
    </div>
  );
}

function LessonNav({ lesson, onNavigate }: { lesson: LessonDetail; onNavigate: (slug: string) => void }) {
  if (!lesson.prevLessonSlug && !lesson.nextLessonSlug) return null;
  return (
    <div className="mt-10 flex items-center justify-between border-t border-[#2a3040] pt-6">
      {lesson.prevLessonSlug ? (
        <button onClick={() => onNavigate(lesson.prevLessonSlug!)} className="text-sm text-[#4f8cff] hover:underline">
          ← Previous lesson
        </button>
      ) : (
        <span />
      )}
      {lesson.nextLessonSlug ? (
        <button onClick={() => onNavigate(lesson.nextLessonSlug!)} className="text-sm text-[#4f8cff] hover:underline">
          Next lesson →
        </button>
      ) : (
        lesson.moduleSlug && (
          <Link to={`/module/${lesson.moduleSlug}`} className="text-sm text-[#4f8cff] hover:underline">
            Back to module →
          </Link>
        )
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
type BodySegment =
  | { kind: "paragraphs"; heading?: string; items: string[] }
  | { kind: "image"; diagramId: string; caption?: string }
  | { kind: "video"; url: string; caption?: string };

function groupBodySegments(body: LessonBlock[]): BodySegment[] {
  const segments: BodySegment[] = [];
  for (const block of body) {
    if (block.type === "heading") {
      segments.push({ kind: "paragraphs", heading: block.text, items: [] });
    } else if (block.type === "paragraph") {
      const last = segments[segments.length - 1];
      if (last?.kind === "paragraphs") last.items.push(block.text);
      else segments.push({ kind: "paragraphs", items: [block.text] });
    } else if (block.type === "image") {
      segments.push({ kind: "image", diagramId: block.diagramId, caption: block.caption });
    } else {
      segments.push({ kind: "video", url: block.url, caption: block.caption });
    }
  }
  return segments;
}

// Distinguishes these two recurring section types at a glance in both the
// section heading itself and the "on this page" outline — every lesson uses
// this exact heading text (see conceptLessons/*.ts), so a lookup here covers
// all of them without touching 100+ content files.
const HEADING_EMOJI: Record<string, string> = {
  "In Practice": "🧭",
  "A Worked Example": "🧮",
};

function headingWithEmoji(heading: string): string {
  const emoji = HEADING_EMOJI[heading];
  return emoji ? `${emoji} ${heading}` : heading;
}

function ConceptLessonBody({ lesson }: { lesson: Extract<LessonDetail, { kind: "concept" }> }) {
  const segments = useMemo(() => groupBodySegments(lesson.body), [lesson.body]);
  const outlineItems = useMemo(
    () =>
      segments
        .map((seg, i) =>
          seg.kind === "paragraphs" && seg.heading ? { id: `section-${i}`, text: headingWithEmoji(seg.heading) } : null,
        )
        .filter((item): item is { id: string; text: string } => item !== null),
    [segments],
  );

  return (
    <div>
      <header className="mb-6">
        {lesson.isPaperStrategy && <PlainBadge>Strategy</PlainBadge>}
        <h1 className={`text-3xl font-bold text-[#e6e8ec] ${lesson.isPaperStrategy ? "mt-3" : ""}`}>{lesson.title}</h1>
        <p className="mt-2 text-lg text-[#9aa3b2]">{lesson.summary}</p>
      </header>

      <div className="lg:grid lg:grid-cols-[1fr_200px] lg:items-start lg:gap-10">
        <div className="mb-8 flex flex-col gap-10">
          {segments.map((seg, i) => {
            if (seg.kind === "paragraphs") {
              return (
                <div key={i} id={seg.heading ? `section-${i}` : undefined} className="scroll-mt-6 flex flex-col gap-4">
                  {seg.heading && (
                    <h3 className="border-b border-[#2a3040] pb-2 text-xl font-semibold text-[#e6e8ec]">
                      {headingWithEmoji(seg.heading)}
                    </h3>
                  )}
                  {seg.items.map((text, j) => (
                    <p key={j} className="leading-relaxed text-[#e6e8ec]">
                      {text}
                    </p>
                  ))}
                </div>
              );
            }
            if (seg.kind === "image") return <LessonDiagram key={i} diagramId={seg.diagramId} caption={seg.caption} />;
            return <LessonVideo key={i} url={seg.url} caption={seg.caption} />;
          })}
        </div>

        <LessonOutline items={outlineItems} />
      </div>

      <ConceptQuiz lessonSlug={lesson.slug} questions={lesson.quiz} />
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
    <nav className="sticky top-6 mb-8 hidden lg:block" aria-label="On this page">
      <div className="text-xs font-semibold uppercase tracking-wide text-[#898781]">On this page</div>
      <ul className="mt-3 flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block border-l-2 py-1 pl-3 text-sm transition ${
                activeId === item.id
                  ? "border-[#4f8cff] font-medium text-[#4f8cff]"
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

function StrategyLessonBody({ lesson }: { lesson: Extract<LessonDetail, { kind: "strategy" }> }) {
  const { strategy } = lesson;
  const [params, setParams] = useState<ParamValues>(() => defaultsFor(strategy.params));

  const stats = useMemo(() => {
    const [lo, hi] = defaultRange(strategy, params);
    const result = computePayoffStats(strategy, params, lo, hi);
    return { ...result, displayRange: [lo, hi] as [number, number] };
  }, [strategy, params]);

  const currentPrice = params.S0 ?? params.K ?? undefined;

  return (
    <div>
      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {lesson.isPaperStrategy && <PlainBadge>Strategy</PlainBadge>}
          <OutlookBadge outlook={strategy.outlook} />
          <PlainBadge>{strategy.style.replace("-", " ")}</PlainBadge>
          <PlainBadge>{strategy.netPosition.replace("-", " ")}</PlainBadge>
          {/* <PlainBadge>§{strategy.section}</PlainBadge> */}
        </div>
        <h1 className="text-3xl font-bold text-[#e6e8ec]">{strategy.name}</h1>
        {strategy.aka && <div className="mt-1 text-sm text-[#898781]">a.k.a. {strategy.aka}</div>}
        <p className="mt-3 max-w-3xl text-lg text-[#9aa3b2]">{strategy.content.summary}</p>
      </header>

      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <InfoCard title="When to use it" text={strategy.content.whenToUse} />
        <InfoCard title="Why use it" text={strategy.content.whyUse} />
        <InfoCard title="How to use it" text={strategy.content.howToUse} />
      </section>

      <section className="mb-8 rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Scenario</h3>
        <p className="leading-relaxed text-[#e6e8ec]">{strategy.content.scenario}</p>
      </section>

      <section className="mb-6">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Try it yourself</h3>
        <ParamControls
          params={strategy.params}
          values={params}
          onChange={(key, value) => setParams((prev) => ({ ...prev, [key]: value }))}
          onReset={() => setParams(defaultsFor(strategy.params))}
        />
      </section>

      <section className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile label="Max profit" value={stats.maxProfit} tone="good" />
        <StatTile label="Max loss" value={stats.maxLoss} tone="critical" />
        <StatTile
          label="Breakeven"
          value={stats.breakevens.length === 0 ? "—" : stats.breakevens.map((b) => `$${b.toFixed(2)}`).join(" / ")}
          tone="neutral"
        />
        <StatTile label="Legs" value={String(strategy.legCount)} tone="neutral" />
      </section>

      <section className="mb-10 rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Payoff at expiration</h3>
        <PayoffChart
          curve={stats.curve}
          breakevens={stats.breakevens.filter((b) => b >= stats.displayRange[0] && b <= stats.displayRange[1])}
          currentPrice={currentPrice}
        />
      </section>

      <div className="mb-6">
        <FormulaReference strategy={strategy} />
      </div>

      <StrategyKnowledgeCheck
        lessonSlug={lesson.strategy.slug}
        strategy={strategy}
        practiceParams={lesson.practiceParams}
        questions={lesson.questions}
      />
    </div>
  );
}

function FormulaReference({ strategy }: { strategy: Extract<LessonDetail, { kind: "strategy" }>["strategy"] }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow((v) => !v)} className="text-sm text-[#4f8cff] hover:underline">
        {show ? "Hide" : "Show"} the formulas (§{strategy.section})
      </button>
      {show && (
        <div className="mt-3 grid grid-cols-1 gap-3 rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5 text-sm sm:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-wide text-[#898781]">Payoff</div>
            <div className="mt-1 break-words">
              <Formula>{strategy.formulas.payoff}</Formula>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-[#898781]">Breakeven</div>
            <div className="mt-1 break-words">
              <Formula>{strategy.formulas.breakeven}</Formula>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-[#898781]">Max profit</div>
            <div className="mt-1 break-words">
              <Formula>{strategy.formulas.maxProfit}</Formula>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-[#898781]">Max loss</div>
            <div className="mt-1 break-words">
              <Formula>{strategy.formulas.maxLoss}</Formula>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#e6e8ec]">{text}</p>
    </div>
  );
}
