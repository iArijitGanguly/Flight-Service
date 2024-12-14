import { FastifyInstance } from 'fastify';

import airplaneController from '../../controllers/airplaneController';
import { createAirplaneZodSchema, deleteAirplaneZodSchema, getAirplaneZodSchema, upadteAirplaneIdZodSchema, upadteAirplaneZodSchema } from '../../dtos/AirplaneDto';
import { validator } from '../../validators/validateRequest';

async function airplaneRoute(fastify: FastifyInstance) {
    fastify.post('/', {
        preValidation: validator({ body: createAirplaneZodSchema }),
    }, airplaneController.createAirplane);

    fastify.get('/', airplaneController.getAirplanes);

    fastify.get('/:id', {
        preValidation: validator({ params: getAirplaneZodSchema })
    }, airplaneController.getAirplane);

    fastify.patch('/:id', {
        preValidation: validator({ body: upadteAirplaneZodSchema, params: upadteAirplaneIdZodSchema })
    }, airplaneController.updateAirplane);

    fastify.delete('/:id', {
        preValidation: validator({ params: deleteAirplaneZodSchema })
    }, airplaneController.deleteAirplane);
}

export default airplaneRoute;