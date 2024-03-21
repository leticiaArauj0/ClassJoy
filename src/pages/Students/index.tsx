import { PencilSimpleLine, Trash } from "phosphor-react";
import { AddButton } from "../../components/AddButton";
import { Header } from "../../components/Header";
import { Photo } from "../../components/Photo";
import { ContainerInfo } from "../../shared/styles/ContainerInfo";
import { MainUser } from "../../shared/styles/MainUser";
import { CardStudent } from "./components/CardStudent";
import { ContainerCardStudents } from "./styles/ContainerCardStudents";
import { ContainerInfoStudents } from "./styles/ContainerInfoStudents";
import { ContainerStudents } from "./styles/ContainerStudents";
import { Search } from "../../components/Search";

export function Students() {
    return (
        <MainUser>
            <Header />

            <ContainerStudents>
                <div className="container-card-students">
                    <ContainerInfo>
                        <span>Alunos Excluídos</span>
                        <span>Códigos</span>
                    </ContainerInfo>

                    <ContainerCardStudents height="calc(100vh - 14rem)" overflow="scroll">          
                        <AddButton text="Adicionar Aluno" />

                        <div className="title">
                            <h1>Alunos</h1>
                            <div className="line"></div>
                        </div>

                        <CardStudent cod="227187" name="Juliana Barbosa" age={7} />
                        <CardStudent cod="227187" name="Juliana Barbosa" age={7} />
                        <CardStudent cod="227187" name="Juliana Barbosa" age={7} />
                        <CardStudent cod="227187" name="Juliana Barbosa" age={7} />
                        <CardStudent cod="227187" name="Juliana Barbosa" age={7} />
                    </ContainerCardStudents>
                </div>

                <div className="container-card-info-students">
                    <Search />
                    <ContainerInfoStudents height="calc(100vh - 14rem)">
                        <div className="background"></div>
                        <Photo imgUrl="\src\assets\student.png" border='5px solid #351181' />
                        <h2>Juliana Barbosa</h2>
                        <div className="container-age-code">
                            <span>
                                <strong>Idade:</strong>
                                8 anos
                            </span>
                            <span>
                                <strong>Código:</strong>
                                227187
                            </span>
                        </div>
                        <div className="container-delete-update">
                            <Trash size={24} />
                            <PencilSimpleLine size={24} />
                        </div>
                    </ContainerInfoStudents>
                </div>
            </ContainerStudents>
        </MainUser>
    )
}
