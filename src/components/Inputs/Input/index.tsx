import { EnvelopeSimple, User } from 'phosphor-react'
import { ContainerIcon } from '../styles/ContainerIcon'
import { ContainerField } from '../styles/ContainerField'
import { ContainerInput } from '../styles/ContainerInput'
import { RegisterOptions } from 'react-hook-form'

type RegisterFunction = (name: string, options?: RegisterOptions) => object

interface InputProps {
  icon: string
  placeholder: string
  outlineColor: string
  borderColor: string
  registerProps?: ReturnType<RegisterFunction>
}

export function Input({
  icon,
  placeholder,
  outlineColor,
  borderColor,
  registerProps,
}: InputProps) {
  let button

  if (icon === 'user') {
    button = <User size={24} />
  } else if (icon === 'email') {
    button = <EnvelopeSimple size={24} />
  }

  return (
    <ContainerInput>
      <ContainerIcon>{button}</ContainerIcon>
      <ContainerField
        type="text"
        width="22rem"
        outlineColor={outlineColor}
        borderColor={borderColor}
        placeholder={placeholder}
        {...registerProps}
      />
    </ContainerInput>
  )
}
