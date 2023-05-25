import { memo, useRef } from "react";
import SendingButton from "../../pictures/sending-button";
import style from "./input-field.module.css"

export const InputField=memo(({doSend})=>{

    const chatInputRef=useRef()

    const doSendClick=()=>{if(chatInputRef.current.value){doSend(chatInputRef.current.value)
     chatInputRef.current.value=""}}

    return(
    <div className={style.container}>
        <div className={style.inputSendingButton}>
            <textarea type="text" ref={chatInputRef} placeholder="入力..." className={style.inputField}/>
            <button onClick={doSendClick} className={style.sendingButton}><SendingButton/></button>
        </div>
    </div>
    )
},()=>true)