import { MainUser } from "../../shared/styles/MainUser";
import { ContainerClassroom } from "./styles/ContainerClassroom";
import { ContainerCardClassroom } from "./styles/ContainerCardClassroom"
import { ContainerActivity, ContainerCardActivity } from "./styles/ContainerCardActivity";
import { CardClassroom } from "./components/CardClassroom";
import { AddButton } from "../../components/AddButton";
import { CardActivity } from "./components/CardActivity";
import { Header } from "../../components/Header";
import { ContainerClassroomActivity } from "./styles/ContainerClassroomActivity";
import { ContainerInfo } from "../../shared/styles/ContainerInfo";
import { InfoClassroom } from "../../components/InfoClassroom";
import { Search } from "../../components/Search";

export function DashboardTeacher() {
  return (
    <MainUser>
      <Header />

      <InfoClassroom />

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
            <CardActivity color="#966BF2" title="Interpretação Textual" classroom={5} date="18/02/2024" />
            <h3>Atividades Atribuídas</h3>
            <CardActivity color="#966BF2" title="Separação Silábica" classroom={8} date="25/02/2024" />
            <CardActivity color="#966BF2" title="Acentuação" classroom={3} date="30/02/2024" />
          </ContainerCardActivity>
        </ContainerActivity>
      </ContainerClassroomActivity>
    </MainUser>
  )
}
