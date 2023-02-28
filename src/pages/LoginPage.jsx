import React, { useState } from "react";
import "../Styles/LoginPage.scss";
import phones from "../assets/phones.png";
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";
import screenshot3 from "../assets/screenshot3.png";
import googlePlay from "../assets/googleplay.png"
import microsoftStore from "../assets/microsoft.png"

import LoginInput from "../components/LoginInput";

const LoginPage = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle("night-mode");
  };

  return (
    <div>
      <button className="mode-button" onClick={toggleNightMode}>
        Switch to {isNightMode ? "day" : "night"} mode
      </button>
      <div className="login-container">
        <div className="relative img-container">
          <div className="relative">
          <img src={phones} className="" alt="" />
          </div>
          <div className="absolute phonecontainer">
            <img src={screenshot1} className="img-animation n1 absolute" alt="" />
            <img src={screenshot2} className="img-animation n2 absolute" />
            <img src={screenshot3} className="img-animation n3 absolute" />
          </div>
        </div>
        <div>
            <LoginInput />
            <div className="no-account-box">
                <p>Non hai un account? Iscriviti</p>
            </div>
            <div className="download-app">
                <p>Scarica l'applicazione</p>
                <div className="download-selector">
                    <img src={googlePlay} alt="" style={{width:'150px'}}/>
                    <img src={microsoftStore} alt="" style={{width:'124px'}}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
