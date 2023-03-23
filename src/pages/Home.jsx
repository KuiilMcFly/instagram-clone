import '../Styles/home.css'
import Stories from '../components/stories';
import HomeLeftBar from '../components/HomeLeftBar';
import HomeRightBar from '../components/HomeRightBar';
import PostsSection from '../components/PostsSection';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    

const [posts, setPosts] = useState([]);

useEffect(() => {
  async function fetchPosts() {
    const resp = await axios.get('https://instagram-clone-7ee14-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
    const data = resp.data;
    
    const dataArray = Object.entries(data).map(([key, value]) => ({id: key, firebaseId: key, ...value}));
    setPosts(dataArray);
  }
  fetchPosts();
}, []);





    return(
        <div className='home-structure'>
            
            <HomeLeftBar/>

            <div className='central-bar'>
                <Stories
                posts={posts}
                />
                <PostsSection
                posts={posts}
               
                />
            </div>
            
            <HomeRightBar posts={posts}/>
        </div>

            
        
    )
}

export default Home