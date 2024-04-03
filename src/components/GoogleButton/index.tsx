import { ContainerGoogleButton } from './styles'

interface GoogleButtonProps {
  text: string
  onClick?: () => Promise<void>
}

export function GoogleButton({ text, onClick }: GoogleButtonProps) {
  const clientId = "1025114616922-rg536jkkfrdabi96mqo7tso91mugvgqt.apps.googleusercontent.com"

  return (
    <ContainerGoogleButton onClick={onClick}>
      <img src="src\assets\icon-google.svg" alt="" />
      {text}
    </ContainerGoogleButton>
  )
}
