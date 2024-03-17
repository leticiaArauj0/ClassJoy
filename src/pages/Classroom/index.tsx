import { PieChart } from "../../components/Charts/PieChart";
import { Header } from "../../components/Header";
import { InfoClassroom } from "../../components/InfoClassroom";
import { MainUser } from "../../shared/styles/MainUser";
import { ContainerChartBar } from "./styles/ContainerChartBar";
import { ContainerChartPie } from "./styles/ContainerChartPie";
import { ContainerClassroom } from "./styles/ContainerClassroom";

export function Classroom() {
    return(
        <MainUser>
            <Header />
            <InfoClassroom />
            <ContainerClassroom>
                <div className="container-donut-chart">
                    <h1>Estatísticas</h1>
                    <ContainerChartPie height="16rem">
                        <h3>Assuntos Abordados</h3>
                        <PieChart />
                    </ContainerChartPie>
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
