import { useMediaQuery } from "../hooks/useMediaQuery";
import { Github } from "../icons/Github";
import { Twitter } from "../icons/Twitter";
import { LinkedIn } from "../icons/LinkedIn";
import { Burger } from "../icons/Burger";

export const Header = () => {
  // equivalent to 'sm' breakpoint in Tailwind
  const wideScreen = useMediaQuery("(min-width: 680px)");

  return (
    <header className="h-16 sm:h-24 w-full flex flex-row justify-between items-center px-4 sm:px-8 bg-neutral-700 text-white">
      <p className="text-2xl sm:text-4xl">Evan Doyle</p>
      <div className="flex flex-row jusify-center items-center gap-2">
        {wideScreen ? (
          <>
            <p className="text-2xl border-r-2 border-white pr-4 py-1">Blog</p>
            <div className="pl-2">
              <Github />
            </div>
            <Twitter />
            <LinkedIn />
          </>
        ) : (
          <Burger />
        )}
      </div>
    </header>
  );
};
