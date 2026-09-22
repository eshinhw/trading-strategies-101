// Converts the plain-text formula notation authored in the strategy data
// (e.g. "P_max = K1 - K2 + netCF") into real LaTeX, so it can render through
// KaTeX instead of a wall of monospace text. This is a best-effort automatic
// converter, not hand-authored LaTeX per strategy — see Formula.tsx for why.
export function formulaToLatex(input: string): string {
  let s = input;

  // Unicode normalization
  s = s.replace(/×/g, " \\times ");
  s = s.replace(/÷/g, " \\div ");
  s = s.replace(/−/g, "-");
  s = s.replace(/κ/g, "\\kappa ");
  s = s.replace(/≤/g, "\\le ");
  s = s.replace(/≥/g, "\\ge ");

  // Specific known tokens ahead of the generic word-wrap pass
  s = s.replace(/\bn\/a\b/gi, "\\text{n/a}");
  s = s.replace(/\bunlimited\b/gi, "\\infty");

  // Positive-part operator: (...)+  ->  (...)^{+}
  s = s.replace(/\)\+/g, ")^{+}");

  // Existing underscore subscripts: brace-wrap the target so multi-char
  // subscripts render correctly (S_T, P_max -> P_{max}, S*_down -> S*_{down}).
  s = s.replace(/_([A-Za-z0-9*]+)/g, "_{$1}");

  // Letter immediately followed by an asterisk: S* -> S^{*}
  s = s.replace(/([A-Za-z])\*/g, "$1^{*}");

  // Bare letter+digits (no underscore) -> subscript: S0 -> S_{0}, K1 -> K_{1}
  s = s.replace(/([A-Za-z])([0-9]{1,2})\b/g, "$1_{$2}");

  // Wrap remaining multi-letter alphabetic runs (real words and multi-letter
  // identifiers like netCF, NS, NL, BS_call) in \text{}, merging space-joined
  // runs of 2+-letter words into one block so KaTeX doesn't collapse the
  // space between them. Single letters are left alone — they're math variables.
  const tokenRe = /(?<![\\A-Za-z])[A-Za-z]+(?:'[A-Za-z]+)?/g;
  const matches = [...s.matchAll(tokenRe)];
  let out = "";
  let cursor = 0;
  let i = 0;
  while (i < matches.length) {
    const m = matches[i];
    if (m[0].length < 2) {
      i++;
      continue;
    }
    let end = m.index! + m[0].length;
    let j = i + 1;
    while (j < matches.length && matches[j][0].length >= 2 && s.slice(end, matches[j].index) === " ") {
      end = matches[j].index! + matches[j][0].length;
      j++;
    }
    out += s.slice(cursor, m.index);
    out += `\\text{${s.slice(m.index, end)}}`;
    cursor = end;
    i = j;
  }
  out += s.slice(cursor);
  return out;
}

/** Formulas without an "=" are pure prose ("Solved numerically", "n/a — payoff is
 * constant") rather than math to typeset — render those as plain text instead. */
export function isMathFormula(input: string): boolean {
  return input.includes("=");
}
