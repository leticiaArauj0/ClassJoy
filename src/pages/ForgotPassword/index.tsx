import { Container } from '../../shared/styles/Container'
import { Aside } from '../../components/Aside'
import { Arrow } from '../../components/Arrow'
import { Button } from '../../components/Button'
import { Input } from '../../components/Inputs/Input'
import { ContainerForm } from '../../shared/styles/ContainerForm'
import { Main } from '../../shared/styles/Main'
import { forgotFormValidationSchema } from '../../shared/validation/schemas/forgotFormValidationSchema'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '../../components/ErrorMessage'
import { ContainerInputError } from '../../components/Inputs/styles/ContainerInputError'

type FormForgot = zod.infer<typeof forgotFormValidationSchema>

export function ForgetPassword() {
  const { register, handleSubmit, formState } = useForm<FormForgot>({
    resolver: zodResolver(forgotFormValidationSchema),
  })

  const emailError = formState.errors.email?.message

  function handleResetPassword(data: FormForgot) {
    console.log(data)
  }

  return (
    <Container>
      <Aside
        imgSrc="src\assets\aside-student.svg"
        text="Otimize suas atividades diversificando as abordagens"
      />

      <div>
        <Arrow navLink="/login" />
        <Main>
          <img className="logo" src="src\assets\logo-classjoy.svg" alt="" />
          <h1>Esqueci minha senha</h1>
          <form onSubmit={handleSubmit(handleResetPassword)} action="">
            <ContainerForm>
              <span className="text-forgot">
                Será encaminhado para seu e-mail um link para recuperação da sua
                senha
              </span>
              <ContainerInputError margin="0.5rem">
                <Input
                  placeholder="Email"
                  icon="email"
                  outlineColor={emailError ? '#fc6647' : '#966BF2'}
                  borderColor={emailError ? '#fc6647' : 'transparent'}
                  registerProps={register('email')}
                />
                <ErrorMessage menssage={emailError} />
              </ContainerInputError>
              <Button
                text="Recuperar Senha"
                color="#77BF0B"
                height="2.3rem"
                width="11rem"
              />
            </ContainerForm>
          </form>
        </Main>
      </div>
    </Container>
  )
}
