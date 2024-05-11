import React, { useState, useEffect } from "react";
import { ModalConfirm, ModalForm } from "../components/Modal";
import "../styles/ProductInventory.css";
import {
  useDeleteProduct,
  useSeeAll,
  useUpdateProducto,
} from "../hooks/useProduct";
import { Button } from "../components/Button";
import { ENCABEZADO_TABLA_PRODUCTOS } from "../const/headers";
import NavBar from "../components/NavBar.jsx";
import UpdateProduct from "./UpdateProduct.jsx";
import { deleteImg } from "../firebase/config.js";
const ProductInventory = () => {

  // Estado para almacenar los datos de productos y las filas seleccionadas
  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [dataModal, setDataModal] = useState();
  const [dataUpdate, setDataUpdate] = useState();
  const [selectedRows, setSelectedRows] = useState([]);
  const [estado, setEstado] = useState(false);
  //  const [refreshpage,setRefreshPage] = useState(false)
  useEffect(() => {
    // Aquí puedes realizar una solicitud HTTP para obtener los datos de la base de datos
    // Supongamos que tienes una función fetchDataFromDatabase para esto
    const fetchData = async () => {
      try {
        const data = await useSeeAll();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Manejar la selección de filas
  const handleDelete = async (referencia) => {
    let fetchData = await useDeleteProduct({ referencia });
    console.log(fetchData);
  };


  const handleDeleteImg = async (nombre) => {
    //aqui va la basura de delete img 
    try {
      await deleteImg(nombre)
      console.log("sisas")
    } catch (error) {
      console.log("nosa")
    }
  };


  const handleRowSelect = (productId) => {
    const index = selectedRows.indexOf(productId);
    if (index === -1) {
      // Si el producto no está seleccionado, agrégalo a la lista de selección
      setSelectedRows([...selectedRows, productId]);
    } else {
      // Si el producto está seleccionado, elimínalo de la lista de selección
      const updatedSelectedRows = [...selectedRows];
      updatedSelectedRows.splice(index, 1);
      setSelectedRows(updatedSelectedRows);
    }
  };
  useEffect(() => { }, []);
  return (
    <>
      <NavBar mostrarCreate={true} />
      <div>
        {toggle && (
          <ModalConfirm
            fnConfirm={() => handleDelete(dataModal)}
            cerrarModal={() => setToggle(false)}
          />
        )}
        {estado && (
          <ModalForm
            html={<UpdateProduct data={dataUpdate} />}
            CerrarModal={() => setEstado(false)}
          />
        )}

        <h2>Product Inventory</h2>
        <table>
          <thead>
           
            <tr>
            
              {ENCABEZADO_TABLA_PRODUCTOS.map((header) => {
                
                return <td>{header}</td>;
                
              })}
            </tr>
            
          </thead>
          <tbody>
            {products &&
              products.productos?.map((product) => (
                <tr
                  key={product.referencia}
                  onClick={() => handleRowSelect(product.id)}
                >
                  <td>{product.referencia}</td>
                  
                  <td>{product.nombre}</td>
                  <td>{product.precio}</td>
                  <td>{product.tipo}</td>
                  <td>{product.marca}</td>
                  <td>{product.stock}</td>
                  <td>{product.fecha}</td>
                  <td>
                    {/* <input
                  type="checkbox"
                  checked={selectedRows.includes(product.id)}
                  readOnly
                /> */}

                    <div class="butons">
                      <Button
                        mostrarBoton={true}
                        icon={
                          <span class="material-symbols-outlined">delete</span>
                        }
                        fn={() => {
                          setDataModal(product.referencia);
                          setToggle(true);
                          handleDeleteImg(product.nombre);
                        }}
                      />
                      <Button
                        mostrarBoton={true}
                        icon={
                          <span class="material-symbols-outlined">edit</span>
                        }
                        fn={() => {
                          setDataUpdate(product);
                          setEstado(true);
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductInventory;
