import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import AirplaneService from './AirplaneService';

async function servicePlugin(fastify: FastifyInstance) {
    fastify.decorate('airplaneService', new AirplaneService(fastify.airplaneRepository));
}

export default fastifyPlugin(servicePlugin);