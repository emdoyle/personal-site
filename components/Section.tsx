export const Section: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex justify-center items-center py-8 h-96 w-full odd:bg-blue-200 even:bg-gray-500 border border-l-0 border-r-0 border-white text-white">
      {children}
    </div>
  );
};
