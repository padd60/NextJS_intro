import { useState } from "react";

export default function Home() {
  let [count, Setcount] = useState(0);
  return (
    <div>
      <h1>Hello{count}</h1>

      <button onClick={() => Setcount((prev) => prev + 1)}>+</button>
    </div>
  );
}
