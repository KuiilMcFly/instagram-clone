import React, { useState } from "react";
import "../Styles/LoginPage.scss";
import phones from "../assets/phones.png";
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";
import screenshot3 from "../assets/screenshot3.png";
import googlePlay from "../assets/googleplay.png";
import microsoftStore from "../assets/microsoft.png";
import LoginInput from "../components/LoginInput";
import facebookIcon from '../assets/facebook.png';
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) =>{
    setEmail(e.target.value);
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email e Password', email, password);
    setEmail("");
    setPassword("");
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle("night-mode");
  };

  return (
    <div>
      <button
        className={`mode-button ${isNightMode ? "day-btn" : "night-btn"}`}
        onClick={toggleNightMode}
      >
        Switch to {isNightMode ? "day" : "night"} mode
      </button>
      <div className="login-container">
        <div className="relative img-container">
          <div className="absolute phonecontainer">
            <img src={screenshot1} className="img-animation n1" alt="" />
            <img src={screenshot2} className="img-animation n2" />
            <img src={screenshot3} className="img-animation n3" />
          </div>
          <img src={phones} className="" alt="" />
        </div>

        <div className={isNightMode ? 'text-night' : 'text-day'}>
          <LoginInput
            handleEmail={handleEmail}
            handlePassword={handlePassword}
            handleSubmit={handleSubmit}
            email={email}
            password={password}
          />
          <div>
          <div className='facebook-login'>
            <img src={facebookIcon} alt="" />
            <p className={isNightMode ? 'text-night' : 'text-day'}>Accedi con Facebook</p>
        </div>

        <p>Password dimenticata?</p>
        
            <p>Non hai un account?<Link to="/pages/Register.jsx">Iscriviti</Link></p>
          </div>
          <div className="download-app ">
            <p>Scarica l'applicazione</p>
            <div className="download-selector">
              <img src={googlePlay} alt="" style={{ width: "150px" }} />
              <img src={microsoftStore} alt="" style={{ width: "124px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
