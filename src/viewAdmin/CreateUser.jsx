import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/CreateUser.css"
import { showSuccessMessage } from "../components/Notifications";
import { useRegisterUser } from "../hooks/useUser";


const CreateUser = () => {

    const formRef = React.useRef();
    const [dataSave, setDataSave] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData);

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
        <NavBar mostrarEnlaceLogin={true}/>
        <br />  
        <div class="formulario-container">
          <form id="formulario-producto" onSubmit={handleSubmit} ref={formRef}>
            <div class="form-group">
              <label class="label-id" for="id">DNI/ID </label>
              <input name="id" type="text" id="id" required />
            </div>
            <div class="form-group">
              <label class="label-create" for="id">nombre</label>
              <input class = "product-item" name="name" type="text" id="name" required />
            </div>
            <div class="form-group">
              <label class="label-create" for="pass">Contraseña</label>
              <input class = "product-item" name="password" type="password" id="password" required />
            </div>
            <div class="form-group">
              <label class="label-create" for="id">Email</label>
              <input class = "product-item" name="email" type="email" id="email" required />
            </div>
            <div class="form-group">
              <label class="label-referencia" for="id">Contacto</label>
              <input class = "product-item" name="phone" type="tel" id="contacto" required />
            </div>
            <div class="form-group">
              <label class="label-create" for="role">Rol</label>
              <select  id="role" name="role" class="select" required>
                <option disabled selected hidden >eliga algo</option>
                <option value="user">usuario</option>
                <option value="admin">administrador</option>
              </select>
            </div>
            <button type="submit">Crear Producto</button>
            
          </form>
        </div>
      
    </>
    )
};

export default CreateUser;
