import { Bookmarks, CalendarBlank } from "phosphor-react"
import { ContainerNotice } from "./styles"

interface NoticeProps {
    text: string
    isCalender: boolean
    notice: string
    date: string
    color: string
}

export function Notice({ isCalender, text, notice, date, color }: NoticeProps) {
    return(
        <ContainerNotice height="17rem" backgroundColor={color}>
            <div className="top">
                <strong>{text}</strong>
                {isCalender ? <CalendarBlank size={38} color="#ffffff" /> : <Bookmarks size={38} color="#ffffff" />}
            </div>
            <div className="container-date-info">
                <strong>{date}</strong>
                <p>{notice}</p>
            </div>
        </ContainerNotice>
    )
}
