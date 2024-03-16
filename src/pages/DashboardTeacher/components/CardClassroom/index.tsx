import { DotsThreeVertical } from "phosphor-react";
import { ContainerCard } from "./ContainerCard";

interface CardClassroomProps {
    text: string
}

export function CardClassroom({ text }: CardClassroomProps) {
    return(
        <ContainerCard>
            <h1>{text}</h1>
            <DotsThreeVertical size={40} color="#ffffff" />
        </ContainerCard>
    )
}