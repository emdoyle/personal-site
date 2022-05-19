export const Section: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="py-8 h-96 w-full odd:bg-coolblue even:bg-steel border border-l-0 border-r-0 border-smoke text-smoke">
      {children}
    </div>
  );
};
