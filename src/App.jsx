import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import "./Styles/LoginPage.css";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";


function App() {
  
  const theme = localStorage.getItem('mode')
  if(theme && theme === 'night') {
    document.body.classList.add("night-mode");
    console.log(document.body.classList);
  }
  return (
  <div className="App">
    <Routes>
        <Route exact path="/" element={<LoginPage/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/home" element={<Home/>}/>

    </Routes>
  </div>
  )
}

export default App;
