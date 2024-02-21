import React from "react";
import "../styles/Producto.css";
import { Button } from "./Button";
import { useState } from "react";
const Producto = ({imagen, precio, referencia, marca, onAgregarAlCarrito,
}) => {
  let productosEnCarrito = localStorage.getItem("productosEnCarrito");
  const [cantidad, setCantidad] = useState(0);
  let producto = {
    imagen: imagen,
    precio: precio,
    referencia: referencia,
    marca: marca,
    cantidad: cantidad,
  };
  let stock = 100;
  const [mostrarBoton, setMostrarBoton] = useState(true);
  if (productosEnCarrito && productosEnCarrito.trim() !== "") {
      productosEnCarrito = JSON.parse(productosEnCarrito);
       
  }
  const handleClickAgregarAlCarrito = (stock) => {
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
          <img src={imagen} alt={marca} style={{width:"16vh", height: "16vh"}}/>
        </div>
        <div className="informacion-producto">
          <p className="marca">{marca}</p>  
          <p className="referencia">{referencia}</p>
          <p className="precio">${precio}</p>
        </div>
        {mostrarBoton && (
          <div>
            <div className="cantidad-botones">
              <Button label="-" fn={handleRestarCantidad} />
              <p className="cantidad">{cantidad}</p>
              <Button
                label="+"
                fn={() => {
                  if (cantidad < stock) {
                    setCantidad(cantidad + 1);
                  }
                }}
              />
            </div>
            <br />
            <Button label="Agregar" fn={handleClickAgregarAlCarrito} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Producto;
