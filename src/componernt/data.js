import React, { useEffect, useState } from "react";
import axois from "axios";
function Data() {
  const [alldata, setAlldata] = useState([]);
  const [filter, setFilter] = useState(alldata);
  const handleSearch = (event) => {};
  useEffect(() => {
    axois(`https://datausa.io/api/data?drilldowns=State&measures=Population`)
      .then((response) => {
        console.log(response.data);
        setAlldata(response.data);
        setFilter(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);
  return (
    <div style={{ margin: "0 auto", marginTop: "10%" }}>
      <label>Search:</label>
      <input type="text" onChange={(event) => handleSearch(event)} />
      <div style={{ padding: 10 }}>
        {alldata.map((value) => (
          <div> {value.Year}</div>
        ))}
      </div>
    </div>
  );
}

export default Data;
