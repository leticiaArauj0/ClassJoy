import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { MainUser } from "../../shared/styles/MainUser";
import { CardStudent } from "../ManageStudents/components/CardStudent";
import { ContainerCardStudents } from "../ManageStudents/styles/ContainerCardStudents";
import { ContainerDiaryStudent } from "./styles/ContainerDiaryStudent";
import { StudentContext } from "../../contexts/student/StudentContext";
import { useContext, useState } from "react";
import { CardStudentDiary } from "./components/CardStudentDiary";

interface Student {
    id: number,
    name: string,
    age: number,
    teacherId: number,
    classroomId: number
}

export function DiaryStudentTeacher() {
    const { studentsClassroom } = useContext(StudentContext)
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(studentsClassroom[0])

    const handleStudentClick = (student: Student) => {
        setSelectedStudent(student)
    }

    return(
        <MainUser>
            <Header />
            <ContainerDiaryStudent>
                <div className="container-card-students">
                    <Search />

                    <ContainerCardStudents height="calc(100vh - 14rem)" overflow="scroll">          
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
                    <button className="send">Enviar</button>
                    <CardStudentDiary 
                        id={selectedStudent?.id} 
                        name={selectedStudent?.name} 
                        age={selectedStudent?.age} 
                    />
                </div>
            </ContainerDiaryStudent>
        </MainUser>
    )
}
