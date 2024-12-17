import { z } from 'zod';

export const createFlightZodSchema = z.object({
    flightNumber: z.string(),
    arrivalTime: z.string(),
    departureTime: z.string(),
    price: z.number().nonnegative().refine((value) => value.toFixed(2).length <= 10, {
        message: 'Price must have up to 10 digits and 2 decimal places'
    }),
    boardingGate: z.string().optional(),
    totalSeats: z.number(),
    airplaneId: z.string().uuid('Invalid UUID format for airplaneId'),
    departureAirportCode: z.string(),
    arrivalAirportCode: z.string()
}).strict();

export const updateFlightZodSchema = z.object({
    flightNumber: z.string().optional(),
    arrivalTime: z.string().optional(),
    departureTime: z.string().optional(),
    price: z.number().nonnegative().refine((value) => value.toFixed(2).length <= 10, {
        message: 'Price must have up to 10 digits and 2 decimal places'
    }).optional(),
    boardingGate: z.string().optional(),
    totalSeats: z.number().optional(),
    airplaneId: z.string().uuid('Invalid UUID format for airplaneId').optional(),
    departureAirportCode: z.string().optional(),
    arrivalAirportCode: z.string().optional()
}).strict();

export const queryFilterZodSchema = z.object({
    trips: z.string().min(6, 'Trips parameter must not be empty').optional(),
    price: z.string().optional(),
    travellers: z.number().optional(),
    tripDate: z.string().optional(),
    sort: z.string().optional()
}).strict();

export const flightIdZodSchema = z.object({
    id: z.string().uuid('Invalid UUID format for flightId')
});

export type CreateFlightDto = z.infer<typeof createFlightZodSchema>

export type UpdateFlightDto = z.infer<typeof updateFlightZodSchema>

export type FlightIdDto = z.infer<typeof flightIdZodSchema>

export type FilterFlightDto = z.infer<typeof queryFilterZodSchema>