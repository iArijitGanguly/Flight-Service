import { StatusCodes } from 'http-status-codes';

import { CreateAirportDto, UpdateAirportDto } from '../dtos/AirportDto';
import BadRequestError from '../errors/BadRequestError';
import InternalServerError from '../errors/InternalServerError';
import NotFoundError from '../errors/NotFoundError';
import AirportRepository from '../repositories/AirportRepository';
import CityRepository from '../repositories/CityRepository';

class AirportService {
    private airportRepository;
    private cityRepository;

    constructor(airportRespository: AirportRepository, cityRepository: CityRepository) {
        this.airportRepository = airportRespository;
        this.cityRepository = cityRepository;
    }

    async createAirport(data: CreateAirportDto) {
        try {
            const city = await this.cityRepository.get(data.cityId);
            const airport = await this.airportRepository.create({ ...data, city });
            return airport;
        } catch (error) {
            throw new InternalServerError('Cannot create a new Airport object', error);
        }
    }

    async getAirports() {
        try {
            const airports = await this.airportRepository.getAll();
            return airports;
        } catch (error) {
            throw new InternalServerError('Can not fetch data of all the airports', error);
        }
    }

    async getAirport(id: string) {
        try {
            const airport = await this.airportRepository.get(id);
            return airport;
        } catch (error) {
            const err = error as NotFoundError;
            if(err.statusCode == StatusCodes.NOT_FOUND) {
                throw err;
            }
            throw new InternalServerError('Can not fetch data of airport', error);
        }
    }

    async updateAirport(id: string, data: UpdateAirportDto) {
        if(Object.keys(data).length == 0) {
            throw new BadRequestError('Updated data is not provided', data);
        }

        try {
            const airport = await this.airportRepository.update(id, data);
            return airport;
        } catch (error) {
            const err = error as NotFoundError;
            if(err.statusCode == StatusCodes.NOT_FOUND) {
                throw err;
            }
            throw new InternalServerError('Can not fetch data of the airport', error);
        }
    }

    async deleteAirport(id: string) {
        try {
            const airport = await this.airportRepository.destroy(id);
            return airport;
        } catch (error) {
            const err = error as NotFoundError;
            if(err.statusCode == StatusCodes.NOT_FOUND) {
                throw err;
            }
            throw new InternalServerError('Can not fetch data of the airport', error);
        }
    }
}

export default AirportService;