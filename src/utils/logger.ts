// logger.ts
/**
 * A simple logger utility that only logs in development environments
 */

// Environment detection
const isDevelopment = (): boolean => {
    // Check for development environment
    // This works for most modern frameworks (React, Vue, etc.)
    return (
        process.env.NODE_ENV === "development" ||
    process.env.REACT_APP_ENV === "development" ||
    process.env.VUE_APP_ENV === "development" ||
    process.env.NEXT_PUBLIC_ENV === "development" ||
    // For browser-only environments without process.env
    (typeof window !== "undefined" &&
      window.location &&
      (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"))
    );
};

// Log levels
type LogLevel = "debug" | "info" | "warn" | "error";

// Color settings for different log levels
const LOG_COLORS = {
    debug: "#7f8c8d", // Gray
    info: "#2980b9", // Blue
    warn: "#f39c12", // Orange
    error: "#c0392b", // Red
};

// Message formatting
const formatMessage = (level: LogLevel, message: string): string => {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
};

// Main logger class
class Logger {
    private enabled: boolean;

    constructor() {
        this.enabled = isDevelopment();
    }

    /**
   * Force enable/disable logging regardless of environment
   */
    setEnabled(enabled: boolean): void {
        this.enabled = enabled;
    }

    /**
   * Check if logging is enabled
   */
    isEnabled(): boolean {
        return this.enabled;
    }

    /**
   * Log at specific level with optional data
   */
    private log(level: LogLevel, message: string, ...data: any[]): void {
        if (!this.enabled) return;

        const formattedMessage = formatMessage(level, message);

        // Apply appropriate logging method with styling in browser environments
        // if (typeof window !== "undefined" && window.console) {
        //     switch (level) {
        //     case "debug":
        //         console.debug(`%c${formattedMessage}`, `color: ${LOG_COLORS.debug}`, ...data);
        //         break;
        //     case "info":
        //         console.info(`%c${formattedMessage}`, `color: ${LOG_COLORS.info}`, ...data);
        //         break;
        //     case "warn":
        //         console.warn(`%c${formattedMessage}`, `color: ${LOG_COLORS.warn}`, ...data);
        //         break;
        //     case "error":
        //         console.error(`%c${formattedMessage}`, `color: ${LOG_COLORS.error}`, ...data);
        //         break;
        //     }
        // } else {
        //     // For non-browser environments (Node.js)
        //     switch (level) {
        //     case "debug":
        //         console.debug(formattedMessage, ...data);
        //         break;
        //     case "info":
        //         console.info(formattedMessage, ...data);
        //         break;
        //     case "warn":
        //         console.warn(formattedMessage, ...data);
        //         break;
        //     case "error":
        //         console.error(formattedMessage, ...data);
        //         break;
        //     }
        // }
    }

    /**
   * Debug level logging
   */
    debug(message: string, ...data: any[]): void {
        this.log("debug", message, ...data);
    }

    /**
   * Info level logging
   */
    info(message: string, ...data: any[]): void {
        this.log("info", message, ...data);
    }

    /**
   * Warning level logging
   */
    warn(message: string, ...data: any[]): void {
        this.log("warn", message, ...data);
    }

    /**
   * Error level logging
   */
    error(message: string, ...data: any[]): void {
        this.log("error", message, ...data);
    }

    /**
   * Log API request details
   */
    logRequest(method: string, url: string, data?: any): void {
        if (!this.enabled) return;

        const message = `API Request: ${method.toUpperCase()} ${url}`;
        this.debug(message, data ? { requestData: data } : "");
    }

    /**
   * Log API response details
   */
    logResponse(method: string, url: string, status: number, data?: any): void {
        if (!this.enabled) return;

        const message = `API Response: ${method.toUpperCase()} ${url} (${status})`;
        this.debug(message, data ? { responseData: data } : "");
    }
}

// Create and export a singleton instance
const logger = new Logger();

export default logger;
