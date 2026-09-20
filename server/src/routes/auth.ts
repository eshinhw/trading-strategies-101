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

  setAuthCookie(res, signToken({ userId: user.id }));
  res.status(201).json({ user: publicUser(user) });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body ?? {};
  if (typeof email !== "string" || typeof password !== "string") {
    return res.status(400).json({ error: "Invalid email or password." });
  }

  const user = await prisma.user.findUnique({ where: { email: email.trim().toLowerCase() } });
  const valid = user ? await verifyPassword(password, user.passwordHash) : false;

  if (!user || !valid) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  setAuthCookie(res, signToken({ userId: user.id }));
  res.json({ user: publicUser(user) });
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
