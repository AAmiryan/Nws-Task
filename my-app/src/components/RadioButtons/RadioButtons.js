import React from "react";

const RadioButton = ({ name, activeValue, setActiveValue, isChecked }) => {
  const handleChange = (e) => {
    setActiveValue(e.target.id);
  };

  return (
    <div>
        <div>
          <input
            type="radio"
            value={activeValue}
            name="radio"
            id={name}
            onChange={handleChange}
            checked={isChecked}
          />
          <label >{name}</label>
        </div>
    </div>
  );
};

export default RadioButton;
