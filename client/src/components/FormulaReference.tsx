import { useState } from "react";
import type { Strategy } from "../types/strategy";
import { Formula } from "./Formula";

export function FormulaReference({ strategy }: { strategy: Strategy }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow((v) => !v)} className="text-sm text-[#7c6cff] hover:underline">
        {show ? "Hide" : "Show"} the formulas (§{strategy.section})
      </button>
      {show && (
        <div className="mt-3 grid grid-cols-1 gap-3 rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5 text-sm sm:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-wide text-[#898781]">Payoff</div>
            <div className="mt-1 break-words">
              <Formula>{strategy.formulas.payoff}</Formula>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-[#898781]">Breakeven</div>
            <div className="mt-1 break-words">
              <Formula>{strategy.formulas.breakeven}</Formula>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-[#898781]">Max profit</div>
            <div className="mt-1 break-words">
              <Formula>{strategy.formulas.maxProfit}</Formula>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wide text-[#898781]">Max loss</div>
            <div className="mt-1 break-words">
              <Formula>{strategy.formulas.maxLoss}</Formula>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
