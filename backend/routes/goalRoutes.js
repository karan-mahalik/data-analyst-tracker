import express from "express";

import {
  getGoals,
  addGoal,
  deleteGoal,
} from "../controllers/goalController.js";

const router =
  express.Router();

router.get("/", getGoals);

router.post("/", addGoal);

router.delete(
  "/:id",
  deleteGoal
);

export default router;