import type { JSX } from "react";

interface User {
  id: number;
  name: string;
  active: boolean;
  role: "admin" | "user" | "guest";
}

const users: User[] = [
  { id: 1, name: "marius", active: true, role: "admin" },
  { id: 2, name: "shell", active: false, role: "user" },
  { id: 3, name: "belle", active: true, role: "guest" },
];

const InterfaceUser = (): JSX.Element => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.active ? "🟢 Active" : "🔴 Inactive"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterfaceUser;
