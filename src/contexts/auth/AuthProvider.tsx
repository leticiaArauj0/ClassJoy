import { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { User } from '../../@types/User'
import { useApi } from '../../hooks/useApi'
import { useCookies } from 'react-cookie'
import * as zod from 'zod'
import { updateFormValidationSchema } from '../../shared/validation/schemas/updateFormValidationSchema'
import { api } from '../../lib/axios'

export type FormUpdate = zod.infer<typeof updateFormValidationSchema>

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null)
  const [cookies, setCookie] = useCookies(['token'])
  const apiAuth = useApi()

  const token = cookies.token
  const validateToken = async () => {
    try {
      const data = await apiAuth.validateToken(token)
      if (data.user) {
        setUser(data.user)
      }
    } catch (e) {
      console.error('Erro ao buscar dados:', e)
    }
  }

  useEffect(() => {
    validateToken()
  }, [])

  async function editUser({ 
    firstName,
    lastName,
    email 
  }: FormUpdate) {
    await api.patch(`/users/${user?.id}`, {
      first_name: firstName,
      last_name: lastName,
      email,
    })

    validateToken()
  }

  const login = async (email: string, password: string) => {
    const data = await apiAuth.login(email, password)

    if (data.user && data.token) {
      setUser(data.user)
      setTokenInCookie(data.token)
      return true
    }

    return false
  }

  const logout = async () => {
    await apiAuth.logout()
    setUser(null)
    setTokenInCookie('')
  }

  const setTokenInCookie = (token: string) => {
    setCookie('token', token, { path: '/' })
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, editUser }}>
      {children}
    </AuthContext.Provider>
  )
}
