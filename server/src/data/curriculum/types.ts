import type { Outlook } from "../../types.js";

export interface ConceptQuizQuestion {
  id: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
}

export interface ConceptLesson {
  kind: "concept";
  slug: string;
  title: string;
  summary: string;
  /** paragraphs of body text */
  body: string[];
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
