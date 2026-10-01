import { useEffect, useState } from "react";

// Owns its own text state so the field can be cleared and retyped freely
// while editing, instead of a controlled `value` fighting every keystroke
// (which otherwise re-inserts digits in front of what's left, e.g. typing
// over "100" can land on "0100"). Valid numbers commit live (so a live
// chart can update as you type); on blur the value is clamped back into
// [min, max] and re-synced to the field.
export function NumberField({
  id,
  value,
  min,
  max,
  step,
  onCommit,
  className,
}: {
  id?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onCommit: (n: number) => void;
  className?: string;
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
      className={
        className ??
        "w-20 rounded-md border border-[#2a3040] bg-[#0e1117] px-2 py-0.5 text-right font-mono text-sm text-[#7c6cff] focus:border-[#7c6cff]/60 focus:outline-none"
      }
    />
  );
}
