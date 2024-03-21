import { BookOpen, ChalkboardTeacher, House, SignOut, Student } from 'phosphor-react'
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { ContainerDefaultLayout } from './styles/ContainerDefaultLayout'
import { Navbar } from './styles/Navbar'
import logo from '../assets/logo-classjoy.svg'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/auth/AuthContext'

export function ManageLayout() {
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

  let classroom, students

  if(currentUrl === "/manage/classroom") {
    classroom = "classroom"
  } 
  if(currentUrl === "/manage/students") {
    students = "students"
  } 

  return (
    <ContainerDefaultLayout>
      <Navbar>
        <img src={logo} alt="" />
        <ul>
          <NavLink to="/user/dashboard-professor">
            <li>
              <House size={38} />
            </li>
          </NavLink>
          <NavLink to="/manage/classroom">
            <li className={classroom}>
              <ChalkboardTeacher size={38} />
            </li>
          </NavLink>
          <NavLink to="/manage/students">
            <li className={students}>
              <Student size={38} />
            </li>
          </NavLink>
          <li>
            <BookOpen size={38} />
          </li>
          <div className="logout" onClick={handleLogout}>
            <SignOut size={38} weight="light" />
            <span>Sair</span>
          </div>
        </ul>
      </Navbar>
      <Outlet />
    </ContainerDefaultLayout>
  )
}
