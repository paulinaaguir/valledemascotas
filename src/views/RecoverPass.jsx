import React from "react";
import "../styles/RecoverPass.css";
const RecoverPass = () => {
  
  return (
    <>
      <div class="recover-container">
        <div class="recover-form">
          <form className="form" action="#">
            <h1>Recuperar contraseña</h1>
            <div className="recover-shit">
              <label for="password">Ingrese nueva contraseña</label>
              <input type="password" id="password" name="password" className="recoverInput" placeholder="Ingresa tu contraseña"/>
              <label for="password">Ingrese nueva contraseña</label>
              <input type="password" id="password" className="recoverInput" name="password" placeholder="Ingresa tu nueva contraseña"/>
            </div>
            <button className = "buttonSub" type="submit">Cambiar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecoverPass;
