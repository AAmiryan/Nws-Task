import React, { useState } from "react";
import "./Buttons.css";

const Button = ({ name, activeValue, setActiveValue }) => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setActiveValue(e.target.name);
    setValue(e.target.name);
    // console.log(e.target.name, ">>>>>>>>>>>>>>>>>>>>>>>>");
  };

  return (
    <div>
      <button
        type="button"
        className={value === activeValue ? "activ" : "button"}
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
