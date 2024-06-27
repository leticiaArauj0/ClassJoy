import { ContainerDescription } from "./styles"

interface DescriptionProps {
    number: number
    description: string
    color: string
}

export function Description({ number, description, color }: DescriptionProps) {
    return(
        <ContainerDescription backgroundColor={color}>
            <strong>{number}</strong>
            <span>{description}</span>
        </ContainerDescription>
    )
}