import { DotsThreeVertical } from "phosphor-react";
import { ContainerCardStudent } from "./ContainerCardStudent";
import { useState } from "react";
import { PopUpStudent } from "../../../../components/ModalStudents/PopUp";

interface CardStudentProps {
    id: number,
    name: string,
    age: number,
}

export function CardStudent({ name, id, age }: CardStudentProps) {
    const [openModal, setOpenModal] = useState(false)
    const closeModal = () => setOpenModal(false)

    return(
        <ContainerCardStudent>
            <DotsThreeVertical className="dots" size={32} color="#ffffff" onClick={() => {setOpenModal(true)}} />
            <img className="profile" src="https://i.pinimg.com/564x/d1/51/62/d15162b27cd9712860b90abe58cb60e7.jpg" alt="" />
            <strong>{name}</strong>
            <span>Cod: {id}</span>
            {openModal && <PopUpStudent id={id} name={name} age={age} onClose={closeModal} />}
        </ContainerCardStudent>
    )
}
