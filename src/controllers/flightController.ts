import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';

import { CreateFlightDto, FilterFlightDto, FlightIdDto, UpdateFlightDto } from '../dtos/FlightDto';
import SuccessResponse from '../utils/common/SuccessResponse';

async function createFlight(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const requestBody = req.body as CreateFlightDto;
        const response = await this.flightService.createFlight(requestBody);
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function getFlights(this: FastifyInstance, _req: FastifyRequest, res: FastifyReply) {
    try {
        const response = await this.flightService.getFlights();
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function getAllFlightsByFilter(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const queryParams = req.query as FilterFlightDto;
        const response = await this.flightService.getAllFlightsByFilter(queryParams);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function getFlight(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const requestParams = req.params as FlightIdDto;
        const response = await this.flightService.getFlight(requestParams.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function updateFlight(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const incomingRequest = req.body as UpdateFlightDto;
        const requestParams = req.params as FlightIdDto;
        const response = await this.flightService.updateFlight(requestParams.id, incomingRequest);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function deleteFlight(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const requestParams = req.params as FlightIdDto;
        const response = await this.flightService.deleteFlight(requestParams.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

export default {
    createFlight,
    getFlights,
    getAllFlightsByFilter,
    getFlight,
    updateFlight,
    deleteFlight
};