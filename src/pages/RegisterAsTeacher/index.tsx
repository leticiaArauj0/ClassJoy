import { GoogleButton, RegisterButton } from '../../components/InButton'
import { AsideWelcome } from '../../components/AsideWelcome'
import { ContainerRegisterTeacher, FormContainer } from './styles'
import { ArrowLeft, Eye, EyeSlash } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export function RegisterAsTeacher() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  })

  const handleShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
  }

  const handlePasswordChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value)
  }

  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value)
  }

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleRegister = async () => {
    const returnObject = await axios({
      method: 'post',
      url: 'http://localhost:8080/auth/register',
      data: {
        first_name: firstName,
        last_name: lastName,
        email,
        password: values.password,
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
    <ContainerRegisterTeacher>
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
              <div className="passwordField">
                <input
                  id="password"
                  type={values.showPassword ? 'text' : 'password'}
                  placeholder="Senha"
                  onChange={handlePasswordChange('password')}
                  value={values.password}
                />
                <button
                  type="button"
                  onClick={handleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? (
                    <Eye size={28} />
                  ) : (
                    <EyeSlash size={28} />
                  )}
                </button>
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
    </ContainerRegisterTeacher>
  )
}
