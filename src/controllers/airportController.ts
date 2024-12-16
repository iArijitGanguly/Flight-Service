import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';

import { AirportIdDto, CreateAirportDto, UpdateAirportDto } from '../dtos/AirportDto';
import SuccessResponse from '../utils/common/SuccessResponse';

async function createAirport(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const incomingRequest = req.body as CreateAirportDto;
        const response = await this.airportService.createAirport(incomingRequest);
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function getAirports(this: FastifyInstance, _req: FastifyRequest, res: FastifyReply) {
    try {
        const response = await this.airportService.getAirports();
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function getAirport(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const requestParams = req.params as AirportIdDto;
        const response = await this.airportService.getAirport(requestParams.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function updateAirport(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const requestParams = req.params as AirportIdDto;
        const incomingRequest = req.body as UpdateAirportDto;
        const response = await this.airportService.updateAirport(requestParams.id, incomingRequest);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function deleteAirport(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const requestParams = req.params as AirportIdDto;
        const response = await this.airportService.deleteAirport(requestParams.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

export default {
    createAirport,
    getAirports,
    getAirport,
    updateAirport,
    deleteAirport
};