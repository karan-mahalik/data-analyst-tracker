import mongoose from "mongoose";

const checklistSchema =
  new mongoose.Schema(
    {
      text: {
        type: String,
        required: true,
      },

      completed: {
        type: Boolean,
        default: false,
      },
    },

    {
      timestamps: true,
    }
  );

const Checklist =
  mongoose.model(
    "Checklist",
    checklistSchema
  );

export default Checklist;