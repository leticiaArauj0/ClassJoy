import { ContainerGoogleButton } from './styles'

interface GoogleButtonProps {
  text: string
  onClick?: () => Promise<void>
}

export function GoogleButton({ text, onClick }: GoogleButtonProps) {
  return (
    <ContainerGoogleButton onClick={onClick}>
      <img src="src\assets\icon-google.svg" alt="" />
      {text}
    </ContainerGoogleButton>
  )
}
