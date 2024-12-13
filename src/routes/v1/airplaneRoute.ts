import { FastifyInstance } from 'fastify';

import { airplaneZodSchema } from '../../dtos/AirplaneDto';
import { validator } from '../../validators/validateRequest';

async function airplaneRoute(fastify: FastifyInstance) {
    fastify.post('/', {
        preValidation: validator(airplaneZodSchema),
    }, () => {});
}

export default airplaneRoute;