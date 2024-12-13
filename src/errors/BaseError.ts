class BaseError extends Error {
    name: string;
    statusCode: number;
    description: string;
    details: object;

    constructor(name: string, statusCode: number, description: string, details: object) {
        super(description);
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;
    }
}

export default BaseError;