import { Student, UsersThree, Calendar, Chat } from "phosphor-react";
import { ContainerCardInfo } from "./styles/ContainerCardInfo";

interface CardInfoProps {
    color: string
    icon: string
    text: string
    parents?: number,
    students?: number
}

export function CardInfo({ color, icon, text, students, parents }: CardInfoProps) {
    let symbol

    if (icon === 'calendar') {
        symbol = <Calendar size={50} color={color} />
    } else if (icon === 'student') {
        symbol = <Student size={50} color={color} />
    } else if (icon === 'parents') {
        symbol = <UsersThree size={50} color={color} />
    } else if (icon === 'chat') {
        symbol = <Chat size={50} color={color} />
    } 

    return(
        <ContainerCardInfo color={ color }>
            <div className="border"></div>
            {symbol}
            <div className="info">
                <span>{text}</span>
                <strong>{parents}</strong>
                <strong>{students}</strong>
            </div>
        </ContainerCardInfo>
    )
}
