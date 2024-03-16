import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { ChooseProfile } from '../../pages/ChooseProfile'

export const RequiredAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext)

  if (!auth.user) {
    return <ChooseProfile />
  }

  return children
}
