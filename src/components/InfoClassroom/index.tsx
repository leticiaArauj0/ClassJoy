import { CardInfo } from "../CardInfo";
import { ContainerCardInfo } from "./ContainerCardInfo";

export function InfoClassroom() {
    return(
        <ContainerCardInfo>
            <CardInfo color="#77BF0B" icon="classroom" text="Turmas" number={3} />
            <CardInfo color="#FBB925" icon="student" text="Alunos" number={36} />
            <CardInfo color="#966BF2" icon="parents" text="Pais" number={27} />
            <CardInfo color="#00B8F0" icon="activity" text="Atividades Completas" number={8} />
        </ContainerCardInfo>
    )
}