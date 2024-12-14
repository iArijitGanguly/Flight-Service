import { StatusCodes } from 'http-status-codes';

import { AirplaneDto } from '../dtos/AirplaneDto';
import BaseError from '../errors/BaseError';
import InternalServerError from '../errors/InternalServerError';
import AirplaneRepository from '../repositories/AirplaneRepository';

class AirplaneService {
    private airplaneRepository;

    constructor(airplaneRepository: AirplaneRepository) {
        this.airplaneRepository = airplaneRepository;
    }

    async createAirplane(data: AirplaneDto) {
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
            const err = error as BaseError;
            if(err.statusCode == StatusCodes.NOT_FOUND) {
                throw new BaseError(err.name, err.statusCode, 'Can not fetch data of airplane', err);
            }
            throw new InternalServerError('Can not fetch data of airplane', error);
        }
    }
}

export default AirplaneService;