import '../Styles/homerRightBar.css';
import propicPlaceHolder from '../assets/propic_placeholder.jpg';
import { Link } from 'react-router-dom';
import SuggestBox from './suggestBox';
import { Navigate } from 'react-router-dom';


const HomeRightBar = () => {
const email = localStorage.getItem('email');
const username = email ? email.substring(0, email.indexOf('@')) : '';

const LogOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("email");
  if (!state) {
    Navigate({ to: "/" });
    return null;
  }
}

  return (
    <div className="right-bar">
        <div className='profile-space'>
            <img src={propicPlaceHolder} alt="" />
            <div className='name-nickname'>
                <Link to={`/pages/profile/${username}`} state={{username}}><h3>{username}</h3></Link>
                <p>name</p>
            </div>

          <Link to={"/"} onClick={LogOut}>
            <p>Logout</p>
          </Link>

        </div>

        <div className='suggest-line'>
          <p>suggerimenti per te</p>
          <Link>Mostra tutti</Link>
        </div>

        <SuggestBox/>
        <SuggestBox/>
        <SuggestBox/>
        <SuggestBox/>
        <SuggestBox/>
    </div>
  )
}


export default HomeRightBar
