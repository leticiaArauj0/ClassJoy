import { MagnifyingGlass } from "phosphor-react";
import { ContainerSearch } from "./styles/ContainerSearch";
import { ContainerInput } from "./styles/ContainerInput";
import { ContainerIcon } from "./styles/ContainerIcon";

interface SearchProps {
    width?: string
}

export function Search({ width }: SearchProps) {
    return(
        <ContainerSearch width={width}>           
            <ContainerInput placeholder="Pesquisar" type="text" />
            <ContainerIcon>
                <MagnifyingGlass size={30} />
            </ContainerIcon> 
        </ContainerSearch>
    )
}
