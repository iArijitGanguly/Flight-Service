import { FastifyInstance } from 'fastify';

import airplaneRoute from './airplaneRoute';

async function v1Route(fastify: FastifyInstance) {
    fastify.register(airplaneRoute, { prefix: '/airplanes' });
}

export default v1Route;