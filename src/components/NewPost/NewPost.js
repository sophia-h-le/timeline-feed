import React from 'react'

const NewPost = () => {
    return (
        <>
            <div>Share your thoughts</div>
            <form>
                <input 
                name='newPost'
                placeholder='Share your thoughts'
                />
                <br/>
                <button type='submit' value='submit'>
                    Add New Post
                </button>
            </form>
        </>
    )
}

export default NewPost