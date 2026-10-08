import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { LEGAL_CONTACT_EMAIL, LEGAL_LAST_UPDATED, LEGAL_PAGES } from "../lib/legal";

// Shared layout for the Privacy, Cookie and Terms pages: the same page header as the rest of the site, numbered
// sections with a sticky table of contents on wide screens, and links between the three policies at the end.

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

export function ContactEmail() {
  if (LEGAL_CONTACT_EMAIL) {
    return (
      <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="text-[#a99dff] hover:underline">
        {LEGAL_CONTACT_EMAIL}
      </a>
    );
  }
  return (
    <span className="rounded bg-amber-400/15 px-1.5 py-0.5 font-medium text-amber-300">[contact email to be added]</span>
  );
}

/** Body text helpers, so the three policies share one typographic voice. */
export function P({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed text-[#b4bacb]">{children}</p>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="pt-2 font-semibold text-[#e6e8ec]">{children}</h3>;
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2 pl-5 text-[#b4bacb] marker:text-[#7c6cff] [list-style:disc]">
      {items.map((item, i) => (
        <li key={i} className="pl-1 leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#2a3040]">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-[#141821] text-xs uppercase tracking-wide text-[#898781]">
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#2a3040]">
          {rows.map((row, i) => (
            <tr key={i} className="align-top">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 leading-relaxed ${j === 0 ? "font-mono text-xs text-[#e6e8ec]" : "text-[#b4bacb]"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="text-[#a99dff] hover:underline">
      {children}
    </Link>
  );
}

export function LegalPage({ title, intro, sections }: { title: string; intro: ReactNode; sections: LegalSection[] }) {
  const { pathname, hash } = useLocation();

  // The page is lazy-loaded, so the browser's own jump to #section happens before the section exists. Do it once rendered.
  useEffect(() => {
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [hash]);

  return (
    <div>
      <header className="relative overflow-hidden border-b border-[#2a3040]">
        <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[360px] w-[820px] -translate-x-1/2 rounded-full bg-[#7c6cff] opacity-10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7c6cff]">Legal</div>
            <h1 className="mt-2 text-4xl font-bold text-[#e6e8ec]">{title}</h1>
            <p className="mt-3 text-sm text-[#898781]">Last updated: {LEGAL_LAST_UPDATED}</p>
            <div className="mt-4 leading-relaxed text-[#9aa3b2]">{intro}</div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-24">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#898781]">On this page</div>
            <ol className="mt-3 flex flex-col gap-2 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-[#9aa3b2] transition hover:text-[#a99dff]">
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <article className="flex max-w-3xl flex-col gap-10">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="flex scroll-mt-24 flex-col gap-3">
              <h2 className="text-xl font-semibold text-[#e6e8ec]">
                {i + 1}. {s.title}
              </h2>
              {s.body}
            </section>
          ))}

          <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-[#2a3040] pt-6 text-sm">
            {LEGAL_PAGES.filter((p) => p.to !== pathname).map((p) => (
              <TextLink key={p.to} to={p.to}>
                {p.label} →
              </TextLink>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
