import React from 'react'
import HomeLeftBar from '../components/HomeLeftBar'
import '../Styles/profile.css';

export const Profile = () => {
  return (
    <div className='profile-section'>
        <HomeLeftBar/>
            <div className='profile-info'>
                <img src="" alt="" />
                <div className='info-bio'>
                    <div className='nickname-setting'>
                        <p>username</p>
                        <button> edit profile</button>
                    </div>
                    <div className='follow-info'>
                        <p>Post</p>
                        <p>Follower</p>
                        <p>Profili seguiti</p>
                    </div>
                    <div className='bio'>
                        <p>Ciao questo è il mio profilo</p>
                    </div>
                </div>
            </div>
    </div>
  )
}