import { Plus } from "phosphor-react";
import { ContainerAddCircleButton } from "./ContainerAddCircleButton";

interface AddCircleButtonProps {
    position?: string,
    bottom?: string,
    right?: string,
    openModal: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export function AddCircleButton({ openModal, position, right, bottom }: AddCircleButtonProps) {
    return(
        <ContainerAddCircleButton position={position} bottom={bottom} right={right} onClick={openModal}>
            <Plus size={32} />
        </ContainerAddCircleButton>
    )
}
