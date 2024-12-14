import { FastifyInstance } from 'fastify';

import airplaneRoute from './airplaneRoute';
import cityRoute from './cityRoute';

async function v1Route(fastify: FastifyInstance) {
    fastify.register(airplaneRoute, { prefix: '/airplanes' });
    fastify.register(cityRoute, { prefix: '/cities' });
}

export default v1Route;