import React from "react";
import "../styles/RecoverPass.css";
import NavBar from "../components/NavBar";
import { useRecoverPassword } from "../hooks/useUser";
const RecoverPass = () => {

  const formRef = React.useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    console.log("🚀 ~ handleSubmit ~ data:", data)
    
    let response = await useRecoverPassword(data);
    console.log("🚀 ~ handleSubmit ~ response:", response)
    
  };
  return (
    <>
    <NavBar mostrarEnlaceLogin={true}/>
      <div class="recover-container">
        <div class="recover-form">
          <form  className="form" onSubmit={handleSubmit} ref={formRef}>
            <h1>Recuperar contraseña</h1>
            <div className="recover-shit">
            <label for="password">Ingrese su ID</label>
              <input type="text"  name="id" className="recoverInput" placeholder="Ingrese su ID"/>
              <label for="password">Ingrese nueva contraseña</label>
              <input type="password" id="password" name="password" className="recoverInput" placeholder="Ingresa su contraseña"/>
              <label for="password">Ingrese nueva contraseña</label>
              <input type="password" id="password" className="recoverInput" name="password" placeholder="Ingresa su nueva contraseña"/>
            </div>
            <button className = "buttonSub" type="submit">Cambiar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecoverPass;
