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
const HomeLeftBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="left-bar">
      <div className="left-bar-content">
        <img className="insta-logo" src={instagramLogo} alt="" />
        <button>
          <AiFillHome /> Home
        </button>
        <button>
          <BsSearch />
          Cerca
        </button>
        <button>
          <TiCompass />
          Esplora
        </button>
        <button>
          <BsCameraReels />
          Reels
        </button>
        <button>
          <FaTelegramPlane />
          Messaggi
        </button>
        <button>
          <AiOutlineHeart />
          Notifiche
        </button>
        <button onClick={() => setIsOpen(true)}>
          <CiSquarePlus />
          Crea
        </button>
        <button>Profilo</button>

        <h3>Altro</h3>
          {isOpen && <AddNewPost setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default HomeLeftBar;
