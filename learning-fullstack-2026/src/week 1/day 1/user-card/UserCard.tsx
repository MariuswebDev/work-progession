import type { JSX } from "react";
import "./UserCard.css";

interface UserInfo {
  id: number;
  avatar: string;
  name: string;
  email: string;
  role: "admin" | "guest" | "user";
  isActive: boolean;
  joinDate: Date;
}

const UserCard = ({
  id,
  avatar,
  name,
  email,
  role,
  isActive,
  joinDate,
}: UserInfo): JSX.Element => {
  const roleColor = {
    admin: "red",
    user: "blue",
    guest: "grey",
  } as const;

  return (
    <div className="user-card">
      <h2 className="id">ID: #{id}</h2>
      {avatar && <img className="avatar" src={avatar} alt={avatar} />}
      <div className="user-info">
        <h2>{name}</h2>
        <span>{email}</span>
        <div className="role role-${role}">
          <p style={{ color: roleColor[role] }}>{role.toUpperCase()}</p>
        </div>
        <div className="active-state">
          {isActive ? "🟢 Active" : "🔴 Inactive"}
        </div>
        <time>{joinDate.toLocaleDateString()}</time>
      </div>
    </div>
  );
};

export default UserCard;
