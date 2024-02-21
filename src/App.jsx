import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./views/Home"
import Productos from "./views/Productos"
import Carrito from './views/Carrito';
function App() {
  return (
    <div className="">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/productos' element = {<Productos/>}/>
          <Route path='/carrito' element = {<Carrito/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
