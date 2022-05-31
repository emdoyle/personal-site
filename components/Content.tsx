import React from "react";

export const Content: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className = "", children }) => {
  return (
    <div className={`min-w-full flex flex-col ${className}`}>{children}</div>
  );
};
