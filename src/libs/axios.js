import axios from "axios";
import { API } from "../common/config";

const handleError = (error) => {
  return Promise.reject(error);
};

let axiosInstance = axios.create({
  baseURL: API.url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(function (response) {
  return response;
}, handleError);

export default axiosInstance;