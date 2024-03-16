import { api } from '../lib/axios'

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post('auth/validate', {
      token,
    })
    return response.data
  },
  login: async (email: string, password: string) => {
    const response = await api.post('auth/login', {
      email,
      password,
    })
    return response.data
  },
  logout: async () => {
    { return true }
    await api.post('auth/logout')
  },
})
