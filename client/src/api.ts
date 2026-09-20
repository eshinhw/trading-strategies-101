import type { Strategy, StrategySummary } from "./types/strategy";

export async function fetchStrategies(): Promise<StrategySummary[]> {
  const res = await fetch("/api/strategies");
  if (!res.ok) throw new Error(`Failed to load strategies (${res.status})`);
  const data = await res.json();
  return data.strategies;
}

export async function fetchStrategy(slug: string): Promise<Strategy> {
  const res = await fetch(`/api/strategies/${slug}`);
  if (!res.ok) throw new Error(`Failed to load strategy "${slug}" (${res.status})`);
  return res.json();
}
