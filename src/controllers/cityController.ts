import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';

// import { QueryFailedError } from 'typeorm';
import { CityIdDto, CreateCityDto, UpdateCityDto } from '../dtos/CityDto';
// import BadRequestError from '../errors/BadRequestError';
import SuccessResponse from '../utils/common/SuccessResponse';

async function createCity(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    const incomingRequest = req.body as CreateCityDto;
    try {
        const response = await this.cityService.createCity(incomingRequest);
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).send(SuccessResponse);
    } catch (error) {
        // if(error instanceof QueryFailedError) {
        //     if(error.driverError.code == process.env.UNIQUE_NAME_ERROR_CODE) {
        //         throw new BadRequestError(`City Name ${incomingRequest.name} is already exists`, { name: incomingRequest.name });
        //     }
        // }
        throw error;
    }
}

async function getCities(this: FastifyInstance, _req: FastifyRequest, res: FastifyReply) {
    try {
        const response = await this.cityService.getCities();
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse); 
    } catch (error) {
        throw error;
    }
}

async function getCity(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const incomingRequest = req.params as CityIdDto;  
        const response = await this.cityService.getCity(incomingRequest.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function updateCity(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const incomingRequestId = req.params as CityIdDto;
        const incomingRequestBody = req.body as UpdateCityDto;
        const response = await this.cityService.updateCity(incomingRequestId.id, incomingRequestBody);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

async function deleteCity(this: FastifyInstance, req: FastifyRequest, res: FastifyReply) {
    try {
        const incomingRequest = req.params as CityIdDto;
        const response = await this.cityService.deleteCity(incomingRequest.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).send(SuccessResponse);
    } catch (error) {
        throw error;
    }
}

export default {
    createCity,
    getCities,
    getCity,
    updateCity,
    deleteCity
};