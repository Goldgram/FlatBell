import React from "react";
import type { UserWithChildren } from "../types/user";
import { getFullUserName } from "../functions/user";
import { UserAvatar } from "./UserAvatar";

interface HierarchyTreeItemProps {
  user: UserWithChildren;
}

export const HierarchyTreeItem = ({ user }: HierarchyTreeItemProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { id, children } = user;

  const toggleExpanded = () => {
    setIsExpanded((current) => !current);
  };

  const hasChildren = children?.length > 0;

  const buttonId = `accordion-button-${id}`;
  const contentId = `accordion-content-${id}`;

  if (!hasChildren) {
    return <UserRow user={user} />;
  }
  return (
    <>
      <button
        type="button"
        id={buttonId}
        aria-controls={contentId}
        aria-expanded={isExpanded}
        onClick={toggleExpanded}
        className="cursor-pointer"
      >
        <UserRow user={user} />
      </button>
      <div
        role="region"
        id={contentId}
        aria-labelledby={buttonId}
        className="pl-10 sm:pl-12"
        hidden={!isExpanded}
      >
        {children.map((child) => {
          return <HierarchyTreeItem key={child.id} user={child} />;
        })}
      </div>
    </>
  );
};

interface UserRowProps {
  user: UserWithChildren;
}

const UserRow = ({ user }: UserRowProps) => {
  const { children, email } = user;
  const fullUserName = getFullUserName(user);
  const hasChildren = children?.length > 0;

  return (
    <div className="flex items-center gap-2 sm:gap-4 py-2 px-1">
      <div>
        <p className="text-3xl font-bold pb-1 w-5">{hasChildren ? "+" : "-"}</p>
      </div>
      <UserAvatar user={user} />
      <p className="text-left">
        {fullUserName} {email}
      </p>
    </div>
  );
};
