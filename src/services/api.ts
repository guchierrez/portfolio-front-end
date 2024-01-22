import axios from "axios";

export const api = axios.create({
  baseURL: "https://portfolio-api-44xt.onrender.com",
  timeout: 8000,
});
