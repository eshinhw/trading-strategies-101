import type { ConceptQuizQuestion } from "../data/curriculum/types.js";

export interface QuestionResult {
  questionId: string;
  correct: boolean;
  correctAnswer: string;
  explanation?: string;
}

export interface GradeResult {
  score: number; // 0-1
  passed: boolean;
  results: QuestionResult[];
}

export const PASS_THRESHOLD = 0.7;

/** Grades a multiple-choice quiz — a concept lesson's, or an Options strategy lesson's. */
export function gradeQuizSubmission(quiz: ConceptQuizQuestion[], answers: Record<string, number>): GradeResult {
  const results: QuestionResult[] = quiz.map((q) => ({
    questionId: q.id,
    correct: answers[q.id] === q.correctIndex,
    correctAnswer: q.choices[q.correctIndex],
    explanation: q.explanation,
  }));

  const score = results.filter((r) => r.correct).length / results.length;
  return { score, passed: score >= PASS_THRESHOLD, results };
}
