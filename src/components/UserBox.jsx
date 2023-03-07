import React from 'react'
import propicPlaceHolder from '../assets/propic_placeholder.jpg';
import '../Styles/userbox.css';
const UserBox = () => {
  return (
    <div className='user-box'>
        <img src={propicPlaceHolder} alt="" />
        <div className='user-info'>
            <div className='user-data'>
                <p>nickname</p>
                <p>• data</p>
            </div>
            <p>location</p>
        </div>
    </div>
  )
}


export default UserBox
