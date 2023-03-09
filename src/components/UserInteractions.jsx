import {AiOutlineHeart} from 'react-icons/ai';
import {FaRegComment} from 'react-icons/fa';
import {TbBrandTelegram} from 'react-icons/tb';
import {BsBookmark} from 'react-icons/bs';
import '../Styles/userinteractions.css';


const UserInteractions = ({setIsOpen}) => {

  return (
    <div className='interactions-box'>
        <div>
            <AiOutlineHeart size={25}/>
            <FaRegComment size={25} onClick={() => setIsOpen(true)}/>
            <TbBrandTelegram size={25}/>
        </div>
            <BsBookmark size={25}/>
    </div>
  )
}


export default UserInteractions
