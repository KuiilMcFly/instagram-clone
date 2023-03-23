import {AiOutlineHeart} from 'react-icons/ai';
import {FaRegComment} from 'react-icons/fa';
import {TbBrandTelegram} from 'react-icons/tb';
import {BsBookmark} from 'react-icons/bs';
import { useState } from 'react';
import '../Styles/userinteractions.css';
import axios from 'axios';


const UserInteractions = ({setIsOpen, id, firebaseId}) => {
  const [heartColor, setHeartColor] = useState('white');

  const handleClickHeart = async () => {

    let liked = 0;
    
    setHeartColor('red');
    liked++
    if(heartColor === 'red') {
      liked--;
      setHeartColor('white');
    }

    const url = `https://instagram-clone-7ee14-default-rtdb.europe-west1.firebasedatabase.app/posts/${firebaseId}.json`;

    const resp = await axios.patch(url, {liked})


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
