import '../Styles/loginInput.css';

import instagramlogo from "../assets/instagramlogo.png";
import { Link } from 'react-router-dom';
import Home from "../pages/Home";

                            
const LoginInput = ({handleEmail, handlePassword, handleSubmit, email, password}) => {
    
    return(
        <form onSubmit={handleSubmit}>
            <img src={instagramlogo} alt="" />
    <div className="input-box">
        <div>
            <input value={email} onChange={handleEmail} type="email" autoComplete='username' placeholder='Numero di telefono, nome utente o e-mail' />
        </div>

        <div>
            <input value={password} onChange={handlePassword} type="password" autoComplete='current-password' placeholder='Password' />
        </div>
        
            <button onClick={handleSubmit}>Accedi</button>
        

        <div className='border-container'>
            <div className='border'></div>
            <div><p>o</p></div>
            <div className='border'></div>
        </div>
        
    
    </div>
    </form>
    )
}


export default LoginInput