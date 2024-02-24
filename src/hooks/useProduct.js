
import { registerProduct, seeAll, deleteProduct } from "../services/product.service.js";

export const useCreateProduct = async (datas) => {
  // console.log("🚀 ~ useUser ~ datas:", datas)
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
  // console.log("🚀 ~ useUser ~ datas:", datas)
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
  // console.log("🚀 ~ useUser ~ datas:", datas)
  let data = null;
console.log(datas)
  const fetchData = async () => {
    const product = await deleteProduct(datas);
    console.log(product);
    data = product;
  };
  await fetchData();
  if (!data) data = "error";
  return data;
};
// export const useRegisterUser = async (datas) => {
//   let data = null;

//   const fetchData = async () => {
//     const user = await registerUser(datas);
//     console.log(user);
//     data = user;
//   };
//   await fetchData();
//   if (!data) data = "error";
//   return data;
// };
