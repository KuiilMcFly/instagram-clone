import React from 'react'
import propicPlaceHolder from '../assets/propic_placeholder.jpg';
import '../Styles/userbox.css';
const UserBox = ({username, date, location, user_image}) => {
  return (
    <div className='user-box'>
        <img src={user_image} alt="" />
        <div className='user-info'>
            <div className='user-data'>
                <p>{username}</p>
                <p>• {date}</p>
            </div>
            <p>{location}</p>
        </div>
    </div>
  )
}


export default UserBox
