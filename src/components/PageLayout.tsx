import cx from "classnames";

export const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="max-w-3xl min-w-xs mx-auto px-4 pt-4 pb-10">{children}</div>
  );
};

interface PageHeader extends React.PropsWithChildren {
  title: string;
}

export const PageHeader = ({ title, children }: PageHeader) => {
  return (
    <div
      className={cx("flex flex-col pb-12", {
        "pt-6": !children,
      })}
    >
      <div className="self-end">{children}</div>
      <h1 className="text-3xl font-light">{title}</h1>
    </div>
  );
};
