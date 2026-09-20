import { Router } from "express";
import { optionsStrategies } from "../data/options/index.js";

const router = Router();

router.get("/", (req, res) => {
  const { outlook, style, netPosition } = req.query;
  let results = optionsStrategies;

  if (typeof outlook === "string") {
    results = results.filter((s) => s.outlook === outlook);
  }
  if (typeof style === "string") {
    results = results.filter((s) => s.style === style);
  }
  if (typeof netPosition === "string") {
    results = results.filter((s) => s.netPosition === netPosition);
  }

  // list view doesn't need full param/content payload
  const summaries = results.map(({ slug, name, aka, section, outlook, style, netPosition, legCount, content }) => ({
    slug,
    name,
    aka,
    section,
    outlook,
    style,
    netPosition,
    legCount,
    summary: content.summary,
  }));

  res.json({ count: summaries.length, strategies: summaries });
});

router.get("/:slug", (req, res) => {
  const strategy = optionsStrategies.find((s) => s.slug === req.params.slug);
  if (!strategy) {
    return res.status(404).json({ error: `No strategy found for slug "${req.params.slug}"` });
  }
  res.json(strategy);
});

export default router;
