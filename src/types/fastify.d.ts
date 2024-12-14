import AirplaneRepository from '../repositories/AirplaneRepository';
import AirplaneService from '../services/AirplaneService';

declare module 'fastify' {
    interface FastifyInstance {
        airplaneService: AirplaneService
        airplaneRepository: AirplaneRepository
    }
}