import Airport from '../models/Airport';
import CrudRepository from './CrudRepository';

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }
}

export default AirportRepository;