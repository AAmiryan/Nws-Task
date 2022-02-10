import { useEffect, useState } from "react";
import "./App.css";

import Tables from "./components/Tables/Tables.js";
import Tables2 from "./components/Tables/Table2.js";

function App() {
  const [data, setData] = useState([]);
  async function getData() {
    try {
      let response = await fetch("/list.json");
      let data = await response.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if (data.length === 0) {
      getData();
    }
  }, [data, data.length]);

  console.log(data, "ssssssssssssssssssss");

  return (
    <div className="App">
      <div className="tableTop">
        <Tables2 />
      </div>
      <div className="tableBottom">
        <Tables />
      </div>
    </div>
  );
}

export default App;
