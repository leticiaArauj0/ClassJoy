import { ContainerButton } from './styles'

interface ButtonProps {
  text: string
  color: string
  width: string
  height: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'submit' | 'reset' | 'button' | undefined
}

export function Button({
  text,
  color,
  width,
  height,
  onClick,
  type,
}: ButtonProps) {
  return (
    <ContainerButton
      background={color}
      width={width}
      height={height}
      onClick={onClick}
      type={type}
    >
      {text}
    </ContainerButton>
  )
}
