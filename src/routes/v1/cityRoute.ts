import { FastifyInstance } from 'fastify';

import cityController from '../../controllers/cityController';
import { cityIdZodSchema, createCityZodSchema, updateCityZodSchema } from '../../dtos/CityDto';
import { validator } from '../../validators/validateRequest';

async function cityRoute(fastify: FastifyInstance) {
    fastify.post('/', {
        preValidation: validator({ body: createCityZodSchema })
    }, cityController.createCity);

    fastify.get('/', cityController.getCities);

    fastify.get('/:id', {
        preValidation: validator({ params: cityIdZodSchema })
    }, cityController.getCity);

    fastify.patch('/:id', {
        preValidation: validator({ body: updateCityZodSchema, params: cityIdZodSchema })
    }, cityController.updateCity);

    fastify.delete('/:id', {
        preValidation: validator({ params: cityIdZodSchema })
    }, cityController.deleteCity);
}

export default cityRoute;