import { Message } from "./message";
import style from "./message-map.module.css"

export default function MessageMap({messageArray=[]}){
    console.log("MessageMap 更新")
    return(
        <div className={style.container}>
            <div className={style.content}>
                {messageArray.map((n={})=>(<Message object={n} key={n.id}/>))}
            </div>
        </div>
    )
}