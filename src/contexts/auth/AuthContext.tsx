import { createContext } from 'react'
import { User } from '../../@types/User'

interface EditUserInput {
  firstName: string,
  lastName: string,
  email: string
}

export type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<boolean | string> 
  logout: () => void
  editUser: (data: EditUserInput) => Promise<void>
}

export const AuthContext = createContext<AuthContextType>(null!)
