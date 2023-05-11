import axios from "axios";

export const axiosApp = axios.create({
    baseURL: "http://web:80",
    withCredentials: true,
});