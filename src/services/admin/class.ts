import { ADMIN_ENDPOINTS } from "@/constants/endpoints"
import axiosInstance from "@/lib/axios"
import { ICreateClass } from "@/lib/validations/class.schema";

export const createClassService = async (data: ICreateClass) => {

    const response = await axiosInstance.post(ADMIN_ENDPOINTS.createClass, data)

    return response.data;
}

export const getClassList = async () => {

    const response = await axiosInstance.get(ADMIN_ENDPOINTS.getClasses)

    return response.data;
}