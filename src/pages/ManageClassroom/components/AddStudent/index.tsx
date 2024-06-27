import { PlusCircle } from "phosphor-react";
import { ContainerAddStudent } from "./ContainerAddStudent";

interface AddStudentProps {
    openModal: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export function AddStudent({ openModal }: AddStudentProps) {
    return(
        <ContainerAddStudent onClick={openModal}>
            <PlusCircle size={60} weight="light" />
            <span>Adicionar Aluno</span>
        </ContainerAddStudent>
    )
}
