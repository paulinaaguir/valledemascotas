import React, { useEffect, useState } from "react";
import "../styles/NavBar.css"
import { ModalForm } from "../components/Modal";
const NavBar = () => {
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
            <h3>valle de mascotas</h3>
                <nav>
                    <a href="/home">Home</a>
                    {/* <a href="/productos">Productos</a> */}
                    
                    <a href="/login">Login</a>
                    {/* <a href="#">Catálogo de Productos</a> */}
                    <a onClick={handleClick} ><img id="imgNav" src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" /></a>
                </nav>
            </div>
            {estadoCarrito!==false && <ModalForm CerrarModal={closeClick} titulo={"Carrito de compras"}/>}
        </>
    )
};

export default NavBar;