import AirplaneRepository from '../repositories/AirplaneRepository';
import AirportRepository from '../repositories/AirportRepository';
import CityRepository from '../repositories/CityRepository';
import FlightRepository from '../repositories/FlightRepository';
import AirplaneService from '../services/AirplaneService';
import AirportService from '../services/AirportService';
import CityService from '../services/CityService';
import FlightService from '../services/FlightService';

declare module 'fastify' {
    interface FastifyInstance {
        //Services
        airplaneService: AirplaneService
        cityService: CityService
        airportService: AirportService
        flightService: FlightService

        // Repositories
        airplaneRepository: AirplaneRepository
        cityRepository: CityRepository
        airportRepository: AirportRepository
        flightRepository: FlightRepository
    }
}