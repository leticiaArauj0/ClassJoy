import * as zod from 'zod'

export const updateFormValidationSchema = zod
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
  })
