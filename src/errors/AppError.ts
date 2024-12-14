import BaseError from './BaseError';

class AppError extends BaseError {
    constructor(name: string, description: string, statusCode: number, details: unknown) {
        super(name, statusCode, description, details);
    }
}

export default AppError;