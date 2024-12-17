import { StatusCodes } from 'http-status-codes';
import { Between, MoreThanOrEqual } from 'typeorm';

import { CreateFlightDto, FilterFlightDto, UpdateFlightDto } from '../dtos/FlightDto';
import BadRequestError from '../errors/BadRequestError';
import InternalServerError from '../errors/InternalServerError';
import NotFoundError from '../errors/NotFoundError';
import AirplaneRepository from '../repositories/AirplaneRepository';
import AirportRepository from '../repositories/AirportRepository';
import FlightRepository from '../repositories/FlightRepository';
import { OrderFilter, QueryFilter, SortOrder } from '../types/QueryFilter';
import { dateTimeHelper } from '../utils/helpers/dateTimeHelper';

class FlightService {
    private flightRepository;
    private airplaneRepository;
    private airportRepository;

    constructor(flightRepository: FlightRepository, airplaneRepository: AirplaneRepository, airportRepository: AirportRepository) {
        this.flightRepository = flightRepository;
        this.airplaneRepository = airplaneRepository;
        this.airportRepository = airportRepository;
    }

    async createFlight(data: CreateFlightDto) {
        try {
            const timeCheck = dateTimeHelper(data.departureTime, data.arrivalTime);
            if(!timeCheck) {
                throw new BadRequestError('Arrival time can not be lesser than departure time', { departureTime: data.departureTime, arrivalTime: data.arrivalTime });
            }
            const requestObject = await this.buildRequestObject(data);
            const flight = await this.flightRepository.create(requestObject);
            return flight;
        } catch (error) {
            throw new InternalServerError('Cannot create a new Flight object', error);
        }
    }

    async getFlights() {
        try {
            const flights = await this.flightRepository.getAll();
            return flights;
        } catch (error) {
            throw new InternalServerError('Can not fetch data of all the flights', error);
        }
    }

    async getFlight(id: string) {
        try {
            const flight = await this.flightRepository.get(id, 'Flight Id');
            return flight;
        } catch (error) {
            const err = error as NotFoundError;
            if(err.statusCode == StatusCodes.NOT_FOUND) {
                throw err;
            }
            throw new InternalServerError('Can not fetch data of the flight', error);
        }
    }

    async updateFlight(id: string, data: UpdateFlightDto) {
        if(Object.keys(data).length == 0) {
            throw new BadRequestError('Updated data is not provided', data);
        }

        try {
            const updateRequestObject = await this.buildRequestObject(data);
            const flight = await this.flightRepository.update(id, updateRequestObject);
            return flight;
        } catch (error) {
            const err = error as NotFoundError;
            if(err.statusCode == StatusCodes.NOT_FOUND) {
                throw err;
            }
            throw new InternalServerError('Can not fetch data of the flight', error);
        }
    }

    async deleteFlight(id: string) {
        try {
            const flight = await this.flightRepository.destroy(id);
            return flight;
        } catch (error) {
            const err = error as NotFoundError;
            if(err.statusCode == StatusCodes.NOT_FOUND) {
                throw err;
            }
            throw new InternalServerError('Can not fetch data of the flight', error);
        }
    }

    async getAllFlightsByFilter(query: FilterFlightDto) {
        const customFilter: QueryFilter = {};
        const sortFilter: OrderFilter = {};
        const endingTripTime = ' 23:59:59';

        if(query.trips) {
            const [departureAirportCode, arrivalAirportCode] = query.trips.split('-');
            customFilter.departureAirport = { code: departureAirportCode };
            customFilter.arrivalAirport = { code: arrivalAirportCode };
        }

        if(query.price) {
            const [minPrice, maxPrice] = query.price.split('-');
            customFilter.price = Between(Number(minPrice), Number(maxPrice == undefined ? 20000 : maxPrice));
        }

        if(query.travellers) {
            customFilter.totalSeats = MoreThanOrEqual(query.travellers);
        }

        if(query.tripDate) {
            customFilter.departureTime = Between(new Date(query.tripDate), new Date(query.tripDate + endingTripTime));
        }

        if(query.sort) {
            const params = query.sort.split(',');
            const orderFilter = params.map((param) => param.split('_'));
            orderFilter.forEach(([key, order]) => sortFilter[key] = order as SortOrder);
        }

        try {
            const flights = await this.flightRepository.getAllFlightsByFilter(customFilter, sortFilter);
            return flights;
        } catch (error) {
            throw new InternalServerError('Can not fetch data of all the flights', error);
        }
    }

    private async buildRequestObject(data: UpdateFlightDto) {
        const updateRequestObject: Record<string, unknown> = {};

        if(data.airplaneId) {
            updateRequestObject.airplane = await this.airplaneRepository.get(data.airplaneId, 'Airplane Id');
        }

        if(data.arrivalAirportCode) {
            updateRequestObject.arrivalAirport = await this.airportRepository.getAiportByCode(data.arrivalAirportCode);
        }

        if(data.departureAirportCode) {
            updateRequestObject.departureAirport = await this.airportRepository.getAiportByCode(data.departureAirportCode);
        }

        return Object.assign(data, updateRequestObject);
    }
}

export default FlightService;