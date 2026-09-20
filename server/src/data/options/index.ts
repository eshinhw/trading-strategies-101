import type { Strategy } from "../../types.js";
import { incomeAndHedging } from "./incomeAndHedging.js";
import { verticalSpreads } from "./verticalSpreads.js";
import { syntheticsAndCombos } from "./syntheticsAndCombos.js";
import { ladders } from "./ladders.js";
import { calendarAndDiagonal } from "./calendarAndDiagonal.js";
import { straddlesAndStrangles } from "./straddlesAndStrangles.js";
import { syntheticStraddles } from "./syntheticStraddles.js";
import { strapStripAndRatios } from "./strapStripAndRatios.js";
import { butterflies } from "./butterflies.js";
import { condors } from "./condors.js";
import { seagulls } from "./seagulls.js";

export const optionsStrategies: Strategy[] = [
  ...incomeAndHedging,
  ...verticalSpreads,
  ...syntheticsAndCombos,
  ...ladders,
  ...calendarAndDiagonal,
  ...straddlesAndStrangles,
  ...syntheticStraddles,
  ...strapStripAndRatios,
  ...butterflies,
  ...condors,
  ...seagulls,
].sort((a, b) => {
  const [aMaj, aMin] = a.section.split(".").map(Number);
  const [bMaj, bMin] = b.section.split(".").map(Number);
  return aMaj - bMaj || aMin - bMin;
});
