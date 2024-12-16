import { z } from 'zod';

export const createAirportZodSchema = z.object({
    name: z.string(),
    code: z.string(),
    cityId: z.string().uuid('Invalid UUID format for id'),
    address: z.string().optional()
}).strict();

export const updateAirportZodSchema = z.object({
    name: z.string().optional(),
    code: z.string().optional(),
    cityId: z.string().uuid('Invalid UUID format for id').optional(),
    address: z.string().optional()
}).strict();

export const airportIdZodSchema = z.object({
    id: z.string().uuid('Invalid UUID format for id')
});

export type CreateAirportDto = z.infer<typeof createAirportZodSchema>

export type UpdateAirportDto = z.infer<typeof updateAirportZodSchema>

export type AirportIdDto = z.infer<typeof airportIdZodSchema>