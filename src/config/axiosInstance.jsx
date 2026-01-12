import axios from "axios";

export const axioInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
});

axios.interceptors.response.use(
    (response) => response,
    (error) =>{
        let errorMsg = error.response?.data?.message;
        store.dispatch(setError(errorMsg));
        return Promise.reject(error);
    }
)