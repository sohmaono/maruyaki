import { useEffect, useState } from "react"
import Message from "./message"
import style from "./message-map.module.css"
import axios from "axios"

export default function MessageMap(){
    const [message,setMessage]=useState()
    const [messageNum,setMessageNum]=useState(0)
    const [like,setLike]=useState(false)
    const [disLike,setDisLike]=useState(false)

    const returnJSX = (data) => (<Message data={data}/>)

    const fetchMessage = async ( n ) => {
        try{
            const result = await axios.get("http://localhost:8000/messages")
            if(!result.data[n]){}
            else{setMessage(returnJSX(result.data[n]))}
        }catch(error){
            console.log(error)
        }
    }

    const nextMessage = () => {
        if(message){
            setMessage()
            fetchMessage(messageNum+1)
            setMessageNum(n=>n+1)
            setLike(false)
            setDisLike(false)
        }
    } 

    useEffect(()=>{const fetchMessage = async () => {
        const result = await axios.get("http://localhost:8000/messages")
        setMessage(returnJSX(result.data[0]))
    }
    fetchMessage()},[])

    const likeButton = () => {
        setLike(!like)
        setDisLike(false)
    }

    const disLikeButton = () => {
        setLike(false)
        setDisLike(!disLike)
    }

    return(
        message?
        <div className={style.container}>
            {message}
            <div className={style.likeButtons}>
                <button onClick={disLikeButton}>{disLike?<div className={style.disLiked}></div>:<div className={style.nonDisLiked}></div>}</button>
                <button onClick={likeButton}>{like?<div className={style.liked}></div>:<div className={style.nonLiked}></div>}</button>
            </div>
            <button
             onClick={nextMessage}
             className={style.nextButtonContainer}>
                <div className={style.nextButton}></div>
            </button>
        </div>
        :
        <p>Loading...</p>
    )
}