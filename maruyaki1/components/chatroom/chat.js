import MessageMap from "./message-map";
import { memo } from "react";
import style from "./chat.module.css"

export const Chat=memo(({messageArray=[]})=>{
    return(
        <div className={style.container}>
            <MessageMap messageArray={messageArray}/>
        </div>
    )
},(p,n)=>p.messageArray.length===n.messageArray.length)