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
import imgContainer10 from "../assets/perritoPng.jpeg";
import imgContainer11 from "../assets/gatito.png";
import { useSeeAll } from "../hooks/useProduct";
import ProductoCarro from "../components/ProductoCarro";
// import { Navigate } from "react-router-dom";
// import { Button } from "../components/Button";
import Decorate from "../components/Decorate";
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

  function TuComponente() {
    const [startIndex, setStartIndex] = useState(0);

    const mostrarSiguienteGrupo = () => {
      if (startIndex + 3 < products.length) {
        setStartIndex(startIndex + 3);
      } else {
        setStartIndex(0);
      }
    };

    // Utilizamos setTimeout para mostrar automáticamente el siguiente grupo de productos cada 5 segundos
    setTimeout(mostrarSiguienteGrupo, 5000); // Cambia este valor para ajustar la velocidad de cambio de los productos

    const productsToShow = products.slice(startIndex, startIndex + 3);

    return (
      <div className="container-products">
        <div className="div-productos">
          {productsToShow.map((producto) => (
            <a href="/login" key={producto.id} className="pointer">
              <ProductoCarro
                nombre={producto.nombre}
                marca={producto.marca}
                imagen={producto.url}
                precio={producto.precio}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }


  return (
    <>
      <NavBar
        mostrarEnlaceLogin={true}
        mostrarCreate={false}
        mostrarDelete={false}
      />
      {/* esto es decoración */}




      <br />
      <div class="banner-container">
        <img
          src="https://img.freepik.com/fotos-premium/banner-gran-grupo-perros-juntos-fila-sobre-fondo-naranja_191971-28737.jpg"
          alt="Valle de Mascotas"
          class="banner"
        ></img>


      </div>
      <Decorate left={"10%"} top={"8rem"} width={"200px"} setCircle={true} />
      <Decorate left={"70%"} top={"20rem"} width={"200px"} setCircle={true} />
      <Decorate left={"20%"} top={"20rem"} width={"200px"} setCircle={true} />
      <Decorate left={"1%"} top={"25rem"} width={"200px"} setCircle={true} />
      <Decorate left={"80%"} top={"36rem"} width={"200px"} setCircle={true} />
      <Decorate left={"10%"} top={"36rem"} width={"200px"} setCircle={true} />
      <Decorate left={"90%"} top={"10rem"} width={"200px"} setCircle={true} />
      <Decorate left={"2%"} top={"4rem"} width={"200px"} url={imgContainer5} rotate={"rotate(400deg)"} />
      <Decorate left={"85%"} top={"30rem"} width={"150px"} url={imgContainer6} rotate={"rotate(400deg)"} />
      <Decorate left={"90%"} top={"70rem"} width={"150px"} url={imgContainer7} rotate={"rotate(400deg)"} />
      <Decorate left={"38%"} top={"35rem"} width={"150px"} url={imgContainer7} rotate={"rotate(400deg)"} />
      <Decorate left={"45%"} top={"10rem"} width={"150px"} url={imgContainer8} rotate={"rotate(400deg)"} />
      <Decorate left={"25%"} top={"70rem"} width={"150px"} url={imgContainer9} rotate={"rotate(400deg)"} />
      <p>Donde tu mascota hace parte de la familia</p>

      <section id="blog">
        <p>
          En el Valle de Mascotas, entendemos la importancia de tu mascota en tu
          vida. Es por eso que nos esforzamos por brindar el mejor cuidado y
          atención para tu fiel compañero peludo.
        </p>
        <p>
          Tanto tu como el pueden disfrutar de esta nueva experiencia que los llenará de mas conexión y magia
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
              Contamos con los mejores snacks, juguetes, comida de la mejor marca, atención de primera y los mejores pediatras de el valle de Aburrá
            </p>
          </div>
          <div class="info">
            <p>Distracción para tu peludo</p>
            <img src={imgContainer11} alt="" class="img" />
            <p>
              Juguetes, diversión, descanso en el hogar, sedes amobladas y mucho mas para la atención de tu pequeño
            </p>
          </div>
          <div class="info1">
            <br />
            <p>Vive la experiencia</p>
            <img src={imgContainer10} alt="" class="img" />
            <p>
              Permite que tu mascota pueda acompañarnos en nuestra sede donde lo atenderemos de la mejor manera y con mucho amor
            </p>
          </div>
        </section>
      </div>
      <div>
        <h1>
          {TuComponente()}
        </h1>
      </div>
      <footer>
        <p>Valle de Mascotas &copy; 2023</p>
        <div class="footer-container">
          <ul>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <img src={imgContainer3} alt="" class="footer-img" />
              </a>
            </li>

            <li class="footer-img1">
              <a href="https://www.instagram.com/" target="_blank">
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
