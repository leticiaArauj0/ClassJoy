import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { MainUser } from "../../shared/styles/MainUser";
import { Bookmark } from "./components/Bookmark";

export function Students() {
    return(
        <MainUser>
            <Header />
            <Search />
            <div>
                <Bookmark letter="A" />
                <div>
                    
                </div>
            </div>
        </MainUser>
    )
}
