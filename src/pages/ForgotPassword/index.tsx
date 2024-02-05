import { NavLink } from 'react-router-dom'
import { RegisterButton } from '../../components/InButton'
import { ContainerForgotPassword, FormContainer } from './styles'
import { ArrowLeft } from 'phosphor-react'
import { AsideWelcome } from '../../components/AsideWelcome'

export function ForgetPassword() {
  return (
    <ContainerForgotPassword>
      <AsideWelcome
        imgUrl="src\assets\boy-studying.svg"
        text="Otimize suas atividades  diversificando as abordagens"
      />

      <div className="container">
        <div className="arrow-left">
          <NavLink to="/">
            <ArrowLeft size={32} />
          </NavLink>
        </div>
        <main>
          <img className="logo" src="src\assets\logo-classjoy.svg" alt="" />
          <h1>Esqueci minha senha</h1>
          <form action="">
            <FormContainer>
              <span>
                Será encaminhado para seu e-mail um link para recuperação da sua
                senha
              </span>
              <input id="email" type="email" placeholder="E-mail" />
            </FormContainer>
            <RegisterButton text="Recuperar Senha" />
          </form>
        </main>
      </div>
    </ContainerForgotPassword>
  )
}
