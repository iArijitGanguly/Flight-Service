import { AirplaneDto } from '../dtos/AirplaneDto';
import InternalServerError from '../errors/InternalServerError';
import AirplaneRepository from '../repositories/AirplaneRepository';

class AirplaneService {
    private airplaneRepository;

    constructor(airplaneRepository: AirplaneRepository) {
        this.airplaneRepository = airplaneRepository;
    }

    async createAirplane(data: AirplaneDto) {
        try {
            const airplane = await this.airplaneRepository.create(data);
            return airplane;
        } catch (error) {
            throw new InternalServerError('Cannot create a new Airplance object', error);
        }
    }

    async getAirplanes() {
        try {
            const airplanes = await this.airplaneRepository.getAll();
            return airplanes;
        } catch (error) {
            throw new InternalServerError('Cannot fetch data of all the airplanes', error);
        }
    }
}

export default AirplaneService;