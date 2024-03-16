import { Bell, EnvelopeSimple, List, UserCircle } from "phosphor-react";
import { MainDashboard } from "./styles/MainDashboard";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { Header } from "./styles/Header";
import { CardInfo } from "../../components/CardInfo";
import { ContainerCardInfo } from "./styles/ContainerCardInfo";
import { ContainerClassroom } from "./styles/ContainerClassroom";
import { ContainerCardClassroom } from "./styles/ContainerCardClassroom"
import { ContainerActivity, ContainerCardActivity } from "./styles/ContainerCardActivity";
import { CardClassroom } from "./components/CardClassroom";
import { Search } from "./components/Search";
import { AddButton } from "../../components/AddButton";
import { CardActivity } from "./components/CardActivity";
import { NavLink } from "react-router-dom";

export function DashboardTeacher() {
  const auth = useContext(AuthContext)

  return (
    <MainDashboard>
      <Header>
        <List size={32} />
        <div>
          <Bell size={24} />
          <EnvelopeSimple size={24} />
          <NavLink to="/user/consultar-perfil">
            <UserCircle size={40} weight="thin" />
          </NavLink>
          <strong>{auth.user?.first_name} {auth.user?.last_name}</strong>
        </div>
      </Header>

      <ContainerCardInfo>
        <CardInfo color="#77BF0B" icon="classroom" text="Turmas" number={3} />
        <CardInfo color="#FBB925" icon="student" text="Alunos" number={36} />
        <CardInfo color="#966BF2" icon="parents" text="Pais" number={27} />
        <CardInfo color="#00B8F0" icon="activity" text="Atividades Completas" number={8} />
      </ContainerCardInfo>

      <div className="container-classroom-activity">
        <ContainerClassroom>
          <div className="classroom-info">
            <span>Turmas Arquivadas</span>
            <span>Códigos</span>
          </div>

          <ContainerCardClassroom>
            <h1>Turmas</h1>
            <CardClassroom text="3º ano matutino" />
            <CardClassroom text="3º ano vespertino" />
            <CardClassroom text="3º ano matutino" />
          </ContainerCardClassroom>
        </ContainerClassroom>

        <ContainerActivity>
          <Search />

          <ContainerCardActivity>
            <h1>Atividades</h1>
            <AddButton text="Criar Atividade" />
            <h3>Atividades Concluídas</h3>
            <CardActivity title="Interpretação Textual" classroom={5} date="18/02/2024" />
            <h3>Atividades Atribuídas</h3>
            <CardActivity title="Separação Silábica" classroom={8} date="25/02/2024" />
            <CardActivity title="Acentuação" classroom={3} date="30/02/2024" />
          </ContainerCardActivity>
        </ContainerActivity>
      </div>
    </MainDashboard>
  )
}
