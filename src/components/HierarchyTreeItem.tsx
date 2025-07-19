import React from "react";
import type { UserWithChildren } from "../types/user";
import { getFullUserName } from "../functions/user";

interface HierarchyTreeItemProps {
  user: UserWithChildren;
}

export const HierarchyTreeItem = ({ user }: HierarchyTreeItemProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { id, children } = user;

  const toggleExpanded = () => {
    setIsExpanded((current) => !current);
  };

  const fullUserName = getFullUserName(user);
  const hasChildren = children?.length > 0;

  const buttonId = `accordion-button-${id}`;
  const contentId = `accordion-content-${id}`;

  return (
    <div>
      <button
        type="button"
        id={buttonId}
        aria-controls={contentId}
        aria-expanded={isExpanded}
        onClick={toggleExpanded}
        className="flex"
      >
        <div>{hasChildren ? "+" : "-"}</div>
        <p>{fullUserName}</p>
      </button>
      {hasChildren && (
        <div
          role="region"
          id={contentId}
          aria-labelledby={buttonId}
          className="pl-4"
          hidden={!isExpanded}
        >
          {children.map((child) => {
            return <HierarchyTreeItem user={child} />;
          })}
        </div>
      )}
    </div>
  );
};
