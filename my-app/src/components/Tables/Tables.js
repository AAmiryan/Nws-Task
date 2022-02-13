import React, { useState } from "react";
import RadioButtons from "../RadioButtons/RadioButtons.js";
import Select from "../Selects/Selects.js";
import Button from "../Buttons/Buttons";
import "./Tables.css";

const Tables = ({ data }) => {
  const [activeValue, setActiveValue] = useState("ep_JTINS_10rd_0420162_y");

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
              setActiveValue={(item) => {
                setActiveValue(item.name);
              }}
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
              cheked={item.name == activeValue ? true : false}
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
