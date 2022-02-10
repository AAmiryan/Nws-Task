import React from "react";
import Select from "../Selects/Selects.js";
import Button from "../Buttons/Buttons.js";
import Input from "../Input/Input.js";
import "./Table2.css";

const Tables = () => {
  return (
    <div className="table2Wrap">
      <div className="tableRow">
        <div>Таскономия</div>
        <div className="buttonContainer">
          {[1, 2, 3, 4, 5].map(() => (
            <Button />
          ))}
        </div>
      </div>
      <div className="tableRow">
        <div>Период</div>
        <div className="buttonContainer">
          {[1, 2, 3, 4, 5].map(() => (
            <Button />
          ))}
        </div>
      </div>
      <div className="tableRow">
        <div>Тип НФО</div>
        <Select />
      </div>
      <div className="tableRow">
        <div>Отчетность</div>
        <Input />
      </div>
    </div>
  );
};

export default Tables;
