import { ArrowLeft } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { ContainerArrow } from './styles'

interface ArrowProps {
  navLink: string
}

export function Arrow({ navLink }: ArrowProps) {
  return (
    <ContainerArrow>
      <NavLink to={navLink}>
        <ArrowLeft size={32} />
      </NavLink>
    </ContainerArrow>
  )
}
