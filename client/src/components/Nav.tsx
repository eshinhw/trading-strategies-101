import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export function Nav() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="relative overflow-hidden bg-gradient-to-r from-[#1c1949] via-[#231f5e] to-[#1c1949]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 left-1/4 h-64 w-64 rounded-full bg-[#6d5ef5]/20 blur-3xl" />
        <div className="absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-[#4338ca]/25 blur-3xl" />
      </div>

      <div className="relative flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4 sm:px-10">
        <Link to="/" className="flex items-center gap-2 whitespace-nowrap font-semibold text-white">
          <svg viewBox="0 0 100 100" width="22" height="22" aria-hidden="true" className="shrink-0">
            <polyline
              points="24,30 50,68 76,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden sm:inline">Trading Strategies 101</span>
          <span className="sm:hidden">TS 101</span>
        </Link>

        <div className="flex items-center gap-6 whitespace-nowrap text-sm">
          <div className="flex items-center gap-6 font-medium">
            <Link to="/courses" className="text-slate-300 hover:text-white">
              Courses
            </Link>
            <Link to="/books" className="text-slate-300 hover:text-white">
              Books
            </Link>
            <Link to="/papers" className="text-slate-300 hover:text-white">
              Papers
            </Link>
          </div>

          <div className="h-5 w-px bg-white/15" />

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <span className="text-slate-300">{user.name}</span>
                <button
                  onClick={async () => {
                    await logout();
                    navigate("/");
                  }}
                  className="rounded-full border border-white/20 px-4 py-2 text-slate-200 hover:border-white/40 hover:text-white"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-full border border-white/20 px-4 py-2 text-slate-200 hover:border-white/40 hover:text-white"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="rounded-full bg-[#6d5ef5] px-4 py-2 font-medium text-white hover:bg-[#5b4ce0]"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
