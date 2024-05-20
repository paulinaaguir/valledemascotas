import React from "react";
import { Button } from "../components/Button"
import "../styles/ProductoCarro.css"
const ProductoCarro = ({ imagen, precio, referencia, marca, stock, fn, nombre,cantidad, trueOrFalse,mostrarRef}) => {
  const obtenerProductosEnCarrito = () => {
    // Obtener productos del localStorage
    const productosEnCarritoString = localStorage.getItem("productosEnCarrito");

    // Verificar si la cadena existe y no está vacía
    if (productosEnCarritoString && productosEnCarritoString.trim() !== "") {
      try {
        // Intentar parsear la cadena como JSON
        const productosEnCarrito = JSON.parse(productosEnCarritoString);

        // Verificar si es un array, si no, devolver un array vacío
        return Array.isArray(productosEnCarrito) ? productosEnCarrito : [];
      } catch (error) {
        console.error("Error al parsear productosEnCarrito:", error);
        return [];
      }
    } else {
      // Si la cadena no existe o está vacía, devolver un array vacío
      return [];
    }
  };
  const borrarProducto = () => {
    const productosEnCarrito = obtenerProductosEnCarrito();

    const productoAEliminar = productosEnCarrito.find(
      (producto) => producto.referencia === referencia
    );

    const productosActualizados = productosEnCarrito.filter(
      (producto) => producto.referencia !== referencia
    );

    localStorage.setItem("productosEnCarrito", JSON.stringify(productosActualizados));

    // Actualizar la interfaz de usuario
    // Mostrar un mensaje de confirmación al usuario
    alert(`El producto ${productoAEliminar.nombre} ha sido eliminado del carrito`);
    fn()
  };

  return (
    <>
      <section class="productos-fila">
        <div className="producto">
          <div className="imagen-producto">
            <img src={imagen} alt={marca} />
          </div>
          <div className="informacion-producto">
            <p className="nombre">{nombre}</p>
            <p className="marca">{marca}</p>
            {mostrarRef && <p className="referencia">{referencia}</p>}
            {cantidad && <p className="referencia">{cantidad} unidades</p>}
            {precio && <p className="precio">${precio}</p>}
            {stock && <p className="stock">${stock}</p>}
          </div>
          <div className="buttonCarrito">
            <Button mostrarBoton={trueOrFalse} icon={<span class="material-symbols-outlined">
              delete
            </span>} fn={borrarProducto} />
          </div>

        </div>
      </section>
    </>
  );
};

export default ProductoCarro;
