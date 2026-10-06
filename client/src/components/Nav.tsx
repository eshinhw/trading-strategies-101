import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const LINKS = [
  { to: "/courses", label: "Courses" },
  { to: "/practice", label: "Practice" },
  { to: "/books", label: "Books" },
  { to: "/papers", label: "Papers" },
];

export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" className="shrink-0">
      <polyline
        points="24,30 50,68 76,30"
        fill="none"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export function Nav() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const signOut = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav
      className={`sticky top-0 z-40 overflow-hidden bg-gradient-to-r from-[#1c1949]/95 via-[#231f5e]/95 to-[#1c1949]/95 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? "shadow-lg shadow-black/40" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 left-1/4 h-64 w-64 rounded-full bg-[#7c6cff]/20 blur-3xl" />
        <div className="absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-[#4338ca]/25 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7c6cff]/60 to-transparent" />

      <div className="relative flex w-full items-center justify-between gap-6 px-6 py-3.5 sm:px-10">
        <Link to="/" className="group flex items-center gap-2.5 whitespace-nowrap font-semibold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#8f82ff] to-[#5a46e8] shadow-md shadow-[#7c6cff]/40 transition group-hover:brightness-110">
            <LogoMark size={18} />
          </span>
          <span className="hidden sm:inline">Trading Strategies 101</span>
          <span className="sm:hidden">TS 101</span>
        </Link>

        <div className="hidden items-center gap-1 text-sm font-medium md:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative rounded-md px-3 py-2 transition ${
                  isActive ? "text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-[14px] h-0.5 rounded-full bg-[#a99dff] shadow-[0_0_10px_#7c6cff]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 whitespace-nowrap text-sm md:flex">
          {user ? (
            <>
              <span className="flex items-center gap-2 text-slate-200">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7c6cff]/30 text-xs font-semibold text-white ring-1 ring-white/20">
                  {initialsOf(user.name)}
                </span>
                {user.name}
              </span>
              <button
                onClick={signOut}
                className="rounded-full border border-white/20 px-4 py-1.5 text-slate-200 transition hover:border-white/40 hover:text-white"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-full border border-white/20 px-4 py-1.5 text-slate-200 transition hover:border-white/40 hover:text-white"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="rounded-full bg-[#7c6cff] px-4 py-1.5 font-medium text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0]"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-slate-200 transition hover:border-white/40 hover:text-white md:hidden"
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="m5 5 10 10M15 5 5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="relative border-t border-white/10 px-6 pb-5 pt-3 md:hidden">
          <div className="flex flex-col">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-base font-medium ${
                    isActive ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-3 border-t border-white/10 pt-4 text-sm">
            {user ? (
              <>
                <span className="flex min-w-0 flex-1 items-center gap-2 text-slate-200">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7c6cff]/30 text-xs font-semibold text-white ring-1 ring-white/20">
                    {initialsOf(user.name)}
                  </span>
                  <span className="truncate">{user.name}</span>
                </span>
                <button onClick={signOut} className="rounded-full border border-white/20 px-4 py-1.5 text-slate-200 hover:text-white">
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-slate-200 hover:text-white">
                  Sign in
                </Link>
                <Link to="/signup" className="flex-1 rounded-full bg-[#7c6cff] px-4 py-2 text-center font-medium text-white hover:bg-[#6552f0]">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
