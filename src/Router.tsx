import { Routes, Route } from 'react-router-dom'

import { ChooseProfile } from './pages/ChooseProfile'
import { LoginAsTeacher } from './pages/LoginAsTeacher'
import { RegisterAsTeacher } from './pages/RegisterAsTeacher'
import { LoginAsParents } from './pages/LoginAsParents'
import { RegisterAsParents } from './pages/RegisterAsParents'
import { ForgetPassword } from './pages/ForgotPassword'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<ChooseProfile />} />

      <Route path="/login-professor" element={<LoginAsTeacher />} />
      <Route path="/cadastrar-professor" element={<RegisterAsTeacher />} />

      <Route path="/login-responsavel" element={<LoginAsParents />} />
      <Route path="/cadastrar-responsavel" element={<RegisterAsParents />} />
      <Route path="/recuperar-senha" element={<ForgetPassword />} />
    </Routes>
  )
}
