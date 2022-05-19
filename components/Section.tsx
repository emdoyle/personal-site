export const Section: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="py-8 h-96 w-full bg-gradient-to-b odd:from-coolblue-400 odd:to-coolblue even:from-smoke even:to-smoke-400 border border-l-0 border-r-0 border-white text-white">
      {children}
    </div>
  );
};
