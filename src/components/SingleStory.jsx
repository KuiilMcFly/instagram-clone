import React from 'react'
import propicPlaceHolder from '../assets/propic_placeholder.jpg';

const SingleStory = ({username, user_image}) => {
  return (
    <div className='single-story'>
        <img src={user_image} alt="" />
        <p>{username}</p>
    </div>
  )
}

export default SingleStory
