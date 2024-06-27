import { MagnifyingGlass } from "phosphor-react";
import { ContainerSearch } from "./styles/ContainerSearch";
import { ContainerInput } from "./styles/ContainerInput";
import { ContainerIcon } from "./styles/ContainerIcon";

interface SearchProps {
    width?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    value?: string 
}

export function Search({ width, onChange, value }: SearchProps) {
    return(
        <ContainerSearch width={width}>           
            <ContainerInput placeholder="Pesquisar" type="text" onChange={onChange} value={value} />
            <ContainerIcon>
                <MagnifyingGlass size={30} />
            </ContainerIcon> 
        </ContainerSearch>
    )
}
