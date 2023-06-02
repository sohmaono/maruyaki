import { useRef } from "react"
import style from "./posting-input.module.css"
import axios from "axios"

export default function PostingInput(){
    const ref1=useRef()
    const ref2=useRef()
    const ref3=useRef()
    const ref4=useRef()
    const ref5=useRef()

    const doPost = async () => {
        const obj = {
            "name":ref1.current.value,
            "title":ref2.current.value,
            "singer":ref3.current.value,
            "phrase":ref4.current.value,
            "comment":ref5.current.value,
            "id":ref1.current.value
        }
        try{
            await axios.post("http://localhost:8000/messages",obj)
            .then(()=>{ref1.current.value=""
            ref2.current.value=""
            ref3.current.value=""
            ref4.current.value=""
            ref5.current.value=""})
            
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div className={style.container}>
            <div className={style.text}>投稿！</div>
            <div className={style.inputName}>
                <input className={style.input} type="text" ref={ref1} required/>
                <p className={style.name}>：ペンネーム</p>
            </div>
            <div className={style.inputName}>
                <p className={style.name}>曲の名前：</p>
                <input className={style.input} type="text" ref={ref2} required/>
            </div>
            <div className={style.inputName}>
                <input className={style.input} type="text" ref={ref3} required/>
                <p className={style.name}>：歌手</p>
            </div>
            <div className={style.inputName}>
                <p className={style.name}>フレーズ：</p>
                <input className={style.input} type="text" ref={ref4} required/>
            </div>
            <div className={style.inputName}>
                <input className={style.input} type="text" ref={ref5} required/>
                <p className={style.name}>：コメント。</p>
            </div>
            <button onClick={doPost}>投稿。</button>
        </div>
    )
}