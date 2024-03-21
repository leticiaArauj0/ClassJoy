import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { MainUser } from "../../shared/styles/MainUser";
import { Bookmark } from "./components/Bookmark";
import { CardStudent } from "./components/CardStudent";
import { ContainerStudent } from "./styles/ContainerStudents";

export function Students() {
    return(
        <MainUser>
            <Header />
            <Search width="98.3%" />
            <div>
                <Bookmark letter="A" />
                <ContainerStudent>
                    <CardStudent />
                    <CardStudent />
                    <CardStudent />
                    <CardStudent />
                </ContainerStudent>
                <Bookmark letter="B" />
                <ContainerStudent>
                    <CardStudent />
                    <CardStudent />
                    <CardStudent />
                    <CardStudent />
                </ContainerStudent>
                <Bookmark letter="C" />
                <ContainerStudent>
                    <CardStudent />
                    <CardStudent />
                    <CardStudent />
                    <CardStudent />
                </ContainerStudent>
            </div>
        </MainUser>
    )
}
