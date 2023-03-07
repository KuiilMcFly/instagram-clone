import {AiOutlineHeart} from 'react-icons/ai';
import {FaRegComment} from 'react-icons/fa';
import {TbBrandTelegram} from 'react-icons/tb';
import {BsBookmark} from 'react-icons/bs';
import '../Styles/userinteractions.css';


const UserInteractions = () => {
  return (
    <div className='interactions-box'>
        <div>
            <AiOutlineHeart/>
            <FaRegComment/>
            <TbBrandTelegram/>
        </div>
            <BsBookmark/>
    </div>
  )
}


export default UserInteractions
