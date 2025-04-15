// lib/toast.ts
import { toast } from "react-toastify";

export const showSuccess = (message: string) => {
    toast.success(message, {
        position: "top-right",
        theme: "light",
    });
};

export const showError = (message: string) => {
    toast.error(message, {
        position: "top-right",
        theme: "light",
    });
};

export const showWarning = (message: string) => {
    toast.warning(message, {
        position: "top-right",
        theme: "light",
    });
};

export const showInfo = (message: string) => {
    toast.info(message, {
        position: "top-right",
        theme: "light",
    });
};

export const showDefault = (message: string) => {
    toast(message, {
        position: "top-right",
        theme: "light",
    });
};