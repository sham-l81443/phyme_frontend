import React from "react";

import { cn } from "@/lib/utils";

import { LoadingDialog } from "./loading-dialog";


const Section = ({
    children,
    direction = "row",
    className,
    loading,
}: {
    children?: React.ReactNode;
    direction?: "row" | "column";
    className?: string;
    loading?: boolean;
}) => {
    return (
        <section
            className={cn(
                "h-full overflow-hidden flex flex-1 ",
                direction === "row" ? "flex-row" : "flex-col",
                className && className,
            )}
        >
            {loading ? <LoadingDialog /> : <></>}
            {children}
        </section>
    );
};

export { Section };

