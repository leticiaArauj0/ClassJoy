import { Routes, Route } from 'react-router-dom'
import { ChooseProfile } from './pages/ChooseProfile'
import { Register } from './pages/Register'
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
import { ClassroomProvider } from './contexts/classroom/ClassroomContext'
import { StudentProvider } from './contexts/student/StudentContext'
import { IdClassroomProvider } from './contexts/idClassroom/IdClassroomContext'
import { DiaryStudentTeacher } from './pages/DiaryStudentTeacher'
import { StudentSkills } from './pages/StudentSkills'
import { ParentsLayout } from './layouts/ParentsLayout'
import { DashboardParents } from './pages/DashboardParents'
import { DiaryStudentParents } from './pages/DiaryStudentParents'
import { StudentSkillParents } from './pages/StudentSkillParents'
import { DiaryProvider } from './contexts/diary/DiaryContext'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<ChooseProfile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar" element={<Register />} />
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
        <Route path="dashboard-professor" element={
          <ClassroomProvider>
            <StudentProvider>
              <DashboardTeacher />
            </StudentProvider>
          </ClassroomProvider>
          } 
        />
        <Route path="classroom" element={<ClassroomProvider><Classroom /></ClassroomProvider>} />
        <Route path="students" element={
            <ClassroomProvider>
              <StudentProvider>
                <Students />
              </StudentProvider>
            </ClassroomProvider>
          } 
        />
        <Route path="manage-students" element={<ManageStudents />} />       
      </Route>

      <Route
        path="/user-parents"
        element={
          <RequiredAuth>
            <ParentsLayout />
          </RequiredAuth>
        }
      >
        <Route path="consultar-perfil" element={<ViewProfile />} />    
        <Route path="dashboard-parents" element={
          <ClassroomProvider>
            <StudentProvider>
              <DiaryProvider>
                <DashboardParents />
              </DiaryProvider>
            </StudentProvider>
          </ClassroomProvider>} 
        />
        <Route path="diary-parents" element={
          <StudentProvider>
            <DiaryProvider>
              <DiaryStudentParents />
            </DiaryProvider>
          </StudentProvider>
          } />
        <Route path="skills-parents" element={<StudentSkillParents />} />
      </Route>

      <Route
        path="/manage"
        element={
          <RequiredAuth>
            <IdClassroomProvider>
              <StudentProvider>
                <ManageLayout />
              </StudentProvider>
            </IdClassroomProvider>
          </RequiredAuth>
        }>
        <Route path="students/:id" element={<ManageStudents />} />
        <Route path="classroom/:id" element={<ManageClassroom />} />
        <Route path="diary/:id" element={<DiaryProvider><DiaryStudentTeacher /></DiaryProvider>} />
        <Route path="student-skills/:id" element={<StudentSkills />} />
      </Route>
    </Routes>  
  )
}
