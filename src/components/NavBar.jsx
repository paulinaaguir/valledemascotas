import React, { useEffect, useState } from "react";
import "../styles/NavBar.css"
import { ModalForm } from "../components/Modal";
import { useNavigate } from "react-router";
import CreateProcuct from "../viewAdmin/CreateProduct.jsx"
import CreateUser from "../viewAdmin/CreateUser.jsx"
import Carrito from "../views/Carrito.jsx"
const NavBar = ({ mostrarEnlaceLogin, mostrarAlgo, mostrarCreate, mostrarProductos,mostrarCreateAdmin }) => {

    const navigate = useNavigate();

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
    const [estadoCreateAdmin, setEstadoCreateAdmin] = useState(false);
    const handleClickCreateAmin = () => {
        setEstadoCreateAdmin(true);
    }
    const closeClickCreate = () => {
        setEstadoCreate(false);
    }
    const closeClickCreateAdmin = () => {
        setEstadoCreateAdmin(false);
    }
    return (
        <>
            <div id="navbar">
                <h3>Valle de Mascotas</h3>
                <nav>
                    {/* <a href="/productos">Productos</a> */}
                    <a onClick={() => {
                        navigate('/home')
                    }}><span class="material-symbols-outlined">
                            home
                        </span></a>
                    {mostrarEnlaceLogin && <a onClick={() => {
                        navigate('/login');
                    }}><span>
                            Login
                        </span></a>}
                    {mostrarAlgo && <a onClick={handleClick} ><span class="material-symbols-outlined">
                        shopping_cart
                    </span></a>}
                    {mostrarCreate && <a className="createProduct" onClick={handleClickCreate}>Crear producto</a>}
                    {mostrarCreateAdmin && <a className="createProduct" onClick={handleClickCreateAmin}>Crear Administrador</a>}
                    {mostrarProductos && <a href="/crud">Productos</a>}
                    
                </nav>
            </div>
            {estadoCarrito !== false && <ModalForm html={<Carrito />} CerrarModal={closeClick} titulo={"Carrito de Compras"} width={'auto'} />}
            {estadoCreate !== false && <ModalForm html={<CreateProcuct />} CerrarModal={closeClickCreate} width={'49.5%'} />}
            {estadoCreateAdmin !== false && <ModalForm html={<CreateUser/>} CerrarModal={closeClickCreateAdmin} width={'60%'} />}
            
        </>
    )
};

export default NavBar;