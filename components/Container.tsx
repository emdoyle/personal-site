import React from "react";

export const Container: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="grow flex flex-col justify-between align-center min-w-full min-h-screen bg-slate-200">
      {children}
    </div>
  );
};
