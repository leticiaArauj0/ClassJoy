import { ContainerCardStudent } from "./ContainerCardStudent";

interface CardStudentProps {
    id: number,
    name: string,
    age: number,
    onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined
}

export function CardStudent({ name, age, id, onClick }: CardStudentProps) {
    
    return (
        <ContainerCardStudent onClick={onClick}>
            <div className="container-student-info">
                <img src="https://i.pinimg.com/564x/d1/51/62/d15162b27cd9712860b90abe58cb60e7.jpg" alt="" />
                <div className="student-info">
                    <span>Código: {id}</span>
                    <span>Nome: {name}</span>
                    <span>Idade: {age}</span>
                </div>
            </div>
        </ContainerCardStudent>
    )
}
