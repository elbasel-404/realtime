"use client";

import { useEffect, useState } from "react";
import { getData } from "./getData";

export default function Home() {
  const [data, setData] = useState("Loading");

  const fetchData = async () => {
    const result = await getData();
    setData(result);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
