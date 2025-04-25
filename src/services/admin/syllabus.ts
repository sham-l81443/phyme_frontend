import { ICreateSyllabus } from "@/app/admin/config/syllabus/create/page";
import { ADMIN_ENDPOINTS } from "@/constants/endpoints"
import axiosInstance from "@/lib/axios"

export const createSyllabusService = async (data: ICreateSyllabus) => {

    const response = await axiosInstance.post(ADMIN_ENDPOINTS.createSyllabus, data)

    return response.data;
}


export const getSyllabusList = async () => {

    const response = await axiosInstance.get(ADMIN_ENDPOINTS.getSyllabus)

    return response.data;
}