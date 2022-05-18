import { useMediaQuery } from "../hooks/useMediaQuery";

type Props = {};

export const Header = () => {
  // equivalent to 'sm' breakpoint in Tailwind
  const wideScreen = useMediaQuery("(min-width: 680px)");

  return (
    <div className="h-16 sm:h-24 w-full flex flex-row justify-between items-center border-b border-white px-4 sm:px-8 bg-neutral-700 text-white">
      <p className="text-2xl sm:text-4xl">Evan Doyle</p>
      <div className="flex flex-row jusify-center items-center gap-2">
        {wideScreen ? (
          <>
            <p className="text-2xl border-r-2 border-white pr-4 py-1">Blog</p>
            <p className="pl-2">icon1</p>
            <p>icon2</p>
            <p>icon3</p>
          </>
        ) : (
          <p>Burger</p>
        )}
      </div>
    </div>
  );
};
