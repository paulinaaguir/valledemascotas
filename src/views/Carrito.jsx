import React, { useEffect, useState } from "react";
import "../styles/Carrito.css";
import ProductoCarro from "../components/ProductoCarro";
import { Button } from "../components/Button";
import { get_informe } from "../services/pdf.service.js"
import { useUpdateStock } from "../hooks/useProduct.js";
const Carrito = () => {
  const [actualizarCarro, setActualizarCarro] = useState(false);
  useEffect(() => {
    if (actualizarCarro == true) {
      setActualizarCarro(false);
    }
  }, [actualizarCarro]);
  // localStorage.removeItem() para elimiar el item del local jaja que belleza
  let carrito = localStorage.getItem("productosEnCarrito");
  if (carrito && carrito.trim() !== "") {
    if (carrito && carrito.trim() !== "") {
      carrito = JSON.parse(carrito);

//actualizar el stock

      if (carrito.length > 0) {
        return (
          <>
            <div className="payments">
              <div className="contenedor">
                <div className="contenedor-flex">
                  {carrito &&
                    carrito.map((producto) => {
                      return (
                        <ProductoCarro
                        nombre={producto.nombre}
                          marca={producto.marca}
                          imagen={producto.imagen}
                          precio={producto.precio}
                          referencia={producto.referencia}
                          cantidad = {producto.cantidad}
                          mostrarRef={false}
                          // stock={producto.stock}
                          fn={(actualizarCarro) => {
                            setActualizarCarro(!actualizarCarro);
                          }}
                          trueOrFalse={true}
                        />
                      );
                    })}
                </div>
                <div className="ayuda">
            <Button label="Pagar" mostrarBoton={true} fn={async () => {
                await get_informe(carrito);
                carrito = '';
                localStorage.setItem("productosEnCarrito", '');
                setActualizarCarro(true)
              }}/>
            </div>
              </div>
              
            </div>
            <br /><br />
            
            
          </>
        );
      } else {
        return <h1>Carrito vacio</h1>;
      }
    }
  }
};

export default Carrito;
