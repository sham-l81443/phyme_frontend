import axiosInstance from "@/lib/axios"
import { ILogInFormValues, ISignUpFormValues, IVerifyFormValues } from "@/lib/validations"


export const loginStudent = async (data: Partial<ILogInFormValues>) => {
    const response = await axiosInstance.post("/login", data)
    return response.data
}

export const signupStudent = async (data: Partial<ISignUpFormValues>) => {
    const response = await axiosInstance.post("/register", data)
    return response.data
}

export const verifyUSer = async (data: Partial<IVerifyFormValues>) => {
    const response = await axiosInstance.post("/verify", data)
    return response.data
}