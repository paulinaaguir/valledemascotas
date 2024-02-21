import React from "react";

const ProductoCarro = ({imagen, precio, referencia, marca}) => {
    return (
        <section class="productos-fila">
          <div className="producto">
            <div className="imagen-producto">
              <img src={imagen} alt={marca} />
            </div>
            <div className="informacion-producto">
              <p className="marca">{marca}</p>  
              <p className="referencia">{referencia}</p>
              <p className="precio">${precio}</p>
            </div>
          </div>
        </section>
      );
};

export default ProductoCarro;
