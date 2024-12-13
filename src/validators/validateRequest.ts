import { FastifyReply,FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import { ZodSchema } from 'zod';

import logger from '../configs/loggerConfig';
import ErrorResponse from '../utils/common/ErrorResponse';

export const validator = (schema: ZodSchema<unknown>) => (req: FastifyRequest, res: FastifyReply) => {
    try {
        schema.parse(req.body);
    } catch (error) {
        logger.error('Invalid Request Structure');
        ErrorResponse.message = 'Invalid Request Structure';
        ErrorResponse.error = error as object;
        return res.status(StatusCodes.BAD_REQUEST).send(ErrorResponse);
    }
};