import axios from "axios";

const API =
  axios.create({

    baseURL:
      "https://data-analyst-tracker.onrender.com/",
  });

export default API;