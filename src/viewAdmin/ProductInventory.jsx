import React, { useState, useEffect } from "react";
import { ModalConfirm, ModalForm} from "../components/Modal";
import "../styles/ProductInventory.css";
import { useDeleteProduct, useSeeAll, useUpdateProducto } from "../hooks/useProduct";
import { Button } from "../components/Button";
import imgContainer from "../assets/borrarBoton.png";
import { ENCABEZADO_TABLA_PRODUCTOS } from "../const/headers";
import NavBar from "../components/NavBar.jsx";
import imgContainer1 from "../assets/editarBoton.png"
import CreateProcuct from "../viewAdmin/CreateProduct.jsx"
import UpdateProduct from "./UpdateProduct.jsx";
const ProductInventory = () => {
  // Estado para almacenar los datos de productos y las filas seleccionadas
  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [dataModal, setDataModal] = useState();
  const [selectedRows, setSelectedRows] = useState([]);
//  const [refreshpage,setRefreshPage] = useState(false)
  useEffect(() => {
    // Aquí puedes realizar una solicitud HTTP para obtener los datos de la base de datos
    // Supongamos que tienes una función fetchDataFromDatabase para esto
    const fetchData = async () => {
      try {
        const data = await useSeeAll();
        console.log("🚀 ~ fetchData ~ data:", data);
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

  const handleUpdate = async (referencia) => {
    let fetchData = await useUpdateProducto({ referencia });
    console.log(fetchData);
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
  useEffect(() => {
  }, []); 
  return (
    <>
    <NavBar mostrarCreate={true}/>
      <div>
        {toggle && (
          <ModalConfirm
            fnConfirm={() => handleDelete(dataModal)}
            cerrarModal={() => setToggle(false)}
          />
        )}
        {toggle && (
          <ModalForm
            html={<UpdateProduct />}
            cerrarModal={() => setToggle(false)}
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
                  <td>
                    {/* Aquí puedes renderizar un control de selección */}
                    {/* Por ejemplo, una casilla de verificación */}
                    {/* <input
                  type="checkbox"
                  checked={selectedRows.includes(product.id)}
                  readOnly
                /> */}
                    <Button
                      mostrarBoton={true}
                      icon={imgContainer}
                      fn={() => {
                        setDataModal(product.referencia);
                        setToggle(true);
                      }}
                    />
                    
                      <Button 
                      mostrarBoton={true}
                      icon={imgContainer1}
                      fn={() => {
                        setDataModal(product.referencia);
                        setToggle(true);
                      }}
                    /> 
                     
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
