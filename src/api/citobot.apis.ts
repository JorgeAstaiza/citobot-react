import axios from "axios";

const api = axios.create({
  // baseURL: "https://18.117.240.91/api",
  baseURL: "http://localhost:3000/api",

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `${localStorage.getItem("token")}` || "algo",
  },
});

export default api;
