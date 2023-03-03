import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import "./Styles/LoginPage.css";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";


function App() {

  
 


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
