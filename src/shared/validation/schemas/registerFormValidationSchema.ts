import * as zod from 'zod'

export const registerFormValidationSchema = zod
  .object({
    firstName: zod
      .string()
      .min(1, 'Informe um nome')
      .regex(/^[^\d]*$/, 'Não use números')
      .regex(/^\S*$/, 'Não use espaço')
      .trim(),
    lastName: zod
      .string()
      .min(1, 'Informe um segundo nome')
      .regex(/^[^\d]*$/, 'Não use números')
      .regex(/^\S*$/, 'Não use espaço')
      .trim(),
    email: zod
      .string()
      .min(1, 'Informe um email')
      .email('Email Inválido')
      .trim(),
    password: zod
      .string()
      .min(8, 'A senha deve ter no mínimo 8 caracteres')
      .regex(/^\S*$/, 'Não use espaço')
      .regex(/\d/, 'A senha deve ter ao menos 1 número')
      .trim(),
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
