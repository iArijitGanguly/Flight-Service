import { z } from 'zod';

export const airplaneZodSchema = z.object({
    modelNumber: z.string().regex(/^[a-zA-Z0-9]+$/, {
        message: 'Only alphanumeric characters are allowed without any space and special characters'
    }),
    capacity: z.number().optional()
}).strict();

export type AirplaneDto = z.infer<typeof airplaneZodSchema>