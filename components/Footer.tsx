import React from "react";

export const Footer: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <footer
      className={`h-16 sm:h-24 w-full flex flex-row justify-center items-center px-4 sm:px-8 bg-smoke text-white ${className}`}
    >
      <p className="text-xl sm:text-2xl">Footer TODO</p>
    </footer>
  );
};
