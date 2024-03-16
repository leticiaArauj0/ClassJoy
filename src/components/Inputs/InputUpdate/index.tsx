import { EnvelopeSimple, PencilSimpleLine, User } from 'phosphor-react'
import { ContainerIcon } from '../styles/ContainerIcon'
import { ContainerField } from '../styles/ContainerField'
import { ContainerInput } from '../styles/ContainerInput'
import { RegisterOptions } from 'react-hook-form'

type RegisterFunction = (name: string, options?: RegisterOptions) => object

interface InputProps {
  width: string
  position?: string
  icon: string
  value: string | undefined
  outlineColor: string
  borderColor: string
  registerProps?: ReturnType<RegisterFunction>
}

export function InputUpdate({
  width,
  position,
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
      <ContainerField
        type="text"
        width={width}
        outlineColor={outlineColor}
        borderColor={borderColor}
        defaultValue={value}
        {...registerProps}
      />
      <ContainerIcon position={position}><PencilSimpleLine size={24} /></ContainerIcon>
    </ContainerInput>
  )
}
