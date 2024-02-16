import React from "react";
import "../styles/NavBar.css"
const NavBar = () => {
    return (
        <>
            <div id="navbar">
                <nav>
                    <a href="/home">Home</a>
                    <a href="/productos">Productos</a>
                    <a href="#">Carrito de Compras</a>
                    <a href="#">Contacto</a>
                    <a href="#">Catálogo de Productos</a>
                </nav>
            </div>
        </>
    )
};

export default NavBar;