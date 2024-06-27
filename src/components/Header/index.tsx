import { List, UserCircle } from "phosphor-react";
import { ContainerHeader } from "./Header";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useContext } from "react";

export function Header() {
    const auth = useContext(AuthContext)

    let nav
    if(auth.user?.role == 'teacher') {
        nav = 'user'
    } else if(auth.user?.role == 'parents') {
        nav = 'user-parents'
    }

    return (
        <ContainerHeader>
            <List size={32} />
            <div>
                <NavLink to={`/${nav}/consultar-perfil`}>
                    <UserCircle size={40} weight="thin" />
                </NavLink>
                <strong>{auth.user?.first_name} {auth.user?.last_name}</strong>
            </div>
       </ContainerHeader>
    )
}
