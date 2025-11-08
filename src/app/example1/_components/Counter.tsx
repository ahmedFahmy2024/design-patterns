"use client";
import { useCount } from "@/hooks/useCount";

export default function Counter() {
  const { count, increment, decrement } = useCount();

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
