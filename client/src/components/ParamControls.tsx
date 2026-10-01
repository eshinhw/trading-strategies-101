import type { ParamDef } from "../types/strategy";
import type { ParamValues } from "../engine/payoff";
import { NumberField } from "./NumberField";

export function ParamControls({
  params,
  values,
  onChange,
  onReset,
}: {
  params: ParamDef[];
  values: ParamValues;
  onChange: (key: string, value: number) => void;
  onReset: () => void;
}) {
  return (
    <div className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
          Adjust parameters
        </h3>
        <button
          onClick={onReset}
          className="text-xs text-[#7c6cff] hover:underline"
        >
          Reset to defaults
        </button>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {params.map((p) => (
          <div key={p.key}>
            <div className="mb-1 flex items-center justify-between gap-3">
              <label htmlFor={p.key} className="text-sm text-[#e6e8ec]">
                {p.label}
              </label>
              <NumberField
                id={`${p.key}-number`}
                value={values[p.key] ?? p.default}
                min={p.min}
                max={p.max}
                step={p.step}
                onCommit={(n) => onChange(p.key, n)}
              />
            </div>
            <input
              id={p.key}
              type="range"
              min={p.min}
              max={p.max}
              step={p.step}
              value={values[p.key] ?? p.default}
              onChange={(e) => onChange(p.key, Number(e.target.value))}
              className="w-full accent-[#7c6cff]"
            />
            {p.hint && <div className="mt-1 text-xs text-[#898781]">{p.hint}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
