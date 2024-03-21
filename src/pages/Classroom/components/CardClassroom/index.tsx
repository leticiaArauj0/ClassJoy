import { PencilSimple, Trash, Folder } from "phosphor-react";
import { ContainerCard } from "./ContainerCard";

export function CardClassroom() {
    return(
        <ContainerCard height="20rem">
            <div className="background"></div>
            <h2>3 ano A</h2>
            <div>
                <strong>A data de entrega é hoje:</strong><br/>
                <span>Atividade diagnóstica</span>
            </div>
            <div>
                <div className="line"></div>
                <div className="icons">
                    <Folder size={32} weight="light" />
                    <PencilSimple size={32} weight="light" />
                    <Trash size={32} weight="light" />
                </div>
            </div>
        </ContainerCard>
    )
}