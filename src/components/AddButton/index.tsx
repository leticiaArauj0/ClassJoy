import { PlusCircle } from "phosphor-react"
import { ContainerAddButton } from "./ContainterAddButton"

interface AddButtonProps {
    text?: string
}

export function AddButton({ text }: AddButtonProps) {
    return(
        <ContainerAddButton>
            <PlusCircle size={40} />
            {text}
        </ContainerAddButton>
    )
}