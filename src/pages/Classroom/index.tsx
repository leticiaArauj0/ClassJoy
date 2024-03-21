import { NavLink } from "react-router-dom";
import { AddCircleButton } from "../../components/AddCircleButton";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { MainUser } from "../../shared/styles/MainUser";
import { CardClassroom } from "./components/CardClassroom";
import { ContainerClassroom } from "./styles/ContainerClassroom";

export function Classroom() {
    return(
        <MainUser>
            <Header />
            <Search width="98.3%" />
            <ContainerClassroom>
                <NavLink to="/manage/classroom">
                    <CardClassroom />
                </NavLink>
                <CardClassroom />
                <CardClassroom />
                <CardClassroom />
                <CardClassroom />
                <CardClassroom />
            </ContainerClassroom>
            <AddCircleButton />
        </MainUser>
    )
}