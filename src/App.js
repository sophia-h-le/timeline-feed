import React, { useState } from 'react';
import './App.css';
import Posts from './components/Posts/Posts';
import NewPost from './components/NewPost/NewPost'

const App = () => {
  const DUMMY_POSTS = [
    { 
      content: 'Lorem ipsum',
      author: {
        name: 'Automato Basyl'
      }},
    {
      content: 'Dolor sit amet',
      author: {
        name: 'Cilantor Koriandaurus'
      }},
    {
      content: 'Consectetur adipiscing elit',
      author: {
        name: 'Dyll Fennelle'
      }}
]

  const [ posts, setPosts] = useState(DUMMY_POSTS)
  // const handlePostSubmitClick = (event) => {
  //   event.preventDefault()
  //   console.log('Post button clicked', event.target)
  //   const postObject = {
  //     content: newContent,
  //     author: currentUser
  //   }
  //   setPosts(posts.concat(postObject))
  //   setContent('')
  // }

  const [ content, setContent] = useState('')
  const handleContentChange = (event) => {
    console.log(event.target.value)
    setContent(event.target.value)
  }
  

  return (
    <div>
      <NewPost />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
