import { DotsThreeVertical } from "phosphor-react";
import { ContainerCard } from "./ContainerCard";
import { ModalClassroom } from "../ModalClassroom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface CardClassroomProps {
    name: string,
    id: number
}

export function CardClassroom({ name, id }: CardClassroomProps) {
    const [openModal, setOpenModal] = useState(false)
    const closeModal = () => setOpenModal(false)
    return(
        <ContainerCard>
            <NavLink to={`/manage/classroom/${id}`}>
                <h1 className="title">{name}</h1>
            </NavLink>
            <DotsThreeVertical size={40} color="#ffffff" onClick={() => {setOpenModal(true)}} />
            {openModal && <ModalClassroom name={name} id={id} onClose={closeModal} />}
        </ContainerCard>    
    )
}