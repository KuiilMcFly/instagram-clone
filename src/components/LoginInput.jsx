import '../Styles/loginInput.css';
import facebookIcon from '../assets/facebook.png';
import instagramlogo from "../assets/instagramlogo.png";
const LoginInput = () => {
    return(
        <form>
            <img src={instagramlogo} alt="" />
    <div className="input-box">
        <div>
            <input type="email" autoComplete='username' placeholder='Numero di telefono, nome utente o e-mail' />
        </div>

        <div>
            <input type="password" autoComplete='current-password' placeholder='Password' />
        </div>

        <button>Accedi</button>

        <div className='border-container'>
            <div className='border'></div>
            <div><p>o</p></div>
            <div className='border'></div>
        </div>
        
        <div className='facebook-login'>
            <img src={facebookIcon} alt="" />
            <p>Accedi con Facebook</p>
        </div>

        <p>Password dimenticata?</p>
    </div>
    </form>
    )
}


export default LoginInput