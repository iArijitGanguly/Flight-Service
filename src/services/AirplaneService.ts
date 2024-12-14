import { StatusCodes } from 'http-status-codes';

import { CreateAirplaneDto, UpdateAirplaneDto } from '../dtos/AirplaneDto';
import BadRequestError from '../errors/BadRequestError';
import InternalServerError from '../errors/InternalServerError';
import NotFoundError from '../errors/NotFoundError';
import AirplaneRepository from '../repositories/AirplaneRepository';

class AirplaneService {
    private airplaneRepository;

    constructor(airplaneRepository: AirplaneRepository) {
        this.airplaneRepository = airplaneRepository;
    }

    async createAirplane(data: CreateAirplaneDto) {
        try {
            const airplane = await this.airplaneRepository.create(data);
            return airplane;
        } catch (error) {
            throw new InternalServerError('Cannot create a new Airplance object', error);
        }
    }

    async getAirplanes() {
        try {
            const airplanes = await this.airplaneRepository.getAll();
            return airplanes;
        } catch (error) {
            throw new InternalServerError('Cannot fetch data of all the airplanes', error);
        }
    }

    async getAirplane(id: string) {
        try {
            const airplane = await this.airplaneRepository.get(id);
            return airplane;
        } catch (error) {
            const err = error as NotFoundError;
            if(err.statusCode == StatusCodes.NOT_FOUND) {
                throw err;
            }
            throw new InternalServerError('Can not fetch data of airplane', error);
        }
    }

    async updateAirplane(id: string, data: UpdateAirplaneDto) {
        if(Object.keys(data).length == 0) {
            throw new BadRequestError('Updated data is not provided', data);
        }
        
        try {
            const airplane = await this.airplaneRepository.update(id, data);
            return airplane;
        } catch (error) {
            const err = error as NotFoundError;
            if(err.statusCode == StatusCodes.NOT_FOUND) {
                throw err;
            }
            throw new InternalServerError('Can not fetch data of airplane', error);
        }
    }

    async deleteAirplane(id: string) {
        try {
            const airplane = await this.airplaneRepository.destroy(id);
            return airplane;
        } catch (error) {
            const err = error as NotFoundError;
            if(err.statusCode == StatusCodes.NOT_FOUND) {
                throw err;
            }
            throw new InternalServerError('Can not fetch data of airplane', error);
        }
    }
}

export default AirplaneService;