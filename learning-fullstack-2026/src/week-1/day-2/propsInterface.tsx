import type { JSX } from "react/jsx-dev-runtime";

interface User {
  id: number;
  name: string;
  phone?: number;
}

function propsInterface({ id, name }: User): JSX.Element {
  return (
    <div>
      <div>{name}</div>
      <div>{id}</div>
    </div>
  );
}

// This will cause a compile error because name is readonly

export default propsInterface;
