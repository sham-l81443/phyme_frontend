"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { STUDENT_ROUTES } from "@/constants/routes";
import { useDevtoolsDetect } from "@/hooks/useDevtoolProtect";

const ContentProtection: React.FC<{
    children: React.ReactNode,
    onProtectionTriggered?: () => void
}> = ({ children, onProtectionTriggered }) => {
    const [isProtected, setIsProtected] = useState(false);



    useEffect(() => {
        if (typeof window === 'undefined') return;

        const threshold = 160;

        // Function to handle protection triggering
        const triggerProtection = () => {
            if (!isProtected) {
                setIsProtected(true);
                if (onProtectionTriggered) {
                    onProtectionTriggered();
                }

                // Optional: More aggressive measures
                const elements = document.querySelectorAll('video, iframe');
                elements.forEach(el => el.remove());
            }
        };

        // DevTools detection: Window size method
        // const checkWindowSize = () => {
        //     const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        //     const heightThreshold = window.outerHeight - window.innerHeight > threshold;

        //     if (widthThreshold || heightThreshold) {
        //         triggerProtection();
        //         return true;
        //     }
        //     return false;
        // };

        // DevTools detection: Console method
        // const detectConsole = () => {
        //     const element = document.createElement('div');
        //     Object.defineProperty(element, 'id', {
        //         get: function () {
        //             triggerProtection();
        //             return 'id';
        //         }
        //     });
        //     console.log(element);
        // };

        // DevTools detection: Debugger method
        // const detectDebugger = () => {
        //     const start = performance.now();
        //     // debugger;
        //     const end = performance.now();
        //     if (end - start > 100) {
        //         triggerProtection();
        //     }
        // };

        // Prevent right-click
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
            return false;
        };

        // Prevent keyboard shortcuts
        const handleKeyDown = (e: KeyboardEvent) => {
            // DevTools shortcuts
            if (
                (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
                (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
                (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
                (e.key === 'F12')
            ) {
                e.preventDefault();
                triggerProtection();
                return false;
            }

            // View source, save page, etc.
            if (
                (e.ctrlKey && (e.key === 'U' || e.key === 'u')) ||
                (e.ctrlKey && (e.key === 'S' || e.key === 's'))
            ) {
                e.preventDefault();
                return false;
            }
        };

        // Disable selection
        const disableSelection = () => {
            document.body.style.userSelect = 'none';
        };

        // Set up detection intervals
        // const intervalId = setInterval(() => {
        //     checkWindowSize();
        //     detectConsole();
        //     detectDebugger();
        // }, 10000000);

        // Add all event listeners
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);
        // window.addEventListener('resize', checkWindowSize);
        disableSelection();

        // Clean up
        return () => {
            // clearInterval(intervalId);
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
            // window.removeEventListener('resize', checkWindowSize);
            document.body.style.userSelect = '';
        };
    }, [isProtected, onProtectionTriggered]);

    if (isProtected) {
        return (
            <div className="center w-full flex-col space-y-4">
                <h2>Content is protected</h2>
                <Button onClick={() => {
                    window.location.href = STUDENT_ROUTES.videos
                }}>Retry</Button>
            </div>
        );
    }

    return <>{children}</>;
};

export default ContentProtection;