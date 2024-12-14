import { FastifyInstance } from 'fastify';

import airplaneController from '../../controllers/airplaneController';
import { airplaneZodSchema } from '../../dtos/AirplaneDto';
import { validator } from '../../validators/validateRequest';

async function airplaneRoute(fastify: FastifyInstance) {
    fastify.post('/', {
        preValidation: validator(airplaneZodSchema),
    }, airplaneController.createAirplane);

    fastify.get('/', airplaneController.getAirplanes);

    fastify.get('/:id', airplaneController.getAirplane);
}

export default airplaneRoute;