import type { ParamDef } from "../types/strategy";
import type { ParamValues } from "../engine/payoff";

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
    <div className="rounded-xl border border-[#1e3d2f] bg-[#0e2118] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#8fada0]">
          Adjust parameters
        </h3>
        <button
          onClick={onReset}
          className="text-xs text-[#34c98a] hover:underline"
        >
          Reset to defaults
        </button>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {params.map((p) => (
          <div key={p.key}>
            <div className="mb-1 flex items-baseline justify-between">
              <label htmlFor={p.key} className="text-sm text-[#e6f2ec]">
                {p.label}
              </label>
              <span className="font-mono text-sm text-[#34c98a]">
                {values[p.key] ?? p.default}
              </span>
            </div>
            <input
              id={p.key}
              type="range"
              min={p.min}
              max={p.max}
              step={p.step}
              value={values[p.key] ?? p.default}
              onChange={(e) => onChange(p.key, Number(e.target.value))}
              className="w-full accent-[#34c98a]"
            />
            {p.hint && <div className="mt-1 text-xs text-[#6f8a7c]">{p.hint}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
