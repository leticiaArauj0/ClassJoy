import * as zod from 'zod'

export const forgotFormValidationSchema = zod.object({
  email: zod.string().min(1, 'Informe um email').email('Email Inválido'),
})
