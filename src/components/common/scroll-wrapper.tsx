import React from "react";

import { cn } from "@/lib/utils";

const Scroll = ({
    children,
    direction = "row",
    className,
}: {
  children: React.ReactNode;
  direction?: "row" | "column";
  className?: string;
}) => {
    return (
        <section
            className={cn(
                "flex-1 h-full overflow-auto ",
                direction === "row" ? "flex-row" : "flex-col",
                className && className,
            )}
        >
            {children}
        </section>
    );
};

export default Scroll;
