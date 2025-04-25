import { STUDENT_ENDPOINTS } from "@/constants/endpoints/student";
import axiosInstance from "@/lib/axios";

export const completeProfileService = async (body: any) => {

    const response = await axiosInstance.post(STUDENT_ENDPOINTS.createProfile, body);

    return response.data
}