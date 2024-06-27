import { MainUser } from "../../shared/styles/MainUser";
import { ContainerClassroom } from "./styles/ContainerClassroom";
import { ContainerCardClassroom } from "./styles/ContainerCardClassroom"
import { ContainerActivity, ContainerCardActivity } from "./styles/ContainerCardActivity";
import { CardClassroom } from "./components/CardClassroom";
import { CardActivity } from "./components/CardActivity";
import { Header } from "../../components/Header";
import { ContainerClassroomActivity } from "./styles/ContainerClassroomActivity";
import { ContainerInfo } from "../../shared/styles/ContainerInfo";
import { InfoClassroom } from "../../components/InfoClassroom";
import { Search } from "../../components/Search";
import { ClassroomContext } from "../../contexts/classroom/ClassroomContext";
import { useContext, useState } from "react";
import { AddCircleButton } from "../../components/AddCircleButton";
import { ModalCreateClassroom } from "../../components/ModalClassroom/ModalCreateClassroom";
import { StudentContext } from "../../contexts/student/StudentContext";

export function DashboardTeacher() {
  const { classrooms } = useContext(ClassroomContext)
  const { students } = useContext(StudentContext)
  const [openModal, setOpenModal] = useState(false)
  
  const sortClassrooms = classrooms?.sort((a, b) => (a.id > b.id) ? 1 : -1)

  return (
    <MainUser>
      <Header />

      <InfoClassroom students={students.length} />

      <ContainerClassroomActivity>
        <ContainerClassroom>
          <ContainerInfo>
            <span>Turmas Arquivadas</span>
            <span>Códigos</span>
          </ContainerInfo>

          <ContainerCardClassroom height="calc(100vh - 18rem)" overflow="scroll">
            <div className="top">
              <h1>Turmas</h1>
              <AddCircleButton openModal={() => {setOpenModal(true)}} />
            </div>
            {sortClassrooms?.map(classroom => {
              return(
                <CardClassroom id={classroom.id} key={classroom.id} name={classroom.name} />
              )
            })}
          </ContainerCardClassroom>
        </ContainerClassroom>

        <ContainerActivity>
          <Search />

          <ContainerCardActivity height="calc(100vh - 18rem)" overflow="scroll">
            <h1>Planejamentos</h1>
            <div className="planning"><h1>Pessoal</h1></div>
            <h1>Planos de aula</h1>
            <CardActivity color="#966BF2" title="Potuguês" classroom="1º Período" />
            <CardActivity color="#966BF2" title="Matemática" classroom="2º Período" />
            <CardActivity color="#966BF2" title="Ciências" classroom="1º Período" />
          </ContainerCardActivity>
        </ContainerActivity>
      </ContainerClassroomActivity>
      {openModal && <ModalCreateClassroom closeModal={() => {setOpenModal(false)}} />}
    </MainUser>
  )
}
