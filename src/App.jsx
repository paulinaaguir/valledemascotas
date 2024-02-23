import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Productos from "./views/Productos";
import Carrito from "./views/Carrito";
import Login from "./views/Login.jsx";
import RecoverPass from "./views/RecoverPass.jsx";
import ProductosCrud from "./viewAdmin/productosCrud.jsx"
import RegisterUs from "./views/RegisterUs.jsx"
function App() {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recover" element={<RecoverPass />} />
          <Route path="/crud" element={<ProductosCrud />} />
          <Route path="/register" element={<RegisterUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
