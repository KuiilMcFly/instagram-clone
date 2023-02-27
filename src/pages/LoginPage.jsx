import React, { useState } from "react";
import "../Styles/LoginPage.scss";
import phones from "../assets/phones.png";
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";
import screenshot3 from "../assets/screenshot3.png";
import instagramlogo from '../assets/instagramlogo.png';
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
          <div className="input-img-container relative">
            <img src={screenshot1} className="absolute n1" alt="" />
            <img src={screenshot2} className="absolute n2" />
            <img src={screenshot3} className="absolute n3" />
          </div>
          <div>
            <form>
              <img src={instagramlogo} alt="" />
                <LoginInput/>
            </form>
          </div>
        </div>
    </div>
  );
};

export default LoginPage;
