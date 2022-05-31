import React from "react";

export const Container: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className = "", children }) => {
  return (
    <div
      className={`flex flex-col justify-between align-center min-w-full min-h-screen bg-slate-200 ${className}`}
    >
      {children}
    </div>
  );
};
