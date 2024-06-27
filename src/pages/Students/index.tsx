import { useContext, useMemo, useState } from "react";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { MainUser } from "../../shared/styles/MainUser";
import { ContainerStudent } from "./styles/ContainerStudents";
import { StudentContext } from "../../contexts/student/StudentContext";
import { ClassroomContext } from "../../contexts/classroom/ClassroomContext";
import { Bookmark } from "./components/Bookmark";
import { CardStudent } from './components/CardStudent'

interface Student {
    id: number,
    name: string,
    age: number,
    teacherId: number,
    classroomId: number
}

interface GroupedStudents {
    [key: string]: Student[];
}

export function Students() {
    const { classrooms } = useContext(ClassroomContext)
    const { students } = useContext(StudentContext)
    const [search, setSearch] = useState('')

    const studentFilter = useMemo(() => {
        const lowerSearch = search.toLowerCase()
        const sortStudents = students?.sort((a, b) => (a.id > b.id) ? 1 : -1)
        return sortStudents?.filter((student) => student.name.toLowerCase().startsWith(lowerSearch))
    }, [search, students]) 

    const sortedStudents = [...studentFilter].sort((a, b) => a.name.localeCompare(b.name))
    const groupedStudents = sortedStudents.reduce<GroupedStudents>((acc, student) => {
        const firstLetter = student.name[0].toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = []
        }
        acc[firstLetter].push(student)
        return acc
    }, {})
   
    const findClassName = (classroomId: number) => {
        const classObj = classrooms?.find(classroom => classroom.id === classroomId);
        if (classObj) return classObj.name;
        else return "Turma não encontrada";
    }

    return(
        <MainUser>
            <Header />
            <Search width="98.3%" onChange={(ev) => setSearch(ev.target.value)} value={search} />
            <div>
                {Object.keys(groupedStudents).map(letter => (
                    <>
                    <Bookmark letter={letter} />
                    <ContainerStudent key={letter}>
                        {groupedStudents[letter].map(student => {
                            const classroomId = student.classroomId
                            const classroom = findClassName(classroomId)    
                            return(
                                <CardStudent id={student.id} key={student.id} name={student.name} age={student.age} classroom={classroom} />
                            )
                        })}
                    </ContainerStudent>
                    </>
                ))}
            </div>
        </MainUser>
    )
}
