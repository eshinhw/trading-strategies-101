import "dotenv/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js";
import curriculumRouter from "./routes/curriculum.js";
import coursesRouter from "./routes/courses.js";
import booksRouter from "./routes/books.js";
import papersRouter from "./routes/papers.js";
import constructionRouter from "./routes/construction.js";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api/auth", authRouter);
app.use("/api/curriculum", curriculumRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/books", booksRouter);
app.use("/api/papers", papersRouter);
app.use("/api/construction", constructionRouter);

// In production this process also serves the client's built assets, so the
// whole app is one Railway service on one origin — no separate static host,
// no cross-origin cookie config. Skipped entirely in dev, where Vite's own
// dev server handles the client and proxies /api to this process instead.
if (process.env.NODE_ENV === "production") {
  const clientDist = path.join(path.dirname(fileURLToPath(import.meta.url)), "../../client/dist");
  app.use(express.static(clientDist));
  app.get(/^(?!\/api\/).*/, (_req, res) => {
    res.sendFile(path.join(clientDist, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`trading-strategies-101 API listening on http://localhost:${PORT}`);
});
