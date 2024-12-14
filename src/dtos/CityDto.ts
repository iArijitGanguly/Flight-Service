import { z } from 'zod';

export const createCityZodSchema = z.object({
    name: z.string({ message: 'City name is required' })
}).strict();

export const updateCityZodSchema = z.object({
    name: z.string({ message: 'Updated City name is not Provided' })
}).strict();

export const cityIdZodSchema = z.object({
    id: z.string().uuid('Invalid UUID format for id')
}).strict();

export type CreateCityDto = z.infer<typeof createCityZodSchema>

export type UpdateCityDto = z.infer<typeof updateCityZodSchema>

export type CityIdDto = z.infer<typeof cityIdZodSchema>