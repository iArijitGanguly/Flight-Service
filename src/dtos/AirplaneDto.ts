import { z } from 'zod';

export const createAirplaneZodSchema = z.object({
    modelNumber: z.string().regex(/^[a-zA-Z0-9]+$/, {
        message: 'Only alphanumeric characters are allowed without any space and special characters'
    }),
    capacity: z.number().optional()
}).strict();

export const airplaneIdZodSchema = z.object({
    id: z.string().uuid('Invalid UUID format for id')
});

export const upadteAirplaneZodSchema = z.object({
    modelNumber: z.string().regex(/^[a-zA-Z0-9]+$/, {
        message: 'Only alphanumeric characters are allowed without any space and special characters'
    }).optional(),
    capacity: z.number().optional()
}).strict();

export type CreateAirplaneDto = z.infer<typeof createAirplaneZodSchema>

export type UpdateAirplaneDto = z.infer<typeof upadteAirplaneZodSchema>

export type AirplaneIdDto = z.infer<typeof airplaneIdZodSchema>