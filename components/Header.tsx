import React, { useRef } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Github } from "../icons/Github";
import { Twitter } from "../icons/Twitter";
import { LinkedIn } from "../icons/LinkedIn";
import { Burger } from "../icons/Burger";
import { BlogIcon } from "../icons/BlogIcon";

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
  const overlayRef = useRef(null);
  const menuContainerRef = useRef(null);

  return (
    <>
      <header className="flex justify-center items-center h-16 sm:h-24 w-full px-4 sm:px-8 bg-smoke text-offwhite">
        <div className="max-w-[1400px] w-full flex flex-row justify-between items-center">
          <p className="cursor-default text-2xl sm:text-4xl">Evan Doyle</p>
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
        </div>
      </header>
      {menuIsOpen && (
        <>
          <div
            className="fixed h-screen w-screen bg-smoke opacity-95 overflow-y-hidden z-10"
            ref={overlayRef}
            onClick={(event) => {
              if (event.target === overlayRef.current) {
                closeMenu();
              }
            }}
          />
          <div
            className="h-screen w-screen flex flex-col justify-start items-center absolute top-0 pt-4 z-20"
            ref={menuContainerRef}
            onClick={(event) => {
              if (event.target === menuContainerRef.current) {
                closeMenu();
              }
            }}
          >
            <h1
              onClick={closeMenu}
              className="cursor-default w-5/6 max-w-[550px] h-12 text-3xl text-white"
            >
              Evan Doyle
            </h1>
            <hr className="w-5/6 max-w-[550px] border-white mb-8" />
            <a
              href="https://blog.0x63problems.dev"
              className="w-5/6 max-w-[550px] h-16 bg-offwhite/40 flex flex-row justify-start items-center px-4 mb-6 rounded-xl text-white cursor-pointer hover:text-smoke hover:scale-105"
            >
              <BlogIcon width={40} height={40} />
              <span className="pl-6 text-3xl underline">&gt; Blog</span>
            </a>
            <a
              href="https://github.com/emdoyle"
              className="w-5/6 max-w-[550px] h-16 bg-offwhite/40 flex flex-row justify-start items-center px-4 mb-6 rounded-xl text-white cursor-pointer hover:text-smoke hover:scale-105"
            >
              <Github width={40} height={40} />
              <span className="pl-6 text-3xl underline">&gt; Github</span>
            </a>
            <a
              href="https://twitter.com/evandoyleDEV"
              className="w-5/6 max-w-[550px] h-16 bg-offwhite/40 flex flex-row justify-start items-center px-4 mb-6 rounded-xl text-white cursor-pointer hover:text-smoke hover:scale-105"
            >
              <Twitter width={40} height={40} />
              <span className="pl-6 text-3xl underline">&gt; Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/evan-doyle-060b0ab9/"
              className="w-5/6 max-w-[550px] h-16 bg-offwhite/40 flex flex-row justify-start items-center px-4 mb-6 rounded-xl text-white cursor-pointer hover:text-smoke hover:scale-105"
            >
              <LinkedIn width={40} height={40} />
              <span className="pl-6 text-3xl underline">&gt; LinkedIn</span>
            </a>
          </div>
        </>
      )}
    </>
  );
};
