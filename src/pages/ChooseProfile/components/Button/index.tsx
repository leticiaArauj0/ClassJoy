import { Container } from './styles'

interface ButtonProps {
  icon: string
  color: string
  text: string
}

export function Button({ icon, color, text }: ButtonProps) {
  return (
    <Container background={color}>
      <div>
        <img src={icon} alt="" />
        {text}
      </div>
    </Container>
  )
}
