import { z } from 'zod';

// Task Schema
export const taskSchema = z.object({
  title: z.string().min(1,{ message: "Title is required" }),
  description: z.string().optional(),
  status: z.enum(['To Do','In Progress','Under review','Finished'],{ message: "Status is required" }),
  priority: z.enum(['Low', 'Medium', 'Urgent']).optional(),
  deadline: z.date().optional(),
});