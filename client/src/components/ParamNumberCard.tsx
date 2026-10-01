import { useEffect, useState } from "react";

function decimalsOf(step: number): number {
  const s = String(step);
  const i = s.indexOf(".");
  return i === -1 ? 0 : s.length - i - 1;
}

// Bordered "stat card" number input — label on top, value on the left, stacked
// up/down stepper arrows on the right (native spinner arrows aren't stylable
// consistently across browsers, so these are custom). Keeps the same
// leading-zero-safe text-state handling as NumberField (own text state until
// blur/commit) so clearing and retyping a value works as expected.
export function ParamNumberCard({
  id,
  label,
  value,
  min,
  max,
  step,
  onCommit,
  compact = false,
}: {
  id?: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onCommit: (n: number) => void;
  compact?: boolean;
}) {
  const [text, setText] = useState(String(value));

  useEffect(() => {
    setText(String(value));
  }, [value]);

  function clamp(n: number): number {
    return Math.min(max, Math.max(min, n));
  }

  function nudge(dir: 1 | -1) {
    const n = Number(text);
    const base = Number.isNaN(n) ? value : n;
    const next = clamp(Number((base + dir * step).toFixed(decimalsOf(step))));
    setText(String(next));
    onCommit(next);
  }

  return (
    <div className={`rounded-lg border border-[#2a3040] bg-[#0e1117] ${compact ? "px-2 py-1.5" : "px-3 py-2"}`}>
      <label htmlFor={id} className={`block text-[#9aa3b2] ${compact ? "text-[10px]" : "text-xs"}`}>
        {label}
      </label>
      <div className="mt-1 flex items-center justify-between gap-2">
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
            const clamped = Number.isNaN(n) ? value : clamp(n);
            setText(String(clamped));
            onCommit(clamped);
          }}
          className={`w-full appearance-none bg-transparent font-semibold text-[#e6e8ec] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${compact ? "text-sm" : "text-lg"}`}
        />
        <div className="flex shrink-0 flex-col">
          <button
            type="button"
            aria-label={`Increase ${label}`}
            onClick={() => nudge(1)}
            className="flex h-3.5 w-5 items-center justify-center text-[#9aa3b2] transition hover:text-[#e6e8ec]"
          >
            <svg viewBox="0 0 10 6" className="h-2 w-2.5" fill="currentColor">
              <path d="M5 0l5 6H0z" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={`Decrease ${label}`}
            onClick={() => nudge(-1)}
            className="flex h-3.5 w-5 items-center justify-center text-[#9aa3b2] transition hover:text-[#e6e8ec]"
          >
            <svg viewBox="0 0 10 6" className="h-2 w-2.5" fill="currentColor">
              <path d="M0 0h10L5 6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
