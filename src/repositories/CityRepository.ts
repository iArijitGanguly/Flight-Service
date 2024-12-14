import City from '../models/City';
import CrudRepository from './CrudRepository';

class CityRepository extends CrudRepository {
    constructor() {
        super(City);
    }
}

export default CityRepository;