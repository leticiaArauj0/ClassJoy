import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MainUser } from "../../shared/styles/MainUser";
import { ContainerDiaryStudent } from "./styles/ContainerDiaryStudent";
import { ContainerQuestion } from "./styles/ContainerQuestion";
import { ContainerStudentInfo } from "./styles/ContainerStudentInfo";
import { StudentContext } from "../../contexts/student/StudentContext";
import { DiaryContext } from "../../contexts/diary/DiaryContext";
import { CardChild } from "./components/CardChild/index";
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale'

interface StudentProps {
    id: number
    name: string
}

export function DiaryStudentParents() {
    const { students } = useContext(StudentContext)
    const { showDiaryToday, selectedDiary } = useContext(DiaryContext)
    const [selectedStudent, setSelectedStudent] = useState<StudentProps | null>(students[0])

    const dateFormat = format(new Date(), 'yyyy-MM-dd', { locale: ptBR })

    const [selectedDate, setSelectedDate] = useState(dateFormat)
    const dateText = format(parseISO(selectedDate), 'dd/MM/yyyy', { locale: ptBR });

    useEffect(() => {
        if (selectedStudent) {
            showDiaryToday(selectedStudent.id, selectedDate);
        }
    }, [selectedStudent, selectedDate, showDiaryToday]);

    const handleDiaryClick = (student: StudentProps) => {
        setSelectedStudent(student)
    }

    function handleDate(event: any) {
        setSelectedDate(event.target.value)
    }

    let slept = false
    if(selectedDiary?.sleep === 'dormiu') slept = true

    return(
        <MainUser>
            <Header />
            <ContainerDiaryStudent>
                <input type="date" onChange={handleDate} value={selectedDate} max={new Date().toISOString().split("T")[0]} />
                <div className="container-diary">
                    <h1 style={{textAlign: "center"}}>Agenda</h1>
                    <ContainerStudentInfo>
                        <img src="https://i.pinimg.com/564x/d1/51/62/d15162b27cd9712860b90abe58cb60e7.jpg" alt="" />
                        <div className="info">
                            <strong>Nome: {selectedStudent?.name}</strong>
                            <strong>Data: {dateText}</strong>
                            <div className="hour">
                                <strong>Entrada: {selectedDiary?.entryTime}</strong>
                                <strong>Saída: {selectedDiary?.departureTime}</strong>
                            </div>
                        </div>
                    </ContainerStudentInfo>
                    <div className="line"></div>
                    <ContainerQuestion>
                        <h2>Alimentação</h2>
                        <div className="feeding">
                            <div>
                                <input type="radio" name="feeding" checked={selectedDiary?.feeding === 'comeu'} />
                                <span> Comeu</span>
                            </div>
                            <div>
                                <input type="radio" name="feeding" checked={selectedDiary?.feeding === 'comeu pouco'} />
                                <span> Comeu Pouco</span>
                            </div>
                            <div>
                                <input type="radio" name="feeding" checked={selectedDiary?.feeding === 'não comeu'} />
                                <span> Não Comeu</span>
                            </div>
                        </div>
                        <div className="ateAlone">
                            <div>
                                <input type="radio" name="ateAlone" checked={selectedDiary?.ateAlone === 'sozinho'} />
                                <span> Sozinho</span>
                            </div>
                            <div>
                                <input type="radio" name="ateAlone" checked={selectedDiary?.ateAlone === 'acompanhado'} />
                                <span> Acompanhado</span>
                            </div>
                        </div>
                        {
                            selectedDiary?.obsFeeding ? <div className="notes">{selectedDiary?.obsFeeding}</div> : null
                        }
                    </ContainerQuestion>
                    <ContainerQuestion>
                        <h2>Banheiro</h2>
                        <div className="bathroom">
                            <div>
                                <input type="radio" name="bathroom" checked={selectedDiary?.bathroom === 'sim'} />
                                <span> Sim</span>
                            </div>
                            <div>
                                <input type="radio" name="bathroom" checked={selectedDiary?.bathroom=== 'não'} />
                                <span> Não</span>
                            </div>
                            <div className="bathroomAmount">
                                <strong>Frequência: </strong>
                                <div>{selectedDiary?.bathroomAmount}</div>        
                            </div>
                        </div>
                        {
                            selectedDiary?.obsBathroom ? <div className="notes">{selectedDiary?.obsBathroom}</div> : null
                        }
                    </ContainerQuestion>
                    <ContainerQuestion>
                        <h2>Soneca</h2>
                        <div className="sleep">
                            <div>
                                <input type="radio" name="sleep" />
                                <span> Dormiu</span>
                            </div>
                            <div>
                                <input type="radio" name="sleep" />
                                <span> Não dormiu</span>
                            </div>
                            {
                                slept ? 
                                <div className="time">
                                    <div>
                                        <strong>Das: </strong>
                                        <div>{selectedDiary?.startSleep}</div>
                                    </div>
                                    <div>
                                        <strong>às: </strong>
                                        <div>{selectedDiary?.endSleep}</div>
                                    </div>
                                </div> 
                                :
                                null
                            }
                        </div>
                        {
                            selectedDiary?.reminder ?
                            <div className="reminder"> 
                                <h2>Trazer para a próxima aula</h2>
                                <div className="notes">{selectedDiary?.reminder}</div>
                            </div>
                            :
                            null
                        }
                        {
                            selectedDiary?.notice ?
                            <div className="reminder">
                                <h2>Aviso</h2>
                                <div className="notes">{selectedDiary?.notice}</div>
                            </div>
                            :
                            null
                        } 
                    </ContainerQuestion>
                </div>
                <div className="container-student">
                    {students?.map(student => {
                        return(
                            <CardChild name={student.name} onClick={() => handleDiaryClick(student)} />
                        )
                    })}
                </div>
            </ContainerDiaryStudent>
        </MainUser>
    )
}
