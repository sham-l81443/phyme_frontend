"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                gcTime: 1000 * 60 * 60 * 24,
                staleTime: 1000 * 60 * 60 * 24,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    );
};

export default ReactQueryProvider
