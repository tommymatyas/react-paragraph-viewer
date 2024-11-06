import React, { useState, useEffect } from "react";
import "./App.css";
import Page from "./components/Page";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://baconipsum.com/api/?type=meat-and-filler&paras=20&start-with-lorem=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      {loading ? <p>Loading...</p> : <Page content={data} />}
    </div>
  );
}

export default App;
