import { FastifyInstance } from 'fastify';

import airplaneRoute from './airplaneRoute';
import airportRoute from './airportRoute';
import cityRoute from './cityRoute';

async function v1Route(fastify: FastifyInstance) {
    fastify.register(airplaneRoute, { prefix: '/airplanes' });
    fastify.register(cityRoute, { prefix: '/cities' });
    fastify.register(airportRoute, { prefix: '/airports' });
}

export default v1Route;