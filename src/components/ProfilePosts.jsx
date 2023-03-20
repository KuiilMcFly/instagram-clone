import React from 'react'
import '../Styles/ProfilePost.css'


const ProfilePosts = () => {
  return (
    <div>
        <div className='profile-contents'>
            <p>POST</p>
            <p>REELS</p>
            <p>ELEMENTI SALVATI</p>
            <p>POST IN CUI TI HANNO TAGGATO</p>
        </div>
        <div className='profile-photos'>
            <img src="https://picsum.photos/id/230/309/309" alt="" />
            <img src="https://picsum.photos/id/231/309/309" alt="" />
            <img src="https://picsum.photos/id/233/309/309" alt="" />
            <img src="https://picsum.photos/id/239/309/309" alt="" />
            <img src="https://picsum.photos/id/210/309/309" alt="" />
            <img src="https://picsum.photos/id/220/309/309" alt="" />
            <img src="https://picsum.photos/id/217/309/309" alt="" />
        </div>
    </div>
  )
}


export default ProfilePosts;
