import React from 'react';



const SinglePost = ({post}) => {
    const content = post.content;
    const author = post.author;

    return (
        <>
            <div>{author.name}</div>
            <div>{content}</div>
            <br/>
        </>
    )
};

export default SinglePost