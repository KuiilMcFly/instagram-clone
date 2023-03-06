import '../Styles/home.css'
import Stories from '../components/stories';
import HomeLeftBar from '../components/HomeLeftBar';
import HomeRightBar from '../components/HomeRightBar';
const Home = () => {
    return(
        <div className='home-structure'>
            <HomeLeftBar/>

            <div className='central-bar'>
                <Stories/>
            </div>
            
            <HomeRightBar/>
        </div>

            
        
    )
}

export default Home