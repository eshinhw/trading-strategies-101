import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.js";
import curriculumRouter from "./routes/curriculum.js";
import coursesRouter from "./routes/courses.js";

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

app.listen(PORT, () => {
  console.log(`trading-strategies-101 API listening on http://localhost:${PORT}`);
});
