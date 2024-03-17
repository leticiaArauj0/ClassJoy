import { AddButton } from "../../components/AddButton";
import { Header } from "../../components/Header";
import { ContainerInfo } from "../../shared/styles/ContainerInfo";
import { MainUser } from "../../shared/styles/MainUser";
import { ContainerCardStudents } from "./styles/ContainerCardStudents";
import { ContainerInfoStudents } from "./styles/ContainerInfoStudents";
import { ContainerStudents } from "./styles/ContainerStudents";

export function Students() {
    return (
        <MainUser>
            <Header />
            <ContainerStudents>
                <div>
                    <ContainerInfo>
                        <span>Alunos Excluídos</span>
                        <span>Códigos</span>
                    </ContainerInfo>
                    <ContainerCardStudents height="calc(100vh - 14rem)">
                        <AddButton text="Adicionar Aluno" />
                        <h1>Alunos</h1>
                    </ContainerCardStudents>
                </div>
                <ContainerInfoStudents>
                
                </ContainerInfoStudents>
            </ContainerStudents>
        </MainUser>
    )
}