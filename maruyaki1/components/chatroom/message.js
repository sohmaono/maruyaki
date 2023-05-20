import { memo } from "react";
import style from "./message.module.css"
import ProfilePic1 from "../../pictures/profile-pic2-1";
import ProfilePic2 from "../../pictures/profile-pic2-2";
import ProfilePic3 from "../../pictures/profile-pic2-3";
import ProfilePic4 from "../../pictures/profile-pic2-4";
import ProfilePic5 from "../../pictures/profile-pic2-5";
import ProfilePic6 from "../../pictures/profile-pic2-6";

export const Message=memo(({object={}})=>{
    console.log(object.person)
    const pictureArray = 
    [<ProfilePic1/>,<ProfilePic2/>,<ProfilePic3/>,<ProfilePic4/>,<ProfilePic5/>,<ProfilePic6/>]

    const nameArray=["みき","かりこみ","ゆうか","ふうま","はんな","てっぺい"]

    return(
        object.person % 2 ? 
        <div className={style.containerG}>
            <div className={style.circle}>{pictureArray[object.person-1]}</div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{textAlign:"start",fontSize:"13px"}}>{nameArray[object.person-1]}</div>
                <div className={style.contentG}>
                    {object.content}
                </div>
            </div>
            <div className={style.time}>{object.time}</div>
        </div>
        :
        <div className={style.containerB}>
            <div className={style.time}>{object.time}</div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{textAlign:"end",fontSize:"13px"}}>{nameArray[object.person-1]}</div>
                <div className={object.person==4 ? style.contentBself : style.contentB}>
                    {object.content}
                </div>
            </div>
            <div className={style.circle}>{pictureArray[object.person-1]}</div>
        </div>
        )
},(p,n)=>p.object.id===n.object.id)