import { ContainerCard } from "./ContainerCardStudent"

interface CardStudentProps {
    perfil: string,
    name: string,
    onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined
}

export function CardStudent({ perfil, name, onClick }: CardStudentProps) {
    return(
        <ContainerCard onClick={onClick}>
            <img src={perfil} alt="" />
            <span>{name}</span>
        </ContainerCard>
    )
}
