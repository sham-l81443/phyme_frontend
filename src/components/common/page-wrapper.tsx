import React from "react";

import { cn } from "@/lib/utils";

const Page = ({
    children,
    direction = "row",
    className,
}: {
    children: React.ReactNode;
    direction?: "row" | "column";
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "h-screen overflow-hidden w-full flex",
                direction === "row" ? "flex-row" : "flex-col",
                className && className,
            )}
        >
            {children}
        </div>
    );
};

export { Page };
