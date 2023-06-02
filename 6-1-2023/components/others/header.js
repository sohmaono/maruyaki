import style from "./header.module.css"
import Link from "next/link"

export default function Header(){
    return(
    <div className={style.container}>
        <Link className={style.searching} href="/message-room"></Link>
        <Link className={style.message} href="/message-room"></Link>
        <Link href="/posting-room" className={style.postingButton}></Link>
    </div>
    )
}