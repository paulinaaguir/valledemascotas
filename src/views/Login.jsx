import "../styles/Loguin.css";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import {
  showSuccessMessage,
  showErrorMessage,
} from "../components/Notifications.jsx";
import { useLogUser } from "../hooks/useUser.js";
import NavBar from "../components/NavBar";


const Login = () => {
 
  const formRef = React.useRef();
  const navigate = useNavigate();
  const [dataSession, setDataSession] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    // console.log(data)
    let fetchData = await useLogUser(data);
    // console.log(fetchData)
    setDataSession(fetchData);
  };

  const registerAction = async () => {
    navigate("/register");
  };
  const passChange = async () => {
    navigate("/recover");
  };
  if (dataSession && dataSession !== "error") {
    setTimeout(() => {
     const algo = dataSession.response.role
     console.log(algo)
      if (algo == "admin") {
        showSuccessMessage("admin Logged");
        navigate("/crud");
      } else {
        showSuccessMessage("user Logged");
        navigate("/productos");
      }
    }, 1000);
  }
  if (dataSession === "error") {
    showErrorMessage("Error al logearse");
  }

  return (
    <>
     <NavBar mostrarEnlaceLogin={false}/>
      <div class="login-container">
        <div class="login-form">
          <form className="form" onSubmit={handleSubmit} ref={formRef}>
            <h1>Iniciar sesión</h1>
            <div class="input-group">
              <label for="username">Id</label>
              <input
                type="text"
                id="username"
                name="id"
                placeholder="Ingresa tu usuario"
              />
            </div>
            <div class="input-group">
              <label for="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <button className = "buttonSub" type="submit">Ingresar</button>
            <br />
            <br />
            <a onClick={passChange}>¿Olvidaste tu contraseña?</a>
            <a onClick={registerAction}>Crear Cuenta</a>
          </form>
        </div>
        <div class="login-image"></div>
      </div>
    </>
  );
};

export default Login;
