import { Link } from "react-router-dom";
import { LogoMark } from "./Nav";

const EXPLORE_LINKS = [
  { to: "/courses", label: "All courses" },
  { to: "/practice", label: "Practice" },
  { to: "/books", label: "Books" },
  { to: "/papers", label: "Papers" },
];

const POPULAR_LINKS = [
  { to: "/courses/options", label: "Options" },
  { to: "/courses/futures", label: "Futures" },
  { to: "/courses/fixed-income", label: "Fixed Income" },
  { to: "/courses/stocks", label: "Stocks" },
  { to: "/courses/fx", label: "FX" },
];

const ACCOUNT_LINKS = [
  { to: "/signup", label: "Sign up" },
  { to: "/login", label: "Sign in" },
];

const GITHUB_URL = "https://github.com/eshinhw/trading-strategies-101";

// A few layered, gently uneven lines spanning the footer — the same "market line" language as
// the hero's ticker, but calmer: multiple static ridges instead of one animated price path.
function FooterBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      preserveAspectRatio="none"
      viewBox="0 0 1200 300"
      aria-hidden="true"
    >
      <polyline
        points="0,210 80,190 160,205 240,170 320,185 400,150 480,165 560,120 640,140 720,100 800,125 880,90 960,110 1040,70 1120,95 1200,60"
        fill="none"
        stroke="#7c6cff"
        strokeWidth="2"
      />
      <polyline
        points="0,250 90,235 180,245 270,215 360,230 450,195 540,210 630,175 720,190 810,160 900,175 990,145 1080,160 1200,130"
        fill="none"
        stroke="#7c6cff"
        strokeWidth="2"
      />
      <polyline
        points="0,280 100,270 200,278 300,260 400,268 500,245 600,255 700,230 800,240 900,215 1000,225 1100,200 1200,210"
        fill="none"
        stroke="#7c6cff"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[#2a3040] bg-[#0e1117]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7c6cff]/70 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[260px] w-[720px] -translate-x-1/2 rounded-full bg-[#7c6cff] opacity-[0.08] blur-3xl" />
      <FooterBackground />
      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 font-semibold text-[#e6e8ec]">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#8f82ff] to-[#5a46e8] text-white shadow-md shadow-[#7c6cff]/30">
                <LogoMark size={18} />
              </span>
              Trading Strategies 101
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#9aa3b2]">
              Hands-on lessons for 18 asset classes, from options to distressed debt — 177 strategies, learned by doing,
              not memorizing.
            </p>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-[#2a3040] p-2 text-[#9aa3b2] transition hover:border-[#3a4150] hover:text-[#e6e8ec]"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
            </a>
          </div>

          <FooterColumn title="Explore" links={EXPLORE_LINKS} />
          <FooterColumn title="Popular courses" links={POPULAR_LINKS} />
          <FooterColumn title="Account" links={ACCOUNT_LINKS} />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#2a3040] pt-6 text-xs text-[#898781]">
          <p className="max-w-3xl leading-relaxed">
            Educational content only. Nothing here is investment advice, and past performance of any strategy does not
            guarantee future results.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Trading Strategies 101. All rights reserved.</p>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#e6e8ec]">
              View source on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#e6e8ec]">{title}</h4>
      <ul className="mt-3 flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-sm text-[#9aa3b2] transition hover:text-[#a99dff]">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
