import React from "react";
import "../styles/Button.css"
export const Button = ({ label, fn }) => {
  return (
    <>
        <button className="btn-responsive" onClick={fn}>{label}</button>     
    </>
  );
};