import Flight from '../models/Flight';
import { OrderFilter, QueryFilter } from '../types/QueryFilter';
import CrudRepository from './CrudRepository';

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlightsByFilter(filter: QueryFilter, sortFilter: OrderFilter) {
        const response = await Flight.find({
            where: filter,
            order: sortFilter
        });

        return response;
    }
}

export default FlightRepository;