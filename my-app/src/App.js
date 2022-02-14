import { useEffect, useState } from "react";
import "./App.css";

import Tables from "./components/Tables/Tables.js";
import TablesTop from "./components/Tables/TablesTop.js";

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
  }, [data]);

  return (
    <div className="App">
      <div className="tableTop">
        <TablesTop data={data} setData={setData} />
      </div>
      <div className="tableBottom">
        <Tables data={data} />
      </div>
    </div>
  );
}

export default App;
