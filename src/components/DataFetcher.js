
import './../styles/App.css';

import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetcher() {
  const [data, setData] = useState("");
  const API_URL = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(JSON.stringify(response.data, null, 2));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <pre>{data}</pre>
    </div>
  );
}

export default DataFetcher;
