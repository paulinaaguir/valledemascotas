import React, { useState, useEffect } from "react";
import "../styles/CreateProduct.css";
import { useCreateProduct } from "../hooks/useProduct.js";
import { showSuccessMessage } from "../components/Notifications.jsx";
import { uploadFiles, getUrl, deleteImg } from "../firebase/config.js";

const ComponentCrud = ({handleRefreshPage}) => {
  const formRef = React.useRef();
  const [dataSave, setDataSave] = useState();
  const [imgName, setImageName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imgUrl1, setUrl] = useState('');

  // Este efecto se ejecutará cada vez que imgUrl1 se actualice
  useEffect(() => {

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
      const dataWithUrl = { ...data, url: url };

      // Guardar los datos del producto en la base de datos
      useCreateProduct(dataWithUrl)
      .then(() => {
        // Mostrar mensaje de éxito
        showSuccessMessage("Producto guardado exitosamente");
        
        // Limpiar los campos del formulario
        if (formRef.current) {
          formRef.current.reset();
        }
    
        // Llamar a handleRefreshPage para recargar la página
        handleRefreshPage();
      })
      .catch(error => {
        console.error("Error al guardar el producto:", error);
      });
      setUrl(url);
      // Guardar los datos del producto sin la URL por ahora
      setDataSave(data);
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  return (
    <>
      <div className="create-container">
        <div class="create-form">
        <form id="create-producto" onSubmit={handleSubmit} ref={formRef}>
        <div class="create-img">
            <input name="img" type="file" id="img" className='create-img' onChange={handleChangeUrl} required />
          </div>
          <div class="create-group">
            <label className="create-nombre" for="nombre" >Nombre</label>
            <input name="nombre" type="text" id="nombre" className="create-input" onChange={handleChange} required />
          </div>
          <div class="create-group">
            <label className="create-marca" for="id">Marca</label>
            <input className="create-input" name="marca" type="text" id="marca" required />
          </div>
          <div class="create-group">
            <label className="create-fecha" for="id">Fecha</label>
            <input className="create-input" name="fecha" type="date" id="fecha" />
          </div>
          <div class="create-group">
            <label className="label-precio" for="id">Precio</label>
            <input className="create-input" name="precio" type="text" id="precio" required />
          </div>
          <div class="create-group">
            <label className="label-referencia" for="id">Referencia</label>
            <input className="create-input" name="referencia" type="text" id="referencia" required />
          </div>
          <div class="create-group">
            <label className="label-stock" for="id">Stock</label>
            <input className="create-input" name="stock" type="text" id="stock" required />
          </div>
          <div class="create-group">
            <label className="label-tipo" for="nombre">
              tipo
            </label>
            <input name="tipo" className="create-input" type="text" id="tipo" require/>
          </div>
          <button type="submit" className="buttonProduct">Crear</button>
          
        </form>
        </div>
        </div>
    </>
  );
};

export default ComponentCrud;
