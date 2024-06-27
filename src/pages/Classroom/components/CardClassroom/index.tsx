import { PencilSimple, Trash, Folder } from "phosphor-react";
import { ContainerCard } from "./ContainerCard";
import { NavLink } from "react-router-dom";
import { ModalDeleteClassroom } from "../../../../components/ModalClassroom/ModalDeleteClassroom";
import { useState } from "react";
import { ModalEditClassroom } from "../../../../components/ModalClassroom/ModalEditClassroom";

interface CardClassroomProps {
    name: string,
    id: number
}

export function CardClassroom({ name, id }: CardClassroomProps) {
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)

    return(
        <ContainerCard height="20rem">
            <NavLink to={`/manage/classroom/${id}`}>
                <div className="background"></div>
                <h2>{name}</h2>
            </NavLink>

            <div> 
                <div className="line"></div>
                <div className="icons">
                    <Folder size={32} weight="light" />
                    <span onClick={() => {setOpenEditModal(true)}}>
                        <PencilSimple size={32} weight="light" />
                    </span>
                    <span className="delete" onClick={() => {setOpenDeleteModal(true)}}>
                        <Trash size={32} weight="light" />
                    </span>
                </div>
            </div>
            
            {openDeleteModal && <ModalDeleteClassroom id={id} closeModal={() => {setOpenDeleteModal(false)}} />}
            {openEditModal && <ModalEditClassroom name={name} id={id} closeModal={() => {setOpenEditModal(false)}} />}
        </ContainerCard>
    )
}
