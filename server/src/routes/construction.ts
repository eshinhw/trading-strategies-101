import { Router } from "express";
import { constructionExercises } from "../data/curriculum/constructionExercises.js";
import { getModule } from "../data/curriculum/index.js";
import { optionsStrategies } from "../data/options/index.js";
import { buildGoalChecklist, gradeConstruction } from "../lib/construction.js";
import type { ParamValues } from "../engine/payoff.js";

const router = Router();

function slugParam(v: string | string[]): string {
  return Array.isArray(v) ? v[0] : v;
}

router.get("/", (_req, res) => {
  res.json({
    exercises: constructionExercises.map((ex) => ({
      slug: ex.slug,
      moduleSlug: ex.moduleSlug,
      title: ex.title,
    })),
  });
});

router.get("/:slug", (req, res) => {
  const exercise = constructionExercises.find((ex) => ex.slug === slugParam(req.params.slug));
  if (!exercise) return res.status(404).json({ error: "Exercise not found" });

  const module = getModule(exercise.moduleSlug);
  const candidates = exercise.candidateStrategySlugs.map((slug) => {
    const strategy = optionsStrategies.find((s) => s.slug === slug)!;
    return { slug: strategy.slug, name: strategy.name };
  });

  res.json({
    slug: exercise.slug,
    moduleSlug: exercise.moduleSlug,
    moduleTitle: module?.title ?? null,
    title: exercise.title,
    scenario: exercise.scenario,
    goalChecklist: buildGoalChecklist(exercise.goal),
    candidates,
  });
});

router.post("/:slug/submit", (req, res) => {
  const exercise = constructionExercises.find((ex) => ex.slug === slugParam(req.params.slug));
  if (!exercise) return res.status(404).json({ error: "Exercise not found" });

  const { strategySlug, params } = (req.body ?? {}) as { strategySlug?: string; params?: ParamValues };
  if (!strategySlug || !exercise.candidateStrategySlugs.includes(strategySlug)) {
    return res.status(400).json({ error: "Pick one of the offered strategies." });
  }
  const strategy = optionsStrategies.find((s) => s.slug === strategySlug)!;

  const grade = gradeConstruction(exercise, strategy, params ?? {});
  res.json(grade);
});

export default router;
