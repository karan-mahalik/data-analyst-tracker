import { useState } from "react";

import "./GoalSection.css";

import {
  createGoal,
  deleteGoalApi,
} from "../../api/goalApi";

function GoalSection({
  goals,
  setGoals,
}) {

  const [goalInput, setGoalInput] =
    useState("");

  /* ADD GOAL */

  const addGoal =
    async () => {

      if (!goalInput.trim())
        return;

      try {

        const newGoal =
          await createGoal({
            text: goalInput,
          });

        setGoals([
          newGoal,
          ...goals,
        ]);

        setGoalInput("");

      } catch (error) {

        console.error(error);

        alert(
          "Failed to add goal"
        );
      }
    };

  /* DELETE GOAL */

  const removeGoal =
    async (id) => {

      try {

        await deleteGoalApi(id);

        setGoals(
          goals.filter(
            (goal) =>
              goal._id !== id
          )
        );

      } catch (error) {

        console.error(error);

        alert(
          "Failed to delete goal"
        );
      }
    };

  return (

    <div className="goal-section">

      <h2>
        Career Goals
      </h2>

      <div className="goal-input-box">

        <input
          type="text"
          placeholder="Add your goal..."
          value={goalInput}
          onChange={(e) =>
            setGoalInput(
              e.target.value
            )
          }
        />

        <button
          onClick={addGoal}
        >
          Add
        </button>

      </div>

      <div className="goal-list">

        {goals.map((goal) => (

          <div
            className="goal-item"
            key={goal._id}
          >

            <p>
              {goal.text}
            </p>

            <button
              onClick={() =>
                removeGoal(
                  goal._id
                )
              }
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default GoalSection;