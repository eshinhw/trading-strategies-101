import { Router } from "express";
import { prisma } from "../lib/prisma.js";
import {
  hashPassword,
  verifyPassword,
  signToken,
  setAuthCookie,
  clearAuthCookie,
  attachUser,
  requireAuth,
} from "../lib/auth.js";
import { GOOGLE_STATE_COOKIE, exchangeCode, googleAuthUrl, googleEnabled, newState } from "../lib/google.js";

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function publicUser(user: { id: string; email: string; name: string; createdAt: Date }) {
  return { id: user.id, email: user.email, name: user.name, createdAt: user.createdAt };
}

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body ?? {};

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }
  if (typeof password !== "string" || password.length < 8) {
    return res.status(400).json({ error: "Password must be at least 8 characters." });
  }
  if (typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({ error: "Enter your name." });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const existing = await prisma.user.findUnique({ where: { email: normalizedEmail } });
  if (existing) {
    return res.status(409).json({ error: "An account with that email already exists." });
  }

  const passwordHash = await hashPassword(password);
  const user = await prisma.user.create({
    data: { email: normalizedEmail, passwordHash, name: name.trim() },
  });

  setAuthCookie(res, signToken({ userId: user.id, email: user.email }));
  res.status(201).json({ user: publicUser(user) });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body ?? {};
  if (typeof email !== "string" || typeof password !== "string") {
    return res.status(400).json({ error: "Invalid email or password." });
  }

  const user = await prisma.user.findUnique({ where: { email: email.trim().toLowerCase() } });
  const valid = user?.passwordHash ? await verifyPassword(password, user.passwordHash) : false;

  if (user && !user.passwordHash) {
    return res.status(401).json({ error: "This account signs in with Google. Use \"Continue with Google\" instead." });
  }

  if (!user || !valid) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  setAuthCookie(res, signToken({ userId: user.id, email: user.email }));
  res.json({ user: publicUser(user) });
});

/** Which sign-in methods this deployment offers, so the client only shows the Google button when it will work. */
router.get("/providers", (_req, res) => {
  res.json({ google: googleEnabled() });
});

/** Only same-site paths are allowed as a post-sign-in destination, never another origin. */
function safeReturnPath(value: unknown): string {
  return typeof value === "string" && value.startsWith("/") && !value.startsWith("//") ? value : "/courses";
}

router.get("/google", (req, res) => {
  if (!googleEnabled()) return res.redirect("/login?error=google_unavailable");
  const state = newState();
  res.cookie(GOOGLE_STATE_COOKIE, JSON.stringify({ state, from: safeReturnPath(req.query.from) }), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 10 * 60 * 1000,
  });
  res.redirect(googleAuthUrl(req, state));
});

router.get("/google/callback", async (req, res) => {
  let saved: { state?: string; from?: string } = {};
  try {
    saved = JSON.parse(req.cookies?.[GOOGLE_STATE_COOKIE] ?? "{}");
  } catch {
    // a mangled cookie fails the state check below
  }
  res.clearCookie(GOOGLE_STATE_COOKIE);

  // The learner cancelled on Google's screen, or the state doesn't match the one this browser was given.
  if (typeof req.query.code !== "string" || !saved.state || req.query.state !== saved.state) {
    return res.redirect(req.query.error === "access_denied" ? "/login" : "/login?error=google");
  }

  try {
    const profile = await exchangeCode(req, req.query.code);
    // Already linked → sign in. Same verified email as a password account → link it. Otherwise → new account.
    let user = await prisma.user.findUnique({ where: { googleId: profile.sub } });
    if (!user) {
      const byEmail = await prisma.user.findUnique({ where: { email: profile.email } });
      user = byEmail
        ? await prisma.user.update({ where: { id: byEmail.id }, data: { googleId: profile.sub } })
        : await prisma.user.create({ data: { email: profile.email, name: profile.name, googleId: profile.sub } });
    }
    setAuthCookie(res, signToken({ userId: user.id, email: user.email }));
    res.redirect(safeReturnPath(saved.from));
  } catch (err) {
    console.error("Google sign-in failed:", err);
    res.redirect("/login?error=google");
  }
});

router.post("/logout", (_req, res) => {
  clearAuthCookie(res);
  res.status(204).send();
});

router.get("/me", attachUser, requireAuth, async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.userId! } });
  if (!user) return res.status(401).json({ error: "Not signed in" });
  res.json({ user: publicUser(user) });
});

export default router;
