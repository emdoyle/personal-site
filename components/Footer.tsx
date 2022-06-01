import React from "react";
import { Github } from "../icons/Github";
import { Twitter } from "../icons/Twitter";
import { LinkedIn } from "../icons/LinkedIn";
import { BlogIcon } from "../icons/BlogIcon";

export const Footer: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <footer
      className={`h-16 sm:h-24 w-full flex flex-row gap-4 justify-center items-center px-4 sm:px-8 bg-smoke text-offwhite ${className}`}
    >
      <a
        className="text-xl border-r-2 border-white pr-4 py-1 hover:underline hover:text-ash"
        href="#"
      >
        Back to Top ⬆
      </a>
      <div className="pl-2">
        <BlogIcon />
      </div>
      <Github />
      <Twitter />
      <LinkedIn />
    </footer>
  );
};
