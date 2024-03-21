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
import { ManageStudents } from './pages/ManageStudents'
import { Classroom } from './pages/Classroom'
import { ManageClassroom } from './pages/ManageClassroom'
import { Students } from './pages/Students'
import { ManageLayout } from './layouts/ManageLayout'

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
        <Route path="classroom" element={<Classroom />} />
        <Route path="students" element={<Students />} />
        <Route path="manage-students" element={<ManageStudents />} />
        <Route path="classroom/manage-classroom" element={<ManageClassroom />} />
      </Route>

      <Route 
        path="/manage" 
        element={
          <RequiredAuth>
            <ManageLayout />
          </RequiredAuth>
        }>
        <Route path="students" element={<ManageStudents />} />
        <Route path="classroom" element={<ManageClassroom />} />
      </Route>
    </Routes>
  )
}
