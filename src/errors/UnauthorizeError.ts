import { StatusCodes } from 'http-status-codes';

import BaseError from './BaseError';

class UnauthorizedError extends BaseError {
    constructor() {
        super('UnAuthorized', StatusCodes.UNAUTHORIZED, 'No valid credentials found', {});
    }
}

export default UnauthorizedError;