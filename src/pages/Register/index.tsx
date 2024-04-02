import { GoogleButton } from '../../components/GoogleButton'
import { Aside } from '../../components/Aside'
import { Or } from './styles/Or'
import { Terms } from './styles/Terms'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Inputs/Input'
import { InputPassword } from '../../components/Inputs/InputPassword'
import { Arrow } from '../../components/Arrow'
import { ContainerForm } from '../../shared/styles/ContainerForm'
import { Container } from '../../shared/styles/Container'
import { Main } from '../../shared/styles/Main'
import { api } from '../../lib/axios'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '../../components/ErrorMessage'
import { ContainerInputError } from '../../components/Inputs/styles/ContainerInputError'
import { registerFormValidationSchema } from '../../shared/validation/schemas/registerFormValidationSchema'
import * as zod from 'zod'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth/AuthContext'

export type FormRegister = zod.infer<typeof registerFormValidationSchema>

export function RegisterAsTeacher() {
  const location = useLocation()
  const role = new URLSearchParams(location.search).get('role')
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm<FormRegister>({
    resolver: zodResolver(registerFormValidationSchema),
  })
  const firstNameError = formState.errors.firstName?.message
  const lastNameError = formState.errors.lastName?.message
  const emailError = formState.errors.email?.message
  const passwordError = formState.errors.password?.message
  const confirmPasswordError = formState.errors.confirmPassword?.message

  async function handleRegister({
    firstName,
    lastName,
    email,
    password,
  }: FormRegister) {
    await api.post('/auth/register', {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      role,
    })

    const isLogged = await auth.login(email, password)

    if (isLogged) {
      navigate('/user/dashboard-professor')
    }
  }

  return (
    <Container>
      <Aside
        imgSrc="src\assets\aside-student.svg"
        text="Otimize suas atividades  diversificando as abordagens"
      />

      <div>
        <Arrow navLink={`/login?role=${role}`} />
        <Main>
          <img
            className="logo-cadastro"
            src="src\assets\logo-classjoy.svg"
            alt=""
          />
          <h1>Cadastre-se</h1>
          <form
            onSubmit={handleSubmit(handleRegister)}
            action=""
            className="form"
          >
            <ContainerForm>
              <ContainerInputError margin={firstNameError ? '0' : '0.5rem'}>
                <Input
                  placeholder="Primeiro Nome"
                  icon="user"
                  outlineColor={firstNameError ? '#fc6647' : '#966BF2'}
                  borderColor={firstNameError ? '#fc6647' : 'transparent'}
                  registerProps={register('firstName')}
                />
                <ErrorMessage menssage={firstNameError} />
              </ContainerInputError>
              <ContainerInputError margin={lastNameError ? '0' : '0.5rem'}>
                <Input
                  placeholder="Segundo Nome"
                  icon="user"
                  outlineColor={lastNameError ? '#fc6647' : '#966BF2'}
                  borderColor={lastNameError ? '#fc6647' : 'transparent'}
                  registerProps={register('lastName')}
                />
                <ErrorMessage menssage={lastNameError} />
              </ContainerInputError>
              <ContainerInputError margin={emailError ? '0' : '0.5rem'}>
                <Input
                  placeholder="Email"
                  icon="email"
                  outlineColor={emailError ? '#fc6647' : '#966BF2'}
                  borderColor={emailError ? '#fc6647' : 'transparent'} 
                  registerProps={register('email')}
                />
                <ErrorMessage menssage={emailError} />
              </ContainerInputError>
              <div className="container-password">
                <ContainerInputError margin={passwordError ? '0' : '0.5rem'}>
                  <InputPassword
                    width="10.75rem"
                    position="6rem"
                    placeholder="Senha"
                    registerProps={register('password')}
                    outlineColor={passwordError ? '#fc6647' : '#966BF2'}
                    borderColor={passwordError ? '#fc6647' : 'transparent'}
                  />
                  <ErrorMessage menssage={passwordError} />
                </ContainerInputError>
                <ContainerInputError
                  margin={confirmPasswordError ? '0' : '0.5rem'}
                >
                  <InputPassword
                    width="10.75rem"
                    position="6rem"
                    placeholder="Confirmar"
                    registerProps={register('confirmPassword')}
                    outlineColor={confirmPasswordError ? '#fc6647' : '#966BF2'}
                    borderColor={confirmPasswordError ? '#fc6647' : 'transparent'}
                  />
                  <ErrorMessage menssage={confirmPasswordError} />
                </ContainerInputError>
              </div>
              <Terms>
                <input type="checkbox" />
                Li e concordo com os termos de condição
              </Terms>
              <Button
                text="Criar conta"
                color="#77BF0B"
                height="2.3rem"
                width="11rem"
                type="submit"
              />
            </ContainerForm>
            <Or>
              <div className="line"></div> ou <div className="line"></div>
            </Or>
            <GoogleButton text="Criar com google" />
          </form>
        </Main>
      </div>
    </Container>
  )
}
