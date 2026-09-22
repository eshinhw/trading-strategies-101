function fmtStat(v: number | "unlimited"): string {
  if (v === "unlimited") return "Unlimited";
  const sign = v < 0 ? "-" : "";
  return `${sign}$${Math.abs(v).toFixed(2)}`;
}

export function StatTile({
  label,
  value,
  tone,
}: {
  label: string;
  value: number | "unlimited" | string;
  tone: "good" | "critical" | "neutral";
}) {
  const toneClass =
    tone === "good"
      ? "text-emerald-400"
      : tone === "critical"
        ? "text-red-400"
        : "text-slate-200";

  const display = typeof value === "number" || value === "unlimited" ? fmtStat(value) : value;

  return (
    <div className="rounded-lg border border-[#1e3d2f] bg-[#0e2118] px-4 py-3">
      <div className="text-xs uppercase tracking-wide text-[#6f8a7c]">{label}</div>
      <div className={`mt-1 text-lg font-semibold ${toneClass}`}>{display}</div>
    </div>
  );
}
