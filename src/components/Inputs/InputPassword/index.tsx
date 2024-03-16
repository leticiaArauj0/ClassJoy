import { Eye, EyeSlash, LockKey } from 'phosphor-react'
import { useState } from 'react'
import { ContainerIcon } from '../styles/ContainerIcon'
import { ContainerField } from '../styles/ContainerField'
import { ShowPassword, ContainerInputPassword } from './styles'
import { RegisterOptions } from 'react-hook-form'

type RegisterFunction = (name: string, options?: RegisterOptions) => object

interface InputPasswordProps {
  width: string
  position: string
  placeholder: string
  registerProps?: ReturnType<RegisterFunction>
  outlineColor: string
  borderColor: string
}

export function InputPassword({
  width,
  position,
  placeholder,
  outlineColor,
  borderColor,
  registerProps,
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false)

  function handleShowPassword() {
    setShowPassword(true)
  }

  function handleMouseDown() {
    setShowPassword(false)
  }

  return (
    <ContainerInputPassword width={width}>
      <ContainerIcon>
        <LockKey size={24} />
      </ContainerIcon>

      <ContainerField
        width={width}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        borderColor={borderColor}
        outlineColor={outlineColor}
        {...registerProps}
      />

      <ShowPassword
        position={position}
        type="button"
        onClick={handleShowPassword}
        onMouseDown={handleMouseDown}
      >
        {showPassword ? <Eye size={28} /> : <EyeSlash size={28} />}
      </ShowPassword>
    </ContainerInputPassword>
  )
}
