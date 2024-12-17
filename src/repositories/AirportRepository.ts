import NotFoundError from '../errors/NotFoundError';
import Airport from '../models/Airport';
import CrudRepository from './CrudRepository';

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }

    async getAiportByCode(code: string) {
        const airport = await Airport.findOne({ where: { code }});
        if(!airport) {
            throw new NotFoundError('Airport Code', code);
        }
        return airport; 
    }
}

export default AirportRepository;