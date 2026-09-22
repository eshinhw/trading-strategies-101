import type { Strategy } from "../types.js";
import type { ConstructionExercise, ConstructionGoal } from "../data/curriculum/types.js";
import type { ParamValues, PayoffStats } from "../engine/payoff.js";
import { computePayoffStats } from "../engine/payoff.js";

/** Net cash flow is a param the learner controls (netCF), not fixed strategy
 * metadata — a collar can be tuned to debit, credit, or zero-cost depending on
 * strikes, so we grade what they actually built, not the strategy's label. */
function actualNetPosition(params: ParamValues): "debit" | "credit" | "zero-cost" {
  const cf = params.netCF ?? 0;
  if (cf > 0) return "credit";
  if (cf < 0) return "debit";
  return "zero-cost";
}

function goalLabel(goal: ConstructionGoal): string {
  switch (goal.kind) {
    case "maxLossAtMost":
      return `Max loss at most $${goal.value.toFixed(2)}`;
    case "maxProfitAtLeast":
      return `Max profit at least $${goal.value.toFixed(2)}`;
    case "maxProfitUnlimited":
      return "Unlimited upside";
    case "outlookMatches":
      return `A ${goal.outlook} strategy`;
    case "netPositionIs":
      return goal.netPosition === "credit"
        ? "Net credit — you receive money to enter"
        : goal.netPosition === "debit"
          ? "Net debit — you pay to enter"
          : "Zero-cost to enter";
    case "all":
      return "All of the above";
  }
}

function goalMet(goal: ConstructionGoal, stats: PayoffStats, strategy: Strategy, params: ParamValues): boolean {
  switch (goal.kind) {
    case "maxLossAtMost":
      return stats.maxLoss !== "unlimited" && stats.maxLoss <= goal.value;
    case "maxProfitAtLeast":
      return stats.maxProfit === "unlimited" || stats.maxProfit >= goal.value;
    case "maxProfitUnlimited":
      return stats.maxProfit === "unlimited";
    case "outlookMatches":
      return strategy.outlook === goal.outlook;
    case "netPositionIs":
      return actualNetPosition(params) === goal.netPosition;
    case "all":
      return goal.goals.every((g) => goalMet(g, stats, strategy, params));
  }
}

/** "all" flattens to its children for display; anything else is a single-item checklist. */
function checklistItems(goal: ConstructionGoal): ConstructionGoal[] {
  return goal.kind === "all" ? goal.goals : [goal];
}

export function buildGoalChecklist(goal: ConstructionGoal): string[] {
  return checklistItems(goal).map(goalLabel);
}

/** Clamp/backfill submitted params against the strategy's own param bounds so a
 * malformed or missing value can't produce NaN/garbage — not an anti-cheat
 * measure, since picking params to satisfy the goal is the entire exercise. */
function sanitizeParams(strategy: Strategy, raw: ParamValues): ParamValues {
  const params: ParamValues = {};
  for (const p of strategy.params) {
    const v = raw[p.key];
    params[p.key] = typeof v === "number" && Number.isFinite(v) ? Math.min(p.max, Math.max(p.min, v)) : p.default;
  }
  return params;
}

export interface ConstructionChecklistItem {
  label: string;
  met: boolean;
}

export interface ConstructionGradeResult {
  passed: boolean;
  checklist: ConstructionChecklistItem[];
  stats: PayoffStats;
}

export function gradeConstruction(
  exercise: ConstructionExercise,
  strategy: Strategy,
  rawParams: ParamValues,
): ConstructionGradeResult {
  const params = sanitizeParams(strategy, rawParams);
  const stats = computePayoffStats(strategy, params);
  const checklist = checklistItems(exercise.goal).map((g) => ({
    label: goalLabel(g),
    met: goalMet(g, stats, strategy, params),
  }));
  return { passed: checklist.every((c) => c.met), checklist, stats };
}
