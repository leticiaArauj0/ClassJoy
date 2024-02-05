import {
  ContainerLoginButton,
  ContainerRegisterButton,
  ContainerLoginGoogleButton,
} from './styles'

interface RegisterButtonProps {
  text: string
  onClick?: () => Promise<void>
}

interface LoginButtonProps {
  text: string
  onClick?: () => Promise<void>
}

interface GoogleButtonProps {
  text: string
}

export function RegisterButton({ text, onClick }: RegisterButtonProps) {
  return (
    <ContainerRegisterButton onClick={onClick}>{text}</ContainerRegisterButton>
  )
}

export function LoginButton({ text, onClick }: LoginButtonProps) {
  return <ContainerLoginButton onClick={onClick}>{text}</ContainerLoginButton>
}

export function GoogleButton({ text }: GoogleButtonProps) {
  return (
    <ContainerLoginGoogleButton>
      <img src="src\assets\google.svg" alt="" />
      {text}
    </ContainerLoginGoogleButton>
  )
}
