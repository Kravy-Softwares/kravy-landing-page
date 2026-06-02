import axios from "axios";
import { API_ENDPOINTS } from "@/constants/api-endpoints";

export const featureService = {
  getFeatures: async () => {
    const { data } = await axios.get(API_ENDPOINTS.FEATURES.GET_ALL_FEATURES);
    return data?.data;
  },
};
