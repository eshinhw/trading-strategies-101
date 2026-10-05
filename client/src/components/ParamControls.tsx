import type { ParamDef } from "../types/strategy";
import type { ParamValues } from "../engine/payoff";
import { ParamNumberCard } from "./ParamNumberCard";

export function ParamControls({
  params,
  values,
  onChange,
  onReset,
  gridClassName = "grid grid-cols-1 gap-5 sm:grid-cols-2",
  compact = false,
}: {
  params: ParamDef[];
  values: ParamValues;
  onChange: (key: string, value: number) => void;
  onReset: () => void;
  gridClassName?: string;
  compact?: boolean;
}) {
  return (
    <div className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">Pricing Parameters</h3>
        <button onClick={onReset} className="text-xs text-[#7c6cff] hover:underline">
          Reset to defaults
        </button>
      </div>
      <div className={gridClassName}>
        {params.map((p) => (
          <div key={p.key}>
            <ParamNumberCard
              id={`${p.key}-number`}
              label={p.label}
              value={values[p.key] ?? p.default}
              min={p.min}
              max={p.max}
              step={p.step}
              onCommit={(n) => onChange(p.key, n)}
              compact={compact}
            />
            <input
              id={`${p.key}-range`}
              type="range"
              min={p.min}
              max={p.max}
              step={p.step}
              value={values[p.key] ?? p.default}
              onChange={(e) => onChange(p.key, Number(e.target.value))}
              className="mt-2 w-full accent-[#7c6cff]"
            />
            {p.hint && <div className="mt-1 text-xs text-[#898781]">{p.hint}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
