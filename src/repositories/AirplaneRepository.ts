import Airplane from '../models/Airplane';
import CrudRepository from './CrudRepository';

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }
}

export default AirplaneRepository;