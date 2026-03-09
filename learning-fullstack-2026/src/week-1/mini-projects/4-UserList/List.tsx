import type { JSX } from "react";
const List = (): JSX.Element => {
  const fruits: string[] = ["apple", "pineapple", "mango", "pamplemouse"];
  return (
    <div>
      <ul>
        {fruits.map((fruit: string) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
