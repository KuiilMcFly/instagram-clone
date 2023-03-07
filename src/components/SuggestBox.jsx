import React from 'react';
import propicPlaceHolder from '../assets/propic_placeholder.jpg';
import '../Styles/suggest.css';

export const SuggestBox = () => {
  return (
    <div className='suggest-box'>
          <img src={propicPlaceHolder} alt="" />
            <div className='linked-follower'>
                <p>nickname</p>
                <p>seguito da nickname + altri number</p>
            </div>
            <p>Segui</p>
        </div>
  )
}

export default SuggestBox
