import React from "react";

export const Section: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div
      className={`py-8 w-full odd:bg-coolblue even:bg-steel border border-l-0 border-r-0 border-smoke text-smoke ${className}`}
    >
      {children}
    </div>
  );
};
