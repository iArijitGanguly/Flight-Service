import AirplaneRepository from '../repositories/AirplaneRepository';
import AirportRepository from '../repositories/AirportRepository';
import CityRepository from '../repositories/CityRepository';
import AirplaneService from '../services/AirplaneService';
import AirportService from '../services/AirportService';
import CityService from '../services/CityService';

declare module 'fastify' {
    interface FastifyInstance {
        //Services
        airplaneService: AirplaneService
        cityService: CityService
        airportService: AirportService

        // Repositories
        airplaneRepository: AirplaneRepository
        cityRepository: CityRepository
        airportRepository: AirportRepository
    }
}