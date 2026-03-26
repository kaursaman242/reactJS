import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // API call
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data); // initially show all
      })
      .catch((err) => console.log(err));
  }, []);

  // Filter: first 5 IDs
  const handleFilter = () => {
    const result = data.filter((item) => item.id <= 5);
    setFilteredData(result);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Filter Example</h2>

      <button onClick={handleFilter}>Show First 5 IDs</button>

      {filteredData.map((item) => (
        <div key={item.id}>
          <p>
            <strong>{item.id}</strong> - {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;