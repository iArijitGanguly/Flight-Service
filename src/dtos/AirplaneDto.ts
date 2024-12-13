import { z } from 'zod';

export const airplaneZodSchema = z.object({
    modelNumber: z.string(),
    capacity: z.number().optional()
}).strict();

export type AirplaneDto = z.infer<typeof airplaneZodSchema>