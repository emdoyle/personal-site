import React from "react";

export const Content: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="grow min-w-full min-h-full flex flex-col">{children}</div>
  );
};
