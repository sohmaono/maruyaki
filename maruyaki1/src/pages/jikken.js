import { useContext,useState,createContext } from "react";
import Jikken from "../../rakugaki/jikkencomponent";

const ColorContext=createContext()

export const useIt=()=>useContext(ColorContext)



export default function (){
    const [a,seta]=useState(3)
    console.log("更新")
    return(
        <ColorContext.Provider value={[a,seta]}>
            <Jikken/>
        </ColorContext.Provider>
    )
}