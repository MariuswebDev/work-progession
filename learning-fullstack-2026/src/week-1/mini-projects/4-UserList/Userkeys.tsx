const Userkeys = () => {
  const users = [
    { id: 1, name: "Jeremy", active: true },
    { id: 2, name: "Mona", active: false },
    { id: 3, name: "Bob", active: true },
  ];
  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.active ? "🟢 Active" : "🔴 Inactive"}
        </li>
      ))}
    </div>
  );
};

export default Userkeys;
