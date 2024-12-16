import { FastifyInstance } from 'fastify';

import airportController from '../../controllers/airportController';
import { airportIdZodSchema, createAirportZodSchema, updateAirportZodSchema } from '../../dtos/AirportDto';
import { validator } from '../../validators/validateRequest';

async function airportRoute(fastify: FastifyInstance) {
    fastify.post('/', {
        preValidation: validator({ body: createAirportZodSchema })
    }, airportController.createAirport);

    fastify.get('/', airportController.getAirports);

    fastify.get('/:id', {
        preValidation: validator({ params: airportIdZodSchema })
    }, airportController.getAirport);

    fastify.patch('/:id', {
        preValidation: validator({ params: airportIdZodSchema, body: updateAirportZodSchema })
    }, airportController.updateAirport);

    fastify.delete('/:id', {
        preValidation: validator({ params: airportIdZodSchema })
    }, airportController.deleteAirport);
}

export default airportRoute;