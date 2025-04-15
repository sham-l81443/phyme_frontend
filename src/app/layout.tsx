import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ToastContainer } from 'react-toastify';

import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/lib/ReactQueryProvider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Phyme Learn",
    description: "The Best Physics Learning App",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ReactQueryProvider>
                    {children}
                    <Toaster />
                    <ToastContainer />
                </ReactQueryProvider>
            </body>
        </html>
    );
}
