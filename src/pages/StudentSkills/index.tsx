import { useContext, useState } from "react";
import { Header } from "../../components/Header";
import { StudentContext } from "../../contexts/student/StudentContext";
import { MainUser } from "../../shared/styles/MainUser";
import { CardStudent } from "./components/CardStudent/CardStudent";
import { ContainerCardStudents } from "./styles/ContainerCardStudents";
import { ContainerStudentSkill } from "./styles/ContainerStudentSkill";
import { Search } from "../../components/Search";
import { ContainerInfoStudents } from "./styles/ContainerInfoStudents";
import { Photo } from "../../components/Photo";
import { ContainerQuestion } from "./styles/ContainerQuestion";
import { Question } from "./components/Question";
import { Button } from "../../components/Button";
import { ArrowLeft, ArrowRight } from "phosphor-react";

interface Student {
    id: number,
    name: string,
    age: number,
    teacherId: number,
    classroomId: number
}

export function StudentSkills() {
    const { studentsClassroom } = useContext(StudentContext)
    const [selectedStudent, setSelectedStudent] = useState<Student>(studentsClassroom[0])

    const handleStudentClick = (student: Student) => {
        setSelectedStudent(student)
    }
    
    return(
        <MainUser>
            <Header />
            <ContainerStudentSkill>
                <ContainerCardStudents height="calc(100vh - 10rem)">
                    <div className="title">
                        <h1>Alunos</h1>
                        <div className="line"></div>
                    </div>
                    {studentsClassroom?.map(student => {
                        return(
                            <CardStudent 
                                key={student.id} 
                                name={student.name} 
                                perfil="https://i.pinimg.com/564x/d1/51/62/d15162b27cd9712860b90abe58cb60e7.jpg"
                                onClick={() => handleStudentClick(student)}
                             />
                        )
                    })}
                </ContainerCardStudents>
                <div className="container-card-info">
                    <Search />
                    <ContainerInfoStudents height="calc(100vh - 13rem)">
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
                        <div className="line"></div>
                        <div className="container-number">
                            <div className="number">
                                1 / 5
                            </div>
                        </div>
                        <div className="subtitle">
                            <h2>Linguagens</h2>
                            <div className="line"></div>
                        </div>
                        <ContainerQuestion>
                            <Question question="Alguma pergunta relacionada a pictórica do aluno?" title="Pictórica" />
                            <Question question="Alguma pergunta relacionada a pictórica do aluno?" title="Sonora" />
                        </ContainerQuestion>
                        <ContainerQuestion>
                            <Question question="Alguma pergunta relacionada a pictórica do aluno?" title="Pictórica" />
                            <Question question="Alguma pergunta relacionada a pictórica do aluno?" title="Sonora" />
                        </ContainerQuestion>
                        <div className="container-arrow">
                            <button><ArrowLeft size={26} /></button>
                            <button><ArrowRight size={26} /></button>
                        </div>
                        <div className="container-button">
                            <Button text="Salvar" color="#966BF2" height="2.25rem" width="6rem" />
                            <Button text="Limpar" color="#00B8F0" height="2.25rem" width="6rem" />
                        </div>
                    </ContainerInfoStudents>
                </div>
            </ContainerStudentSkill>
        </MainUser>
    )
}
