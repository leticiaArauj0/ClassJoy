import { Folder, PencilSimple, Trash } from "phosphor-react";
import { Photo } from "../../../../components/Photo";
import { ContainerCardStudent } from "./ContainerCardStudents";

export function CardStudent() {
    return(
        <ContainerCardStudent height="18rem">
            <div className="background"></div>
            <div className="photo">
                <Photo camera="none" height="5.5rem" imgUrl="\src\assets\student.png" />
            </div>
            <div>
                <h3>Gabrielle Moura</h3><br/>
                <span>Turma: <strong>3º ano A</strong></span>
            </div>
            <div>
                <div className="line"></div>
                <div className="icons">
                    <Folder size={32} weight="light" />
                    <PencilSimple size={32} weight="light" />
                    <Trash size={32} weight="light" />
                </div>
            </div>
        </ContainerCardStudent>
    )
}
