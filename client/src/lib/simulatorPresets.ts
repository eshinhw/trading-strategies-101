import type { OptionType, Side } from "../types/strategy";

// One-click starting points for the Options Payoff Simulator, shared with the Practice page's quick links.
// Strikes are offsets from the current spot price, so a preset always lands around the money wherever the
// learner has set the spot.
export interface PresetLeg {
  instrument: OptionType | "stock";
  side: Side;
  offset: number;
  qty?: number;
}

export interface SimulatorPreset {
  id: string;
  name: string;
  legs: PresetLeg[];
}

export const SIMULATOR_PRESETS: SimulatorPreset[] = [
  { id: "long-call", name: "Long call", legs: [{ instrument: "call", side: "long", offset: 0 }] },
  { id: "long-put", name: "Long put", legs: [{ instrument: "put", side: "long", offset: 0 }] },
  {
    id: "covered-call",
    name: "Covered call",
    legs: [
      { instrument: "stock", side: "long", offset: 0 },
      { instrument: "call", side: "short", offset: 5 },
    ],
  },
  {
    id: "bull-call-spread",
    name: "Bull call spread",
    legs: [
      { instrument: "call", side: "long", offset: 0 },
      { instrument: "call", side: "short", offset: 10 },
    ],
  },
  {
    id: "long-straddle",
    name: "Long straddle",
    legs: [
      { instrument: "call", side: "long", offset: 0 },
      { instrument: "put", side: "long", offset: 0 },
    ],
  },
  {
    id: "long-strangle",
    name: "Long strangle",
    legs: [
      { instrument: "call", side: "long", offset: 5 },
      { instrument: "put", side: "long", offset: -5 },
    ],
  },
  {
    id: "long-call-butterfly",
    name: "Long call butterfly",
    legs: [
      { instrument: "call", side: "long", offset: -10 },
      { instrument: "call", side: "short", offset: 0, qty: 2 },
      { instrument: "call", side: "long", offset: 10 },
    ],
  },
  {
    id: "long-iron-condor",
    name: "Long iron condor",
    legs: [
      { instrument: "put", side: "long", offset: -15 },
      { instrument: "put", side: "short", offset: -5 },
      { instrument: "call", side: "short", offset: 5 },
      { instrument: "call", side: "long", offset: 15 },
    ],
  },
];
