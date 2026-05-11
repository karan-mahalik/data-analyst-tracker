import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },

    hours: {
      type: Number,
      required: true,
    },

    notes: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Log =
  mongoose.model(
    "Log",
    logSchema
  );

export default Log;