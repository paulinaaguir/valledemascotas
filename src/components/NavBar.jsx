import React, { useEffect, useState } from "react";
import "../styles/NavBar.css"
import { ModalForm } from "../components/Modal";
import Carrito from "../views/Carrito";
import imgContainer from "../assets/CarritoBlanco.png"
import CreateProcuct from "../viewAdmin/CreateProduct"
const NavBar = ({mostrarEnlaceLogin,mostrarAlgo,mostrarCreate,mostrarDelete,mostrarProductos}) => {
    const [estadoCarrito, setEstadoCarrito] = useState(false);
    const handleClick = () => {
        setEstadoCarrito(true);
    }
    const closeClick = () => {
        setEstadoCarrito(false);
    }
    const [estadoCreate, setEstadoCreate] = useState(false);
    const handleClickCreate = () => {
      setEstadoCreate(true);
    }
    const closeClickCreate = () => {
      setEstadoCreate(false);
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
                   { mostrarAlgo && <a onClick={handleClick} ><img id="imgNav" src={imgContainer} /></a>}
                 {  mostrarCreate && <a onClick={handleClickCreate}>Crear producto</a>} 
                   {mostrarDelete && <a href="/delete">Borrar producto</a>}
                   {mostrarProductos && <a href="/crud">Productos</a>}
                </nav>
            </div>
            {estadoCarrito!==false && <ModalForm html={<Carrito/>}CerrarModal={closeClick} titulo={"Carrito de Compras"} width={'auto'}/>}
            {estadoCreate!==false && <ModalForm html={<CreateProcuct/>}CerrarModal={closeClickCreate} width={'500px'}/>}
        </>
    )
};

export default NavBar;