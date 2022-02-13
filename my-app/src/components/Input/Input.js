import React from "react";
import "./Input.css";

const Input = ({ onkeypress }) => {
  return (
    <div>
      <input className="input" onKeyPress={onkeypress} />
    </div>
  );
};

export default Input;
