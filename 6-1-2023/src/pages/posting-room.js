import Link from "next/link";
import PostingInput from "../../components/posting/posting-input";
import Header from "../../components/others/header";

function PostingRoom(){
    return(
        <div>
            <Header/>
            <PostingInput/>
        </div>
    )
}
export default PostingRoom