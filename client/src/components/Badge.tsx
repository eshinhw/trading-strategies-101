import type { Outlook } from "../types/strategy";

const OUTLOOK_STYLE: Record<Outlook, string> = {
  bullish: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  bearish: "bg-red-500/15 text-red-400 border-red-500/30",
  neutral: "bg-violet-500/15 text-violet-300 border-violet-500/30",
};

export function OutlookBadge({ outlook }: { outlook: Outlook }) {
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${OUTLOOK_STYLE[outlook]}`}
    >
      {outlook}
    </span>
  );
}

export function PlainBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-[#2a3040] bg-[#1b2029] px-2.5 py-0.5 text-xs font-medium capitalize text-[#9aa3b2]">
      {children}
    </span>
  );
}
