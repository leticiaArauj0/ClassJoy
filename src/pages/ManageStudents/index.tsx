import { PencilSimpleLine, Trash } from "phosphor-react";
import { AddButton } from "../../components/AddButton";
import { Header } from "../../components/Header";
import { Photo } from "../../components/Photo";
import { MainUser } from "../../shared/styles/MainUser";
import { CardStudent } from "./components/CardStudent";
import { ContainerCardStudents } from "./styles/ContainerCardStudents";
import { ContainerInfoStudents } from "./styles/ContainerInfoStudents";
import { ContainerStudents } from "./styles/ContainerStudents";
import { Search } from "../../components/Search";
import { useContext, useState } from "react";
import { ModalCreateStudent } from "./components/ModalCreateStudent";
import { IdClassroomContext } from "../../contexts/idClassroom/IdClassroomContext";
import { StudentContext } from "../../contexts/student/StudentContext";
import { ModalDeleteStudent } from "../../components/ModalStudents/ModalDeleteStudent";
import { ModalEditStudent } from "../../components/ModalStudents/ModalEditStudent";

interface Student {
    id: number,
    name: string,
    age: number,
    teacherId: number,
    classroomId: number
}

export function ManageStudents() {
    const [openModal, setOpenModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)

    const { studentsClassroom } = useContext(StudentContext)
    const { classroomId } = useContext(IdClassroomContext)
    const [selectedStudent, setSelectedStudent] = useState<Student>(studentsClassroom[0])
    const idNumber = Number(classroomId)
    
    const handleStudentClick = (student: Student) => {
        setSelectedStudent(student)
    }

    return (
        <MainUser>
            <Header />

            <ContainerStudents>
                <div className="container-card-students">
                    <Search />

                    <ContainerCardStudents height="calc(100vh - 14rem)" overflow="scroll">          
                        <AddButton text="Adicionar Aluno" openModal={() => {setOpenModal(true)}} />

                        <div className="title">
                            <h1>Alunos</h1>
                            <div className="line"></div>
                        </div>

                        {studentsClassroom?.map(student => {
                            return(
                                <CardStudent key={student.id} id={student.id} name={student.name} age={student.age} onClick={() => handleStudentClick(student)} />
                            )
                        })}
                    </ContainerCardStudents>
                </div>

                <div className="container-card-info-students">
                    <ContainerInfoStudents height="calc(100vh - 10rem)">
                        <div className="background"></div>
                        <Photo 
                            height="7rem" camera="flex" 
                            imgUrl="https://i.pinimg.com/564x/d1/51/62/d15162b27cd9712860b90abe58cb60e7.jpg" 
                            border='5px solid #351181' 
                        />
                        <h2>{selectedStudent.name}</h2>
                        <div className="container-age-code">
                            <span>
                                <strong>Idade: </strong>
                                {selectedStudent.age}
                            </span>
                            <span>
                                <strong>Código: </strong>
                                {selectedStudent.id}
                            </span>
                        </div>
                        <div className="container-delete-update">
                            <Trash size={24} color="#FC6647" onClick={() => {setOpenDeleteModal(true)}} />
                            <PencilSimpleLine size={24} onClick={() => {setOpenEditModal(true)}} />
                        </div>
                    </ContainerInfoStudents>
                </div>
            </ContainerStudents>
            {openModal && <ModalCreateStudent classroomId={idNumber} closeModal={() => {setOpenModal(false)}} />}
            {openDeleteModal && <ModalDeleteStudent id={selectedStudent.id} closeModal={() => {setOpenDeleteModal(false)}} />}
            {openEditModal && <ModalEditStudent id={selectedStudent.id} name={selectedStudent.name} age={selectedStudent.age} closeModal={() => {setOpenEditModal(false)}} />}
        </MainUser>
    )
}
