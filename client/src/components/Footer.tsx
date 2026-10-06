import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { PRACTICE_TOOL_LINKS } from "../lib/practiceTools";
import { LogoMark } from "./Nav";

interface FooterLink {
  to: string;
  label: string;
}

const EXPLORE_LINKS: FooterLink[] = [
  { to: "/courses", label: "All courses" },
  { to: "/books", label: "Books" },
  { to: "/papers", label: "Papers" },
];

// One entry per practice tool, so a new tool shows up here as soon as it's added to the shared list.
const PRACTICE_LINKS: FooterLink[] = [
  { to: "/practice", label: "All practice tools" },
  ...PRACTICE_TOOL_LINKS.map((t) => ({ to: `/practice/${t.slug}`, label: t.title })),
];

const SIGNED_OUT_LINKS: FooterLink[] = [
  { to: "/signup", label: "Sign up" },
  { to: "/login", label: "Sign in" },
];

const SIGNED_IN_LINKS: FooterLink[] = [{ to: "/courses", label: "Your courses" }];

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
  const { user } = useAuth();

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
            {!user && (
              <Link
                to="/signup"
                className="mt-4 inline-block rounded-full bg-[#7c6cff] px-4 py-1.5 text-sm font-medium text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0]"
              >
                Start learning, it's free
              </Link>
            )}
          </div>

          <FooterColumn title="Explore" links={EXPLORE_LINKS} />
          <FooterColumn title="Practice" links={PRACTICE_LINKS} />
          <FooterColumn title="Account" links={user ? SIGNED_IN_LINKS : SIGNED_OUT_LINKS} />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#2a3040] pt-6 text-xs text-[#898781]">
          <p className="max-w-3xl leading-relaxed">
            Educational content only. Nothing here is investment advice, and past performance of any strategy does not
            guarantee future results.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Trading Strategies 101. All rights reserved.</p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 hover:text-[#e6e8ec]"
            >
              Back to top <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#e6e8ec]">{title}</h4>
      <ul className="mt-3 flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              className="inline-flex items-center gap-2 text-sm text-[#9aa3b2] transition hover:text-[#a99dff]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
