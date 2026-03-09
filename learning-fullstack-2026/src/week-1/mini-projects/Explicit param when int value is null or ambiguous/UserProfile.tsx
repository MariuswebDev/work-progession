import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const load = (): void => {
    setUser({ id: 1, name: "Alice", email: "Alice@example.com" });
  };
  return (
    <div>
      <h2>{user ? <p>{user.name}</p> : <p>No user loaded</p>}</h2>
      <button onClick={load}>Load</button>
    </div>
  );
};
