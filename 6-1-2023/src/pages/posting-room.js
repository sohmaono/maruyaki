import Link from "next/link";
import PostingInput from "../../components/posting/posting-input";
import Header from "../../components/others/header";

function PostingRoom(){
    return(
        <div>
            <Header/>{/* ← この部分はcomponents/others/headerのコンポーネント */}
            <PostingInput/>{/* ← この部分はcomponents/posting/posting-input.jsの部分 */}
        </div>
    )
}
export default PostingRoom