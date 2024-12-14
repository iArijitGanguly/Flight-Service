import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import AirplaneRepository from './AirplaneRepository';
import CityRepository from './CityRepository';

async function repositoryPlugin(fastify: FastifyInstance) {
    fastify.decorate('airplaneRepository', new AirplaneRepository());
    fastify.decorate('cityRepository', new CityRepository());
}

export default fastifyPlugin(repositoryPlugin);