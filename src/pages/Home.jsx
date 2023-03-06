import '../Styles/home.css'
import Stories from '../components/stories';
import HomeLeftBar from '../components/HomeLeftBar';
const Home = () => {
    return(
        <div className='home-structure'>
            <HomeLeftBar/>
            <Stories/>
        </div>

            
        
    )
}

export default Home