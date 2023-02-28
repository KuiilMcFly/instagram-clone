import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import "./Styles/LoginPage.css";


function App() {
  return (
  <div className="App">
    <Routes>
        <Route exact path="/" element={<LoginPage/>}/>
        <Route exact path="/pages/Home.jsx" element={<Home/>}/>

    </Routes>
  </div>
  )
}

export default App;
