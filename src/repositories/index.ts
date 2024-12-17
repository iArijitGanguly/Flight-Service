import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import AirplaneRepository from './AirplaneRepository';
import AirportRepository from './AirportRepository';
import CityRepository from './CityRepository';
import FlightRepository from './FlightRepository';

async function repositoryPlugin(fastify: FastifyInstance) {
    fastify.decorate('airplaneRepository', new AirplaneRepository());
    fastify.decorate('cityRepository', new CityRepository());
    fastify.decorate('airportRepository', new AirportRepository());
    fastify.decorate('flightRepository', new FlightRepository());
}

export default fastifyPlugin(repositoryPlugin);