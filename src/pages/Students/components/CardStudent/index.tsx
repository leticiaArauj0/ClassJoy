import { PencilSimple, Trash } from "phosphor-react";
import { Photo } from "../../../../components/Photo";
import { ContainerCardStudent } from "./ContainerCardStudents";
import { useState } from "react";
import { ModalDeleteStudent } from "../../../../components/ModalStudents/ModalDeleteStudent";
import { ModalEditStudent } from "../../../../components/ModalStudents/ModalEditStudent";

interface CardStudentProps {
    id: number,
    name: string,
    age: number,
    classroom: string,
}

export function CardStudent({ id, name, age, classroom }: CardStudentProps) {
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)

    return(
        <ContainerCardStudent height="18rem">
            <div className="background"></div>
            <div className="photo">
                <Photo camera="none" height="5.5rem" imgUrl="https://i.pinimg.com/564x/d1/51/62/d15162b27cd9712860b90abe58cb60e7.jpg" />
            </div>
            <div>
                <h3>{name}</h3><br/>
                <span>Turma: <strong>{classroom}</strong></span>
            </div>
            <div>
                <div className="line"></div>
                <div className="icons">
                    <span onClick={() => {setOpenEditModal(true)}}>
                        <PencilSimple size={32} weight="light" />
                    </span>
                    <span onClick={() => {setOpenDeleteModal(true)}}>
                        <Trash size={32} color="#FC6647" weight="light" />
                    </span>
                </div>
            </div>

            {openDeleteModal && <ModalDeleteStudent id={id} closeModal={() => {setOpenDeleteModal(false)}} />}
            {openEditModal && <ModalEditStudent name={name} age={age} id={id} closeModal={() => {setOpenEditModal(false)}} />}
        </ContainerCardStudent>
    )
}
