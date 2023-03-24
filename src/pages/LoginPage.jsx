import React, { useEffect, useState } from "react";
import "../Styles/LoginPage.scss";
import phones from "../assets/phones.png";
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";
import screenshot3 from "../assets/screenshot3.png";
import googlePlay from "../assets/googleplay.png";
import microsoftStore from "../assets/microsoft.png";
import LoginInput from "../components/LoginInput";
import facebookIcon from "../assets/facebook.png";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../store/actions/handleAuth";
import instaLogo from '../assets/Instagram_logo.svg'

const LoginPage = () => {
  const Navigate = useNavigate();
  
  const token = useSelector(state => state.authReducer.token);

  const [isNightMode, setIsNightMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };


  useEffect(() => {
    if (token) {
     Navigate("/home"); 
    }
  }, [token]);

const handleSubmit = async (e) => {
  try {
    e.preventDefault();
    dispatch(auth(email, password, false));
    setEmail("");
    setPassword("");
    
  } catch (error) {
    console.log(error)
    setError(true);
  }
};



  return (
    <div>
   
      <div className="login-container">
        <div className="relative img-container">
          <div className="absolute phonecontainer">
            <img src={screenshot1} className="img-animation n1" alt="" />
            <img src={screenshot2} className="img-animation n2" />
            <img src={screenshot3} className="img-animation n3" />
          </div>
          <img src={phones} className="" alt="" />
        </div>

        <div className={isNightMode ? "text-night" : "text-day"}>
          <div className="first-box">
              <img className={`insta-logo ${isNightMode ? 'logo-night' : '' } `} src={instaLogo} alt="" />
                <LoginInput
                  handleEmail={handleEmail}
                  handlePassword={handlePassword}
                  handleSubmit={handleSubmit}
                  email={email}
                  password={password}
                />
                <div>
                  <div className="facebook-login">
                    <img src={facebookIcon} alt="" />
                    <p className={isNightMode ? "text-night" : "text-day"}>
                      Accedi con Facebook
                    </p>
                  </div>

                  <p>Password dimenticata?</p>

                </div>
          </div>

            {error && <p>Password non valida</p>}


            <p className="no-account">
              Non hai un account?<Link to="/register">Iscriviti</Link>
            </p>
          <div className="download-app ">
            <p className="dwload">Scarica l'applicazione</p>
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
