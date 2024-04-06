import React, { useState } from "react";
import "../styles/ComponentCrud.css";
import NavBar from "../components/NavBar";
import { useCreateProduct } from "../hooks/useProduct";
import {showSuccessMessage} from "../components/Notifications.jsx";
const ComponentCrud = () => {
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
      console.log("aa")
        showSuccessMessage("producto guardado");
    }, 800);
  }
  return (
    <>
      <NavBar mostrarAlgo={false} mostrarDelete={true} mostrarProductos={true}/>
      <div className="algo">
        <div class="formulario-container">
          <h2>Crear Producto</h2>
          <form id="formulario-producto" onSubmit={handleSubmit} ref={formRef}>
            <div class="form-group">
              <label for="nombre">Nombre del Producto:</label>
              <input name="nombre" type="text" id="nombre" required />
            </div>
            <div class="form-group">
              <label for="id">marca:</label>
              <input name="marca" type="text" id="marca" required />
            </div>
            <div class="form-group">
              <label for="id">precio:</label>
              <input name="precio" type="text" id="prefio" required />
            </div>
            <div class="form-group">
              <label for="id">referencia:</label>
              <input name="referencia" type="text" id="referencia" required />
            </div>
            <div class="form-group">
              <label for="opcion">tipo:</label>
              <select id="opcion" name="tipo" class="select" required>
                <option disabled selected hidden >eliga algo</option>
                <option value="comida">comida</option>
                <option value="juguete">juguete</option>
                <option value="cepillo">cepillo</option>
              </select>
            </div>
            <button type="submit">Crear Producto</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ComponentCrud;
