import { useContext,Color } from "react";
import { useIt } from "@/pages/jikken";

export default function Jikken(){
    const [b,setb]=useIt()
    return(<>
        <button onClick={()=>setb(r=>r*1.1)}>change</button>
        {b}</>
    )
}