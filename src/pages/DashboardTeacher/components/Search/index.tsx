import { MagnifyingGlass } from "phosphor-react";
import { ContainerSearch } from "./styles/ContainerSearch";
import { ContainerInput } from "./styles/ContainerInput";
import { ContainerIcon } from "./styles/ContainerIcon";

export function Search() {
    return(
        <ContainerSearch>           
            <ContainerInput placeholder="Pesquisar" type="text" />
            <ContainerIcon>
                <MagnifyingGlass size={30} />
            </ContainerIcon> 
        </ContainerSearch>
    )
}
