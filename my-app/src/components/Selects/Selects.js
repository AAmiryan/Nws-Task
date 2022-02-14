import React from "react";
import "./Selects.css";
import {uuId} from '../../Utils/util'

const Select = ({ data, activeValue, setActiveValue }) => {
  const handleChange = (e) => {
    setActiveValue(e.target.value);
  };

  return (
    <div>
      <select className="select" onChange={handleChange} value={activeValue}>
        {data?.map((item) => (
          <option value={item.name} key={uuId()}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
