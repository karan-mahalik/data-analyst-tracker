import Checklist
  from "../models/ChecklistModel.js";

/* GET TASKS */

export const getTasks =
  async (req, res) => {

    try {

      const tasks =
        await Checklist.find()
          .sort({ createdAt: -1 });

      res.status(200).json(tasks);

    } catch (error) {

      res.status(500).json({
        message:
          "Failed to fetch tasks",
      });
    }
  };

/* ADD TASK */

export const addTask =
  async (req, res) => {

    try {

      const { text } =
        req.body;

      const task =
        await Checklist.create({
          text,
        });

      res.status(201).json(task);

    } catch (error) {

      res.status(500).json({
        message:
          "Failed to add task",
      });
    }
  };

/* TOGGLE TASK */

export const toggleTask =
  async (req, res) => {

    try {

      const task =
        await Checklist.findById(
          req.params.id
        );

      task.completed =
        !task.completed;

      await task.save();

      res.status(200).json(task);

    } catch (error) {

      res.status(500).json({
        message:
          "Failed to update task",
      });
    }
  };

/* DELETE TASK */

export const deleteTask =
  async (req, res) => {

    try {

      await Checklist.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        message:
          "Task deleted",
      });

    } catch (error) {

      res.status(500).json({
        message:
          "Failed to delete task",
      });
    }
  };