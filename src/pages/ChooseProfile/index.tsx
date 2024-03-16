import { NavLink } from 'react-router-dom'
import { Aside } from '../../components/Aside'
import { Button } from './components/Button'
import { Container } from '../../shared/styles/Container'
import { Main } from './styles/Main'
import { ContainerButton } from './styles/ContainerButton'

export function ChooseProfile() {
  return (
    <Container>
      <Aside
        imgSrc="src\assets\aside-student.svg"
        text="Seja bem-vindo(a)! ClassJoy oferece um ensino adaptativo, onde cada criança é única."
      />

      <Main>
        <img src="src\assets\logo-classjoy.svg" alt="" />
        <h1>Seja bem-vindo(a)!</h1>

        <ContainerButton>
          <NavLink to={'/login?role=teacher'}>
            <Button
              icon="src\pages\ChooseProfile\assets\icon-teacher.svg"
              text="Sou Professor"
              color="#77BF0B"
            />
          </NavLink>

          <NavLink to={'/login?role=parents'}>
            <Button
              icon="src\pages\ChooseProfile\assets\icon-parents.svg"
              text="Sou Responsável"
              color="#00B8F0"
            />
          </NavLink>
        </ContainerButton>
      </Main>
    </Container>
  )
}
