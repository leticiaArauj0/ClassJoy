import { GoogleButton, RegisterButton } from '../../components/InButton'
import { AsideWelcome } from '../../components/AsideWelcome'
import { ContainerRegisterParents, FormContainer } from './styles'
import { ArrowLeft } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export function RegisterAsParents() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value)
  }

  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value)
  }

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleRegister = async () => {
    const returnObject = await axios({
      method: 'post',
      url: 'http://localhost:8080/auth/register',
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    })
      .then((result) => {
        alert(`Realizou Cadastro`)
        return result.data
      })
      .catch(() => {
        alert('Não Realizou Cadastro')
      })

    console.log('returnObject', returnObject)
  }
  return (
    <ContainerRegisterParents>
      <AsideWelcome
        imgUrl="src\assets\boy-studying.svg"
        text="Otimize suas atividades  diversificando as abordagens"
      />

      <div className="container">
        <div className="arrow-left">
          <NavLink to="/login-professor">
            <ArrowLeft size={32} />
          </NavLink>
        </div>
        <main>
          <img className="logo" src="src\assets\logo-classjoy.svg" alt="" />
          <h1>Cadastre-se</h1>
          <form action="">
            <FormContainer>
              <input
                id="first_name"
                type="text"
                placeholder="Primeiro Nome"
                onChange={handleFirstName}
                value={firstName}
              />
              <input
                id="last_name"
                type="text"
                placeholder="Segundo Nome"
                onChange={handleLastName}
                value={lastName}
              />
              <input
                id="email"
                type="email"
                placeholder="E-mail"
                onChange={handleEmail}
                value={email}
              />
              <div>
                <input
                  id="password"
                  type="password"
                  placeholder="Senha"
                  onChange={handlePassword}
                  value={password}
                />
              </div>
              <div className="terms">
                <input type="checkbox" />
                Li e concordo com os termos de condição
              </div>
            </FormContainer>
            <RegisterButton text="Criar conta" onClick={handleRegister} />
            <div className="or">
              <div className="line"></div> ou <div className="line"></div>
            </div>
            <GoogleButton text="Criar com google" />
          </form>
        </main>
      </div>
    </ContainerRegisterParents>
  )
}
