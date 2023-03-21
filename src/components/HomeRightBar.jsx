import '../Styles/homerRightBar.css';
import propicPlaceHolder from '../assets/propic_placeholder.jpg';
import { Link } from 'react-router-dom';
import SuggestBox from './suggestBox';


const HomeRightBar = () => {
const email = localStorage.getItem('email');
const username = email.substring(0, email.indexOf('@'));

  return (
    <div className="right-bar">
        <div className='profile-space'>
            <img src={propicPlaceHolder} alt="" />
            <div className='name-nickname'>
                <Link to={`/pages/profile/${username}`} state={{username}}><h3>{username}</h3></Link>
                <p>name</p>
            </div>

            <p>Cambia Account</p>
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
