import { FastifyInstance } from 'fastify';

import airplaneController from '../../controllers/airplaneController';
import { airplaneIdZodSchema, createAirplaneZodSchema, upadteAirplaneZodSchema } from '../../dtos/AirplaneDto';
import { validator } from '../../validators/validateRequest';

async function airplaneRoute(fastify: FastifyInstance) {
    fastify.post('/', {
        preValidation: validator({ body: createAirplaneZodSchema }),
    }, airplaneController.createAirplane);

    fastify.get('/', airplaneController.getAirplanes);

    fastify.get('/:id', {
        preValidation: validator({ params: airplaneIdZodSchema })
    }, airplaneController.getAirplane);

    fastify.patch('/:id', {
        preValidation: validator({ body: upadteAirplaneZodSchema, params: airplaneIdZodSchema })
    }, airplaneController.updateAirplane);

    fastify.delete('/:id', {
        preValidation: validator({ params: airplaneIdZodSchema })
    }, airplaneController.deleteAirplane);
}

export default airplaneRoute;