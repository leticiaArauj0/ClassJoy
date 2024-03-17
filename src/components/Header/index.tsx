import { Bell, EnvelopeSimple, List, UserCircle } from "phosphor-react";
import { ContainerHeader } from "./Header";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useContext } from "react";

export function Header() {
    const auth = useContext(AuthContext)

    return (
        <ContainerHeader>
            <List size={32} />
            <div>
            <Bell size={24} />
            <EnvelopeSimple size={24} />
            <NavLink to="/user/consultar-perfil">
                <UserCircle size={40} weight="thin" />
            </NavLink>
            <strong>{auth.user?.first_name} {auth.user?.last_name}</strong>
            </div>
       </ContainerHeader>
    )
}