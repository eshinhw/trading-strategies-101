import crypto from "node:crypto";
import type { Request } from "express";

// "Sign in with Google" as a plain OAuth 2.0 authorization-code flow: the server sends the browser to Google, Google
// sends it back to /api/auth/google/callback with a one-time code, and the server swaps that code for the user's
// profile directly with Google. No client-side SDK, and the client secret never leaves the server.
//
// Enabled only when GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are set; the redirect URI to register with Google is
// <site origin>/api/auth/google/callback (http://localhost:5173/... in dev, through Vite's proxy).

const AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const TOKEN_URL = "https://oauth2.googleapis.com/token";

export const GOOGLE_STATE_COOKIE = "trading_strategies_101_google_state";

export function googleEnabled(): boolean {
  return Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);
}

/** The callback URL on the origin the browser is using (Railway sits behind a proxy, so `trust proxy` must be on). */
export function googleRedirectUri(req: Request): string {
  return `${req.protocol}://${req.get("host")}/api/auth/google/callback`;
}

export function newState(): string {
  return crypto.randomBytes(24).toString("base64url");
}

export function googleAuthUrl(req: Request, state: string): string {
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID!,
    redirect_uri: googleRedirectUri(req),
    response_type: "code",
    scope: "openid email profile",
    state,
    prompt: "select_account",
  });
  return `${AUTH_URL}?${params}`;
}

export interface GoogleProfile {
  sub: string;
  email: string;
  name: string;
}

/**
 * Swaps the authorization code for an ID token and reads the profile from it. The token comes straight from Google's
 * token endpoint over TLS, authenticated with our client secret, so its signature needn't be re-checked; its audience,
 * issuer and verified-email flag still are.
 */
export async function exchangeCode(req: Request, code: string): Promise<GoogleProfile> {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      redirect_uri: googleRedirectUri(req),
      grant_type: "authorization_code",
    }),
  });
  if (!res.ok) throw new Error(`Google token exchange failed (${res.status})`);
  const { id_token } = (await res.json()) as { id_token?: string };
  if (!id_token) throw new Error("Google returned no ID token");

  const claims = JSON.parse(Buffer.from(id_token.split(".")[1], "base64url").toString("utf8")) as {
    aud?: string;
    iss?: string;
    exp?: number;
    sub?: string;
    email?: string;
    email_verified?: boolean;
    name?: string;
  };
  if (claims.aud !== process.env.GOOGLE_CLIENT_ID) throw new Error("Google ID token has the wrong audience");
  if (claims.iss !== "https://accounts.google.com" && claims.iss !== "accounts.google.com") {
    throw new Error("Google ID token has the wrong issuer");
  }
  if (!claims.exp || claims.exp * 1000 < Date.now()) throw new Error("Google ID token has expired");
  if (!claims.sub || !claims.email || !claims.email_verified) throw new Error("Google account has no verified email");

  const email = claims.email.toLowerCase();
  return { sub: claims.sub, email, name: claims.name?.trim() || email.split("@")[0] };
}
