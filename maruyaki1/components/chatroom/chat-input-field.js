import { useEffect, useState } from "react";
import { InputField } from "./input-field";
import { Chat } from "./chat";
import axios from "axios";

export default function ChatInputField(){

    const [messageArray,setMessageArray]=useState([])

    const chatURL="http://localhost:3003/chatroom2"

    const refresh=async()=>{
        const result = await axios.get(chatURL)
        setMessageArray(result.data)}

    useEffect(()=>{refresh()
        setInterval(()=>refresh(),1300)},[])


    const doSend=async (m)=>{
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const currentTime = hours + ':' + minutes;
        const chatPostObj={"person":4,"id":m,"content":m,"time":currentTime}

        try{
            await axios.post(chatURL,chatPostObj)
            refresh()
        }catch(error){console.error(error)}}


    return(
        <div>
            <Chat messageArray={messageArray}/>
            <InputField doSend={doSend} refresh={refresh}/>
        </div>
    )
}