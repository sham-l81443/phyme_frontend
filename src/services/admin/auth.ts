import { ADMIN_ENDPOINTS } from "@/constants/endpoints"
import axiosInstance from "@/lib/axios"
import { ILogInFormValues } from "@/lib/validations"

export const loginAdmin = async (data: Partial<ILogInFormValues>) => {
    const response = await axiosInstance.post(ADMIN_ENDPOINTS.login, data)
    return response.data
}
