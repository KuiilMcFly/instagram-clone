import '../Styles/homerRightBar.css';
import propicPlaceHolder from '../assets/propic_placeholder.jpg';

const HomeRightBar = () => {
  return (
    <div className="right-bar">
        <div className='profile-space'>
            <img src={propicPlaceHolder} alt="" />
            <div className='name-nickname'>
                <h3>nickname</h3>
                <p>name</p>
            </div>

            <p>Cambia Account</p>
        </div>
    </div>
  )
}


export default HomeRightBar
