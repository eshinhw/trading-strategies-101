import { Fragment } from "react";
import katex from "katex";

// Matches K1, K2, S0, etc. (a capital letter directly followed by 1-2 digits)
// and NS/NL (number-short / number-long contract counts) inside an otherwise
// plain-English param label like "Long call strike (K1, ITM)".
const VAR_RE = /([A-Z])([0-9]{1,2})\b|\bN([SL])\b/g;

function renderVar(html: string): string {
  return katex.renderToString(html, { throwOnError: false, displayMode: false });
}

/** Renders a strategy param label, subscripting just the variable reference
 * inside it (K1 -> K_1) while leaving the surrounding English text as-is. */
export function ParamLabel({ label }: { label: string }) {
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const m of label.matchAll(VAR_RE)) {
    const idx = m.index!;
    if (idx > cursor) parts.push(<Fragment key={key++}>{label.slice(cursor, idx)}</Fragment>);
    const latex = m[3] ? `N_{${m[3]}}` : `${m[1]}_{${m[2]}}`;
    parts.push(<span key={key++} dangerouslySetInnerHTML={{ __html: renderVar(latex) }} />);
    cursor = idx + m[0].length;
  }
  parts.push(<Fragment key={key++}>{label.slice(cursor)}</Fragment>);

  return <>{parts}</>;
}
