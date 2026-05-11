import Log from "../models/LogModel.js";

/* GET LOGS */

export const getLogs =
  async (req, res) => {

    try {

      const logs =
        await Log.find()
          .sort({ createdAt: -1 });

      res.status(200).json(logs);

    } catch (error) {

      res.status(500).json({
        message:
          "Failed to fetch logs",
      });
    }
  };

/* ADD LOG */

export const addLog =
  async (req, res) => {

    try {

      const {
        topic,
        hours,
        notes,
        date,
      } = req.body;

      const existingLog =
        await Log.findOne({
          date,
        });

      if (existingLog) {

        return res.status(400)
          .json({
            message:
              "You already updated today",
          });
      }

      const newLog =
        await Log.create({
          topic,
          hours,
          notes,
          date,
        });

      res.status(201).json(newLog);

    } catch (error) {

      res.status(500).json({
        message:
          "Failed to add log",
      });
    }
  };