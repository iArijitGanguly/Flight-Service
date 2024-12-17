import { FastifyInstance } from 'fastify';

import flightController from '../../controllers/flightController';
import { createFlightZodSchema, flightIdZodSchema, updateFlightZodSchema } from '../../dtos/FlightDto';
import { validator } from '../../validators/validateRequest';

async function flightRoute(fastify: FastifyInstance) {
    fastify.post('/', {
        preValidation: validator({ body: createFlightZodSchema })
    }, flightController.createFlight);

    fastify.get('/', flightController.getAllFlightsByFilter);

    fastify.get('/:id', {
        preValidation: validator({ params: flightIdZodSchema })
    }, flightController.getFlight);

    fastify.patch('/:id', {
        preValidation: validator({ params: flightIdZodSchema, body: updateFlightZodSchema })
    }, flightController.updateFlight);

    fastify.delete('/:id', {
        preValidation: validator({ params: flightIdZodSchema })
    }, flightController.deleteFlight);
}

export default flightRoute;