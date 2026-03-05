import type { JSX } from "react";

interface GreetingProps {
  name: string;
  isVIP?: boolean;
}

function Greeting({ name, isVIP }: GreetingProps): JSX.Element {
  return (
    <div>
      <h1>Hello, {name}</h1>
      {isVIP && <span className="badge">VIP</span>}
    </div>
  );
}

export default Greeting;
