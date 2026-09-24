import { useEffect, useState } from "react";
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
    <div className="rounded-xl border border-[#2a3040] bg-[#141821] card-glow p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#9aa3b2]">
          Adjust parameters
        </h3>
        <button
          onClick={onReset}
          className="text-xs text-[#4f8cff] hover:underline"
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
              className="w-full accent-[#4f8cff]"
            />
            {p.hint && <div className="mt-1 text-xs text-[#898781]">{p.hint}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// Owns its own text state so the field can be cleared and retyped freely
// while editing, instead of a controlled `value` fighting every keystroke.
// Valid numbers commit live (so the chart updates as you type); on blur the
// value is clamped back into [min, max] and re-synced to the field.
function NumberField({
  id,
  value,
  min,
  max,
  step,
  onCommit,
}: {
  id: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onCommit: (n: number) => void;
}) {
  const [text, setText] = useState(String(value));

  useEffect(() => {
    setText(String(value));
  }, [value]);

  return (
    <input
      id={id}
      type="number"
      inputMode="decimal"
      min={min}
      max={max}
      step={step}
      value={text}
      onChange={(e) => {
        const raw = e.target.value;
        setText(raw);
        const n = Number(raw);
        if (raw.trim() !== "" && !Number.isNaN(n)) onCommit(n);
      }}
      onBlur={() => {
        const n = Number(text);
        const clamped = Number.isNaN(n) ? value : Math.min(max, Math.max(min, n));
        setText(String(clamped));
        onCommit(clamped);
      }}
      className="w-20 rounded-md border border-[#2a3040] bg-[#0e1117] px-2 py-0.5 text-right font-mono text-sm text-[#4f8cff] focus:border-[#4f8cff]/60 focus:outline-none"
    />
  );
}
