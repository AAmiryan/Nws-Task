import React from "react";
import "./Selects.css";

const Select = ({ data, activeValue, setActiveValue }) => {

  const handleChange = (e) => {
    // console.log(e.target.value, 'SELECT');
    setActiveValue(e.target.value);
  };

  return (
    <div>
      <select className="select" onChange={handleChange} value={activeValue}>
        {data?.map((item) => (
          <option value={item.name} key={item.name} >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
