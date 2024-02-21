import React from "react";
import "../styles/Home.css"
const Home = () => {
    return (
        <>
        <br />
        <img src="https://img.freepik.com/fotos-premium/banner-gran-grupo-perros-juntos-fila-sobre-fondo-naranja_191971-28737.jpg" alt="Valle de Mascotas" class="banner"></img>
            <h1>Valle de Mascotas</h1>
            <p>Tu aliado para el bienestar de tu peludito</p>
            <section id="blog">
                <h2>Blog</h2>
                <p>Información útil sobre cuidado animal, consejos de entrenamiento, tips de alimentación y mucho más.</p>
                <a href="#">Leer más</a>
            </section>
            <footer>
                <p>Valle de Mascotas &copy; 2023</p>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </footer>
        </>
    )
};

export default Home;