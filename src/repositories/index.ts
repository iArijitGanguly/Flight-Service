import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import AirplaneRepository from './AirplaneRepository';

async function repositoryPlugin(fastify: FastifyInstance) {
    fastify.decorate('airplaneRepository', new AirplaneRepository());
}

export default fastifyPlugin(repositoryPlugin);