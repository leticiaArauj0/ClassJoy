import { PlusCircle } from "phosphor-react";
import { ContainerAddStudent } from "./ContainerAddStudent";

export function AddStudent() {
    return(
        <ContainerAddStudent>
            <PlusCircle size={60} weight="light" />
            <span>Adicionar Aluno</span>
        </ContainerAddStudent>
    )
}
