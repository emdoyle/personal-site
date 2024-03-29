import React from "react";

type Props = {
  children?: React.ReactNode;
  colors?: string;
};

export const Pill: React.FC<Props> = ({
  children,
  colors = "border-black text-black",
}) => {
  return (
    <div
      className={`rounded-3xl bg-transparent border-2 ${colors} py-1 px-3 text-center text-xs sm:text-sm`}
    >
      {children}
    </div>
  );
};
