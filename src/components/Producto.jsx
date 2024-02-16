import React from 'react';
import "../styles/Producto.css"
const Producto = ({ imagen, precio, referencia, marca }) => {
    return (
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
    );
};

export default Producto;