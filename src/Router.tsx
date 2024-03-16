import { Routes, Route } from 'react-router-dom'
import { ChooseProfile } from './pages/ChooseProfile'
import { RegisterAsTeacher } from './pages/Register'
import { Login } from './pages/Login'
import { ForgetPassword } from './pages/ForgotPassword'
import { ResetPassword } from './pages/ResetPassword'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ViewProfile } from './pages/ViewProfile'
import { RequiredAuth } from './contexts/auth/RequiredAuth'
import { DashboardTeacher } from './pages/DashboardTeacher'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<ChooseProfile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar" element={<RegisterAsTeacher />} />
      <Route path="/recuperar-senha" element={<ForgetPassword />} />
      <Route path="/redefinir-senha" element={<ResetPassword />} />

      <Route
        path="/user"
        element={
          <RequiredAuth>
            <DefaultLayout />
          </RequiredAuth>
        }
      >
        <Route path="consultar-perfil" element={<ViewProfile />} /> 
        <Route path="dashboard-professor" element={<DashboardTeacher />} />
      </Route>
    </Routes>
  )
}
