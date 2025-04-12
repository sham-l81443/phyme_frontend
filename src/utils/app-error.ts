const STATUS_CODES = {
    "Bad Request": 400,
    Unauthorized: 401,
    Forbidden: 403,
    "Not Found": 404,
    "Internal Server Error": 500,
} as const;

const ERROR_MESSAGES: Record<AppError["errorType"], string> = {
    "Bad Request": "The request is malformed or contains invalid parameters",
    Unauthorized: "Authentication is required, or credentials are invalid",
    Forbidden: "The user is authenticated but does not have permission to access the resource",
    "Not Found": "The requested resource does not exist",
    "Internal Server Error": "An unexpected error occurred",
};

export class AppError extends Error {
    errorType: keyof typeof STATUS_CODES;
    success: boolean;
    error: boolean;
    data: unknown;
    statusCode: 400 | 401 | 403 | 404 | 500;

    constructor({
        message,
        errorType,
        data,
    }: {
    message?: string;
    errorType: keyof typeof STATUS_CODES;
    data?: unknown;
    statusCode?: 400 | 401 | 403 | 404 | 500;
  }) {
        super(message || ERROR_MESSAGES[errorType]);
        this.statusCode = STATUS_CODES[errorType];
        this.error = true;
        this.success = false;
        this.errorType = errorType;
        this.data = data;

        Error.captureStackTrace(this, this.constructor);
    }
}
