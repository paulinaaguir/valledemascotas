
import { registerProduct, seeAll, deleteProduct, updateProducto } from "../services/product.service.js";

export const useCreateProduct = async (datas) => {
  
  let data = null;

  const fetchData = async () => {
    const product = await registerProduct(datas);
    data = product;
  };
  await fetchData();
  if (!data) data = "error";
  return data;
};

export const useSeeAll = async () => {
 
  let data = null;

  const fetchData = async () => {
    const product = await seeAll();
    data = product;
  };
  await fetchData();
  if (!data) data = "error";
  return data;
};

export const useDeleteProduct = async (datas) => {
  let data = null;
  const fetchData = async () => {
    const product = await deleteProduct(datas);
    data = product;
  };
  await fetchData();
  if (!data) data = "error";
  return data;
};
export const useUpdateProducto = async (datas) => {
  let data = null;
  const fetchData = async () => {
    const product = await updateProducto(datas);
    data = product;
  };
  await fetchData();
  if (!data) data = "error";
  return data;
};

