import React, {useEffect} from 'react'
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import Carrito from '../views/Carrito'
export const ModalForm = ({datos, titulo, CerrarModal, html,width}) => {


    const MySwal = withReactContent(Swal)

    useEffect(() => {
        MySwal.fire({
          title: titulo,
          html : html,
          width: width,
          showConfirmButton:false,
		  allowOutsideClick:true,
          timer:0
        }).then(()=>CerrarModal())
      }, []);
    return null;
}

export const ModalConfirm = ({ title = "¿Estas Seguro?", cerrarModal, fnConfirm=()=>console.log("probando") }) => {
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        MySwal.fire({
          title: title,
          width:'auto',
          showConfirmButton:true,
          showCancelButton: true,
          cancelButtonText: "Cancelar",
          confirmButtonText: "Aceptar",
          allowOutsideClick: true,
      
          timer:0
        }).then((result) => {
          if (result.isConfirmed) { 
            fnConfirm();
          }
          cerrarModal();
        })
      }, []);
    return null;
}