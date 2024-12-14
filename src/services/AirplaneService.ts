import logger from '../configs/loggerConfig';
import { AirplaneDto } from '../dtos/AirplaneDto';
import BadRequestError from '../errors/BadRequestError';
import InternalServerError from '../errors/InternalServerError';
import AirplaneRepository from '../repositories/AirplaneRepository';

class AirplaneService {
    private airplaneRepository;

    constructor(airplaneRepository: AirplaneRepository) {
        this.airplaneRepository = airplaneRepository;
    }

    async createAirplane(data: AirplaneDto) {
        if(Object.keys(data).length == 0) {
            logger.error('Data is not provided');
            throw new BadRequestError('Airplane Data', data);
        }

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