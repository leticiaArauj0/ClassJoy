import { CardInfo } from "../CardInfo";
import { ContainerCardInfo } from "./ContainerCardInfo";

interface InfoClassroomProps {
    parents?: number,
    students?: number
}

export function InfoClassroom({ students }: InfoClassroomProps) {
    return(
        <ContainerCardInfo>
            <CardInfo color="#77BF0B" icon="parents" text="Pais" parents={0} />
            <CardInfo color="#FBB925" icon="student" text="Alunos" students={students} />
            <CardInfo color="#966BF2" icon="calendar" text="Calendário" />
            <CardInfo color="#00B8F0" icon="chat" text="Recados" />
        </ContainerCardInfo>
    )
}
