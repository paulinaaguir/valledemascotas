
import React, { useEffect, useState } from "react";
import "../styles/CreateProduct.css";
import { useUpdateProducto } from "../hooks/useProduct.js";
import {showSuccessMessage} from "../components/Notifications.jsx";
const UpdateProduct = ({ data }) => {
  console.log("🚀 ~ UpdateProduct ~ data:", data)
  const formRef = React.useRef();
  const [dataSave, setDataSave] = useState();
  const [dataValue, setDataValue] = useState(data);
  const [inputValues, setInputValues] = useState(dataValue);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    let fetchData = await useUpdateProducto(data);

    setDataSave(fetchData);
  };
  const handleInputChange = (event) => {
    setInputValues(event.target.value);
    
  };
  return (
    <>
      <div class="formulario-container">
        <form id="formulario-producto" onSubmit={handleSubmit} ref={formRef}>
          <div class="form-group">
            <label class="label-nombre" for="nombre">
              Nombre
            </label>
            <input name="nombre" type="text" id="nombre" required value={inputValues.nombre}
              onChange={handleInputChange}/>
          </div>
          <div class="form-group">
            <label class="label-create" for="id">
              Marca
            </label>
            <input
              class="product-item" name="marca" type="text" id="marca" required value={inputValues.marca} onChange={handleInputChange} />
          </div>
          <div class="form-group">
            <label class="label-create" for="id">
              Fecha
            </label>
            <input class="product-item" name="fecha" type="date" id="fecha" required value={inputValues.fecha} onChange={handleInputChange}
            />
          </div>
          <div class="form-group">
            <label class="label-create" for="id">
              Precio
            </label>
            <input
              class="product-item"
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
            <label class="label-create" for="id">
              Stock
            </label>
            <input
              class="product-item"
              name="stock"
              type="text"
              id="stock"
              required
              value={inputValues.stock}
              onChange={handleInputChange}
            />
          </div>
          <div class="form-group">
            <label class="label-create" for="opcion">
              Tipo
            </label>
            <select id="opcion" name="tipo" class="select" required>
              <option disabled selected hidden>
                {inputValues.tipo}
              </option>
              <option value="comida">comida</option>
              <option value="juguete">juguete</option>
              <option value="cepillo">cepillo</option>
            </select>
          </div>
          <button type="submit">Actualizar producto</button>
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
