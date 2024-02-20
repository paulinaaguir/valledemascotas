import React from "react";
import Producto from "../components/Producto";
import Productos from "./Productos";
import "../styles/Carrito.css"
const Carrito = () => {
  const carrito = localStorage.getItem("productosEnCarrito");
  console.log(carrito[0])
  return (
    ""
  )
};

export default Carrito;
