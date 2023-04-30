import React from "react";

//INTERNAL IMPORT
import Style from "./Button.module.css";

const Button = ({ btnName, handleClick }) => {
  return (
  <div className={"Style.box"}>
  <button classname={Style.button} onClick={() =>handleClick}>
    {btnName}
    </button>
  </div>

    );
  };
export default Button;