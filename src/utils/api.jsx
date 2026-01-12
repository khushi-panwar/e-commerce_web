import axios from "axios";
import { axioInstance } from "../config/axiosInstance";

const fetchData = async () => {
    try {
        const res = await axioInstance.get('/products');
        // console.log(res.data.products);
        
        if(res){
            return res.data.products
        }

    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}

export default fetchData;