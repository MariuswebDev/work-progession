import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserCard from "./week-1/day-1/user-card/UserCard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <UserCard
      id={1}
      name={"marius stack"}
      avatar={"MS"}
      email={"mariusdakid@gmail.com"}
      role={"admin"}
      isActive={true}
      joinDate={new Date("03-05-2026")}
    />
  </StrictMode>,
);
