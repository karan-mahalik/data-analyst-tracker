import API from "./axios";

/* GET TASKS */

export const fetchTasks =
  async () => {

    const response =
      await API.get(
        "/checklist"
      );

    return response.data;
  };

/* ADD TASK */

export const createTask =
  async (taskData) => {

    const response =
      await API.post(
        "/checklist",
        taskData
      );

    return response.data;
  };

/* TOGGLE TASK */

export const toggleTaskApi =
  async (id) => {

    const response =
      await API.put(
        `/checklist/${id}`
      );

    return response.data;
  };

/* DELETE TASK */

export const deleteTaskApi =
  async (id) => {

    await API.delete(
      `/checklist/${id}`
    );
  };