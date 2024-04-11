import React from "react";
import "../styles/Button.css"

/**
 * Componente Boton para generar un boton personalizable
 *
 * @param {object} props Propiedades del componente.
 * @param {string} props.label Contenido String Para mostrar encima del boton un titulo.
 * * @param {function()} [props.fn] Función a llamar si se le da clic al boton.
 * @param {React.JSX.Element} props.Icon Contenido JSX Para mostrar dentro del Boton un icono.
 * @param {boolean} props.mostrarBoton Contenido boleano Para indicarle al boton si estar o no desabilitado.
 * 
 * @returns {void}
 */
export const Button = ({ label, fn, icon, mostrarBoton }) => {
  return (
    <>
      {mostrarBoton && < button className="btn-responsive" onClick={fn}>
        {label}
        {/* {icon && <img className= "botonImg"src={icon}></img>} */}
        {icon}
      </button>}
    </>
  );
};