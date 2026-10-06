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
  questionId: string;
  prompt: string;
  choices: string[];
}

export interface ExamAnswerSubmission {
  id: string;
  lessonSlug: string;
  moduleTitle: string;
  lessonTitle: string;
  questionId: string;
  prompt: string;
  choiceIndex?: number;
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
