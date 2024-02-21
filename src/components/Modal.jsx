import React, {useEffect} from 'react'
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import Carrito from '../views/Carrito'
export const ModalForm = ({datos, titulo, CerrarModal}) => {


    const MySwal = withReactContent(Swal)

    useEffect(() => {
        MySwal.fire({
          title: titulo,
          html : <Carrito/>,
          width:'auto',
          showConfirmButton:false,
		  allowOutsideClick:true,
          timer:0
        }).then(()=>CerrarModal())
      }, []);
    return null;
}