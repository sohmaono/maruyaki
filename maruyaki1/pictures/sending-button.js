import style from "./sending-button.module.css"

export default function SendingButton(){
    return(
        <img className={style.sendingButton} src="data:image/png;base64,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"/>
    )
}