"use client";

import { useEffect, useState } from "react";
import { getData } from "./getData";

export default function Home() {
  const [data, setData] = useState("Loading");
  const [index, setIndex] = useState(0);

  const fetchData = async (index: number) => {
    const result = await getData(index);
    setData(result);
  };

  useEffect(() => {
    setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchData(index);
  }, [index]);

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
