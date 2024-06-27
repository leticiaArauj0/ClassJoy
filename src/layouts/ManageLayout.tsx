import { BookOpen, ChalkboardTeacher, ChartLineUp, House, SignOut, Student } from 'phosphor-react'
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { ContainerDefaultLayout } from './styles/ContainerDefaultLayout'
import { Navbar } from './styles/Navbar'
import logo from '../assets/logo-classjoy.svg'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/auth/AuthContext'
import { IdClassroomContext } from '../contexts/idClassroom/IdClassroomContext'

export function ManageLayout() {
  const auth = useContext(AuthContext)
  const { classroomId } = useContext(IdClassroomContext)
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

  let classroom, students, diary, skill;

  if(currentUrl === `/manage/classroom/${classroomId}`) {
    classroom = "classroom"
  } 
  if(currentUrl === `/manage/students/${classroomId}`) {
    students = "students"
  } 
  if(currentUrl === `/manage/diary/${classroomId}`) {
    diary = "diary"
  } 
  if(currentUrl === `/manage/student-skills/${classroomId}`) {
    skill = "skill"
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
          <NavLink to={`/manage/classroom/${classroomId}`}>
            <li className={classroom}>
              <ChalkboardTeacher size={38} />
            </li>
          </NavLink>
          <NavLink to={`/manage/students/${classroomId}`}>
            <li className={students}>
              <Student size={38} />
            </li>
          </NavLink>
          <NavLink to={`/manage/diary/${classroomId}`}>
            <li className={diary}>
              <BookOpen size={38} />
            </li>
          </NavLink>
          <NavLink to={`/manage/student-skills/${classroomId}`}>
            <li className={skill}>
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
