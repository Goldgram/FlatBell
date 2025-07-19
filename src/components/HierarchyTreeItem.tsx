import React from "react";
import cx from "classnames";
import type { UserWithChildren } from "../types/user";
import { getFullUserName } from "../functions/user";
import { UserAvatar } from "./UserAvatar";

interface HierarchyTreeItemProps {
  user: UserWithChildren;
}

export const HierarchyTreeItem = ({ user }: HierarchyTreeItemProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { id, children, email } = user;

  const toggleExpanded = () => {
    setIsExpanded((current) => !current);
  };

  const fullUserName = getFullUserName(user);
  const hasChildren = children?.length > 0;

  const buttonId = `accordion-button-${id}`;
  const contentId = `accordion-content-${id}`;

  return (
    <>
      <button
        type="button"
        id={buttonId}
        aria-controls={contentId}
        aria-expanded={isExpanded}
        onClick={toggleExpanded}
        className={cx("flex items-center gap-4 py-2", {
          "cursor-pointer": hasChildren,
        })}
      >
        <p className="text-3xl font-bold pb-1">{hasChildren ? "+" : "-"}</p>
        <UserAvatar user={user} />
        <p>
          {fullUserName} {email}
        </p>
      </button>
      {hasChildren && (
        <div
          role="region"
          id={contentId}
          aria-labelledby={buttonId}
          className="pl-12"
          hidden={!isExpanded}
        >
          {children.map((child) => {
            return <HierarchyTreeItem user={child} />;
          })}
        </div>
      )}
    </>
  );
};
