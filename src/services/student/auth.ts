import axiosInstance from "@/lib/axios"
import { ILogInFormValues, ISignUpFormValues, IVerifyFormValues } from "@/lib/validations"


export const loginStudent = async (data: Partial<ILogInFormValues>) => {
    const response = await axiosInstance.post("auth/login", data)
    return response.data
}

export const signupStudent = async (data: Partial<ISignUpFormValues>) => {
    const response = await axiosInstance.post("auth/register", data)
    return response.data
}

export const verifyUSer = async (data: Partial<IVerifyFormValues>) => {
    const response = await axiosInstance.post("auth/verify", data)
    return response.data
}