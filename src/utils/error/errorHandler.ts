import { FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import { QueryFailedError } from 'typeorm';

import BaseError from '../../errors/BaseError';
import ErrorResponse from '../common/ErrorResponse';

function errorHandler(err: Error, _req: FastifyRequest, res: FastifyReply) {
    if(err instanceof BaseError) {
        ErrorResponse.message = err.message;
        ErrorResponse.error = err.details;
        return res.status(err.statusCode).send(ErrorResponse);
    }

    if(err instanceof QueryFailedError) {
        if(err.driverError.code === '23505') {
            ErrorResponse.message = 'This value is alreday exist';
            return res.status(StatusCodes.BAD_REQUEST).send(ErrorResponse);
        }
    }

    ErrorResponse.error = err;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ErrorResponse);
}

export default errorHandler;