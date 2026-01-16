import axios from "axios";
import { axiosInstance } from "../config/axiosInstance";

const getProducts = async () => {
    try {
        const res = await axiosInstance.get('/products');
        // console.log(res.data.products);
        
        if (res) {
            const data = await res.data.products;
            return data;
        }

    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}


// export const getProductById = (id) => axiosInstance.get(`/products/${id}`);
// export const getCategories = () => axiosInstance.get("/products/categories");
// export const getByCategory = (cat) => axiosInstance.get(`/products/category/${cat}`);
export default getProducts;