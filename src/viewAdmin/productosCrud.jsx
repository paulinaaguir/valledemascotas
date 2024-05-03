import React, { useState, useEffect } from "react";
import "../styles/productosCrud.css";
import { useSeeAll } from "../hooks/useProduct.js";
import { showErrorMessage } from "../components/Notifications.jsx";
import { Button } from "../components/Button";
import ProductoCarro from "../components/ProductoCarro.jsx";
import imgContainer from "../assets/jugueteGato.jpg";
import imgContainer1 from "../assets/peinePerro.jpg";
import imgContainer2 from "../assets/juguetePerro.jpg";
import imgContainer3 from "../assets/comidaGato.png";
import imgContainer4 from "../assets/peineGato.jpg";
import imgContainer5 from "../assets/jugueteGato.jpg";
import imgContainer6 from "../assets/comidaPeces.jpg";
import imgContainer7 from "../assets/cepilloPeces.jpg";
import imgContainer8 from "../assets/juguetePeces.jpg";
import imgContainer9 from "../assets/comidaPerro.jpg"
//import { useDeleteProduct } from "../hooks/useProduct.js";
import NavBar from "../components/NavBar.jsx";
const ProductosCrud = () => {
  const formRef = React.useRef();
  //   const navigate = useNavigate();
  const [dataResive, setDataResive] = useState();
  function setImage(productName){
    
    if(productName == "comida para gatos"){
      return imgContainer3
    } else if(productName == "comida para perro"){
      return imgContainer9
    } else if(productName == "comida para pez"){
      return imgContainer6
    }else if(productName == "juguete para perro"){
      return imgContainer2
    }else if(productName == "juguete para gato"){
      return imgContainer
    }else if(productName == "juguete para perro"){
      return imgContainer2
    }
    
    }
  
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
  useEffect(() => {
    getProducts();
  }, []); // Empty dependency array means this effect will run once after the initial render

  return (
    <>
    
      <NavBar mostrarEnlaceLogin={false} mostrarCreate={true} mostrarDelete={true} />
      <div className="contenedor">
        <div className="contenedor-flex ">
          {dataResive &&
            dataResive.map((producto, index) => {
              return (
                <ProductoCarro
                  nombre={producto.nombre}
                  marca={producto.marca}
                  imagen={setImage(producto.nombre.toLowerCase())}
                  precio={producto.precio}
                  referencia={producto.referencia}
                  trueOrFalse={true}
                  
                />
              );
            })}
             
        </div>
       
      </div>
    </>
  );
};

export default ProductosCrud;
