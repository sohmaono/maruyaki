import { memo, useRef } from "react";

export const InputField=memo(({doSend,refresh})=>{

    console.log("更新されている？")

    const chatInputRef=useRef()

    const doSendClick=()=>{if(chatInputRef.current.value){doSend(chatInputRef.current.value)
     chatInputRef.current.value=""}}

    return(
        <div>
            <input type="text" ref={chatInputRef}/>
            <button onClick={doSendClick}>送信</button>
            <button onClick={refresh}>更新</button>
        </div>
    )
},()=>true)