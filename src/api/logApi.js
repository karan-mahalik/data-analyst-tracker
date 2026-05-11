import API from "./axios";

/* GET LOGS */

export const fetchLogs =
  async () => {

    const response =
      await API.get("/logs");

    return response.data;
  };

/* ADD LOG */

export const createLog =
  async (logData) => {

    const response =
      await API.post(
        "/logs",
        logData
      );

    return response.data;
  };