import PostAuthor from './PostAuthor'
import Date from './Date'
import ReactionBtn from './ReactionBtn'


const PostExcerpt = ({post}) => {
  return (
    <article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0,120)}
            <PostAuthor userId={post.userId}/>
            <Date timestamp={post.date}/>
            </p>
            <ReactionBtn post={post}/>
        </article>
  )
}

export default PostExcerpt