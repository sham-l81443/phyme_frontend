import axiosInstance from "@/lib/axios"

export const apiHandler = async ({ method, url, body }: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    url: string,
    body?: any
}) => {
    try {
        const response = await axiosInstance({ method, url, data: body })
        return response.data
    } catch (error) {
        throw error
    }
}