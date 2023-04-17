import React, { useEffect, useState } from "react";
import '../../datas/listLodging.json'; 

function JsonConverterPages() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("../datas/listLodging.json");
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}{item.cover}{item.pictures}{item.description}{item.host}{item.rating}{item.location}{item.equipments}{item.tags}</div>
      ))}
    </div>
  );
}

export default JsonConverterPages;
