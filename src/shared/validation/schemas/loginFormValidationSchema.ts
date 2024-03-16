import * as zod from 'zod'

export const loginFormValidationSchema = zod.object({
  email: zod.string().min(1, 'Informe um email').email('Email Inválido'),
  password: zod
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .trim()
    .regex(/\d/, 'A senha deve ter ao menos 1 número')
    .regex(/^\S*$/, 'Não use espaço'),
})
