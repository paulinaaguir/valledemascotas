import React, { useEffect, useState } from "react";
import "../components/Producto";
import Producto from "../components/Producto";
import "../styles/Productos.css";
 import imgContainer from "../assets/jugueteGato.jpg"
 import imgContainer1 from "../assets/comidaPerro.jpg"
 import imgContainer2 from "../assets/juguetePerro.jpg"
 import imgContainer3 from "../assets/comidaGato.png"
 import imgContainer4 from "../assets/peineGato.jpg"
 import imgContainer5 from "../assets/jugueteGato.jpg"
 import imgContainer6 from "../assets/comidaPeces.jpg"
 import imgContainer7 from "../assets/cepilloPeces.jpg"
 import imgContainer8 from "../assets/juguetePeces.jpg"
import NavBar from "../components/NavBar"
import { useSeeAll } from "../hooks/useProduct";

let state = false
const Productos = () => {
  function setImage(productName){
    
    if(productName == "comida para gatos"){
      return imgContainer3
    } else if(productName == "comida para perros" || productName == "comida para perro"){
      return imgContainer1
    } else if(productName == "comida para pez"|| productName == "comida para peces"){
      return imgContainer6
    }else if(productName == "juguete para perro" || productName == "juguete para perro"){
      return imgContainer2
    }else if(productName == "juguete para gato"){
      return imgContainer
    }else if(productName == "juguete para perro"){
      return imgContainer2
    }
    
    }
  const agregarCarrito = (producto) => {
    
    if (!state) {
      let bool = false
      try {
        // Obtener productos del localStorage
        let productosEnCarrito = obtenerProductosEnCarrito();
        productosEnCarrito.map((item) => {
          if (item.referencia == producto.referencia) {
            bool = true;
          }
        })
        if (!bool) {
          // Agregar el nuevo producto al array
          productosEnCarrito.push(producto);
        }


        // Guardar el array actualizado en localStorage
        localStorage.setItem(
          "productosEnCarrito",
          JSON.stringify(productosEnCarrito)
        );

        console.log("Producto agregado al carrito");
      } catch (error) {
        console.error("Error al agregar producto al carrito:", error);
      }
    };

  }

  const obtenerProductosEnCarrito = () => {
    // Obtener productos del localStorage
    const productosEnCarritoString = localStorage.getItem("productosEnCarrito");

    // Verificar si la cadena existe y no está vacía
    if (productosEnCarritoString && productosEnCarritoString.trim() !== "") {
      try {
        // Intentar parsear la cadena como JSON
        const productosEnCarrito = JSON.parse(productosEnCarritoString);

        // Verificar si es un array, si no, devolver un array vacío
        return Array.isArray(productosEnCarrito) ? productosEnCarrito : [];
      } catch (error) {
        console.error("Error al parsear productosEnCarrito:", error);
        return [];
      }
    } else {
      // Si la cadena no existe o está vacía, devolver un array vacío
      return [];
    }
  };
  //para poder borrar el hp local xD
  const productoEnCarro = obtenerProductosEnCarrito();

  // let productos = [
  //   //lista de diccionarios [{}]
  //   //esto se hace para poder guardar mas cositas, es un diccionario de datos es como un json xD
  //   {
  //     marca: "Comida para Gato",
  //     pathImg: imgContainer3,
  //     precio: "1000",
  //     referencia: "04",
  //   },
  //   {
  //     marca: "Cepillo para Gato",
  //     pathImg: imgContainer4,
  //     precio: "2000",
  //     referencia: "05",
  //   },
  //   {
  //     marca: "Juguete para Gato",
  //     pathImg: imgContainer5,
  //     precio: "2000",
  //     referencia: "06",
  //   },
  //   {
  //     marca: "Comida para Peces",
  //     pathImg: imgContainer6,
  //     precio: "1000",
  //     referencia: "07",
  //   },
  //   {
  //     marca: "Cepillo para perros",
  //     pathImg: imgContainer7,
  //     precio: "2000",
  //     referencia: "08",
  //   },
  //   {
  //     marca: "yosise",
  //     pathImg: imgContainer8,
  //     precio: "2000",
  //     referencia: "09",
  //   },
  //   {
  //     marca: "Comida para Perro",
  //     pathImg: imgContainer,
  //     precio: "1000",
  //     referencia: "01",
  //   },
  //   {
  //     marca: "Cepillo para Perro",
  //     pathImg: imgContainer1,
  //     precio: "2000",
  //     referencia: "02",
  //   },
  //   {
  //     marca: "Juguete para Perro",
  //     pathImg: imgContainer2,
  //     precio: "2000",
  //     referencia: "03",
  //   }
  // ];



  const [products, setProducts] = useState([]);




  useEffect(() => {
    // Aquí puedes realizar una solicitud HTTP para obtener los datos de la base de datos
    // Supongamos que tienes una función fetchDataFromDatabase para esto
    const fetchData = async () => {
      try {
        const data = await useSeeAll();
        console.log("🚀 ~ fetchData ~ data:", data.productos)
        setProducts(data.productos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  //Cambios evidentes
  //aqui tenemos la barra de navegacion por si deseamos usarla en otro momento xD
  let data = ""
  const [searchInput, setSearchInput] = useState("")

  React.useEffect(() => {

  }, [searchInput, data])

  const FilteredData = (data) => {

    return searchInput == "" ? data : data?.filter(
      (item) => {
        return Object.keys(item).some((text, index) => {
          return item[text]?.toString()?.toLowerCase()?.includes(searchInput.toLowerCase())
        })
      }
    );
  };

  
  return (
    <>
     <NavBar mostrarEnlaceLogin={false} mostrarAlgo={true}/>
      <div class="div-principal">
        <div className="filter">
          <input type="text" className="filterInput" onChange={(e) => {
            setSearchInput(e.target.value)

          }} />
        </div>

        <div class="div-hijo">
          {products &&
            FilteredData(products).map((producto, index) => {
              return (
                <Producto
                nombre = {producto.nombre}
                  marca={producto.marca}
                  imagen={setImage(producto.nombre.toLowerCase())}
                  precio={producto.precio}
                  referencia={producto.referencia}
                  onAgregarAlCarrito={(producto) => {
                    agregarCarrito(producto);
                  }}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Productos;
