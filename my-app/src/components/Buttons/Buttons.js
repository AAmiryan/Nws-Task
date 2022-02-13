import React, { useState } from "react";
import "./Buttons.css";

const Button = ({ name, activeValue, setActiveValue, onClick }) => {
  const handleClick = (e) => {
    setActiveValue(e.target);
  };

  return (
    <div>
      <button
        type="button"
        className={name === activeValue ? "activ" : "button"}
        onClick={handleClick}
        value={activeValue}
        name={name}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
