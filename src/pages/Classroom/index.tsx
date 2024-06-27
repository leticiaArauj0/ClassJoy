import { useContext, useMemo, useState } from "react";
import { AddCircleButton } from "../../components/AddCircleButton";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { MainUser } from "../../shared/styles/MainUser";
import { CardClassroom } from "./components/CardClassroom";
import { ModalCreateClassroom } from "../../components/ModalClassroom/ModalCreateClassroom";
import { ContainerClassroom } from "./styles/ContainerClassroom";
import { ClassroomContext } from "../../contexts/classroom/ClassroomContext";

export function Classroom() {
    const { classrooms } = useContext(ClassroomContext)
    const [openModal, setOpenModal] = useState(false)
    const [search, setSearch] = useState('')

    const classroomsFilter = useMemo(() => {
        const lowerSearch = search.toLowerCase()
        const sortClassrooms = classrooms?.sort((a, b) => (a.id > b.id) ? 1 : -1)
        return sortClassrooms?.filter((classroom) => classroom.name.toLowerCase().includes(lowerSearch))
    }, [search, classrooms]) 

    return(
        <MainUser>
            <Header />
            <Search width="98.3%" onChange={(ev) => setSearch(ev.target.value)} value={search} />
            <ContainerClassroom>
                {classroomsFilter?.map(classroom => {
                    return(
                        <CardClassroom id={classroom.id} key={classroom.id} name={classroom.name} />
                    )
                })}
            </ContainerClassroom>
            <AddCircleButton bottom="2rem" right="3rem" position="fixed" openModal={() => {setOpenModal(true)}} />
            {openModal && <ModalCreateClassroom closeModal={() => {setOpenModal(false)}} />}
        </MainUser>
    )
}
