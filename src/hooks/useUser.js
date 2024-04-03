import { useState, useEffect } from "react";
import { logUser, recoverPass, registerUser } from "../services/user.service.js";

export const useLogUser = async (datas) => {
  // console.log("🚀 ~ useUser ~ datas:", datas)
  let data = null;

  const fetchData = async () => {
    const user = await logUser(datas);
    console.log(user);
    data = user;
  };
  await fetchData();
  if (!data) data = "error";
  return data;
};

export const useRegisterUser = async (datas) => {
  let data = null;

  const fetchData = async () => {
    const user = await registerUser(datas);
    console.log(user);
    data = user;
  };
  await fetchData();
  if (!data) data = "error";
  return data;
};

export const useRecoverPassword = async (datas) => {
  let data = null;

  const fetchData = async () => {
    const reponse = await recoverPass(datas);
    data = datas.passWord
  };
  await fetchData();
  if (!data) data = "error";
  return data;
};


