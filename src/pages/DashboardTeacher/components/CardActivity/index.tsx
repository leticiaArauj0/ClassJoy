import { ContainerCardActivity } from "./ContainerCardActivity";

interface CardActivityProps {
    title: string
    classroom: number
    date: string
}

export function CardActivity({ title, classroom, date }: CardActivityProps) {
    return(
        <ContainerCardActivity>
            <img src="\src\pages\DashboardTeacher\assets\activity.png" alt="" />
            <div>
                <strong>{title}</strong>
                <span>Turmas Atribuídas: {classroom}</span>
                <span>Data de Entrega: {date}</span>
            </div>
        </ContainerCardActivity>
    )
}
