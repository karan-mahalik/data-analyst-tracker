import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import logRoutes
  from "./routes/logRoutes.js";

import goalRoutes
  from "./routes/goalRoutes.js";

import checklistRoutes
  from "./routes/checklistRoutes.js";

dotenv.config();

const app = express();

/* DATABASE */

connectDB();

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

/* ROUTES */

app.use(
  "/api/logs",
  logRoutes
);

app.use(
  "/api/goals",
  goalRoutes
);

app.use(
  "/api/checklist",
  checklistRoutes
);

/* TEST */

app.get("/", (req, res) => {

  res.json({
    message:
      "Backend Running Successfully 🚀",
  });
});

/* PORT */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});