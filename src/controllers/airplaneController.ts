import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';

import { AirplaneDto } from '../dtos/AirplaneDto';
import { GetAirplaneIdParams } from '../types/GetAirplaneIdParams';
import SuccessResponse from '../utils/common/SuccessResponse';

async function createAirplane(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const incomingRequest = req.body as AirplaneDto;
        const response = await this.airplaneService.createAirplane({
            modelNumber: incomingRequest.modelNumber,
            capacity: incomingRequest.capacity
        });

        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function getAirplanes(this: FastifyInstance, _req: FastifyRequest, res: FastifyReply) {
    try {
        const response = await this.airplaneService.getAirplanes();
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse); 
    } catch (error) {
        throw error;
    }
}

async function getAirplane(this: FastifyInstance, req: FastifyRequest<{Params: GetAirplaneIdParams}>, res: FastifyReply) {
    try {
        const response = await this.airplaneService.getAirplane(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

export default {
    createAirplane,
    getAirplanes,
    getAirplane
};