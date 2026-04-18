import axios from "axios";
// const BASE_URL = "http://localhost:11000";
// const BASE_URL =
//   process.env.VITE_API_URL || "https://server.bouncyboxstudio.in";
const BASE_URL = "https://server.bouncyboxstudio.in";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // useful if you use cookies/auth later
});

// Optional: Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: attach token if needed
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

// Optional: Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error?.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default axiosInstance;
