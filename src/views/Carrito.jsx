import React, { useEffect, useState } from "react";
import "../styles/Carrito.css";
import ProductoCarro from "../components/ProductoCarro";
import { Button } from "../components/Button";

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

      const objeto = {
        carrito: carrito,
      };
      if (carrito.length > 0) {
        return (
          <>
            <div className="payments">
              <div className="contenedor">
                <div className="contenedor-flex ">
                  {carrito &&
                    carrito.map((producto) => {
                      return (
                        <ProductoCarro
                          marca={producto.marca}
                          imagen={producto.imagen}
                          precio={producto.precio}
                          referencia={producto.referencia}
                          fn={(actualizarCarro) => {
                            setActualizarCarro(!actualizarCarro);
                          }}
                          trueOrFalse={true}
                        />
                      );
                    })}

                 
                </div>
              </div>
              <Button label="Pagar" mostrarBoton={true}></Button>
            </div>
          </>
        );
      } else {
        return <h1>Carrito vacio</h1>;
      }
    }
  }
};

export default Carrito;
