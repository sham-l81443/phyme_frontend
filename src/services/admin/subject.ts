import { ICreateSubject } from "@/app/admin/config/subject/create/page"
import { ADMIN_ENDPOINTS } from "@/constants/endpoints/admin"
import axiosInstance from "@/lib/axios"

export const createSubjectService = async (data: ICreateSubject) => {

    const response = await axiosInstance.post(ADMIN_ENDPOINTS.createSubject, data)

    return response.data;
}