import React from "react";

import { cn } from "@/lib/utils";

import { LoadingDialog } from "./loading-dialog";

const Scroll = ({
    children,
    direction = "row",
    className,
    loading = false,
}: {
    children: React.ReactNode;
    direction?: "row" | "column";
    className?: string;
    loading?: boolean
}) => {
    return (
        <section
            className={cn(
                "flex-1 h-full overflow-auto bg-white",
                direction === "row" ? "flex-row" : "flex-col",
                className && className,
            )}
        >
            {loading ? <LoadingDialog /> : <></>}

            {children}
        </section>
    );
};

export { Scroll };
