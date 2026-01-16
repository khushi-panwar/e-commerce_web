import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});



axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>{
        return Promise.reject(error);
    }
)