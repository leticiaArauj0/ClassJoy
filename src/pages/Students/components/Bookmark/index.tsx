import { ContainerBookmark } from "./ContainerBookmark"

interface BookmarkProps {
    letter: string
}

export function Bookmark({ letter }: BookmarkProps) {
    return(
        <ContainerBookmark>
            <strong>{letter}</strong>
            <div className="line"></div>
        </ContainerBookmark>
    )
}