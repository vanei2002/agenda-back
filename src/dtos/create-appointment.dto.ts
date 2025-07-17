import { z } from 'zod';

export const CreateAppointmentSchema = z.object({
  examId: z.string().uuid({ message: 'ID do exame inválido.' }),
  date: z.coerce.date({ description: 'Data inválida.' }),
  time: z.string().optional(),
  notes: z.string().max(255).optional(),
});

export type CreateAppointmentDto = z.infer<typeof CreateAppointmentSchema>;
