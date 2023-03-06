import '../Styles/homeLeftBar.css';
import { Link } from 'react-router-dom';
import instagramLogo from '../assets/Instagram_logo.svg';
import {AiFillHome} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import {TiCompass} from 'react-icons/ti';
import {FaTelegramPlane} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {CiSquarePlus} from 'react-icons/ci';
import {BsCameraReels} from 'react-icons/bs'
const HomeLeftBar = () => {
  return ( 
    <div className="left-bar">
        <img className='insta-logo' src={instagramLogo} alt="" />
            <Link><AiFillHome/> Home</Link>
            <Link><BsSearch/>Cerca</Link>
            <Link><TiCompass/>Esplora</Link>
            <Link><BsCameraReels/>Reels</Link>
            <Link><FaTelegramPlane/>Messaggi</Link>
            <Link><AiOutlineHeart/>Notifiche</Link>
            <Link><CiSquarePlus/>Crea</Link>
            <Link>Profilo</Link>

            <h3>Altro</h3>
        </div>
  )
}

export default HomeLeftBar