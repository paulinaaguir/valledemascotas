import React, { useState, useEffect } from "react";
import "../styles/CreateProduct.css";
import { useCreateProduct } from "../hooks/useProduct.js";
import { showSuccessMessage } from "../components/Notifications.jsx";
import { uploadFiles, getUrl } from "../firebase/config.js";

const ComponentCrud = () => {
  const formRef = React.useRef();
  const [dataSave, setDataSave] = useState();
  const [imgName, setImageName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imgUrl1, setUrl] = useState('');

  // Este efecto se ejecutará cada vez que imgUrl1 se actualice
  useEffect(() => {
    if (imgUrl1) {
      // Agregar la URL a los datos del producto
      const dataWithUrl = { ...dataSave, url: imgUrl1 };

      // Guardar los datos del producto en la base de datos
      useCreateProduct(dataWithUrl)
        .then(() => {
          // Mostrar mensaje de éxito
          showSuccessMessage("Producto guardado exitosamente");

          // Limpiar los campos del formulario
          if (formRef.current) {
            formRef.current.reset();
          }
        })
        .catch(error => {
          console.error("Error al guardar el producto:", error);
        });
    }
  }, [imgUrl1]);

  const handleChange = (event) => {
    setImageName(event.target.value);
  };

  const handleChangeUrl = (event) => {
    setImgUrl(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    try {
      // Subir el archivo a Firebase
      await uploadFiles(imgUrl, imgName);

      // Obtener la URL del archivo subido y asignarla a imgUrl1
      const url = await getUrl(imgName);
      console.log("🚀 ~ handleSubmit ~ erreuele:", url)
   
      setUrl(url);
      console.log("Santa url"+ imgUrl1)
      console.log("🚀 ~ handleSubmit ~ imgName:", imgName)
      // Guardar los datos del producto sin la URL por ahora
      setDataSave(data);
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  return (
    <>
      <div className="formulario-container">
        <form id="formulario-producto" onSubmit={handleSubmit} ref={formRef}>
          <div className="form-group">
            <input name="img" type="file" id="img" onChange={handleChangeUrl} required />
          </div>
          <div class="form-group">
              <label class="label-nombre" for="nombre" >Nombre</label>
              <input name="nombre" type="text" id="nombre" onChange={handleChange} required />
            </div>
            <div class="form-group">
              <label class="label-create" for="id">Marca</label>
              <input class = "product-item" name="marca" type="text" id="marca" required />
            </div>
            <div class="form-group">
              <label class="label-create" for="id">Fecha</label>
              <input class = "product-item" name="fecha" type="date" id="fecha" required />
            </div>
            <div class="form-group">
              <label class="label-create" for="id">Precio</label>
              <input class = "product-item" name="precio" type="text" id="prefio" required />
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
