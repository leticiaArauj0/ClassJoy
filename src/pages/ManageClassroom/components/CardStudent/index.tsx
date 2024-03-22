import { DotsThreeVertical } from "phosphor-react";
import { ContainerCardStudent } from "./ContainerCardStudent";

export function CardStudent() {
    return(
        <ContainerCardStudent>
            <DotsThreeVertical size={32} color="#ffffff" />
            <img src="\src\assets\student-profile.png" alt="" />
            <strong>Letícia de Sousa</strong>
            <span>Código: 227154</span>
        </ContainerCardStudent>
    )
}
