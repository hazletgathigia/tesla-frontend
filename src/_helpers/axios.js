import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

console.log("BASE_URL: " + baseURL);

const axiosInstance = axios.create({
    baseURL: baseURL,
});

export default axiosInstance;
