import { useMemo } from "react";
import katex from "katex";
import { formulaToLatex, isMathFormula } from "../lib/formulaToLatex";

/** Renders one of the plain-text strategy formula strings as typeset math via
 * KaTeX. Falls back to plain text for the handful of formulas that are pure
 * prose ("Solved numerically") rather than an actual expression. */
export function Formula({ children }: { children: string }) {
  const html = useMemo(() => {
    if (!isMathFormula(children)) return null;
    try {
      return katex.renderToString(formulaToLatex(children), { throwOnError: false, displayMode: false });
    } catch {
      return null;
    }
  }, [children]);

  if (!html) {
    return <span className="text-[#e6e8ec]">{children}</span>;
  }

  return <span className="text-[#e6e8ec] [&_.katex]:text-base" dangerouslySetInnerHTML={{ __html: html }} />;
}
