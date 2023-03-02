import React from 'react';
import instagramLogo from '../../assets/instagramlogo.png';
import facebookLogo from '../../assets/facebook.png';

const RegisterForm = () => {
  return (
    <form>
        <img src={instagramLogo} alt="" />
        <h2>Iscriviti per vedere le foto e i video dei tuoi amici</h2>
        <button>
            <img src={facebookLogo} alt="" />
            <p>Accedi con Facebook</p>
        </button>

        <div className='border-container'>
            <div className='border'></div>
            <div><p>o</p></div>
            <div className='border'></div>
        </div>

        <div className="register-inputs">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="password" />
        </div>

        <div className="AuthInfo">
            <p>Le persone che usano i nostri servizi potrebbero aver caricato le tue informazioni di contatto su Instagram. Scopri di più</p>
            <p>Iscrivendoti, accetti le nostre Condizioni. Scopri in che modo raccogliamo, usiamo e condividiamo i tuoi dati nella nostra Informativa sulla privacy e in che modo usiamo cookie e tecnologie simili nella nostra Normativa sui cookie.</p>
        </div>

        <button>Avanti</button>

    </form>
  )
}

export default RegisterForm