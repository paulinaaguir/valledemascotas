import React from "react";

export const Button = ({ label, fn }) => {
  return (
    <>
        <button onClick={fn}>{label}</button>     
    </>
  );
};