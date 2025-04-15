import React from "react";

import { cn } from "@/lib/utils";

const Spinner = ({
    className = "",
    circleClassName = "",
    pathClassName = "",
}: {
    className?: string;
    circleClassName?: string;
    pathClassName?: string;
}) => {
    return (
        <svg
            className={cn("animate-spin h-10 w-10 ", className)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <circle
                className={cn("opacity-25 text-primary", circleClassName)}
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className={cn("opacity-75 text-primary", pathClassName)}
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    );
};

export { Spinner };
