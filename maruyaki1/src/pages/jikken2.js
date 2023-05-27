import style from "./jikken2.module.css"

export default function (){
    return(
    <>
        <div className={style.title}>スポーツ</div>
        <ti className={style.ti}>
            <div>野球</div>
            <div>サッカー</div>
            <div>ラグビー</div>
        </ti>
    </>
    )
}