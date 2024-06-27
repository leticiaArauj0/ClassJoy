import { ContainerCard } from "./styles";

interface CardChildProps {
    name: string,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

export function CardChild({ name, onClick }: CardChildProps) {
    return(
        <ContainerCard onClick={onClick}>
            <img src="https://i.pinimg.com/564x/d1/51/62/d15162b27cd9712860b90abe58cb60e7.jpg"  alt="" />
            <div className="card-info">
                <span>{name}</span>
            </div>
        </ContainerCard>
    )
}