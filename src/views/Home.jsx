import React from "react";
import "../styles/Home.css";
import NavBar from "../components/NavBar";
import imgContainer from "../assets/perritoFeliz.png";
import imgContainer2 from "../assets/gatoFeliz.webp";
import imgContainer3 from "../assets/facebook.webp";
import imgContainer4 from "../assets/ig.png";
import imgContainer5 from "../assets/perro1.webp";
import imgContainer6 from "../assets/gato.png"
import imgContainer7 from "../assets/perro2.png"
import imgContainer8 from "../assets/perro3.webp"
import imgContainer9 from "../assets/pez.png"
import imgContainer10 from "../assets/peritoBanner1.webp"
import imgContainer11 from "../assets/perritoBanner2.png"
// import imgContainer12 from ""

const Home = () => {
  return (
    <>
      <NavBar
        mostrarEnlaceLogin={true}
        mostrarCreate={false}
        mostrarDelete={false}
      />
      {/* esto es decoración */}
      <div style={{backgroundColor : '#091f2a',width : '100px',position: 'relative'}}>

      </div>
       <div  style={{ position: 'relative'}}>
        <div  style={{ zIndex : -1,position: 'absolute',top: '19rem' , left : '2%',  width: '150px',transform: 'rotate(330deg)'}}>
          { <img src={imgContainer5} alt="" />}
        </div>
      </div>
      <div  style={{ position: 'relative'}}>
        <div  style={{ zIndex : -1,position: 'absolute',top: '23rem' , left : '90%',  width: '100px',transform: 'rotate(400deg)'}}>
          { <img src={imgContainer6} alt="" />}
        </div>
      </div>
      <div  style={{ position: 'relative'}}>
        <div  style={{ zIndex : -1,position: 'absolute',top: '55rem' , left : '20%',  width: '100px',transform: 'rotate(400deg)'}}>
          { <img src={imgContainer7} alt="" />}
        </div>
      </div>
      <div  style={{ position: 'relative'}}>
        <div  style={{ zIndex : -1,position: 'absolute',top: '25rem' , left : '45%',  width: '100px',transform: 'rotate(400deg)'}}>
          { <img src={imgContainer8} alt="" />}
        </div>
      </div>
      <div  style={{ position: 'relative'}}>
        <div  style={{ zIndex : -1,position: 'absolute',top: '25rem' , left : '45%',  width: '100px',transform: 'rotate(400deg)'}}>
          { <img src={imgContainer9} alt="" />}
        </div>
      </div>
      <br />
      <div class="banner-container">
        <img
          src="https://img.freepik.com/fotos-premium/banner-gran-grupo-perros-juntos-fila-sobre-fondo-naranja_191971-28737.jpg"
          alt="Valle de Mascotas"
          class="banner"
        ></img>
       
        {/* <div  style={{ zIndex : 0,position: 'absolute',top: '9rem' , left : '26%',  width: '300px'}}>
           <img src={imgContainer10} alt="" />
      </div>
      <div  style={{ zIndex : 0,position: 'absolute',top: '9rem' , left : '20%',  width: '300px'}}>
           <img src={imgContainer11} alt="" />
      </div>
      <div  style={{ zIndex : 0,position: 'absolute',top: '9rem' , left : '24%',  width: '300px'}}>
           <img src={imgContainer12} alt="" />
      </div>  */}
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
