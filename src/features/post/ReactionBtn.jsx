import {useDispatch} from "react-redux";
import { addReaction, reactionAdded } from "./postsSlice";

const emoji = {
    thumbsUp:'👍',
    wow:'😮',
    heart:'❤',
    rocket:'🚀',
    coffee:'☕'
}


const ReactionBtn = ({post}) => {
    const dispatch = useDispatch()
    const reactionBtn = Object.entries(emoji).map(([name,emoji])=>{
        return(
            <button
                key={name}
                type="button"
                className="reactionBtn"
                onClick={()=>{
                    dispatch(reactionAdded({postId:post.id,reaction:name}))
                }}
            >
                {emoji}{post.reactions[name]}
            </button>
        )
    })
  return (
    <div>{reactionBtn}</div>
  )
}

export default ReactionBtn