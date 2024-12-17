import { FindOperator } from 'typeorm';

export interface QueryFilter {
    departureAirport?: Record<string, string>
    arrivalAirport?: Record<string, string>
    price?: FindOperator<number>
    totalSeats?: FindOperator<number>
    departureTime?: FindOperator<Date>
}

export type SortOrder = 'ASC' | 'DESC';

export type OrderFilter = Record<string, SortOrder>