import {AiOutlineHeart} from 'react-icons/ai';
import {FaRegComment} from 'react-icons/fa';
import {TbBrandTelegram} from 'react-icons/tb';
import {BsBookmark} from 'react-icons/bs';
import { useState } from 'react';
import '../Styles/userinteractions.css';


const UserInteractions = ({setIsOpen}) => {

  const [heartColor, setHeartColor] = useState('white');

  const handleClickHeart = () => {
    setHeartColor('red');
    if(heartColor === 'red') {
      setHeartColor('white');
    }
  };

  return (
    <div className='interactions-box'>
        <div>
            <AiOutlineHeart size={25} color={heartColor} onClick={handleClickHeart} />
            <FaRegComment size={25} onClick={() => setIsOpen(true)}/>
            <TbBrandTelegram size={25}/>
        </div>
            <BsBookmark size={25}/>
    </div>
  )
}


export default UserInteractions
