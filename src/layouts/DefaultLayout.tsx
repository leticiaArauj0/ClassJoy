import { BookOpen, GraduationCap, House, SignOut, Student } from 'phosphor-react'
import { Outlet, useNavigate } from 'react-router-dom'
import { ContainerDefaultLayout } from './styles/ContainerDefaultLayout'
import { Navbar } from './styles/Navbar'
import logo from '../assets/logo-classjoy.svg'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth/AuthContext'

export function DefaultLayout() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.logout()
    navigate('/')
  }

  return (
    <ContainerDefaultLayout>
      <Navbar>
        <img src={logo} alt="" />
        <ul>
          <li>
            <House size={38} />
          </li>
          <li>
            <GraduationCap size={38} />
          </li>
          <li>
            <Student size={38} />
          </li>
          <li>
            <BookOpen size={38} />
          </li>
          <li onClick={handleLogout}>
            <SignOut size={38} />
          </li>
        </ul>
      </Navbar>
      <Outlet />
    </ContainerDefaultLayout>
  )
}
