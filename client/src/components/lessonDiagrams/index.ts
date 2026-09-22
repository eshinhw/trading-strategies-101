import type { ComponentType } from "react";
import { MovingAverageCrossoverDiagram } from "./MovingAverageCrossoverDiagram";
import { ChannelDiagram } from "./ChannelDiagram";
import { SupportResistanceDiagram } from "./SupportResistanceDiagram";
import { PairsTradingDiagram } from "./PairsTradingDiagram";
import { MeanReversionBandDiagram } from "./MeanReversionBandDiagram";
import { LeveragedEtfDecayDiagram } from "./LeveragedEtfDecayDiagram";
import { SingleMovingAverageDiagram } from "./SingleMovingAverageDiagram";
import { ThreeMovingAverageDiagram } from "./ThreeMovingAverageDiagram";
import { BidAskSpreadDiagram } from "./BidAskSpreadDiagram";
import { ClusterDeviationDiagram } from "./ClusterDeviationDiagram";
import { RSquaredComparisonDiagram } from "./RSquaredComparisonDiagram";
import { FuturesCurveDiagram } from "./FuturesCurveDiagram";

// Diagrams are hand-built illustrations, not data-driven charts, so a lesson
// references one by id rather than the content file embedding raw SVG or
// chart data — keeps the diagram themeable/reusable and the lesson content
// readable.
export const lessonDiagrams: Record<string, ComponentType> = {
  "moving-average-crossover": MovingAverageCrossoverDiagram,
  channel: ChannelDiagram,
  "support-resistance": SupportResistanceDiagram,
  "pairs-trading": PairsTradingDiagram,
  "mean-reversion-band": MeanReversionBandDiagram,
  "leveraged-etf-decay": LeveragedEtfDecayDiagram,
  "single-moving-average": SingleMovingAverageDiagram,
  "three-moving-average-alignment": ThreeMovingAverageDiagram,
  "bid-ask-spread": BidAskSpreadDiagram,
  "cluster-deviation": ClusterDeviationDiagram,
  "r-squared-comparison": RSquaredComparisonDiagram,
  "futures-curve": FuturesCurveDiagram,
};
