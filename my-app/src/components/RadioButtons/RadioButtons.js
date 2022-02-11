import React from "react";

const RadioButton = ({ name, activeValue, setActiveValue }) => {
  const handleChange = (e) => {
    setActiveValue(e.target.id);
    // console.log(e.target.name, 'radio');
  };

  return (
    <div>
        <input
          type="radio"
          value={activeValue}
          name='radio'
          id={name}
          onChange={handleChange}
        />
        <label for={name}>{name}</label>
    </div>
  );
  
};

export default RadioButton;
