import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export function Nav() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="border-b border-[#1e3d2f] bg-[#081a13]">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3">
        <div className="flex items-center gap-10">
          <Link to="/" className="whitespace-nowrap font-semibold text-[#e6f2ec] hover:text-[#14b8a6]">
            <span className="hidden sm:inline">Trading Strategies 101</span>
            <span className="sm:hidden">TS 101</span>
          </Link>
          <Link to="/courses" className="whitespace-nowrap text-sm text-[#8fada0] hover:text-[#e6f2ec]">
            Courses
          </Link>
          <Link to="/books" className="whitespace-nowrap text-sm text-[#8fada0] hover:text-[#e6f2ec]">
            Books
          </Link>
        </div>
        <div className="flex items-center gap-4 whitespace-nowrap text-sm">
          {user ? (
            <>
              <span className="text-[#8fada0]">{user.name}</span>
              <button
                onClick={async () => {
                  await logout();
                  navigate("/");
                }}
                className="text-[#14b8a6] hover:underline"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-[#8fada0] hover:text-[#e6f2ec]">
                Sign in
              </Link>
              <Link
                to="/signup"
                className="rounded-md bg-[#14b8a6] px-3 py-1.5 font-medium text-white hover:bg-[#0d9488]"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
