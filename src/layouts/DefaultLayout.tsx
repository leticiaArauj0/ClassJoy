import { BookOpen, GraduationCap, House, SignOut, Student } from 'phosphor-react'
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { ContainerDefaultLayout } from './styles/ContainerDefaultLayout'
import { Navbar } from './styles/Navbar'
import logo from '../assets/logo-classjoy.svg'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/auth/AuthContext'

export function DefaultLayout() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    await auth.logout()
    navigate('/')
  }

  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);
  const location = useLocation();

  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location]);

  let home, classroom, students

  if(currentUrl === "/user/dashboard-professor") {
    home = "home"
  } 
  if(currentUrl === "/user/classroom") {
    classroom = "classroom"
  } 
  if(currentUrl === "/user/students") {
    students = "students"
  } 

  return (
    <ContainerDefaultLayout>
      <Navbar>
        <img src={logo} alt="" />
        <ul>
          <NavLink to="/user/dashboard-professor">
            <li className={home}>
              <House size={38} />
            </li>
          </NavLink>
          <NavLink to="/user/classroom">
            <li className={classroom}>
              <GraduationCap size={38} />
            </li>
          </NavLink>
          <NavLink to="/user/students">
            <li className={students}>
              <Student size={38} />
            </li>
          </NavLink>
          <NavLink to="/user/dashboard-professor">
            <li>
              <BookOpen size={38} />
            </li>
          </NavLink>
          <li onClick={handleLogout}>
            <SignOut size={38} />
          </li>
        </ul>
      </Navbar>
      <Outlet />
    </ContainerDefaultLayout>
  )
}
