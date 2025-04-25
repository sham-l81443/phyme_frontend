import axios from "axios";

import { AppError } from "@/utils/app-error";
import logger from "@/utils/logger";
import { setStudentDataById } from "@/store/student/studentStore";
import { STUDENT_STORE_KEY } from "@/store/store-key";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
        if (error?.response) {
            const { status, data, config } = error.response;
            const message = data?.message || "Something went wrong";

            const apiEndpoint = config?.url;
            logger.info(apiEndpoint, 'apiEndpoint');

            if (
                status === 401 &&
                !apiEndpoint.includes('/login') &&
                !apiEndpoint.includes('/admin/login') &&
                !apiEndpoint.includes('/register')
            ) {
                setStudentDataById(STUDENT_STORE_KEY.IS_STUDENT_LOGGED_IN, false, 'persist')
                window.location.href = "/login";
            }

            logger.error(`Axios Error: ${status} - ${message}`);

            if ([400, 401, 403, 404, 500].includes(status)) {
                throw new AppError({
                    errorType: ERROR_TYPES[status as 400 | 401 | 403 | 404 | 500],
                    message,
                    statusCode: status as keyof typeof ERROR_TYPES,
                    data: data?.data,
                });
            } else {
                throw new Error(message);
            }
        } else if (error.request) {
            logger.error("Network Error:", error.message);
            throw new Error("Network error. Please check your internet connection.");
        } else {
            logger.error("Axios Error:", error.message);
            throw new Error(error.message);
        }
    },
);

const ERROR_TYPES: Record<
    400 | 401 | 403 | 404 | 500,
    "Bad Request" | "Unauthorized" | "Forbidden" | "Not Found" | "Internal Server Error"
> = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
} as const;

export default axiosInstance;
