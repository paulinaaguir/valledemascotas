import "../styles/Deleteproductos.css";
import React, { useState } from "react";
import {
  showSuccessMessage,
  showErrorMessage,
} from "../components/Notifications.jsx";
import { useDeleteProduct } from "../hooks/useProduct.js";
import { Button } from "../components/Button.jsx";

const DeleteProduct = () => {
  const formRef = React.useRef();
  //   const navigate = useNavigate();
  const [dataSession, setDataSession] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    let fetchData = await useDeleteProduct(data);

    setDataSession(fetchData);
  };

  return (
    <>
      <form class="formulario" onSubmit={handleSubmit} ref={formRef}>
        <h1>Formulario</h1>
        <input type="text" placeholder="Ingresa tu información" name="referencia"/>
        <Button
          label={"borrar"}
          type="submit"
        />
      </form>
    </>
  );
};

export default DeleteProduct;
