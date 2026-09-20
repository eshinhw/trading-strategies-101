import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export function Nav() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="border-b border-[#2a3040] bg-[#0e1117]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link to="/" className="font-semibold text-[#e6e8ec] hover:text-[#4f8cff]">
          Strategy Desk
        </Link>
        <div className="flex items-center gap-4 text-sm">
          {user ? (
            <>
              <span className="text-[#9aa3b2]">{user.name}</span>
              <button
                onClick={async () => {
                  await logout();
                  navigate("/");
                }}
                className="text-[#4f8cff] hover:underline"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-[#9aa3b2] hover:text-[#e6e8ec]">
                Sign in
              </Link>
              <Link
                to="/signup"
                className="rounded-md bg-[#4f8cff] px-3 py-1.5 font-medium text-white hover:bg-[#3d7ce0]"
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
