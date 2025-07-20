import { useState } from "react";
import { getFullUserName, getUserInitials } from "../functions/user";
import type { User } from "../types/user";

interface UserAvatarProps {
  user: User;
}
export const UserAvatar = ({ user }: UserAvatarProps) => {
  const [imageError, setImageError] = useState(false);

  const initials = getUserInitials(user);
  const fullname = getFullUserName(user);

  if (!user.photo || imageError) {
    return (
      <div
        className="h-10 w-10 border-2 rounded-full"
        style={{ borderColor: "#7822B5" }}
      >
        <div className="h-9 w-9 flex items-center justify-center">
          {initials}
        </div>
      </div>
    );
  }

  return (
    <img
      src={user.photo}
      alt={`${fullname} avatar`}
      onError={() => setImageError(true)}
      className="border-2 rounded-full h-10 w-10 object-cover"
      style={{ borderColor: "#7822B5" }}
    />
  );
};
