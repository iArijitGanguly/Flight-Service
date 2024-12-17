import { FastifyInstance } from 'fastify';

import airplaneRoute from './airplaneRoute';
import airportRoute from './airportRoute';
import cityRoute from './cityRoute';
import flightRoute from './flightRoute';

async function v1Route(fastify: FastifyInstance) {
    fastify.register(airplaneRoute, { prefix: '/airplanes' });
    fastify.register(cityRoute, { prefix: '/cities' });
    fastify.register(airportRoute, { prefix: '/airports' });
    fastify.register(flightRoute, { prefix: '/flights' });
}

export default v1Route;