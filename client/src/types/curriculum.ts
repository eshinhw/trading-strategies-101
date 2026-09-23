import type { Strategy } from "./strategy";

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface ModuleLessonSummary {
  slug: string;
  kind: "concept" | "strategy";
  title: string;
  summary: string;
  completed: boolean;
  bestScore: number | null;
}

export interface ModuleSummary {
  slug: string;
  title: string;
  description: string;
  order: number;
  prerequisiteModuleSlugs: string[];
  totalLessons: number;
  completedLessons: number;
  unlocked: boolean;
  completed: boolean;
  /** empty when the module is locked */
  lessons: ModuleLessonSummary[];
}

export interface ModulesResponse {
  signedIn: boolean;
  totalLessons: number;
  totalCompleted: number;
  modules: ModuleSummary[];
}

export interface ModuleDetail {
  slug: string;
  courseSlug: string;
  title: string;
  description: string;
  unlocked: boolean;
  completed: boolean;
  lessons: ModuleLessonSummary[];
}

export interface LessonProgress {
  completed: boolean;
  bestScore: number | null;
  attempts: number;
}

interface LessonBase {
  moduleSlug: string | null;
  moduleTitle: string | null;
  courseSlug: string | null;
  prevLessonSlug: string | null;
  nextLessonSlug: string | null;
  progress: LessonProgress | null;
}

export interface ConceptQuizPrompt {
  id: string;
  prompt: string;
  choices: string[];
  // included so the UI can grade each question immediately, before the
  // learner moves on to the next one, instead of only revealing correctness
  // in one batch after the whole quiz is submitted.
  correctIndex: number;
  explanation: string;
}

export type LessonBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; diagramId: string; caption?: string }
  | { type: "video"; url: string; caption?: string };

export interface ConceptLessonDetail extends LessonBase {
  kind: "concept";
  slug: string;
  title: string;
  summary: string;
  body: LessonBlock[];
  quiz: ConceptQuizPrompt[];
}

export interface StrategyQuestionPrompt {
  id: "maxProfit" | "maxLoss" | "outlook" | "netPosition";
  type: "numeric-or-unlimited" | "mcq";
  prompt: string;
  choices?: string[];
}

export interface StrategyLessonDetail extends LessonBase {
  kind: "strategy";
  strategy: Strategy;
  practiceParams: Record<string, number>;
  questions: StrategyQuestionPrompt[];
}

export type LessonDetail = ConceptLessonDetail | StrategyLessonDetail;

export interface QuestionResult {
  questionId: string;
  correct: boolean;
  correctAnswer: string;
  explanation?: string;
}

export interface GradeResponse {
  score: number;
  passed: boolean;
  results: QuestionResult[];
  lessonNewlyCompleted: boolean;
  bestScore: number;
}
