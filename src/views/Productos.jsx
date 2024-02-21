import React, { useEffect } from "react";
import "../components/Producto";
import Producto from "../components/Producto";
import "../styles/Productos.css";

const Productos = () => {

  const agregarCarrito = (producto) => {
    try {
      // Obtener productos del localStorage
      let productosEnCarrito = obtenerProductosEnCarrito();

      // Agregar el nuevo producto al array
      productosEnCarrito.push(producto);

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

  let productosIzquierda = [
    //lista de diccionarios [{}]
    //esto se hace para poder guardar mas cositas, es un diccionario de datos es como un json xD
    {
      marca: "Comida para perros",
      pathImg:
        "https://static.vecteezy.com/system/resources/previews/004/830/317/non_2x/food-for-dog-in-bag-isolated-icon-free-vector.jpg",
      precio: "1000",
      referencia: "01",
    },
    {
      marca: "Cepillo para perros",
      pathImg:
        "https://img.freepik.com/vector-premium/peine-perros-gatos-estilo-plano-dibujos-animados-equipo-aseo-cuidado-capa-mascotas-ilustracion-vectorial_384065-520.jpg",
      precio: "2000",
      referencia: "02",
    },
    {
      marca: "yosise",
      imagen: "../assets/comida.png",
      precio: "2000",
      referencia: "03",
    },
  ];
  const productosMitad = [
    //lista de diccionarios [{}]
    //esto se hace para poder guardar mas cositas, es un diccionario de datos es como un json xD
    {
      marca: "Comida para perros",
      pathImg:
        "https://static.vecteezy.com/system/resources/previews/004/830/317/non_2x/food-for-dog-in-bag-isolated-icon-free-vector.jpg",
      precio: "1000",
      referencia: "04",
    },
    {
      marca: "Cepillo para perros",
      pathImg:
        "https://img.freepik.com/vector-premium/peine-perros-gatos-estilo-plano-dibujos-animados-equipo-aseo-cuidado-capa-mascotas-ilustracion-vectorial_384065-520.jpg",
      precio: "2000",
      referencia: "05",
    },
    {
      marca: "yosise",
      imagen: "../assets/comida.png",
      precio: "2000",
      referencia: "06",
    },
  ];
  const productosDerecha = [
    //lista de diccionarios [{}]
    //esto se hace para poder guardar mas cositas, es un diccionario de datos es como un json xD
    {
      marca: "Comida para perros",
      pathImg:
        "https://static.vecteezy.com/system/resources/previews/004/830/317/non_2x/food-for-dog-in-bag-isolated-icon-free-vector.jpg",
      precio: "1000",
      referencia: "07",
    },
    {
      marca: "Cepillo para perros",
      pathImg:
        "https://img.freepik.com/vector-premium/peine-perros-gatos-estilo-plano-dibujos-animados-equipo-aseo-cuidado-capa-mascotas-ilustracion-vectorial_384065-520.jpg",
      precio: "2000",
      referencia: "08",
    },
    {
      marca: "yosise",
      imagen: "../assets/comida.png",
      precio: "2000",
      referencia: "09",
    },
  ];
  const nuevosProductosIzquierda = productosIzquierda.map((item) => {
    const productoEnCarroEncontrado = productoEnCarro.find(
      (producto) => item.referencia === producto.referencia
    );

    // Si se encuentra un producto en el carro con la misma referencia, se deshabilita el botón
    return {
      ...item,
      disableButton: !!productoEnCarroEncontrado,
    };
  });
  productosIzquierda = nuevosProductosIzquierda;
  return (
    <>
      {/* <Producto
        marca={item.marca}
        imagen={item.pathImg}
        precio={item.precio}
        referencia={item.referencia}
      /> */}
      <div class="div-principal">
        <div class="div-hijo">
          {productosIzquierda &&
            productosIzquierda.map((producto, index) => {
              //el mapeo permite modificar objetos
              //Se revisa que productos no sea undefined para que no explote, si no es undefined hace lo de la derecha, el mapeo
              //variable de desicion jaja
              return (
                <Producto
                  marca={producto.marca}
                  imagen={producto.pathImg}
                  precio={producto.precio}
                  referencia={producto.referencia}
                  onAgregarAlCarrito={(producto) => {
                    agregarCarrito(producto);
                  }}
                />
              );
            })}
        </div>
        <div class="div-hijo">
          {productosMitad &&
            productosMitad.map((producto, index) => {
              //el mapeo permite modificar objetos
              //Se revisa que productos no sea undefined para que no explote, si no es undefined hace lo de la derecha, el mapeo
              return (
                <Producto
                  marca={producto.marca}
                  imagen={producto.pathImg}
                  precio={producto.precio}
                  referencia={producto.referencia}
                  onAgregarAlCarrito={(producto) => {
                    agregarCarrito(producto);
                  }}
                />
              );
            })}
        </div>
        <div class="div-hijo">
          {productosDerecha &&
            productosDerecha.map((producto, index) => {
              return (
                <Producto
                  marca={producto.marca}
                  imagen={producto.pathImg}
                  precio={producto.precio}
                  referencia={producto.referencia}
                  onAgregarAlCarrito={(producto) => {
                    agregarCarrito(producto);
                  }}
                  disableButton={producto.disableButton}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Productos;
