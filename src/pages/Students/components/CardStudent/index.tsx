import { DotsThreeVertical } from "phosphor-react";
import { ContainerCardStudent } from "./ContainerCardStudent";

interface CardStudentProps {
    cod: string
    name: string
    age: number
}

export function CardStudent({ cod, name, age }: CardStudentProps) {
    return (
        <ContainerCardStudent>
            <div className="container-student-info">
                <img src="\src\assets\student.png" alt="" />
                <div className="student-info">
                    <span>Código: {cod}</span>
                    <span>Nome: {name}</span>
                    <span>Idade: {age}</span>
                </div>
            </div>
            <DotsThreeVertical size={40} color="#ffffff" />
        </ContainerCardStudent>
    )
}
