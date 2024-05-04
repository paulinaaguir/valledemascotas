import React, { useEffect, useState } from "react";
import "../styles/CreateProduct.css";
import { useCreateProduct } from "../hooks/useProduct.js";
import {showSuccessMessage} from "../components/Notifications.jsx";

const ComponentCrud = () =>{
  const formRef = React.useRef();
  const [dataSave, setDataSave] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    let fetchData = await useCreateProduct(data);

    setDataSave(fetchData);
  };

 
  if (dataSave && dataSave !== "error") {
    setTimeout(() => {
        showSuccessMessage("producto guardado");
    }, 800);
  }
 
  return (
    <>
        <div class="formulario-container">
          <form id="formulario-producto" onSubmit={handleSubmit} ref={formRef}>
            <div class="form-group">
              <label class="label-nombre" for="nombre">Nombre</label>
              <input name="nombre" type="text" id="nombre" required />
            </div>
            <div class="form-group">
              <label class="label-create" for="id">Marca</label>
              <input class = "product-item" name="marca" type="text" id="marca" required />
            </div>
            <div class="form-group">
              <label class="label-create" for="id">Fecha</label>
              <input class = "product-item" name="fecha" type="date" id="fecha"/>
            </div>
            <div class="form-group">
              <label class="label-create" for="id">Precio</label>
              <input class = "product-item" name="precio" type="text" id="precio" required />
            </div>
            <div class="form-group">
              <label class="label-referencia" for="id">Referencia</label>
              <input class = "product-item" name="referencia" type="text" id="referencia" required />
            </div>
            <div class="form-group">
              <label class="label-create" for="id">Stock</label>
              <input class = "product-item" name="stock" type="text" id="stock" required />
            </div>
            <div class="form-group">
              <label class="label-create" for="opcion">Tipo</label>
              <select  id="opcion" name="tipo" class="select" required>
                <option disabled selected hidden >eliga algo</option>
                <option value="comida">comida</option>
                <option value="juguete">juguete</option>
                <option value="cepillo">cepillo</option>
              </select>
            </div>
            <button type="submit">Crear Producto</button>
            
          </form>
        </div>
      
    </>
  );
};

export default ComponentCrud;
