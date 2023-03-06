import React from 'react'
import '../Styles/homeLeftBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import instagramLogo from '../assets/Instagram_logo.svg';

const HomeLeftBar = () => {
  return ( 
    <div className="left-bar">
        <img className='insta-logo' src={instagramLogo} alt="" />
            <Link>Home</Link>
            <Link>Cerca</Link>
            <Link>Esplora</Link>
            <Link>Reels</Link>
            <Link>Messaggi</Link>
            <Link>Notifiche</Link>
            <Link>Crea</Link>
            <Link>Profilo</Link>

            <h3>Altro</h3>
        </div>
  )
}

export default HomeLeftBar
