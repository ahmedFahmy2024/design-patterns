"use client";
import { useCallback, useEffect, useState } from "react";

function initializeCount() {
  const savedCount = localStorage.getItem("count");
  return savedCount ? Number(savedCount) : 0;
}

export function useCount() {
  const [count, setCount] = useState(initializeCount); // we dont need to initializeCount() cuz it will run every time this component render but by using it this way initializeCount react is going to run tis function once

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return { count, increment, decrement };
}
