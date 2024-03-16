import * as zod from 'zod'

export const resetFormValidationSchema = zod
  .object({
    password: zod
      .string()
      .min(8, 'A senha deve ter no mínimo 8 caracteres')
      .trim()
      .regex(/^\S*$/, 'Não use espaço')
      .regex(/\d/, 'A senha deve ter ao menos 1 número'),
    confirmPassword: zod.string().min(1, 'Confirme a senha').trim(),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword
    },
    {
      message: 'As senhas não correspodem',
      path: ['confirmPassword'],
    },
  )
