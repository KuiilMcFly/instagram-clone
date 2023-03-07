import React from 'react'
import '../Styles/PostsSection.css';
import SinglePost from './SinglePost';

const PostsSection = () => {
  return (
    <div className='post-background'>
        <SinglePost/>
        <SinglePost/>
    </div>
  )
}


export default PostsSection
