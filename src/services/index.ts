import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import AirplaneService from './AirplaneService';
import CityService from './CityService';

async function servicePlugin(fastify: FastifyInstance) {
    fastify.decorate('airplaneService', new AirplaneService(fastify.airplaneRepository));
    fastify.decorate('cityService', new CityService(fastify.cityRepository));
}

export default fastifyPlugin(servicePlugin);