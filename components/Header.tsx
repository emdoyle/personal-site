import { useMediaQuery } from "../hooks/useMediaQuery";
import { Github } from "../icons/Github";
import { Twitter } from "../icons/Twitter";
import { LinkedIn } from "../icons/LinkedIn";
import { Burger } from "../icons/Burger";

type Props = {
  menuIsOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

export const Header: React.FC<Props> = ({
  menuIsOpen,
  openMenu,
  closeMenu,
}) => {
  // equivalent to 'sm' breakpoint in Tailwind
  const wideScreen = useMediaQuery("(min-width: 680px)");

  return (
    <>
      <header className="h-16 sm:h-24 w-full flex flex-row justify-between items-center px-4 sm:px-8 bg-smoke text-white">
        <p className="text-2xl sm:text-4xl">Evan Doyle</p>
        <div className="flex flex-row justify-center items-center gap-2">
          {wideScreen ? (
            <>
              <a
                className="text-2xl border-r-2 border-white pr-4 py-1"
                href="https://blog.0x63problems.dev"
              >
                Blog
              </a>
              <div className="pl-2">
                <Github />
              </div>
              <Twitter />
              <LinkedIn />
            </>
          ) : (
            <div className="cursor-pointer" onClick={openMenu}>
              <Burger />
            </div>
          )}
        </div>
      </header>
      {menuIsOpen && (
        <div
          className="fixed h-screen w-screen bg-smoke opacity-95 overflow-y-hidden z-10"
          onClick={closeMenu}
        >
          Hello, World!
        </div>
      )}
    </>
  );
};
