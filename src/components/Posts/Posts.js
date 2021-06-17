import React from 'react'
import SinglePost from '../SinglePost/SinglePost'

const Posts = ({posts}) => {
    return (
        <ul>
            {posts.map(post => 
                <SinglePost key={post.content} post={post} />
            )}
        </ul>
    )
} 

export default Posts