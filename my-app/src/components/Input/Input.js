import React from "react";
import "./Input.css";

const Input = ({ onkeypress }) => {
  return (
    <div>
      <input
        className="input"
        onKeyPress={onkeypress}
        data-testid="input"
        placeholder="Enter name"
      />
    </div>
  );
};

export default Input;
