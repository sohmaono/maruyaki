import { memo } from "react";
import style from "./message.module.css"
import ProfilePic1 from "../../pictures/profile-pic3-1";
import ProfilePic2 from "../../pictures/profile-pic3-2";
import ProfilePic3 from "../../pictures/profile-pic3-3";
import ProfilePic4 from "../../pictures/profile-pic3-4";
import ProfilePic5 from "../../pictures/profile-pic3-5";
import ProfilePic6 from "../../pictures/profile-pic3-6";

export const Message=memo(({object={}})=>{
    console.log(object.person)
    const pictureArray = 
    [<ProfilePic1/>,<ProfilePic4/>,<ProfilePic3/>,<ProfilePic6/>,<ProfilePic2/>,<ProfilePic5/>]

    const nameArray=["みき","かりこみ","ゆうか","ふうま","はんな","てっぺい"]

    return(
        object.person==4?
        <div className={style.containerSelf}>
            <time className={style.time}>{object.time}</time>
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                <name className={style.name}>{nameArray[object.person-1]}</name>
                <div className={style.contentSelf}>{object.content}</div>
            </div>
            <div className={style.pictureContainer}>
                <pic>{pictureArray[object.person-1]}</pic>
            </div>
        </div>:
        <div className={style.containerOther}>
            <div className={style.pictureContainer}>
                <pic>{pictureArray[object.person-1]}</pic>
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                <name className={style.name}>{nameArray[object.person-1]}</name>
                <div className={style.contentOther}>{object.content}</div>
            </div>
            <time className={style.time}>{object.time}</time>
        </div>
    )
},(p,n)=>p.object.id===n.object.id)