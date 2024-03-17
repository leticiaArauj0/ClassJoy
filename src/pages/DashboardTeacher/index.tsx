import { MainUser } from "../../shared/styles/MainUser";
import { CardInfo } from "../../components/CardInfo";
import { ContainerCardInfo } from "./styles/ContainerCardInfo";
import { ContainerClassroom } from "./styles/ContainerClassroom";
import { ContainerCardClassroom } from "./styles/ContainerCardClassroom"
import { ContainerActivity, ContainerCardActivity } from "./styles/ContainerCardActivity";
import { CardClassroom } from "./components/CardClassroom";
import { Search } from "./components/Search";
import { AddButton } from "../../components/AddButton";
import { CardActivity } from "./components/CardActivity";
import { Header } from "../../components/Header";
import { ContainerClassroomActivity } from "./styles/ContainerClassroomActivity";
import { ContainerInfo } from "../../shared/styles/ContainerInfo";

export function DashboardTeacher() {
  return (
    <MainUser>
      <Header />

      <ContainerCardInfo>
        <CardInfo color="#77BF0B" icon="classroom" text="Turmas" number={3} />
        <CardInfo color="#FBB925" icon="student" text="Alunos" number={36} />
        <CardInfo color="#966BF2" icon="parents" text="Pais" number={27} />
        <CardInfo color="#00B8F0" icon="activity" text="Atividades Completas" number={8} />
      </ContainerCardInfo>

      <ContainerClassroomActivity>
        <ContainerClassroom>
          <ContainerInfo>
            <span>Turmas Arquivadas</span>
            <span>Códigos</span>
          </ContainerInfo>

          <ContainerCardClassroom height="calc(100vh - 20rem)" overflow="scroll">
            <h1>Turmas</h1>
            <CardClassroom text="3º ano matutino" />
            <CardClassroom text="3º ano vespertino" />
            <CardClassroom text="3º ano matutino" />
          </ContainerCardClassroom>
        </ContainerClassroom>

        <ContainerActivity>
          <Search />

          <ContainerCardActivity height="calc(100vh - 20rem)" overflow="scroll">
            <h1>Atividades</h1>
            <AddButton text="Criar Atividade" />
            <h3>Atividades Concluídas</h3>
            <CardActivity title="Interpretação Textual" classroom={5} date="18/02/2024" />
            <h3>Atividades Atribuídas</h3>
            <CardActivity title="Separação Silábica" classroom={8} date="25/02/2024" />
            <CardActivity title="Acentuação" classroom={3} date="30/02/2024" />
          </ContainerCardActivity>
        </ContainerActivity>
      </ContainerClassroomActivity>
    </MainUser>
  )
}
