import React from "react";
import "../styles/Producto.css";
import { Button } from "./Button";
import { useState } from "react";
const Producto = ({ nombre, imagen, precio, referencia, marca, onAgregarAlCarrito }) => {
  let productosEnCarrito = localStorage.getItem("productosEnCarrito");
  const [cantidad, setCantidad] = useState(1);
  let producto = {
    nombre: nombre,
    imagen: imagen,
    precio: precio,
    referencia: referencia,
    marca: marca,
    cantidad: cantidad
  };

  const [mostrarBoton, setMostrarBoton] = useState(true);
  if (productosEnCarrito && productosEnCarrito.trim() !== "") {
    productosEnCarrito = JSON.parse(productosEnCarrito);

  }
  const handleClickAgregarAlCarrito = () => {
    onAgregarAlCarrito(producto);
    setMostrarBoton(false); // Oculta el botón después de hacer click
  };
  const handleRestarCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <section class="productos-fila">
      <div className="producto">
        <div className="imagen-producto">
          <img src={imagen} alt={marca} style={{ width: "16vh", height: "16vh" }} />
        </div>
        <div className="informacion-producto">
          <p className="nombre">{nombre}</p>
          <p className="marca">{marca}</p>
          <p className="precio">${precio}</p>
        </div>
        {mostrarBoton && (
          <div>
            <div id="botoncito" className="cantidad-botones">
              <Button label="-" fn={handleRestarCantidad} mostrarBoton={true} />
              <p className="cantidad">{cantidad}</p>
              <Button
                label="+"
                fn={() => {
                    setCantidad(cantidad + 1);
                }}
                mostrarBoton={true}
              />
            </div>
            <br />
            <div id="buttonAgregar">
              <Button label="Agregar" fn={handleClickAgregarAlCarrito} mostrarBoton={true} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Producto;
