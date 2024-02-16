import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./views/Home"
import Productos from "./views/Productos"
function App() {
  return (
    <div className="">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/productos' element = {<Productos/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
