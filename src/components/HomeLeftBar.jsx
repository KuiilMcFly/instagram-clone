import '../Styles/homeLeftBar.css';
import { Link } from 'react-router-dom';
import instagramLogo from '../assets/Instagram_logo.svg';
import {AiFillHome} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
const HomeLeftBar = () => {
  return ( 
    <div className="left-bar">
        <img className='insta-logo' src={instagramLogo} alt="" />
            <Link><AiFillHome/> Home</Link>
            <Link><BsSearch/>Cerca</Link>
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
