import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'

export const RequiredAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  if (!auth.user) {
    navigate('/')
  }

  return children
}
