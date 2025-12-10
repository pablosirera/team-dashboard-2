import { z } from 'zod'

export const userFormSchema = z.object({
  name: z
    .string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(50, 'El nombre es demasiado largo'),
  email: z
    .email({ error: 'Debes introducir un email válido' })
    .transform((value) => value.trim().toLowerCase()),
  role: z.enum(['admin', 'user', 'moderator'], {
    error: 'Selecciona un rol válido',
  }),
  language: z.enum(['es', 'en', 'fr', 'de'], {
    error: 'Selecciona un idioma',
  }),
  phone: z
    .string()
    .optional()
    .refine((value) => !value || /^\+?[0-9\s-]{7,15}$/.test(value), {
      error: 'El teléfono no es válido',
    }),
  nickname: z
    .string()
    .optional()
    .refine((value) => !value || value.length >= 3, {
      error: 'El nickname debe tener al menos 3 caracteres',
    }),
})

export type UserFormValues = z.infer<typeof userFormSchema>
