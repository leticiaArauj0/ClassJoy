import { AsideWelcome } from '../../components/AsideWelcome'
import {
  ContainerChooseProfile,
  ContainerButton,
  TeacherButton,
  ParentsButton,
} from './styles'

import { NavLink } from 'react-router-dom'

export function ChooseProfile() {
  return (
    <ContainerChooseProfile>
      <AsideWelcome
        imgUrl="src\assets\boy-studying.svg"
        text="Estimule o aprendizado do seu filho valorizando a sua individualidade"
      />

      <main>
        <img src="src\assets\logo-classjoy.svg" alt="Logo ClassJoy" />
        <h1>Seja bem-vindo(a)!</h1>

        <ContainerButton>
          <NavLink to="/login-professor">
            <TeacherButton>
              <div>
                <img
                  src="src\assets\icon-teacher.svg"
                  alt="Ícon de Professor"
                />
                Sou Professor
              </div>
            </TeacherButton>
          </NavLink>

          <NavLink to="/login-responsavel" title="Crud Responsável">
            <ParentsButton>
              <div>
                <img src="src\assets\icon-parents.svg" alt="Ícon de Pais" />
                Sou Responsável
              </div>
            </ParentsButton>
          </NavLink>
        </ContainerButton>
      </main>
    </ContainerChooseProfile>
  )
}
