import React, { useEffect, useState } from "react";
import "../styles/NavBar.css"
import { ModalForm } from "../components/Modal";
const NavBar = () => {
    const [estadoCarrito, setEstadoCarrito] = useState(false);
    const handleClick = () => {
        setEstadoCarrito(true);
    }
    const closeClick = () => {
        console.log("hola")
        setEstadoCarrito(false);
    }
    
    return (
        <>
            <div id="navbar">
                <nav>
                    <a href="/home">Home</a>
                    <a href="/productos">Productos</a>
                    <a onClick={handleClick} >Carrito de Compras</a>
                    <a href="#">Contacto</a>
                    <a href="#">Catálogo de Productos</a>
                </nav>
            </div>
            {estadoCarrito!==false && <ModalForm CerrarModal={closeClick} titulo={"Carrito de compras"}/>}
        </>
    )
};

export default NavBar;