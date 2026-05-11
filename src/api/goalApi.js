import API from "./axios";

/* GET GOALS */

export const fetchGoals =
  async () => {

    const response =
      await API.get("/goals");

    return response.data;
  };

/* ADD GOAL */

export const createGoal =
  async (goalData) => {

    const response =
      await API.post(
        "/goals",
        goalData
      );

    return response.data;
  };

/* DELETE GOAL */

export const deleteGoalApi =
  async (id) => {

    await API.delete(
      `/goals/${id}`
    );
  };