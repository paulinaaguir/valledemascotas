import React, { useState } from "react";
import "../styles/productosCrud.css";
import { useSeeAll } from "../hooks/useProduct.js";
import { showErrorMessage } from "../components/Notifications.jsx";
import { Button } from "../components/Button";
import ProductoCarro from "../components/ProductoCarro.jsx";
//import { useDeleteProduct } from "../hooks/useProduct.js";
import NavBar from "../components/NavBar.jsx"
const ProductosCrud = () => {
  const formRef = React.useRef();
  //   const navigate = useNavigate();
  const [dataResive, setDataResive] = useState();
  const getProducts = async () => {
    // const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   const formData = new FormData(formRef.current);
    //   const data = Object.fromEntries(formData);
    //   // console.log(data)
    //   let fetchData = await getProducts(data);
    //   // console.log(fetchData)
    //   setDataResive(fetchData);
    // };

    try {
      let fetchData = await useSeeAll();
      setDataResive(fetchData.productos);
      console.log(fetchData.productos);
    } catch (e) {
      console.log(e);
    }
  };
  if (dataResive && dataResive !== "error") {
    const algo = dataResive.productos;
    console.log(algo);
  }
  if (dataResive === "error") {
    showErrorMessage("Error al traer productos");
  }
  return (
    <>
    <NavBar mostrarEnlaceLogin={false}/>
      <div className="contenedor">
        <div className="contenedor-flex ">
          {dataResive &&
            dataResive.map((producto) => {
              return (
                <ProductoCarro
                  marca={producto.marca}
                  imagen={producto.imagen}
                  precio={producto.precio}
                  referencia={producto.referencia}
                />
              );
            })}
          <Button label="Pagar" fn={getProducts}></Button>
        </div>
      </div>
    </>
  );
};

export default ProductosCrud;
