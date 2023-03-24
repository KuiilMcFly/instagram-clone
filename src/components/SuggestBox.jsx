import React from 'react';
import propicPlaceHolder from '../assets/propic_placeholder.jpg';
import { getRandomName } from '../data/namesList';
import { getRandomImage } from '../data/randomImage';
import '../Styles/suggest.css';

export const SuggestBox = ({username, user_image}) => {
  return (
    <div className='suggest-box'>
          <img src={getRandomImage()} alt="" />
            <div className='linked-follower'>
                <p>{getRandomName()}</p>
                <p>seguito da {getRandomName()} e altre {Math.floor(Math.random() * 20) + 1} persone</p>
            </div>
            <p>Segui</p>
        </div>
  )
}

export default SuggestBox
