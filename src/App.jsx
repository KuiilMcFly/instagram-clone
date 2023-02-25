import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import "./Styles/LoginPage.css";


function App() {
  return (
  <div className="App">
    <Routes>
        <Route exact path="/" element={<LoginPage/>}/>
    </Routes>
  </div>
  )
}

export default App;
