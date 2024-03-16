import { ChalkboardTeacher, Student, UsersThree, Notebook } from "phosphor-react";
import { ContainerCardInfo } from "./styles/ContainerCardInfo";

interface CardInfoProps {
    color: string
    icon: string
    text: string
    number: number
}

export function CardInfo({ color, icon, text, number }: CardInfoProps) {
    let symbol

    if (icon === 'classroom') {
        symbol = <ChalkboardTeacher size={50} color={color} />
    } else if (icon === 'student') {
        symbol = <Student size={50} color={color} />
    } else if (icon === 'parents') {
        symbol = <UsersThree size={50} color={color} />
    } else if (icon === 'activity') {
        symbol = <Notebook size={50} color={color} />
    } 

    return(
        <ContainerCardInfo color={ color }>
            <div className="border"></div>
            {symbol}
            <div className="info">
                <span>{text}</span>
                <strong>{number}</strong>
            </div>
        </ContainerCardInfo>
    )
}
