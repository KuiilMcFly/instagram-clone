import React from 'react'
import '../Styles/ProfilePost.css'


const ProfilePosts = ({profileData}) => {
console.log(profileData);
  return (
    <div>
        <div className='profile-contents'>
            <p>POST</p>
            <p>REELS</p>
            <p>ELEMENTI SALVATI</p>
            <p>POST IN CUI TI HANNO TAGGATO</p>
        </div>
        <div className='profile-photos'>
            {profileData?.map((post) => ( 
              <img key={post.id} src={post.image} alt="" />
            ))}
        </div>
    </div>
  )
}


export default ProfilePosts;
