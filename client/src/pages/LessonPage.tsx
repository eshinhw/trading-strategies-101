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
          ← All courses
        </Link>
      </div>
    );
  }

  if (!lesson) {
    return <div className="mx-auto max-w-3xl px-6 py-16 text-center text-[#898781]">Loading…</div>;
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Breadcrumb lesson={lesson} />
      {lesson.kind === "concept" ? <ConceptLessonBody lesson={lesson} /> : <StrategyLessonBody lesson={lesson} />}
      <LessonNav lesson={lesson} onNavigate={(s) => navigate(`/lesson/${s}`)} />
    </div>
  );
}

function Breadcrumb({ lesson }: { lesson: LessonDetail }) {
  return (
    <div className="mb-4 flex items-center gap-2 text-sm">
      <Link to={lesson.courseSlug ? `/courses/${lesson.courseSlug}` : "/courses"} className="text-[#4f8cff] hover:underline">
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

function ConceptLessonBody({ lesson }: { lesson: Extract<LessonDetail, { kind: "concept" }> }) {
  return (
    <div>
      <header className="mb-6">
        <PlainBadge>Concept</PlainBadge>
        <h1 className="mt-3 text-3xl font-bold text-[#e6e8ec]">{lesson.title}</h1>
        <p className="mt-2 text-lg text-[#9aa3b2]">{lesson.summary}</p>
      </header>

      <div className="mb-8 flex flex-col gap-4 rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-6">
        {lesson.body.map((para, i) => (
          <p key={i} className="leading-relaxed text-[#e6e8ec]">
            {para}
          </p>
        ))}
      </div>

      <ConceptQuiz lessonSlug={lesson.slug} questions={lesson.quiz} />
    </div>
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
