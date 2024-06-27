import { PlusCircle } from "phosphor-react"
import { ContainerAddButton } from "./ContainterAddButton"

interface AddButtonProps {
    text?: string
    openModal?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export function AddButton({ text, openModal }: AddButtonProps) {
    return(
        <ContainerAddButton onClick={openModal}>
            <PlusCircle size={40} />
            {text}
        </ContainerAddButton>
    )
}