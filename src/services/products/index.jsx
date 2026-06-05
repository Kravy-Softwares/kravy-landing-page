import axios from "axios";
import { API_ENDPOINTS } from "@/constants/api-endpoints";

export const productService = {
    getAllProducts: async () => {
        const { data } = await axios.get(API_ENDPOINTS.PRODUCTS.GET_ALL_PRODUCTS)
        return data?.data || []
    },
    getProductBySlug: async (slug) => {
        const { data } = await axios.get(`${API_ENDPOINTS.PRODUCTS.GET_ALL_PRODUCTS}/${slug}`)
        return data?.data || null
    }
}