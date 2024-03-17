import { BookOpen, GraduationCap, House, SignOut, Student } from 'phosphor-react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
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
            <NavLink to="/user/dashboard-professor">
              <House size={38} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/dashboard-professor">
              <GraduationCap size={38} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/students">
              <Student size={38} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/dashboard-professor">
              <BookOpen size={38} />
            </NavLink>
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
