import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// health check
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

export default app;
