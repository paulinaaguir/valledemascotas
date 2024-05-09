import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import NavBar from "../components/NavBar";
import imgContainer from "../assets/perritoFeliz.png";
import imgContainer2 from "../assets/gatoFeliz.webp";
import imgContainer3 from "../assets/facebook.webp";
import imgContainer4 from "../assets/ig.png";
import imgContainer5 from "../assets/perro1.webp";
import imgContainer6 from "../assets/gato.png";
import imgContainer7 from "../assets/perro2.png";
import imgContainer8 from "../assets/perro3.webp";
import imgContainer9 from "../assets/pez.png";
import imgContainer10 from "../assets/conejito.avif";
import { useSeeAll } from "../hooks/useProduct";
import ProductoCarro from "../components/ProductoCarro";
import { Navigate } from "react-router-dom";
import { Button } from "../components/Button";
// import imgContainer12 from ""

const Home = () => {
  const [products, setProducts] = useState([]);
  const [n, setN] = useState(0);

  useEffect(() => {
    // Aquí puedes realizar una solicitud HTTP para obtener los datos de la base de datos
    // Supongamos que tienes una función fetchDataFromDatabase para esto
    const fetchData = async () => {
      try {
        const data = await useSeeAll();
        // console.log("🚀 ~ fetchData ~ data:", data.productos)
        setProducts(data.productos);
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar
        mostrarEnlaceLogin={true}
        mostrarCreate={false}
        mostrarDelete={false}
      />
      {/* esto es decoración */}
      <div
        style={{
          backgroundColor: "#091f2a",
          width: "100px",
          position: "relative",
        }}
      ></div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            zIndex: -1,
            position: "absolute",
            top: "19rem",
            left: "2%",
            width: "150px",
            transform: "rotate(330deg)",
          }}
        >
          {<img src={imgContainer5} alt="" />}
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            zIndex: -1,
            position: "absolute",
            top: "23rem",
            left: "90%",
            width: "100px",
            transform: "rotate(400deg)",
          }}
        >
          {<img src={imgContainer6} alt="" />}
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            zIndex: -1,
            position: "absolute",
            top: "80rem",
            left: "90%",
            width: "100px",
            transform: "rotate(400deg)",
          }}
        >
          {<img src={imgContainer7} alt="" />}
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            zIndex: -1,
            position: "absolute",
            top: "25rem",
            left: "45%",
            width: "100px",
            transform: "rotate(400deg)",
          }}
        >
          {<img src={imgContainer8} alt="" />}
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            zIndex: -1,
            position: "absolute",
            top: "50rem",
            left: "50%",
            width: "100px",
            transform: "rotate(400deg)",
          }}
        >
          {<img src={imgContainer9} alt="" />}
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            zIndex: -1,
            position: "absolute",
            top: "77rem",
            left: "15%",
            width: "200px",
            transform: "rotate(400deg)",
          }}
        >
          {<img src={imgContainer10} alt="" />}
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            zIndex: -1,
            position: "absolute",
            top: "50rem",
            left: "10%",
            width: "200px",
            transform: "rotate(400deg)"
          }}
        >
          <div className="decorate">
           
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            zIndex: -1,
            position: "absolute",
            top: "50rem",
            left: "80%",
            width: "200px",
            transform: "rotate(400deg)"
          }}
        >
          <div className="decorate1">
           
          </div>
        </div>
      </div>
      <br />
      <div class="banner-container">
        <img
          src="https://img.freepik.com/fotos-premium/banner-gran-grupo-perros-juntos-fila-sobre-fondo-naranja_191971-28737.jpg"
          alt="Valle de Mascotas"
          class="banner"
        ></img>

        
      </div>

      <p>Donde tu mascota hace parte de la familia</p>

      <section id="blog">
        <p>
          En el Valle de Mascotas, entendemos la importancia de tu mascota en tu
          vida. Es por eso que nos esforzamos por brindar el mejor cuidado y
          atención para tu fiel compañero peludo.
        </p>
      </section>
      <div class="container">
        <section>
          <div class="info">
            <p>Atiende a tu peludo</p>
            <img src={imgContainer} alt="" class="img" />
            <p>
              Nuestro equipo está formado por amantes de los animales con años
              de experiencia en el cuidado y atención de mascotas.{" "}
            </p>
          </div>
          <div class="info1">
            <p>Comida</p>
            <img src={imgContainer2} alt="" class="img" />
            <p>
              Nuestro equipo está formado por amantes de los animales con años
              de experiencia en el cuidado y atención de mascotas.{" "}
            </p>
          </div>
          <div class="info">
            <p>Comida</p>
            <img src={imgContainer} alt="" class="img" />
            <p>
              Nuestro equipo está formado por amantes de los animales con años
              de experiencia en el cuidado y atención de mascotas.{" "}
            </p>
          </div>
          <div class="info1">
            <p>Comida</p>
            <img src={imgContainer2} alt="" class="img" />
            <p>
              Nuestro equipo está formado por amantes de los animales con años
              de experiencia en el cuidado y atención de mascotas.
            </p>
          </div>
        </section>
      </div>
      <div>
        <h1>
          <div className="container-products" >
            <div className="div-productos">
              {products &&
                products
                  .slice(n, n + 3) // Mostrar los siguientes 3 productos
                  .map((producto) => {
                    return (
                      <a href="/login" key={producto.id} className="pointer">
                        <ProductoCarro
                          nombre={producto.nombre}
                          marca={producto.marca}
                          imagen={producto.url}
                          precio={producto.precio}
                        />
                      </a>
                    );
                  })}
            </div>

            <div className="buttons-container">
              <Button
                mostrarBoton={true}
                label="<"
                fn={() => {
                  setN(() => {
                    if (n > 0) {
                      return n - 1
                    } else {
                      return Math.ceil(products.length / 3)
                    }
                  });
                }}
              />

              <Button
                mostrarBoton={true}
                label=">"
                fn={() => {
                  setN(() => {
                    if (n <= Math.ceil(products.length / 3)) {
                      return n + 1
                    } else {
                      return 0
                    }
                  });
                }}
              />
            </div>
          </div>
        </h1>
      </div>
      <footer>
        <p>Valle de Mascotas &copy; 2023</p>
        <div class="footer-container">
          <ul>
            <li>
              <a href="#">
                <img src={imgContainer3} alt="" class="footer-img" />
              </a>
            </li>

            <li class="footer-img1">
              <a href="#">
                <img src={imgContainer4} alt="" class="footer-img1" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Home;
