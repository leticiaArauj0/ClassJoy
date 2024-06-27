import { PlusCircle } from "phosphor-react";
import { Header } from "../../components/Header";
import { MainUser } from "../../shared/styles/MainUser";
import { AddButton } from "./styles/AddButton";
import { ContainerChild } from "./styles/ContainerChild";
import { CardChild } from "./components/CardChild/CardChild";
import { ContainerDiaryNotes } from "./styles/ContainerDiaryNotes";
import { DiaryParents } from "../../components/DiaryParents";
import { Notice } from "./components/Notice";
import { ModalConnect } from "./components/ModalConnect";
import { useContext, useState } from "react";
import { StudentContext } from "../../contexts/student/StudentContext";
import { ClassroomContext } from "../../contexts/classroom/ClassroomContext";
import { DiaryContext } from "../../contexts/diary/DiaryContext";
import { format } from 'date-fns';

interface StudentProps {
    id: number
    name: string
}

export function DashboardParents() {
    const { students } = useContext(StudentContext)
    const { showDiaryToday, selectedDiary } = useContext(DiaryContext)
    const { classrooms } = useContext(ClassroomContext)

    const [selectedStudent, setSelectedStudent] = useState<StudentProps | null>(students[0])
    const [openModal, setOpenModal] = useState(false)

    const date = new Date().toISOString().split("T")[0]
    const dateFormat = format(new Date(), 'dd/MM/yyyy'); 

    const findClassName = (classroomId: number) => {
        const classObj = classrooms?.find(classroom => classroom.id === classroomId);
        if (classObj) return classObj.name;
        else return "Turma não encontrada";
    }

    const handleDiaryClick = (student: StudentProps) => {
        setSelectedStudent(student)
        showDiaryToday(student.id, date)
    }

    return(
        <MainUser>
            <Header />
            <ContainerChild>
                <AddButton onClick={() => {setOpenModal(true)}}>
                    <PlusCircle size={70} weight="light" />
                    <span>Conectar filho</span>
                </AddButton>
                
                {students?.map(student => {
                    const classroomId = student.classroomId
                    const classroom = findClassName(classroomId)
                    return(
                        <CardChild name={student.name} age={student.age} classroom={classroom} onClick={() => handleDiaryClick(student)} />
                    )
                })}
            </ContainerChild>
            <ContainerDiaryNotes>
                <DiaryParents 
                    name={selectedStudent?.name} 
                    entryTime={selectedDiary?.entryTime}
                    departureTime={selectedDiary?.departureTime}
                    feeding={selectedDiary?.feeding}
                    ateAlone={selectedDiary?.ateAlone}
                    obsFeeding={selectedDiary?.obsFeeding}
                    bathroom={selectedDiary?.bathroom}
                    sleep={selectedDiary?.sleep}
                    sleepObs={selectedDiary?.obsSleep}
                    startSleep={selectedDiary?.startSleep}
                    endSleep={selectedDiary?.endSleep}
                    bathroomAmount={selectedDiary?.bathroomAmount}
                    obsBathroom={selectedDiary?.obsBathroom}
                    notice={selectedDiary?.notice}
                    reminder={selectedDiary?.reminder}
                />
                <div className="container-notice">
                    <Notice date={dateFormat} isCalender={false} text="Recados" notice="Nenhum Recado" color="#FBB925" />
                    <Notice date={dateFormat} isCalender={true} text="Calendário" notice="Nenhum evento" color="#966BF2" />
                </div>
            </ContainerDiaryNotes>
            {openModal && <ModalConnect closeModal={() => {setOpenModal(false)}} />}
        </MainUser>
    )
}
