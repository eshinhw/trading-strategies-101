import express from "express";
import cors from "cors";
import strategiesRouter from "./routes/strategies.js";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api/strategies", strategiesRouter);

app.listen(PORT, () => {
  console.log(`strategy-desk API listening on http://localhost:${PORT}`);
});
