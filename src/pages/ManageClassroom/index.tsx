import { Plus } from "phosphor-react";
import { PieChart } from "../../components/Charts/PieChart";
import { Header } from "../../components/Header";
import { InfoClassroom } from "../../components/InfoClassroom";
import { MainUser } from "../../shared/styles/MainUser";
import { ContainerActivity } from "./styles/ContainerActivity";
import { ContainerChartBar } from "./styles/ContainerChartBar";
import { ContainerChartPie } from "./styles/ContainerChartPie";
import { ContainerClassroom } from "./styles/ContainerClassroom";
import { CardActivity } from "../DashboardTeacher/components/CardActivity";
import { ContainerStudents } from "./styles/ContainerStudents";

export function ManageClassroom() {
    return(
        <MainUser>
            <Header />
            <InfoClassroom />
            <h1>Estatísticas</h1>
            <ContainerClassroom>
                <div className="container-chart-activity">    
                    <ContainerChartPie height="16rem">
                        <h3>Assuntos Abordados</h3>
                        <PieChart />
                    </ContainerChartPie>
                    <ContainerActivity height="16rem">
                        <div className="header">
                            <h2>Atividades</h2>
                            <Plus size={28} />
                        </div>
                        <CardActivity title="Interpretação Textual" classroom={8} date="20/03/24" color="#77BF0B" />
                        <CardActivity title="Interpretação Textual" classroom={8} date="20/03/24" color="#FBB925" />
                        <CardActivity title="Interpretação Textual" classroom={8} date="20/03/24" color="#00B8F0" />
                    </ContainerActivity>
                </div>
                <div className="container-bar-chart">
                    <ContainerChartBar height="16rem">
                        <h3>Média das Atividades</h3>
                    </ContainerChartBar>
                    <ContainerStudents height="16rem">
                        <h2>Alunos</h2>           
                    </ContainerStudents>
                </div>
            </ContainerClassroom>
        </MainUser>
    )
}
