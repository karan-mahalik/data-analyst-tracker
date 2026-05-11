import { useState } from "react";

import "./Checklist.css";

import {
  createTask,
  toggleTaskApi,
  deleteTaskApi,
} from "../../api/checklistApi";

function Checklist({
  checklist,
  setChecklist,
}) {

  const [task, setTask] =
    useState("");

  /* ADD TASK */

  const addTask =
    async () => {

      if (!task.trim())
        return;

      try {

        const newTask =
          await createTask({
            text: task,
          });

        setChecklist([
          newTask,
          ...checklist,
        ]);

        setTask("");

      } catch (error) {

        console.error(error);

        alert(
          "Failed to add task"
        );
      }
    };

  /* TOGGLE TASK */

  const toggleTask =
    async (id) => {

      try {

        const updatedTask =
          await toggleTaskApi(id);

        const updatedChecklist =
          checklist.map(
            (item) =>
              item._id === id
                ? updatedTask
                : item
          );

        setChecklist(
          updatedChecklist
        );

      } catch (error) {

        console.error(error);

        alert(
          "Failed to update task"
        );
      }
    };

  /* DELETE TASK */

  const removeTask =
    async (id) => {

      try {

        await deleteTaskApi(id);

        setChecklist(
          checklist.filter(
            (item) =>
              item._id !== id
          )
        );

      } catch (error) {

        console.error(error);

        alert(
          "Failed to delete task"
        );
      }
    };

  return (

    <div className="checklist-section">

      <h2>
        Daily Checklist
      </h2>

      <div className="task-box">

        <input
          type="text"
          placeholder="Add Task..."
          value={task}
          onChange={(e) =>
            setTask(
              e.target.value
            )
          }
        />

        <button
          onClick={addTask}
        >
          Add
        </button>

      </div>

      <div className="task-list">

        {checklist.map((item) => (

          <div
            className="task-item"
            key={item._id}
          >

            <label>

              <input
                type="checkbox"
                checked={
                  item.completed
                }
                onChange={() =>
                  toggleTask(
                    item._id
                  )
                }
              />

              <span
                className={
                  item.completed
                    ? "completed"
                    : ""
                }
              >

                {item.text}

              </span>

            </label>

            <button
              style={{
                marginTop: "12px",
              }}
              onClick={() =>
                removeTask(
                  item._id
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

export default Checklist;