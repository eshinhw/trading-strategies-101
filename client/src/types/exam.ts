export interface ExamStatus {
  unlocked: boolean;
  signedIn: boolean;
  progress: { passed: boolean; bestScore: number | null; attempts: number } | null;
}

export interface ExamQuestion {
  id: string;
  moduleSlug: string;
  moduleTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  kind: "concept" | "strategy";
  questionId: string;
  prompt: string;
  type: "mcq" | "numeric-or-unlimited";
  choices?: string[];
  practiceParams?: Record<string, number>;
  paramDefs?: { key: string; label: string }[];
}

export type ExamNumericAnswer = { unlimited: boolean; text: string };

export interface ExamAnswerSubmission {
  id: string;
  lessonSlug: string;
  moduleTitle: string;
  lessonTitle: string;
  kind: "concept" | "strategy";
  questionId: string;
  prompt: string;
  choiceIndex?: number;
  numeric?: { unlimited: boolean; value?: number };
  practiceParams?: Record<string, number>;
}

export interface ExamQuestionResult {
  id: string;
  moduleTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  prompt: string;
  correct: boolean;
  correctAnswer: string;
  explanation?: string;
}

export interface ExamGradeResponse {
  score: number;
  passed: boolean;
  results: ExamQuestionResult[];
  courseNewlyCompleted: boolean;
  bestScore: number;
}
