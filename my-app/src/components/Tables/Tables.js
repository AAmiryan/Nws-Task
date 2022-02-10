import React from "react";
import RadioButtons from "../RadioButtons/RadioButtons.js";
import Select from "../Selects/Selects.js";
import Button from "../Buttons/Buttons";
import "./Tables.css";

const Tables = () => {
  return (
    <div className="tablesWrap">
      <div className="tablesRow">
      <div>Таскономия</div>
        <div className="buttonContainer">
          {[1, 2, 3, 4, 5].map(() => (
            <Button />
          ))}
        </div>
      </div>
      <div className="tablesRow">
      <div>Таскономия</div>
        <Select />
      </div>

      <div className="tablesRow">
      <div>Таскономия</div>
        <div className="buttonContainer">
          {[1, 2, 3, 4, 5].map(() => (
            <RadioButtons />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tables;
