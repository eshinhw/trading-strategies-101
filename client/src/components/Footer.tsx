import { Link } from "react-router-dom";

const LEARN_LINKS = [
  { to: "/courses", label: "Courses" },
  { to: "/books", label: "Books" },
  { to: "/papers", label: "Papers" },
];

const ACCOUNT_LINKS = [
  { to: "/login", label: "Sign in" },
  { to: "/signup", label: "Sign up" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2a3040] bg-[#0e1117]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-semibold text-[#e6e8ec]">
              <svg viewBox="0 0 100 100" width="20" height="20" aria-hidden="true" className="shrink-0">
                <polyline
                  points="24,30 50,68 76,30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="13"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Trading Strategies 101
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#9aa3b2]">
              Hands-on lessons for 18 asset classes, from options to distressed debt.
            </p>
          </div>

          <FooterColumn title="Learn" links={LEARN_LINKS} />
          <FooterColumn title="Account" links={ACCOUNT_LINKS} />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#2a3040] pt-6 text-xs text-[#898781] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Trading Strategies 101.</p>
          <p className="max-w-2xl sm:text-right">
            Strategy mechanics, formulas, and categorization are drawn from Kakushadze, Z. and Serur, J.A.,{" "}
            <em>151 Trading Strategies</em> (2018). Plain-English explanations, scenarios, and course content are
            original to this project.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wide text-[#9aa3b2]">{title}</h4>
      <ul className="mt-3 flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-sm text-[#9aa3b2] hover:text-[#e6e8ec]">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
