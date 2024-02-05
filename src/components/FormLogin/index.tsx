import { NavLink, To } from 'react-router-dom'
import { ContainerButton, FormContainer, LoginContainer } from './styles'
import {
  ArrowLeft,
  EnvelopeSimple,
  Eye,
  EyeSlash,
  LockKey,
} from 'phosphor-react'
import { GoogleButton, LoginButton, RegisterButton } from '../InButton'

interface FormLoginProps {
  onChangeEmail?: React.ChangeEventHandler<HTMLInputElement>
  onChangePassword?: React.ChangeEventHandler<HTMLInputElement>
  onClickPassword?: React.MouseEventHandler<HTMLButtonElement>
  onClickLogin?: (() => Promise<void>) | undefined
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>
  valueEmail?: string
  valuePassword?: string
  typePassword?: string
  showPassword?: boolean
  registerLink: To
}

export function FormLogin({
  onChangeEmail,
  valueEmail,
  typePassword,
  onChangePassword,
  valuePassword,
  showPassword,
  onClickPassword,
  onMouseDown,
  onClickLogin,
  registerLink,
}: FormLoginProps) {
  return (
    <LoginContainer>
      <div className="container">
        <div className="arrow-left">
          <NavLink to="/">
            <ArrowLeft size={32} />
          </NavLink>
        </div>
        <main>
          <img className="logo" src="src\assets\logo-classjoy.svg" alt="" />
          <h1>Login</h1>
          <form action="">
            <FormContainer>
              <div className="input-email">
                <div className="icon-email">
                  <EnvelopeSimple size={24} />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  onChange={onChangeEmail}
                  value={valueEmail}
                />
              </div>
              <div className="passwordField">
                <div className="icon-password">
                  <LockKey size={24} />
                </div>
                <input
                  id="senha"
                  type={typePassword}
                  placeholder="Senha"
                  onChange={onChangePassword}
                  value={valuePassword}
                />
                <button
                  type="button"
                  onClick={onClickPassword}
                  onMouseDown={onMouseDown}
                >
                  {showPassword ? <Eye size={28} /> : <EyeSlash size={28} />}
                </button>
              </div>
              <div>
                <NavLink to="/recuperar-senha">
                  <strong>Esqueceu sua senha?</strong>
                </NavLink>
              </div>
            </FormContainer>
            <ContainerButton>
              <div>
                <LoginButton text="Entrar" onClick={onClickLogin} />
                <NavLink to={registerLink}>
                  <RegisterButton text="Criar uma conta" />
                </NavLink>
              </div>
              <GoogleButton text="Continuar com google" />
            </ContainerButton>
          </form>
        </main>
      </div>
    </LoginContainer>
  )
}
