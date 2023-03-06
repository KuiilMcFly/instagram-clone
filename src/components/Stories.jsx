import React from 'react';
import '../Styles/stories.css'
import propicPlaceHolder from '../assets/propic_placeholder.jpg'
const Stories = () => {
  return (
    <div className='central-bar'>
        <div className="story-bar">
            <div className='single-story'>
                <img src={propicPlaceHolder} alt="" />
                <p>Profile name</p>
            </div>
            <div className='single-story'>
                <img src={propicPlaceHolder} alt="" />
                <p>Profile name</p>
            </div>
            <div className='single-story'>
                <img src={propicPlaceHolder} alt="" />
                <p>Profile name</p>
            </div>
        </div>
    </div>
  )
}

export default Stories
