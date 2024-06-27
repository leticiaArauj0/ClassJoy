import { AddressBook, ChartLineUp, House, SignOut } from 'phosphor-react'
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { ContainerDefaultLayout } from './styles/ContainerDefaultLayout'
import { Navbar } from './styles/Navbar'
import logo from '../assets/logo-classjoy.svg'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/auth/AuthContext'

export function ParentsLayout() {
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

  let home, diary, skills;

  if(currentUrl === "/user-parents/dashboard-parents") {
    home = "home-parents"
  } 
  if(currentUrl === "/user-parents/classroom") {
    diary = "diary-parents"
  } 
  if(currentUrl === "/user-parents/skills-parents") {
    skills = "skills-parents"
  } 

  return (
    <ContainerDefaultLayout>
      <Navbar>
        <img src={logo} alt="" />
        <ul>
          <NavLink to="/user-parents/dashboard-parents">
            <li className={home}>
              <House size={38} />
            </li>
          </NavLink>
          <NavLink to="/user-parents/diary-parents">
            <li className={diary}>
              <AddressBook size={38} />
            </li>
          </NavLink>
          <NavLink to="/user-parents/skills-parents">
            <li className={skills}>
              <ChartLineUp size={38} />
            </li>
          </NavLink>
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
