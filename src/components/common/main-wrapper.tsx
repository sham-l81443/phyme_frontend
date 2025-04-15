import React from "react";

import { cn } from "@/lib/utils";

import {LoadingDialog} from "./loading-dialog";



const Main = ({
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
        <main
            className={cn(
                "h-full overflow-hidden w-full flex ",
                direction === "row" ? "flex-row" : "flex-col",
                className && className,
            )}
        >
            {loading ? <LoadingDialog /> : <></>}
            {children}
        </main>
    );
};

export {Main};


