import React from 'react';
import UserBox from './UserBox';
import UserInteractions from './UserInteractions';
import memePost from '../assets/capire.jpg';
import '../Styles/singlepost.css'

const SinglePost = () => {
  return (
    <div className="post">
          <UserBox/>
            <div className='img-post-container'>
              <img src={memePost} alt="" />
            </div>
          <UserInteractions/>

          <div className='under-post'>
            <p>Piace a nickname e altri number</p>
            <p>Mostra tutti e number commenti</p>
            <input type="text" placeholder='Aggiungi un commento...' />
          </div>

        </div>
  )
}


export default SinglePost