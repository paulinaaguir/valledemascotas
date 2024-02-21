import React from "react";
import "../styles/Carrito.css";
import ProductoCarro from "../components/ProductoCarro";
import {Button} from "../components/Button"
const Carrito = () => {
  // localStorage.removeItem() para elimiar el item del local jaja que belleza

  let carrito = localStorage.getItem("productosEnCarrito");

  if (carrito && carrito.trim() !== "") {
    let carrito = localStorage.getItem("productosEnCarrito");

    if (carrito && carrito.trim() !== "") {
      carrito = JSON.parse(carrito);

      const objeto = {
        carrito: carrito,
      };
      if (carrito.length > 0) {
        return (
          <>
            <div className="contenedor">
              <div className="contenedor-flex ">
                {carrito &&
                  carrito.map((producto) => {
                    //el mapeo permite modificar objetos
                    //Se revisa que productos no sea undefined para que no explote, si no es undefined hace lo de la derecha, el mapeo
                    //variable de desicion jaja
                    return (
                      <ProductoCarro
                        marca={producto.marca}
                        imagen={"https://img.freepik.com/vector-premium/peine-perros-gatos-estilo-plano-dibujos-animados-equipo-aseo-cuidado-capa-mascotas-ilustracion-vectorial_384065-520.jpg"}
                        precio={producto.precio}
                        referencia={producto.referencia}
                      />
                    );
                  })}
                  <Button label={"Ayuda"} fn={""}></Button>
              </div>
              
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
