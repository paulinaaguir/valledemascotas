import React, { useState, useEffect, useCallback } from "react";
import { ModalConfirm, ModalForm } from "../components/Modal";
import "../styles/ProductInventory.css";
import {
  useDeleteProduct,
  useSeeAll
} from "../hooks/useProduct";
import { Button } from "../components/Button";
import { ENCABEZADO_TABLA_PRODUCTOS } from "../const/headers";
import NavBar from "../components/NavBar.jsx";
import UpdateProduct from "./UpdateProduct.jsx";
import { deleteImg } from "../firebase/config.js";

const ProductInventory = () => {
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [createTrigger, setCreateTrigge] = useState(false);
  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [dataModal, setDataModal] = useState();
  const [dataUpdate, setDataUpdate] = useState();
  const [selectedRows, setSelectedRows] = useState([]);
  const [estado, setEstado] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const data = await useSeeAll();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (referencia) => {
    try {
      await useDeleteProduct({ referencia });
      fetchData(); // Después de eliminar, vuelve a cargar los datos
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };


  //para refrescar el createProduct 
  const handleRefreshPage = () => {
    window.location.reload(); // Esto recargará la página
  };



  const handleUpdateTrigger = async () => {
    setUpdateTrigger(!updateTrigger);
    setDataUpdate(null);
    // Vuelve a cargar los datos después de actualizar el producto
    await fetchData();
  };

  const handleCreateTrigger = async () => {
    setCreateTrigge(!updateTrigger);
    setDataUpdate(null);
    // Vuelve a cargar los datos después de actualizar el producto
    await fetchData();
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleDeleteImg = async (nombre) => {
    try {
      await deleteImg(nombre);
    } catch (error) {
    }
  };

  const handleRowSelect = (productId) => {
    const index = selectedRows.indexOf(productId);
    if (index === -1) {
      setSelectedRows([...selectedRows, productId]);
    } else {
      const updatedSelectedRows = [...selectedRows];
      updatedSelectedRows.splice(index, 1);
      setSelectedRows(updatedSelectedRows);
    }
  };

  return (
    <>
      <NavBar mostrarCreate={true} mostrarCreateAdmin={true} handleRefreshPage={handleRefreshPage} mostrarLogout={true}  />
      <div>
        {toggle && (
          <ModalConfirm
            fnConfirm={() => handleDelete(dataModal)}
            cerrarModal={() => setToggle(false)}
          />
        )}
        {estado && (
          <ModalForm

            html={<UpdateProduct data={dataUpdate} handleUpdateTrigger={handleUpdateTrigger} />}
            CerrarModal={() => setEstado(false)}
          />
        )}

        <br /> 
        <table>  
          <thead>
            <tr>
              {ENCABEZADO_TABLA_PRODUCTOS.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
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
                    <div className="butons">
                      <Button
                        mostrarBoton={true}
                        icon={
                          <span className="material-symbols-outlined">
                            delete
                          </span>
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
                          <span className="material-symbols-outlined">edit</span>
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
