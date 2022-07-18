import React from 'react'
import { useSelector } from 'react-redux'
import { allPosts } from './postsSlice'


const PostsList = () => {
    const posts = useSelector(allPosts)
    const renderPosts = posts.map(post=>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,120)}</p>
        </article>
    ))

  return (
    <section>
        <h2>
            Posts
        </h2>
            {renderPosts}
    </section>
  )
}

export default PostsList