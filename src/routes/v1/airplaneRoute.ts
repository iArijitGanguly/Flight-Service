import { FastifyInstance } from 'fastify';

async function airplaneRoute(fastify: FastifyInstance) {
    fastify.get('/', (_req, res) => {
        res.send({
            success: true,
            data: 'Alive'
        });
    });
}

export default airplaneRoute;