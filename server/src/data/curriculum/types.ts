import type { Outlook } from "../../types.js";

export interface ConceptQuizQuestion {
  id: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
}

/**
 * A concept lesson's body is a sequence of blocks rather than plain
 * paragraphs, so a lesson can mix in a diagram (or, later, a video) at the
 * point in the explanation where it's actually useful. `diagramId` references
 * a hand-built illustration component on the client (see
 * client/src/components/lessonDiagrams) — there's no image-hosting pipeline,
 * so diagrams are themed inline SVG rather than uploaded assets. `video` is
 * schema support for a future pass; no lesson populates it yet.
 */
export type LessonBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; diagramId: string; caption?: string }
  | { type: "video"; url: string; caption?: string };

export interface ConceptLesson {
  kind: "concept";
  slug: string;
  title: string;
  summary: string;
  body: LessonBlock[];
  quiz: ConceptQuizQuestion[];
}

export interface StrategyLessonRef {
  kind: "strategy";
  /** lesson slug === the underlying Strategy.slug */
  slug: string;
}

export type LessonRef = ConceptLesson | StrategyLessonRef;

export interface Module {
  slug: string;
  /** which course (Course.slug) this module belongs to */
  courseSlug: string;
  title: string;
  description: string;
  order: number;
  prerequisiteModuleSlugs: string[];
  lessonSlugs: string[];
}

/** A single machine-checkable requirement, evaluated against the payoff stats of
 * whatever strategy+params the learner submits. "all" composes several into one goal. */
export type ConstructionGoal =
  | { kind: "maxLossAtMost"; value: number }
  | { kind: "maxProfitAtLeast"; value: number }
  | { kind: "maxProfitUnlimited" }
  | { kind: "outlookMatches"; outlook: Outlook }
  | { kind: "netPositionIs"; netPosition: "debit" | "credit" | "zero-cost" }
  | { kind: "all"; goals: ConstructionGoal[] };

/** A scenario the learner solves by picking one of a few candidate strategies and
 * configuring its params — graded against `goal`, not against one fixed answer. */
export interface ConstructionExercise {
  slug: string;
  moduleSlug: string;
  title: string;
  scenario: string;
  candidateStrategySlugs: string[];
  goal: ConstructionGoal;
}
