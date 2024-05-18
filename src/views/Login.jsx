import "../styles/Loguin.css";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import {
  showSuccessMessage,
  showErrorMessage,
} from "../components/Notifications.jsx";
import { useLogUser } from "../hooks/useUser.js";
import NavBar from "../components/NavBar";
import imgContainer5 from "../assets/perro1.webp";
import imgContainer6 from "../assets/gato.png";
import imgContainer7 from "../assets/perro2.png";
import imgContainer8 from "../assets/perro3.webp";
import imgContainer9 from "../assets/pez.png";
import Decorate from "../components/Decorate";

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
    navigate("/crearUser");
  };
  const passChange = async () => {
    navigate("/recover");
  };

  if (dataSession && dataSession !== "error") {
    setTimeout(() => {
      const algo = dataSession.response.role;
      console.log(algo);
      if (algo == "admin") {
        showSuccessMessage("admin Logged");
        navigate("/inventario");
      } else if (algo == "user") {
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
    <Decorate left={"90%"}top={"15rem"} width={"70px"} url={imgContainer9} rotate={"rotate(300deg)"}/>
    <Decorate left={"26%"}top={"30rem"} width={"70px"} url={imgContainer9} rotate={"rotate(300deg)"}/>
     <Decorate left={"0%"}top={"20rem"} width={"70px"} url={imgContainer8} rotate={"rotate(300deg)"}/>
     <Decorate left={"65%"}top={"8rem"} width={"70px"} url={imgContainer8} rotate={"rotate(300deg)"}/>
      <Decorate left={"80%"}top={"30rem"} width={"70px"} url={imgContainer6} rotate={"rotate(400deg)"}/>
      <Decorate left={"15%"}top={"10rem"} width={"100px"} url={imgContainer5} rotate={"rotate(400deg)"}/>
      <Decorate left={"2%"}top={"34rem"} width={"90px"} url={imgContainer7} rotate={"rotate(360deg)"}/>
      
      <NavBar mostrarEnlaceLogin={false} />
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
                className="loguinInput"
              />
            </div>
            <div class="input-group">
              <label for="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                className="loguinInput"
              />
            </div>
            <button className="buttonLog" type="submit">
              Ingresar
            </button>
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
