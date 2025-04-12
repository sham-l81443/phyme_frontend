import React from "react";

import { cn } from "@/lib/utils";

import { AlertDialog, AlertDialogContent, AlertDialogTitle } from "../ui/alert-dialog";

import Spinner from "./spinner";

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
        <div
            className={cn(
                "h-full overflow-hidden w-full flex bg-teal-200",
                direction === "row" ? "flex-row" : "flex-col",
                className && className,
            )}
        >
            {loading ? <LoadingUi /> : children}
        </div>
    );
};

export default Main;

const LoadingUi = () => {
    return (
        <AlertDialog open={true}>
            <AlertDialogTitle />
            <AlertDialogContent className="center bg-transparent border-none shadow-none">
                <Spinner />
            </AlertDialogContent>
        </AlertDialog>
    );
};
