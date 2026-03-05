import "./App.css";
import UserCard from "./week 1/mini-projects/user-card/UserCard";

function App() {
  return (
    <>
      <UserCard
        id={1}
        name={"marius stack"}
        avatar={"MS"}
        email={"mariusdakid@gmail.com"}
        role={"admin"}
        isActive={true}
        joinDate={new Date("03-05-2026")}
      />
    </>
  );
}

export default App;
