import AirplaneRepository from '../repositories/AirplaneRepository';

declare module 'fastify' {
    interface FastifyInstance {
        airplaneRepository: AirplaneRepository
    }
}