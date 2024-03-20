import { PieChart } from "../../components/Charts/PieChart";
import { Header } from "../../components/Header";
import { InfoClassroom } from "../../components/InfoClassroom";
import { MainUser } from "../../shared/styles/MainUser";
import { ContainerActivity } from "./styles/ContainerActivity";
import { ContainerChartBar } from "./styles/ContainerChartBar";
import { ContainerChartPie } from "./styles/ContainerChartPie";
import { ContainerClassroom } from "./styles/ContainerClassroom";

export function Classroom() {
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
                    <ContainerActivity height="12rem">

                    </ContainerActivity>
                </div>
                <div className="container-bar-chart">
                    <ContainerChartBar height="16rem">
                        <h3>Média das Atividades</h3>
                    </ContainerChartBar>
                </div>
            </ContainerClassroom>
        </MainUser>
    )
}
