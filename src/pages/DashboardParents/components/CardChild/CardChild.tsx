import { ContainerCardChild } from "./styles";

interface CardChildProps {
    name: string,
    classroom?: string,
    age: number,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

export function CardChild({ name, classroom, age, onClick }: CardChildProps) {
    return(
        <ContainerCardChild onClick={onClick}>
            <img src="https://i.pinimg.com/564x/d1/51/62/d15162b27cd9712860b90abe58cb60e7.jpg"  alt="" />
            <div className="card-info">
                <span>{name}</span>
                <span>Turma: {classroom}</span>
                <span>Idade: {age}</span>
            </div>
        </ContainerCardChild>
    )
}
