
import React, { useEffect, useState } from "react";
import "../styles/UpdateProduct.css";
import { useUpdateProducto } from "../hooks/useProduct.js";
import { showSuccessMessage } from "../components/Notifications.jsx";
const UpdateProduct = ({ data, handleUpdateTrigger}) => {
  console.log("🚀 ~ UpdateProduct ~ data:", data)
  const formRef = React.useRef();
  const [dataValue, setDataValue] = useState(data);
  const [inputValues, setInputValues] = useState(dataValue);
// Dentro de tu componente UpdateProduct
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(formRef.current);
  const data = Object.fromEntries(formData);

  try {
    await useUpdateProducto(data);
    // Mostrar mensaje de éxito
    showSuccessMessage("Producto actualizado");

    // Limpiar los campos del formulario
    if (formRef.current) {
      formRef.current.reset();
    }

    // Llamar a la función handleUpdateTrigger proporcionada desde ProductInventory
    handleUpdateTrigger(); // Aquí estás invocando correctamente la función
  } catch (error) {
    console.error("Error al actualizar producto:", error);
  }
};
  const handleInputChange = (event) => {
    setInputValues(event.target.value);

  };
  return (
    <>
      <div className="formulario-container">
        <form id="formulario-producto" onSubmit={handleSubmit} ref={formRef}>
          <div class="form-group">
            <label className="label-nombre" for="nombre">
              Nombre
            </label>
            <input name="nombre" className="input-name" type="text" id="nombre" required value={inputValues.nombre}
              onChange={handleInputChange} />
          </div>
          <div class="form-group">
            <label class="label-createMarca" for="id">
              Marca
            </label>
            <input
              className="product-itemMarca" name="marca" type="text" id="marca" required value={inputValues.marca} onChange={handleInputChange} />
          </div>
          <div class="form-group">
            <label class="label-createFecha" for="id">
              Fecha
            </label>
            <input className="product-itemFecha" name="fecha" type="date" id="fecha" required value={inputValues.fecha} onChange={handleInputChange}
            />
          </div>
          <div class="form-group">
            <label className="label-createPrecio" for="id">
              Precio
            </label>
            <input
              className="product-itemProd"
              name="precio"
              type="text"
              id="prefio"
              required
              value={inputValues.precio}
              onChange={handleInputChange}
            />
          </div>
          <div class="form-group">
            <label class="label-referencia" for="id">
              Referencia
            </label>
            <input
              class="product-item"
              name="referencia"
              type="text"
              id="referencia" value={dataValue.referencia}
              required
            />
          </div>
          <div class="form-group">
            <label className="label-createMarca" for="id">
              Stock
            </label>
            <input
              class="product-itemMarca"
              name="stock"
              type="text"
              id="stock"
              required
              value={inputValues.stock}
              onChange={handleInputChange}
            />
          </div>
          <div class="form-group">
            <label className="label-nombre" for="nombre">
              tipo
            </label>
            <input name="tipo" className="input-tipo" type="text" id="tipo" required value={inputValues.tipo}
              onChange={handleInputChange} />
          </div>
          <button className="buttonUpdate" type="submit">Actualizar producto</button>
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
