import { z } from 'zod';

export const createAirplaneZodSchema = z.object({
    modelNumber: z.string().regex(/^[a-zA-Z0-9]+$/, {
        message: 'Only alphanumeric characters are allowed without any space and special characters'
    }),
    capacity: z.number().optional()
}).strict();

export const getAirplaneZodSchema = z.object({
    id: z.string().uuid('Invalid UUID format for id')
});

export const deleteAirplaneZodSchema = z.object({
    id: z.string().uuid('Invalid UUID format for id')
});

export const upadteAirplaneZodSchema = z.object({
    modelNumber: z.string().regex(/^[a-zA-Z0-9]+$/, {
        message: 'Only alphanumeric characters are allowed without any space and special characters'
    }).optional(),
    capacity: z.number().optional()
});

export const upadteAirplaneIdZodSchema = z.object({
    id: z.string().uuid('Invalid UUID format for id')
});

export type GetAirplaneDto = z.infer<typeof getAirplaneZodSchema>

export type DeleteAirplaneDto = z.infer<typeof deleteAirplaneZodSchema>

export type CreateAirplaneDto = z.infer<typeof createAirplaneZodSchema>

export type UpdateAirplaneDto = z.infer<typeof upadteAirplaneZodSchema>

export type UpdateAirplaneIdDto = z.infer<typeof upadteAirplaneIdZodSchema>