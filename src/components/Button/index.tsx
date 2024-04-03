import { ContainerButton } from './styles'

interface ButtonProps {
  text: string
  color: string
  width: string
  height: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'submit' | 'reset' | 'button' | undefined
  disabled?: boolean
}

export function Button({
  text,
  color,
  width,
  height,
  onClick,
  type,
  disabled,
}: ButtonProps) {
  return (
    <ContainerButton
      background={color}
      width={width}
      height={height}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </ContainerButton>
  )
}
