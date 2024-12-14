import AirplaneRepository from '../repositories/AirplaneRepository';
import CityRepository from '../repositories/CityRepository';
import AirplaneService from '../services/AirplaneService';
import CityService from '../services/CityService';

declare module 'fastify' {
    interface FastifyInstance {
        //Services
        airplaneService: AirplaneService
        cityService: CityService

        // Repositories
        airplaneRepository: AirplaneRepository
        cityRepository: CityRepository
    }
}