import '../Styles/home.css'
import Stories from '../components/stories';
import HomeLeftBar from '../components/HomeLeftBar';
import HomeRightBar from '../components/HomeRightBar';
import PostsSection from '../components/PostsSection';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    

const [dummyPosts, setDummyPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const resp = await axios.get("/src/data/MOCK_DATA.json");
      const data = resp.data;
      setDummyPosts(data);
    }
    fetchPosts();
  }, []);




    return(
        <div className='home-structure'>
            
            <HomeLeftBar/>

            <div className='central-bar'>
                <Stories
                dummyPosts={dummyPosts}
                />
                <PostsSection
                dummyPosts={dummyPosts}
               
                />
            </div>
            
            <HomeRightBar/>
        </div>

            
        
    )
}

export default Home