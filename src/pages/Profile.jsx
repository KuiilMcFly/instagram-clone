import React, { useEffect, useState } from 'react'
import HomeLeftBar from '../components/HomeLeftBar'
import '../Styles/profile.css';
import EvidenceStories from '../components/EvidenceStories';
import ProfilePosts from '../components/ProfilePosts';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const Profile = () => {
   const [profileData,setProfileData] =  useState();
    const location = useLocation();
    const username = location.state.username;
    useEffect(() =>{
        async function fetchData(){
            const resp = await axios.get('https://instagram-clone-7ee14-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
            const data = resp.data;
            const dataArray = Object.entries(data).map(([key, value]) => ({id: key, ...value}));
            const filteredArray = dataArray.filter((data) => data.username === username)
            setProfileData(filteredArray);
        }
        fetchData();
        
     },[])
  return (
    <div className='profile-section'>
        <HomeLeftBar/>
        <div className='col-01'>
            <div className='profile-info'>
                <img className='proPicImg' src="https://picsum.photos/id/237/200/300" alt="" />
                <div className='info-bio'>
                    <div className='nickname-setting'>
                        <p>{username}</p>
                        <button> edit profile</button>
                    </div>
                    <div className='follow-info'>
                        <p>Post: </p>
                        <p>Follower: </p>
                        <p>Profili seguiti: </p>
                    </div>
                    <div className='bio'>
                        <p>Ciao questo è il mio profilo</p>
                    </div>
                </div>
            </div>
        <EvidenceStories/>
        <ProfilePosts/>
        </div>
            
    </div>
  )
}


