import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import * as api from "../api";

// Strength is only a hint (the server's rule is just 8+ characters): length plus character variety.
function passwordStrength(pw: string): { score: number; label: string; color: string } {
  if (pw.length === 0) return { score: 0, label: "", color: "#2a3040" };
  if (pw.length < 8) return { score: 1, label: "Too short", color: "#f87171" };
  const variety = [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/].filter((r) => r.test(pw)).length;
  const long = pw.length >= 12;
  const varied = variety >= 3;
  if (long && varied) return { score: 4, label: "Strong", color: "#34d399" };
  if (long || varied) return { score: 3, label: "Good", color: "#5aa9ff" };
  return { score: 2, label: "Okay", color: "#fbbf24" };
}

const BENEFITS = [
  { title: "Pick up where you left off", body: "Progress saves lesson by lesson." },
  { title: "Prove it with quizzes", body: "A knowledge check after every lesson, a final quiz for every course." },
  { title: "Track the whole map", body: "See how far you are across every asset class." },
];

// The brand panel's backdrop bleeds to the left edge of the window, while its copy (and the form) sit in the same
// centered max-w-7xl px-6 container as the nav, so the page's side margins line up with the nav's.
function BrandBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 overflow-hidden border-r border-[#2a3040] bg-gradient-to-br from-[#1c1949] via-[#16183a] to-[#0e1117] lg:block"
    >
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#7c6cff] opacity-25 blur-3xl" />
      <div className="absolute -bottom-32 right-[-60px] h-80 w-80 rounded-full bg-[#4338ca] opacity-25 blur-3xl" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        preserveAspectRatio="none"
        viewBox="0 0 600 800"
        aria-hidden="true"
      >
        <polyline
          points="0,640 60,610 120,625 180,570 240,590 300,520 360,540 420,470 480,490 540,420 600,440"
          fill="none"
          stroke="#a99dff"
          strokeWidth="2"
        />
        <polyline
          points="0,720 70,700 140,712 210,665 280,680 350,630 420,645 490,590 560,600 600,570"
          fill="none"
          stroke="#a99dff"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

function BrandPanel({ mode }: { mode: "login" | "signup" }) {
  return (
    <aside className="relative hidden py-12 pr-12 lg:flex lg:flex-col">
      <div className="my-auto">
        <h2 className="max-w-md text-4xl font-bold leading-tight text-white">
          {mode === "signup" ? "Learn markets by doing, not memorizing." : "Good to see you again."}
        </h2>
        <p className="mt-3 max-w-md text-[#b4bacb]">
          {mode === "signup"
            ? "A free account keeps your place across every course."
            : "Sign in and jump straight back into your next lesson."}
        </p>
        <ul className="mt-8 flex max-w-md flex-col gap-5">
          {BENEFITS.map((b) => (
            <li key={b.title} className="flex gap-3.5">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#7c6cff]/50 bg-[#7c6cff]/20 text-xs font-bold text-[#c4bbff]">
                ✓
              </span>
              <div>
                <div className="font-semibold text-white">{b.title}</div>
                <div className="mt-0.5 text-sm leading-relaxed text-[#9aa3b2]">{b.body}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </aside>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: ReactNode;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-[#c3c9d4]">{label}</span>
      {children}
      {hint}
    </label>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 18 18" className="h-[18px] w-[18px]" aria-hidden="true">
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62Z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18Z" />
      <path fill="#FBBC05" d="M3.97 10.72A5.4 5.4 0 0 1 3.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.05l3.01-2.33Z" />
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A8.96 8.96 0 0 0 9 0 9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58Z" />
    </svg>
  );
}

const GOOGLE_ERRORS: Record<string, string> = {
  google: "Google sign-in didn't go through. Please try again.",
  google_unavailable: "Google sign-in isn't available right now.",
};

function EyeIcon({ off }: { off: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 10s3-5.5 8-5.5S18 10 18 10s-3 5.5-8 5.5S2 10 2 10Z" />
      <circle cx="10" cy="10" r="2.5" />
      {off && <path d="m3.5 3.5 13 13" />}
    </svg>
  );
}

export function AuthPage({ mode }: { mode: "login" | "signup" }) {
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = (location.state as { from?: string } | null)?.from ?? "/courses";
  const [searchParams] = useSearchParams();
  const [googleAvailable, setGoogleAvailable] = useState(false);

  useEffect(() => {
    api
      .fetchAuthProviders()
      .then((p) => setGoogleAvailable(p.google))
      .catch(() => setGoogleAvailable(false));
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [capsLock, setCapsLock] = useState(false);
  // A failed Google round trip lands back here as /login?error=google.
  const [error, setError] = useState<string | null>(() => GOOGLE_ERRORS[searchParams.get("error") ?? ""] ?? null);
  const [submitting, setSubmitting] = useState(false);

  const strength = passwordStrength(password);
  const isSignup = mode === "signup";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      if (isSignup) {
        await signup(email, password, name);
      } else {
        await login(email, password);
      }
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-64px)]">
      <BrandBackdrop />
      <div className="relative mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-7xl px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <BrandPanel mode={mode} />

        <main className="relative flex items-center justify-center py-12 lg:justify-end lg:pl-12">
          <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[280px] w-[520px] -translate-x-1/2 rounded-full bg-[#7c6cff] opacity-10 blur-3xl lg:hidden" />
          <div className="relative w-full max-w-sm">
            <h1 className="text-3xl font-bold text-[#e6e8ec]">{isSignup ? "Create your account" : "Welcome back"}</h1>
            <p className="mt-2 text-sm text-[#9aa3b2]">
              {isSignup ? "Free, and it takes less than a minute." : "Sign in to pick up where you left off."}
            </p>

            {googleAvailable && (
              <>
                <a
                  href={api.googleSignInUrl(redirectTo)}
                  className="mt-7 flex items-center justify-center gap-2.5 rounded-lg border border-[#2a3040] bg-white px-4 py-2.5 font-semibold text-[#1f1f1f] transition hover:bg-[#f1f3f4]"
                >
                  <GoogleIcon />
                  Continue with Google
                </a>
                <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-wide text-[#898781]" aria-hidden="true">
                  <span className="h-px flex-1 bg-[#2a3040]" />
                  or with email
                  <span className="h-px flex-1 bg-[#2a3040]" />
                </div>
              </>
            )}

            <form onSubmit={handleSubmit} className={`${googleAvailable ? "mt-6" : "mt-7"} flex flex-col gap-4`}>
              {isSignup && (
                <Field label="Name">
                  <input
                    type="text"
                    required
                    autoFocus
                    autoComplete="name"
                    placeholder="Ada Lovelace"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input !py-2.5"
                  />
                </Field>
              )}
              <Field label="Email">
                <input
                  type="email"
                  required
                  autoFocus={!isSignup}
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input !py-2.5"
                />
              </Field>
              <Field
                label="Password"
                hint={
                  isSignup ? (
                    <div className="mt-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((n) => (
                          <span
                            key={n}
                            className="h-1 flex-1 rounded-full transition-colors"
                            style={{ background: n <= strength.score ? strength.color : "#1b2029" }}
                          />
                        ))}
                      </div>
                      <div className="mt-1.5 flex items-center justify-between text-xs text-[#898781]">
                        <span>At least 8 characters.</span>
                        {strength.label && <span style={{ color: strength.color }}>{strength.label}</span>}
                      </div>
                    </div>
                  ) : undefined
                }
              >
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    autoComplete={isSignup ? "new-password" : "current-password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyUp={(e) => setCapsLock(e.getModifierState("CapsLock"))}
                    onBlur={() => setCapsLock(false)}
                    className="input !py-2.5 !pr-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-[#898781] transition hover:bg-white/5 hover:text-[#e6e8ec]"
                  >
                    <EyeIcon off={showPassword} />
                  </button>
                </div>
                {capsLock && (
                  <span className="mt-1.5 block text-xs text-amber-300" role="status">
                    Caps Lock is on
                  </span>
                )}
              </Field>

              {error && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 text-sm text-red-300"
                >
                  <span
                    aria-hidden="true"
                    className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-400 text-xs font-bold text-[#2b0a0a]"
                  >
                    !
                  </span>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-[#7c6cff] px-4 py-2.5 font-semibold text-white shadow-md shadow-[#7c6cff]/30 transition hover:bg-[#6552f0] disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none"
              >
                {submitting && (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
                )}
                {submitting ? "Please wait…" : isSignup ? "Create account" : "Sign in"}
              </button>
            </form>

            {isSignup && (
              <p className="mt-4 text-center text-xs leading-relaxed text-[#898781]">
                By creating an account, you agree to the{" "}
                <Link to="/terms" className="text-[#a99dff] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-[#a99dff] hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            )}
            <p className="mt-6 text-center text-sm text-[#9aa3b2]">
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <Link to="/login" state={location.state} className="font-medium text-[#a99dff] hover:underline">
                    Sign in
                  </Link>
                </>
              ) : (
                <>
                  New here?{" "}
                  <Link to="/signup" state={location.state} className="font-medium text-[#a99dff] hover:underline">
                    Create an account
                  </Link>
                </>
              )}
            </p>
            <p className="mt-3 text-center text-xs text-[#898781]">
              <Link to="/courses" className="hover:text-[#e6e8ec]">
                or keep browsing without an account →
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
