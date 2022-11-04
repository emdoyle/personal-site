import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  text: string;
  author: string;
  title: string;
  company: string;
  image: StaticImageData;
  alignLeft?: boolean;
  className?: string;
};

export const Testimonial: React.FC<Props> = ({
  text,
  author,
  title,
  company,
  image,
  alignLeft = false,
  className = "",
}) => {
  return (
    <div
      className={`relative px-4 pt-4 pb-16 sm:pb-20 min-w-[350px] w-4/5 max-w-[700px] border-2 border-smoke bg-offwhite rounded-xl ${className}`}
    >
      <div
        className={`absolute ${
          alignLeft ? "left-[-1rem]" : "right-[-1rem]"
        } sm:${
          alignLeft ? "left-[-2rem]" : "right-[-2rem]"
        } bottom-[-2rem] sm:bottom-[-4rem] w-20 sm:w-28 rounded-full border-2 border-smoke`}
      >
        <Image
          alt="Testimonial Headshot"
          className="rounded-full"
          layout="responsive"
          placeholder="blur"
          src={image}
        />
      </div>
      <p className="text-sm sm:text-base md:text-lg">&quot;{text}&quot;</p>
      <span
        className={`absolute ${
          alignLeft ? "right-2" : "left-2"
        } bottom-2 text-sm sm:text-base md:text-lg`}
      >
        &mdash; {author}
        <br />
        <span className="text-xs sm:text-sm md:text-base">
          {title} @ {company}
        </span>
      </span>
    </div>
  );
};
