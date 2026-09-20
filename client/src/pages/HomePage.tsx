import { useAuth } from "../auth/AuthContext";
import { LandingPage } from "./LandingPage";
import { DashboardPage } from "./DashboardPage";

export function HomePage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="mx-auto max-w-5xl px-6 py-16 text-center text-[#898781]">Loading…</div>;
  }

  return user ? <DashboardPage /> : <LandingPage />;
}
