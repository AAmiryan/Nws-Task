import React from "react";
import "./Buttons.css";

const Button = ({ name, activeValue, setActiveValue, reportPeriod }) => {
  const handleClick = (e) => {
    setActiveValue(e.target);
  };

  return (
    <div>
      <button
        type="button"
        className={name === activeValue || reportPeriod === activeValue ? "activ" : "button"}
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
