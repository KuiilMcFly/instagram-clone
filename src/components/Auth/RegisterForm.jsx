import React, { useState } from "react";
import instragramLogo from '../../assets/Instagram_logo.svg'
import facebookLogo from "../../assets/facebook.png";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../store/actions/handleAuth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
const dispatch = useDispatch();
const [email , setEmail ] = useState("");
const [name , setName ] = useState("");
const [userName , setUserName ] = useState("");
const [password , setPassword ] = useState("");
const error = useSelector(state => state.authReducer.error);
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(auth(email, password, true, userName, name));
    console.log("email e password", email, password, name, userName);
    setEmail("");
    setName("");
    setUserName("");
    setPassword("");
    console.log('ciao');
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <img className="insta-logo" src={instragramLogo} alt="" />
      <h2>Iscriviti per vedere le foto e i video dei tuoi amici</h2>
      <button className="facebook-login">
        <img src={facebookLogo} alt="" />
        <p>Accedi con Facebook</p>
      </button>

      <div className="border-container">
        <div className="border"></div>
        <div>
          <p>o</p>
        </div>
        <div className="border"></div>
      </div>

      <div className="register-inputs">
        <input
          type="email"
          placeholder="Numero di cellulare o indirizzo e-mail"  onChange={(e) => setEmail(e.target.value)}
        />
        <input type="text" placeholder="Nome e Cognome" onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Nome utente" onChange={(e) => setUserName(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </div>

      <div className="AuthInfo">
        <p>
          Le persone che usano i nostri servizi potrebbero aver caricato le tue
          informazioni di contatto su Instagram. Scopri di più
        </p>
        <p>
          Iscrivendoti, accetti le nostre Condizioni. Scopri in che modo
          raccogliamo, usiamo e condividiamo i tuoi dati nella nostra
          Informativa sulla privacy e in che modo usiamo cookie e tecnologie
          simili nella nostra Normativa sui cookie.
        </p>
      </div>

      <button className="complete-register">Avanti</button>
    </form>
  );
};

export default RegisterForm;
