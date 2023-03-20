import React from 'react'
import propicPlaceHolder from '../assets/propic_placeholder.jpg';

const SingleStory = (dummyPosts) => {
  console.log(dummyPosts.dummyPosts.dummyPosts[0]);
  return (
    <div className='single-story'>
        <img src={propicPlaceHolder} alt="" />
        <p>Profile name</p>
    </div>
  )
}

export default SingleStory
