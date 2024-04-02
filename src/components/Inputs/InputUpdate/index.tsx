import { EnvelopeSimple, PencilSimpleLine, User } from 'phosphor-react'
import { ContainerIcon } from '../styles/ContainerIcon'
import { ContainerField } from '../styles/ContainerField'
import { ContainerInput } from '../styles/ContainerInput'
import { RegisterOptions } from 'react-hook-form'

type RegisterFunction = (name: string, options?: RegisterOptions) => object

interface InputProps {
  icon: string
  value?: string | undefined
  outlineColor: string
  borderColor: string
  registerProps?: ReturnType<RegisterFunction>
}

export function InputUpdate({
  icon,
  value,
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
      <ContainerIcon position="calc(100% - 5.75rem)"><PencilSimpleLine size={24} /></ContainerIcon>
      <ContainerField
        type="text"
        outlineColor={outlineColor}
        borderColor={borderColor}
        defaultValue={value}
        {...registerProps}
      />    
    </ContainerInput>
  )
}
