import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';

import { CreateAirplaneDto, DeleteAirplaneDto, GetAirplaneDto, UpdateAirplaneDto, UpdateAirplaneIdDto } from '../dtos/AirplaneDto';
import SuccessResponse from '../utils/common/SuccessResponse';

async function createAirplane(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const incomingRequest = req.body as CreateAirplaneDto;
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

async function getAirplane(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const incomingRequest = req.params as GetAirplaneDto;  
        const response = await this.airplaneService.getAirplane(incomingRequest.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function updateAirplane(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const incomingRequestId = req.params as UpdateAirplaneIdDto;
        const incomingRequestBody = req.body as UpdateAirplaneDto;
        const response = await this.airplaneService.updateAirplane(incomingRequestId.id, incomingRequestBody);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function deleteAirplane(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const incomingRequest = req.params as DeleteAirplaneDto;
        const response = await this.airplaneService.deleteAirplane(incomingRequest.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

export default {
    createAirplane,
    getAirplanes,
    getAirplane,
    updateAirplane,
    deleteAirplane
};