import React, { useState } from "react";
import Select from "../Selects/Selects.js";
import Button from "../Buttons/Buttons.js";
import Input from "../Input/Input.js";
import { v4 as uuidv4 } from 'uuid';
import "./TablesTop.css";

const reportPeriodType = [
  { name: "Месечная", value: "m" },
  { name: "Годовая", value: "y" },
  { name: "Кварталная", value: "q" },
  { name: "Нерегулярная", value: "r" },
];

const TablesTop = ({ data, setData }) => {
  const [reportPeriod, setReportPeriod] = useState("m");
  const [description, setDescription] = useState(null);

  const onChangeReportPeriodType = (item) => {
    setReportPeriod(item.value);
  };

  const changeValue = (value) => {
    setDescription(value);
  };

  const handleKeypress = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setData([
        ...data,
        {
          name: event.target.value,
          nfoType: "Общество взаимного страхования",
          nfoTypeId: "JTINS",
          reportTypeId: "10rd_stat",
          reportPeriodTypeId: reportPeriod,
          reportType:
            "Статистическая отчетность, представляемая в течение 10 рабочих дней после отчетной даты",
          reportPeriodType:
            "Отчетность на конец года, квартала (4 квартал), месяца (декабрь)",
          description: description,
          entryPointDocument: `http://www.cbr.ru/xbrl/nso/ins/rep/2021-09-30/ep/ep_JTINS_10rd_0420162_y.xsd/${new Date().getTime()}`,
        },
      ]);
      event.target.value = "";
    }
  };

  return (
    <div className="tableTopWrap">
      <div className="tableRow">
        <div>Период</div>
        <div className="buttonContainer">
          {reportPeriodType.map((item) => (
            <Button
              name={item.name}
              setActiveValue={onChangeReportPeriodType}
              activeValue={item.value}
              reportPeriod={reportPeriod}
              key={uuidv4()}
            />
          ))}
        </div>
      </div>
      <div className="tableRow">
        <div>Тип НФО</div>
        <Select
          data={data
            .filter((item) => reportPeriod === item.reportPeriodTypeId)
            .map((item) => ({ name: item.description }))}
          setActiveValue={changeValue}
        />
      </div>
      <div className="tableRow">
        <div>Отчетность</div>
        <Input onkeypress={handleKeypress} />
      </div>
    </div>
  );
};

export default TablesTop;
