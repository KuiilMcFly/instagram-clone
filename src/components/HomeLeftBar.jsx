import "../Styles/homeLeftBar.css";
import { Link } from "react-router-dom";
import instagramLogo from "../assets/Instagram_logo.svg";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { TiCompass } from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import { BsCameraReels } from "react-icons/bs";
import { AddNewPost } from "./AddNewPost";
import { useState } from "react";
import instagramIcon from "../assets/instagram-seeklogo.com.svg"
const HomeLeftBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="left-bar">
      <div className="left-bar-content">
        <img className="insta-logo" src={instagramLogo} alt="" />
        <img className="insta-icon" src={instagramIcon} alt="" />
        <button>
          <Link to={'/home'}>
            <AiFillHome size ={'35px'}/> <span>Home</span>
          </Link>
        </button>
        <button>
          <BsSearch size ={'35px'} />
         <span>Cerca</span> 
        </button>
        <button>
          <TiCompass size ={'35px'} />
         <span>Esplora</span> 
        </button>
        <button>
          <BsCameraReels size ={'35px'} />
         <span>Reels</span>
        </button>
        <button>
          <FaTelegramPlane size ={'35px'} />
         <span>Messaggi</span> 
        </button>
        <button>
          <AiOutlineHeart size ={'35px'} />
         <span>Notifiche</span>
        </button>
        <button onClick={() => setIsOpen(true)}>
          <CiSquarePlus size ={'35px'}/>
         <span>Crea</span>
        </button>
        <button>
          <Link to={"/pages/Profile"}>
           <span>Profilo</span>
          </Link>
        </button>

        <h3>Altro</h3>
          {isOpen && <AddNewPost setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default HomeLeftBar;
