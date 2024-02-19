import React from "react";
import "../components/Producto";
import Producto from "../components/Producto";
import "../styles/Productos.css"

const Productos = () => {
  const agregarCarrito = (producto) => {
    let productosEnCarrito = [];
    productosEnCarrito.push(localStorage.getItem("productosEnCarrito"));
    if (productosEnCarrito == null) {
      productosEnCarrito.push(producto);
      localStorage.setItem(productosEnCarrito);
    } else {
      productosEnCarrito = [];
      productosEnCarrito.push(producto);
      localStorage.setItem("productosEnCarrito", productosEnCarrito);
    }
    console.log("shi");
  };
  const productosIzquierda = [
    //lista de diccionarios [{}]
    //esto se hace para poder guardar mas cositas, es un diccionario de datos es como un json xD
    {
      marca: "Comida para perros",
      pathImg: "https://static.vecteezy.com/system/resources/previews/004/830/317/non_2x/food-for-dog-in-bag-isolated-icon-free-vector.jpg",
      precio: "1000",
      referencia: "001",
      agregarCarrito: "true",
    },
    {
      marca: "Cepillo para perros",
      pathImg: "https://img.freepik.com/vector-premium/peine-perros-gatos-estilo-plano-dibujos-animados-equipo-aseo-cuidado-capa-mascotas-ilustracion-vectorial_384065-520.jpg",
      precio: "2000",
      referencia: "002",
    },
    {
      marca: "yosise",
      imagen: "../assets/comida.png",
      precio: "2000",
      referencia: "002",
    },
  ];
  const productosMitad = [
    //lista de diccionarios [{}]
    //esto se hace para poder guardar mas cositas, es un diccionario de datos es como un json xD
    {
      marca: "Comida para perros",
      pathImg: "https://static.vecteezy.com/system/resources/previews/004/830/317/non_2x/food-for-dog-in-bag-isolated-icon-free-vector.jpg",
      precio: "1000",
      referencia: "001",
      agregarCarrito: "true",
    },
    {
      marca: "Cepillo para perros",
      pathImg: "https://img.freepik.com/vector-premium/peine-perros-gatos-estilo-plano-dibujos-animados-equipo-aseo-cuidado-capa-mascotas-ilustracion-vectorial_384065-520.jpg",
      precio: "2000",
      referencia: "002",
    },
    {
      marca: "yosise",
      imagen: "../assets/comida.png",
      precio: "2000",
      referencia: "002",
    },
  ];
  const productosDerecha = [
    //lista de diccionarios [{}]
    //esto se hace para poder guardar mas cositas, es un diccionario de datos es como un json xD
    {
      marca: "Comida para perros",
      pathImg: "https://static.vecteezy.com/system/resources/previews/004/830/317/non_2x/food-for-dog-in-bag-isolated-icon-free-vector.jpg",
      precio: "1000",
      referencia: "001",
      agregarCarrito: "true",
    },
    {
      marca: "Cepillo para perros",
      pathImg: "https://img.freepik.com/vector-premium/peine-perros-gatos-estilo-plano-dibujos-animados-equipo-aseo-cuidado-capa-mascotas-ilustracion-vectorial_384065-520.jpg",
      precio: "2000",
      referencia: "002",
    },
    {
      marca: "yosise",
      imagen: "../assets/comida.png",
      precio: "2000",
      referencia: "002",
    },
  ];
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
            productosIzquierda.map((producto) => {
              //el mapeo permite modificar objetos
              //Se revisa que productos no sea undefined para que no explote, si no es undefined hace lo de la derecha, el mapeo
              return (
                <Producto
                  marca={producto.marca}
                  imagen={producto.pathImg}
                  precio={producto.precio}
                  referencia={producto.referencia}
                  onAgregarAlCarrito={agregarCarrito}
                />
              );
            })}
        </div>
        <div class="div-hijo">
          {productosMitad &&
            productosMitad.map((producto) => {
              //el mapeo permite modificar objetos
              //Se revisa que productos no sea undefined para que no explote, si no es undefined hace lo de la derecha, el mapeo
              return (
                <Producto
                  marca={producto.marca}
                  imagen={producto.pathImg}
                  precio={producto.precio}
                  referencia={producto.referencia}
                  onAgregarAlCarrito={agregarCarrito}
                />
              );
            })}
        </div>
        <div class="div-hijo">{productosDerecha &&
          productosDerecha.map((producto) => {
            return (
              <Producto
                marca={producto.marca}
                imagen={producto.pathImg}
                precio={producto.precio}
                referencia={producto.referencia}
                onAgregarAlCarrito={agregarCarrito}
              />
            );
          })}</div>
      </div>
    </>
  );
};

export default Productos;
