import React from "react";
import "../styles/RecoverPass.css";
import NavBar from "../components/NavBar";
import { useRecoverPassword } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import Decorate from "../components/Decorate";
import imgContainer5 from "../assets/perro1.webp";
import imgContainer6 from "../assets/gato.png";
import imgContainer7 from "../assets/perro2.png";
import imgContainer8 from "../assets/perro3.webp";
import imgContainer9 from "../assets/pez.png"
const RecoverPass = () => {

  const formRef = React.useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    console.log("🚀 ~ handleSubmit ~ data:", data)
    navigate("/login")
  };
  return (
    <>
    <NavBar mostrarEnlaceLogin={false}/>\
    <Decorate left={"90%"}top={"15rem"} width={"70px"} url={imgContainer9} rotate={"rotate(300deg)"}/>
    <Decorate left={"26%"}top={"30rem"} width={"70px"} url={imgContainer9} rotate={"rotate(300deg)"}/>
     <Decorate left={"0%"}top={"20rem"} width={"70px"} url={imgContainer8} rotate={"rotate(300deg)"}/>
     <Decorate left={"65%"}top={"8rem"} width={"70px"} url={imgContainer8} rotate={"rotate(300deg)"}/>
      <Decorate left={"80%"}top={"30rem"} width={"70px"} url={imgContainer6} rotate={"rotate(400deg)"}/>
      <Decorate left={"15%"}top={"10rem"} width={"100px"} url={imgContainer5} rotate={"rotate(400deg)"}/>
      <Decorate left={"2%"}top={"34rem"} width={"90px"} url={imgContainer7} rotate={"rotate(360deg)"}/>
      <div class="recover-container">
        <div class="recover-form">
          <form  className="form" onSubmit={handleSubmit} ref={formRef}>
            <h1>Recuperar contraseña</h1>
            <div className="recover-shit">
            <div className="recover-group">
            <label for="password">Ingrese su ID</label>
              <input type="text"  name="id" className="recoverInput" placeholder="Ingrese su ID"/>
            </div>
            <div className="recover-group">
              <label for="password">Ingrese nueva contraseña</label>
              <input type="password" id="password" name="password" className="recoverInput" placeholder="Ingresa su contraseña"/>
              </div>
              <div className="recover-group">
              <label for="password">Ingrese nueva contraseña</label>
              <input type="password" id="password" className="recoverInput" name="password" placeholder="Ingresa su nueva contraseña"/>
              </div>
            </div>
            <button className = "buttonSub" type="submit">Cambiar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecoverPass;
