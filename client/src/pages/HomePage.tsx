import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { LandingPage } from "./LandingPage";

export function HomePage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="mx-auto max-w-5xl px-6 py-16 text-center text-[#6f8a7c]">Loading…</div>;
  }

  return user ? <Navigate to="/courses" replace /> : <LandingPage />;
}
