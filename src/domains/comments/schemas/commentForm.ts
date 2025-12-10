import { z } from 'zod'

export const commentFormSchema = z.object({
  name: z
    .string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(50, 'El nombre es demasiado largo'),
  email: z
    .email({ error: 'Debes introducir un email válido' })
    .transform((value) => value.trim().toLowerCase()),
  body: z
    .string()
    .min(10, 'El comentario debe tener al menos 10 caracteres')
    .max(500, 'El comentario es demasiado largo'),
})

export type CommentFormValues = z.infer<typeof commentFormSchema>
