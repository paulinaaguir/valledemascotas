import React, { useEffect, useState } from "react";
import "../components/Producto";
import Producto from "../components/Producto";
import "../styles/Productos.css";
import NavBar from "../components/NavBar"
import { useSeeAll } from "../hooks/useProduct";

let state = false
const Productos = () => {

  const agregarCarrito = (producto) => {

    if (!state) {
      let bool = false
      try {
        // Obtener productos del localStorage
        let productosEnCarrito = obtenerProductosEnCarrito();
        console.log("🚀 ~ agregarCarrito ~ mentiri  :", productosEnCarrito)

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

  const productoEnCarro = obtenerProductosEnCarrito(); //Se usa esta linea para setear el local como nuevo
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Aquí puedes realizar una solicitud HTTP para obtener los datos de la base de datos
    // Supongamos que tienes una función fetchDataFromDatabase para esto
    const fetchData = async () => {
      try {
        const data = await useSeeAll();

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
      <NavBar mostrarEnlaceLogin={false} mostrarAlgo={true} />
      <div class="div-principal">
        <div className="filter">
          <input type="text" className="filterInput" onChange={(e) => {
            setSearchInput(e.target.value)
          }} />
        </div>

        <div class="div-hijo">
          {products &&
            FilteredData(products).map((producto) => {

              return (
                <Producto
                  nombre={producto.nombre}
                  marca={producto.marca}
                  imagen={producto.url}
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
