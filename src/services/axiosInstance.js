import Axios from "axios";

const axiosInstance = Axios.create({
  // baseURL: "http://localhost:8000/",
  baseURL: "https://ems-backend-gnh6.onrender.com",
  withCredentials: false,
  "Content-Type": "application/json",
});

export default axiosInstance;