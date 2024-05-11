import React, { useState } from "react";
import "../styles/CreateAdmin.css"
import { showSuccessMessage } from "../components/Notifications";
import { useRegisterUser } from "../hooks/useUser";

const CreateUser = () => {
  const formRef = React.useRef();
  const [dataSave, setDataSave] = useState();
  const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData);
      
      // Agregar manualmente el rol de usuario
      data.role = "admin";

      let fetchData = await useRegisterUser(data);

      setDataSave(fetchData);
  };

  if (dataSave && dataSave !== "error") {
    setTimeout(() => {
      showSuccessMessage("Usuario registrado");
    }, 800);
  }

  return (
    <>
      <div className="create-container">
        <div class="create-form ">
        <form id="formulario-producto" onSubmit={handleSubmit} ref={formRef}>
          <div className="form-group">
            <label className="label-id" htmlFor="id">DNI/ID </label>
            <input name="id" className="product-item" type="text" id="id" required />
          </div>
          <div className="form-group">
            <label className="label-create" htmlFor="id">nombre</label>
            <input className="product-item" name="name" type="text" id="name" required />
          </div>
          <div className="form-group">
            <label className="label-pass" htmlFor="pass">Contraseña</label>
            <input className="product-item" name="password" type="password" id="password" required />
          </div>
          <div className="form-group">
            <label className="label-create" htmlFor="id">Email</label>
            <input className="product-data" name="email" type="email" id="email" required />
          </div>
          <div className="form-group">
            <label className="label-data" htmlFor="id">Contacto</label>
            <input  className="product-phone" name="phone" type="tel" id="contacto" required />
          </div>
          <button className="buttonCreate" type="submit" >Crear Usuario</button>
        </form>
        </div>
      </div>
    </>);
};

export default CreateUser;
