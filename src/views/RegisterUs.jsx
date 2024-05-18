import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/CreateUser.css"
import { showSuccessMessage } from "../components/Notifications";
import { useRegisterUser } from "../hooks/useUser";
import Decorate from "../components/Decorate";
import imgContainer5 from "../assets/perro1.webp";
import imgContainer6 from "../assets/gato.png";
import imgContainer7 from "../assets/perro2.png";
import imgContainer8 from "../assets/perro3.webp";
import imgContainer9 from "../assets/pez.png";
import { useNavigate } from "react-router-dom";
const RegisterUs = () => {
  //este es el modulo para crear un usuario comprador
  const navigate = useNavigate();
  const formRef = React.useRef();
  const [dataSave, setDataSave] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    // Agregar manualmente el rol de usuario
    data.role = "user";

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
      <Decorate left={"90%"} top={"15rem"} width={"70px"} url={imgContainer9} rotate={"rotate(300deg)"} />
      <Decorate left={"26%"} top={"30rem"} width={"70px"} url={imgContainer9} rotate={"rotate(300deg)"} />
      <Decorate left={"0%"} top={"20rem"} width={"70px"} url={imgContainer8} rotate={"rotate(300deg)"} />
      <Decorate left={"65%"} top={"8rem"} width={"70px"} url={imgContainer8} rotate={"rotate(300deg)"} />
      <Decorate left={"80%"} top={"30rem"} width={"70px"} url={imgContainer6} rotate={"rotate(400deg)"} />
      <Decorate left={"15%"} top={"10rem"} width={"100px"} url={imgContainer5} rotate={"rotate(400deg)"} />
      <Decorate left={"2%"} top={"34rem"} width={"90px"} url={imgContainer7} rotate={"rotate(360deg)"} />
      <NavBar mostrarEnlaceLogin={false} />
      <div className="user-container">
        <div class="user-form ">
          <form id="user-producto" onSubmit={handleSubmit} ref={formRef}>
            <h1>Crear Usuario</h1>
            <div className="user-group">
              <label className="user-id" htmlFor="id">DNI/ID </label>
              <input name="id" className="user-item" type="text" id="id" required />
            </div>
            <div className="user-group">
              <label className="user-create" htmlFor="id">nombre</label>
              <input className="user-item" name="name" type="text" id="name" required />
            </div>
            <div className="user-group">
              <label className="user-pass" htmlFor="pass">Contraseña</label>
              <input className="user-item" name="password" type="password" id="password" required />
            </div>
            <div className="user-group">
              <label className="user-create" htmlFor="id">Email</label>
              <input className="user-data" name="email" type="email" id="email" required />
            </div>
            <div className="user-group">
              <label className="user-data" htmlFor="id">Contacto</label>
              <input className="user-phone" name="phone" type="tel" id="contacto" required />
            </div>
            <button className="buttonCreate" type="submit" onClick={
              navigate("/login")
            }>Crear</button>
          </form>
        </div>
      </div>
    </>);
};

export default RegisterUs;
