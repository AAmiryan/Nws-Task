import React from "react";
import "./Selects.css";
import { v4 as uuidv4 } from "uuid";

const Select = ({ data, activeValue, setActiveValue }) => {
  const handleChange = (e) => {
    setActiveValue(e.target.value);
  };

  return (
    <div>
      <select className="select" onChange={handleChange} value={activeValue}>
        {data?.map((item) => (
          <option value={item.name} key={uuidv4()}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
