import React, { useEffect, useState } from "react";
import "../styles/NavBar.css"
import { ModalForm } from "../components/Modal";
const NavBar = ({mostrarEnlaceLogin,mostrarAlgo}) => {
    const [estadoCarrito, setEstadoCarrito] = useState(false);
    const handleClick = () => {
        setEstadoCarrito(true);
    }
    const closeClick = () => {
        setEstadoCarrito(false);
    }
    
    return (
        <>
            <div id="navbar">
            <h3>Valle de Mascotas</h3>
                <nav>
                    {/* <a href="/productos">Productos</a> */}
                     <a href="/home">Home</a>
                    {mostrarEnlaceLogin && <a href="/login">Login</a>}
                    {/* <a href="#">Catálogo de Productos</a> */}
                   { mostrarAlgo && <a onClick={handleClick} ><img id="imgNav" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" /></a>}
                </nav>
            </div>
            {estadoCarrito!==false && <ModalForm CerrarModal={closeClick} titulo={"Carrito de Compras"}/>}
        </>
    )
};

export default NavBar;