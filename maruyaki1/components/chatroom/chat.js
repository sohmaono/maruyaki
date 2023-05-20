import MessageMap from "./message-map";
import { memo } from "react";

export const Chat=memo(({messageArray=[]})=>{
    return(
        <div>
            <MessageMap messageArray={messageArray}/>
        </div>
    )
},(p,n)=>p.messageArray.length===n.messageArray.length)