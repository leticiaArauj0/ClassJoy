import { useState } from 'react'
import axios from 'axios'
import { FormLogin } from '../../components/FormLogin'
import { ContainerLoginTeacher } from './styles'
import { AsideWelcome } from '../../components/AsideWelcome'

export function LoginAsTeacher() {
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

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleLogin = async () => {
    const returnObject = await axios({
      method: 'post',
      url: 'http://localhost:8080/auth/login',
      data: {
        email,
        password: values.password,
      },
    })
      .then((result) => {
        alert(`Fez Login`)
        return result.data
      })
      .catch(() => {
        alert('Email ou senha inválida')
      })

    console.log('returnObject', returnObject)
  }

  return (
    <ContainerLoginTeacher>
      <AsideWelcome
        imgUrl="src\assets\boy-studying.svg"
        text="Otimize suas atividades  diversificando as abordagens"
      />

      <FormLogin
        onChangeEmail={handleEmail}
        valueEmail={email}
        typePassword={values.showPassword ? 'text' : 'password'}
        onChangePassword={handlePasswordChange('password')}
        valuePassword={values.password}
        showPassword={values.showPassword}
        onClickPassword={handleShowPassword}
        onMouseDown={handleMouseDownPassword}
        onClickLogin={handleLogin}
        registerLink={'/cadastrar-professor'}
      />
    </ContainerLoginTeacher>
  )
}
