import HeaderLogo from "../../pictures/header-6-chat-logo";
import SendingButton from "../../pictures/sending-button";
import style from "./header.module.css"

export default function ChatroomHeader(){
    return(
        <div className={style.container}>
            <div className={style.logo}>
                <HeaderLogo/>
            </div>
        </div>
    )
}