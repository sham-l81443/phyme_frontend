import { STUDENT_ENDPOINTS } from "@/constants/endpoints/student";
import axiosInstance from "@/lib/axios";

export const getMyDetails = async () => {

    const response = await axiosInstance.get(STUDENT_ENDPOINTS.myDetails)

    return response.data;
}