import { zodResolver } from '@hookform/resolvers/zod'
import { Aside } from '../../components/Aside'
import { Button } from '../../components/Button'
import { InputPassword } from '../../components/Inputs/InputPassword'
import { Container } from '../../shared/styles/Container'
import { ContainerForm } from '../../shared/styles/ContainerForm'
import { resetFormValidationSchema } from '../../shared/validation/schemas/resetFormValidationSchema'
import { Main } from '../../shared/styles/Main'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { ErrorMenssage } from '../../components/ErrorMenssage'
import { ContainerInputError } from '../../components/Inputs/styles/ContainerInputError'

type FormReset = zod.infer<typeof resetFormValidationSchema>

export function ResetPassword() {
  const { register, handleSubmit, formState } = useForm<FormReset>({
    resolver: zodResolver(resetFormValidationSchema),
  })
  const passwordError = formState.errors.password?.message
  const confirmPasswordError = formState.errors.confirmPassword?.message

  function handleResetPassword(data: FormReset) {
    console.log(data)
  }

  return (
    <Container>
      <Aside
        imgSrc="src\assets\aside-student.svg"
        text="Seja bem-vindo(a)! ClassJoy oferece um ensino adaptativo, onde cada criança é única."
      />
      <Main>
        <img src="src\assets\logo-classjoy.svg" alt="" />
        <h1>Redefinir Senha</h1>
        <form onSubmit={handleSubmit(handleResetPassword)} action="">
          <ContainerForm>
            <ContainerInputError margin={passwordError ? '0' : '0.5rem'}>
              <InputPassword
                width="22rem"
                position="16.5rem"
                placeholder="Nova Senha"
                outlineColor={passwordError ? '#fc6647' : '#966BF2'}
                borderColor={passwordError ? '#fc6647' : 'transparent'}
                registerProps={register('password')}
              />
              <ErrorMenssage menssage={passwordError} />
            </ContainerInputError>
            <ContainerInputError margin={confirmPasswordError ? '0' : '0.5rem'}>
              <InputPassword
                width="22rem"
                position="16.5rem"
                placeholder="Confirmar Senha"
                outlineColor={confirmPasswordError ? '#fc6647' : '#966BF2'}
                borderColor={confirmPasswordError ? '#fc6647' : 'transparent'}
                registerProps={register('confirmPassword')}
              />
              <ErrorMenssage menssage={confirmPasswordError} />
            </ContainerInputError>
            <Button
              text="Redefinir Senha"
              height="2.3rem"
              width="11rem"
              color="#77BF0B"
            />
          </ContainerForm>
        </form>
      </Main>
    </Container>
  )
}
