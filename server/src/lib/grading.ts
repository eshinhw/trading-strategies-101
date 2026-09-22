import type { Strategy } from "../types.js";
import type { ConceptLesson } from "../data/curriculum/types.js";
import type { ParamValues } from "../engine/payoff.js";
import { computePayoffStats } from "../engine/payoff.js";

export const OUTLOOK_CHOICES = ["bullish", "bearish", "neutral"] as const;
export const NET_POSITION_CHOICES = [
  "Net debit — I pay to enter",
  "Net credit — I receive money to enter",
] as const;

export type NumericAnswer = { unlimited: true } | { unlimited?: false; value: number };

export interface StrategyQuestion {
  id: "maxProfit" | "maxLoss" | "outlook" | "netPosition";
  type: "numeric-or-unlimited" | "mcq";
  prompt: string;
  choices?: readonly string[];
}

/** The question set is derived purely from strategy metadata — no per-strategy authoring needed. */
export function buildStrategyQuestions(strategy: Strategy): StrategyQuestion[] {
  const questions: StrategyQuestion[] = [
    {
      id: "maxProfit",
      type: "numeric-or-unlimited",
      prompt: "Given these parameters, what is this strategy's maximum profit at expiration?",
    },
    {
      id: "maxLoss",
      type: "numeric-or-unlimited",
      prompt: "Given these parameters, what is this strategy's maximum loss at expiration?",
    },
    {
      id: "outlook",
      type: "mcq",
      prompt: "What market outlook does this strategy express?",
      choices: OUTLOOK_CHOICES,
    },
  ];

  if (strategy.netPosition === "debit" || strategy.netPosition === "credit") {
    questions.push({
      id: "netPosition",
      type: "mcq",
      prompt: "Is this trade, as structured, a net debit or a net credit?",
      choices: NET_POSITION_CHOICES,
    });
  }

  return questions;
}

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

export function numericMatches(correct: number | "unlimited", submitted: NumericAnswer | undefined): boolean {
  if (!submitted) return false;
  if (correct === "unlimited") return submitted.unlimited === true;
  if (submitted.unlimited) return false;
  const tolerance = Math.max(0.5, Math.abs(correct) * 0.05);
  return Math.abs(submitted.value - correct) <= tolerance;
}

export function fmtAnswer(v: number | "unlimited"): string {
  return v === "unlimited" ? "Unlimited" : `$${v.toFixed(2)}`;
}

export interface StrategySubmission {
  practiceParams: ParamValues;
  answers: {
    maxProfit?: NumericAnswer;
    maxLoss?: NumericAnswer;
    outlook?: number;
    netPosition?: number;
  };
}

export function gradeStrategySubmission(strategy: Strategy, submission: StrategySubmission): GradeResult {
  const questions = buildStrategyQuestions(strategy);
  const stats = computePayoffStats(strategy, submission.practiceParams);

  const results: QuestionResult[] = questions.map((q) => {
    if (q.id === "maxProfit") {
      const correct = numericMatches(stats.maxProfit, submission.answers.maxProfit);
      return { questionId: q.id, correct, correctAnswer: fmtAnswer(stats.maxProfit) };
    }
    if (q.id === "maxLoss") {
      const correct = numericMatches(stats.maxLoss, submission.answers.maxLoss);
      return { questionId: q.id, correct, correctAnswer: fmtAnswer(stats.maxLoss) };
    }
    if (q.id === "outlook") {
      const correctIndex = OUTLOOK_CHOICES.indexOf(strategy.outlook);
      const correct = submission.answers.outlook === correctIndex;
      return { questionId: q.id, correct, correctAnswer: OUTLOOK_CHOICES[correctIndex] };
    }
    // netPosition
    const correctIndex = strategy.netPosition === "debit" ? 0 : 1;
    const correct = submission.answers.netPosition === correctIndex;
    return {
      questionId: q.id,
      correct,
      correctAnswer: NET_POSITION_CHOICES[correctIndex],
    };
  });

  const score = results.filter((r) => r.correct).length / results.length;
  return { score, passed: score >= PASS_THRESHOLD, results };
}

export function gradeConceptSubmission(
  lesson: ConceptLesson,
  answers: Record<string, number>,
): GradeResult {
  const results: QuestionResult[] = lesson.quiz.map((q) => ({
    questionId: q.id,
    correct: answers[q.id] === q.correctIndex,
    correctAnswer: q.choices[q.correctIndex],
    explanation: q.explanation,
  }));

  const score = results.filter((r) => r.correct).length / results.length;
  return { score, passed: score >= PASS_THRESHOLD, results };
}
