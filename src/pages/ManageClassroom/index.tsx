import { PieChart } from "../../components/Charts/PieChart";
import { Header } from "../../components/Header";
import { InfoClassroom } from "../../components/InfoClassroom";
import { MainUser } from "../../shared/styles/MainUser";
import { ContainerChartPie } from "./styles/ContainerChartPie";
import { ContainerClassroom } from "./styles/ContainerClassroom";
import { ContainerStudents } from "./styles/ContainerStudents";
import { CardStudent } from "./components/CardStudent";
import { AddStudent } from "./components/AddStudent";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../../contexts/student/StudentContext";
import { IdClassroomContext } from "../../contexts/idClassroom/IdClassroomContext";
import { ModalCreateStudent } from "../ManageStudents/components/ModalCreateStudent";

export function ManageClassroom() { 
    const [openModal, setOpenModal] = useState(false)
    const { setClassroomId } = useContext(IdClassroomContext)
    const { studentsClassroom } = useContext(StudentContext)
    const { id } = useParams()
    const idNumber = Number(id)

    useEffect(() => {
        if (idNumber) {
            setClassroomId(idNumber)
        }
    }, [idNumber, setClassroomId])

    return(
        <MainUser>
            <Header />
            
            <InfoClassroom students={studentsClassroom.length} />

            <h1>Estatísticas</h1>
            <ContainerClassroom>
                <div className="container-chart-activity">    
                    <ContainerChartPie height="16rem">
                        <h3>Assuntos Abordados</h3>
                        <PieChart />
                    </ContainerChartPie>

                    <ContainerStudents height="16rem">
                        <h2>Alunos</h2>
                        <div className="content">
                            <AddStudent openModal={() => {setOpenModal(true)}} />
                            {studentsClassroom?.map(student => {
                                return(
                                    <CardStudent id={student.id} key={student.id} name={student.name} age={student.age} />
                                )
                            })}
                        </div> 
                    </ContainerStudents>
                </div>

                <div className="container-chart-student">
                    <div className="planning">
                        <div className="background">
                            <h1>Planejamento</h1>
                        </div>
                        <h2>Sexta-Feira, 10/05/24</h2>
                        <div className="todo-list">
                            <div>
                                <input type="checkbox" />
                                <span> 7:00 </span>
                                <span>Atividade de Leitura</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span> 8:00 </span>
                                <span>Atividade de Desenho</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span> 9:00 </span>
                                <span>Merenda</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span> 11:00 </span>
                                <span>Soneca</span>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <span> 12:00 </span>
                                <span>Saída</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerClassroom>
            {openModal && <ModalCreateStudent classroomId={idNumber} closeModal={() => {setOpenModal(false)}} />}
        </MainUser>
    )
}
