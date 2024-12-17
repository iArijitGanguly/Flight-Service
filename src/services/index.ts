import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import AirplaneService from './AirplaneService';
import AirportService from './AirportService';
import CityService from './CityService';
import FlightService from './FlightService';

async function servicePlugin(fastify: FastifyInstance) {
    fastify.decorate('airplaneService', new AirplaneService(fastify.airplaneRepository));
    fastify.decorate('cityService', new CityService(fastify.cityRepository));
    fastify.decorate('airportService', new AirportService(fastify.airportRepository, fastify.cityRepository));
    fastify.decorate('flightService', new FlightService(fastify.flightRepository, fastify.airplaneRepository, fastify.airportRepository));
}

export default fastifyPlugin(servicePlugin);