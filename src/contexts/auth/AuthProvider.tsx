import { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { User } from '../../@types/User'
import { useApi } from '../../hooks/useApi'
import { useCookies } from 'react-cookie'

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null)
  const [cookies, setCookie] = useCookies(['token'])
  const api = useApi()

  useEffect(() => {
    const token = cookies.token
    const validateToken = async () => {
      try {
        const data = await api.validateToken(token)
        if (data.user) {
          setUser(data.user)
        }
      } catch (e) {
        console.error('Erro ao buscar dados:', e)
      }
    }

    validateToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const login = async (email: string, password: string) => {
    const data = await api.login(email, password)

    if (data.user && data.token) {
      setUser(data.user)
      setTokenInCookie(data.token)
      return true
    }
    return false
  }

  const logout = async () => {
    await api.logout()
    setUser(null)
    setTokenInCookie('')
  }

  const setTokenInCookie = (token: string) => {
    setCookie('token', token, { path: '/' })
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
