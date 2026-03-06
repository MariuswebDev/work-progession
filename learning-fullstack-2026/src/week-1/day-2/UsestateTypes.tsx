import { useState } from "react";
import type { JSX } from "react";

function UsestateTypes(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default UsestateTypes;
