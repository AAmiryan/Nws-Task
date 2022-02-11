import React, { useState } from "react";
import RadioButtons from "../RadioButtons/RadioButtons.js";
import Select from "../Selects/Selects.js";
import Button from "../Buttons/Buttons";
import "./Tables.css";

const Tables = ({ data }) => {
  const [activeValue, setActiveValue] = useState("rrrr");
  console.log(activeValue, 'activeValue');

  return (
    <div className="tablesWrap">
      <div className="tablesRow">
        <div>Таскономия</div>
        <div className="buttonContainer">
          {data.map((item) => (
            <Button
              name={item.name}
              key={item.name}
              activeValue={activeValue}
              setActiveValue={setActiveValue}
            />
          ))}
        </div>
      </div>
      <div className="tablesRow">
        <div>Таскономия</div>
        <Select
          data={data}
          activeValue={activeValue}
          setActiveValue={setActiveValue}
        />
      </div>

      <div className="tablesRow">
        <div>Таскономия</div>
        <div className="buttonContainer">
          {data.map((item) => (
            <RadioButtons
              name={item.name}
              key={item.name}
              activeValue={activeValue}
              setActiveValue={setActiveValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tables;
