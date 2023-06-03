import MessageMap from "../../components/message/message-map";
import Header from "../../components/others/header";


export default function MessageRoomPage(){
    return(
        <div>
            <Header/>{/* ← この部分はcomponents/others/headerのコンポーネント */}
            <MessageMap/>{/* ← この部分はcomponents/message/message-mapの部分 */}
        </div>

    )
}