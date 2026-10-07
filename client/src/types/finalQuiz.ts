export interface FinalQuizStatus {
  unlocked: boolean;
  signedIn: boolean;
  progress: { passed: boolean; bestScore: number | null; attempts: number } | null;
}

export interface FinalQuizQuestion {
  id: string;
  moduleSlug: string;
  moduleTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  questionId: string;
  prompt: string;
  choices: string[];
}

export interface FinalQuizAnswerSubmission {
  id: string;
  lessonSlug: string;
  moduleTitle: string;
  lessonTitle: string;
  questionId: string;
  prompt: string;
  choiceIndex?: number;
}

export interface FinalQuizQuestionResult {
  id: string;
  moduleTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  prompt: string;
  correct: boolean;
  correctAnswer: string;
  explanation?: string;
}

export interface FinalQuizGradeResponse {
  score: number;
  passed: boolean;
  results: FinalQuizQuestionResult[];
  courseNewlyCompleted: boolean;
  bestScore: number;
}
