import style from "./message.module.css"

export default function Message({data:{name,title,singer,phrase,comment}}){
    return(
        <div className={style.container}>
            <name className={style.name}>{name}<p className={style.sann}>さん</p></name>
            <div className={style.container2}>
                <div className={style.pic}/>
                <div className={style.titleSinger}>
                    <tit className={style.title}>{title}</tit>
                    <singer className={style.singer}>{singer}</singer>
                </div>
                <phrase className={style.phrase}>{phrase}</phrase>
                <div className={style.border}></div>
                <comment className={style.comment}>{comment}</comment>
            </div>
        </div>
    )
}