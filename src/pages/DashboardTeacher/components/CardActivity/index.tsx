import { ContainerCardActivity } from "./ContainerCardActivity";

interface CardActivityProps {
    title: string
    classroom: string
    color: string
}

export function CardActivity({ title, classroom, color }: CardActivityProps) {
    return(
        <ContainerCardActivity background={color}>
            <img src="\src\pages\DashboardTeacher\assets\activity.png" alt="" />
            <div>
                <h2>{title}</h2>
                <span>Turma: {classroom}</span>

            </div>
        </ContainerCardActivity>
    )
}
