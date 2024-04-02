import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { GoogleButton } from '../../components/GoogleButton'
import { Aside } from '../../components/Aside'
import { Container } from '../../shared/styles/Container'
import { ContainerForm } from '../../shared/styles/ContainerForm'
import { ContainerButton } from './styles/ContainerButton'
import { Main } from '../../shared/styles/Main'
import { InputPassword } from '../../components/Inputs/InputPassword'
import { Input } from '../../components/Inputs/Input'
import { Arrow } from '../../components/Arrow'
import { Button } from '../../components/Button/index'
import { ContainerForgetPassword } from './styles/ContainerForgotPassword'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { ErrorMessage } from '../../components/ErrorMessage'
import { ContainerInputError } from '../../components/Inputs/styles/ContainerInputError'
import { loginFormValidationSchema } from '../../shared/validation/schemas/loginFormValidationSchema'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth/AuthContext'

type FormLogin = zod.infer<typeof loginFormValidationSchema>

export function Login() {
  const location = useLocation()
  const role = new URLSearchParams(location.search).get('role')
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm<FormLogin>({
    resolver: zodResolver(loginFormValidationSchema),
  })
  const emailError = formState.errors.email?.message
  const passwordError = formState.errors.password?.message

  async function handleLogin(data: FormLogin) {
    const isLogged = await auth.login(data.email, data.password)

    if (isLogged) {
      navigate('/user/dashboard-professor')
    }
  }

  return (
    <Container>
      <Aside
        imgSrc="src\assets\aside-student.svg"
        text="Seja bem-vindo(a)! ClassJoy oferece um ensino adaptativo, onde cada criança é única."
      />

      <div>
        <Arrow navLink="/" />
        <Main>
          <img className="logo" src="src\assets\logo-classjoy.svg" alt="" />
          <h1>Login</h1>
          <form onSubmit={handleSubmit(handleLogin)} action="">
            <ContainerForm>
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
              <ContainerInputError margin={passwordError ? '0' : '0.5rem'}>
                <InputPassword
                  width="22rem"
                  position="16.5rem"
                  placeholder="Senha"
                  outlineColor={passwordError ? '#fc6647' : '#966BF2'}
                  borderColor={passwordError ? '#fc6647' : 'transparent'}
                  registerProps={register('password')}
                />
                <ErrorMessage menssage={passwordError} />
              </ContainerInputError>
            </ContainerForm>
            <ContainerForgetPassword>
              <NavLink to="/recuperar-senha">
                <strong>Esqueceu sua senha?</strong>
              </NavLink>
            </ContainerForgetPassword>
            <ContainerButton>
              <div>
                <Button
                  text="Entrar"
                  width="10.7rem"
                  height="2.3rem"
                  color="#966BF2"
                  type="submit"
                />
                <NavLink to={`/cadastrar?role=${role}`}>
                  <Button
                    text="Criar uma conta"
                    width="10.7rem"
                    height="2.3rem"
                    color="#77BF0B"
                  />
                </NavLink>
              </div>
              <GoogleButton text="Continuar com google" />
            </ContainerButton>
          </form>
        </Main>
      </div>
    </Container>
  )
}
