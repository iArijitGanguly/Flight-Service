import { StatusCodes } from 'http-status-codes';

import { CreateCityDto, UpdateCityDto } from '../dtos/CityDto';
import InternalServerError from '../errors/InternalServerError';
import NotFoundError from '../errors/NotFoundError';
import CityRepository from '../repositories/CityRepository';

class CityService {
    private cityRepository;

    constructor(cityRepository: CityRepository) {
        this.cityRepository = cityRepository;
    }

    async createCity(data: CreateCityDto) {
        try {
            const city = this.cityRepository.create(data);
            return city;
        } catch (error) {
            throw new InternalServerError('Cannot create a new City object', error);
        }
    }

    async getCities() {
        try {
            const cities = await this.cityRepository.getAll();
            return cities;
        } catch (error) {
            throw new InternalServerError('Can not fetch data of all the cities', error);
        }
    }

    async getCity(id: string) {
        try {
            const city = await this.cityRepository.get(id);
            return city;
        } catch (error) {
            const err = error as NotFoundError;
            if(err.statusCode == StatusCodes.NOT_FOUND) {
                throw err;
            }
            throw new InternalServerError('Can not fetch data of city', error);
        }
    }

    async updateCity(id: string, data: UpdateCityDto) {
        try {
            const city = await this.cityRepository.update(id, data);
            return city;
        } catch (error) {
            const err = error as NotFoundError;
            if(err.statusCode == StatusCodes.NOT_FOUND) {
                throw err;
            }
            throw new InternalServerError('Can not fetch data of city', error);
        }
    }

    async deleteCity(id: string) {
        try {
            const city = await this.cityRepository.destroy(id);
            return city;
        } catch (error) {
            const err = error as NotFoundError;
            if(err.statusCode == StatusCodes.NOT_FOUND) {
                throw err;
            }
            throw new InternalServerError('Can not fetch data of city', error);
        }
    }
}

export default CityService;