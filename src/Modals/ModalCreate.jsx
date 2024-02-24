import React, {useEffect} from 'react'
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import CreateProduct from "../viewAdmin/CreateProduct"
export const ModalCreate = ({datos, titulo, CerrarModal}) => {


    const MySwal = withReactContent(Swal)

    useEffect(() => {
        MySwal.fire({
          title: titulo,
          html : <CreateProduct/>,
          width:'auto',
          showConfirmButton:false,
		  allowOutsideClick:true,
          timer:0
        }).then(()=>CerrarModal())
      }, []);
    return null;
}