import Goal from "../models/GoalModel.js";

/* GET GOALS */

export const getGoals =
  async (req, res) => {

    try {

      const goals =
        await Goal.find()
          .sort({ createdAt: -1 });

      res.status(200).json(goals);

    } catch (error) {

      res.status(500).json({
        message:
          "Failed to fetch goals",
      });
    }
  };

/* ADD GOAL */

export const addGoal =
  async (req, res) => {

    try {

      const { text } =
        req.body;

      const newGoal =
        await Goal.create({
          text,
        });

      res.status(201).json(newGoal);

    } catch (error) {

      res.status(500).json({
        message:
          "Failed to add goal",
      });
    }
  };

/* DELETE GOAL */

export const deleteGoal =
  async (req, res) => {

    try {

      await Goal.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        message:
          "Goal deleted",
      });

    } catch (error) {

      res.status(500).json({
        message:
          "Failed to delete goal",
      });
    }
  };