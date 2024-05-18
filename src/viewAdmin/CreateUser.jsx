import React, { useState } from "react";
import "../styles/CreateAdmin.css"
import { showSuccessMessage } from "../components/Notifications";
import { useRegisterUser } from "../hooks/useUser";

const CreateUser = () => {
// este es el modulo para crear un usuario administrador, solo se va a poder crear por un usuario de rango Administrador
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
      <div className="admin-container">
        <div class="admin-form">
        <form id="admin-producto" onSubmit={handleSubmit} ref={formRef}>
          <div className="admin-group">
            <label className="admin-id" htmlFor="id">DNI/ID </label>
            <input name="id" className="product-item" type="text" id="id" required />
          </div>
          <div className="admin-group">
            <label className="admin-create" htmlFor="id">nombre</label>
            <input className="admin-item" name="name" type="text" id="name" required />
          </div>
          <div className="admin-group">
            <label className="admin-pass" htmlFor="pass">Contraseña</label>
            <input className="admin-item" name="password" type="password" id="password" required />
          </div>
          <div className="admin-group">
            <label className="admin-create" htmlFor="id">Email</label>
            <input className="admin-data" name="email" type="email" id="email" required />
          </div>
          <div className="admin-group">
            <label className="admin-data" htmlFor="id">Contacto</label>
            <input  className="admin-phone" name="phone" type="tel" id="contacto" required />
          </div>
          <button className="buttonCreate" type="submit" >Crear</button>
        </form>
        </div>
      </div>
    </>);
};

export default CreateUser;
