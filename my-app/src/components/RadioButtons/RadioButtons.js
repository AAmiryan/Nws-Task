import React from "react";

const RadioButton = ({ name, activeValue, setActiveValue, cheked }) => {
  const handleChange = (e) => {
    setActiveValue(e.target.id);
  };

  return (
    <div>
      {cheked ? (
        <div>
          <input
            type="radio"
            value={activeValue}
            name="radio"
            id={name}
            onChange={handleChange}
            checked
          />
          <label for={name}>{name}</label>
        </div>
      ) : (
        <div>
          <input
            type="radio"
            value={activeValue}
            name="radio"
            id={name}
            onChange={handleChange}
          />
          <label for={name}>{name}</label>
        </div>
      )}
    </div>
  );
};

export default RadioButton;
