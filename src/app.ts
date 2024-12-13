import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

import apiRoute from './routes';

async function app(fastify: FastifyInstance) {
    await fastify.register(apiRoute, { prefix: '/api' });
}

export default fastifyPlugin(app);