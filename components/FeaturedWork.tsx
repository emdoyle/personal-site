import React from "react";
import { Work } from "../constants";
import SlideHome from "../public/slidehome.webp";
import SquadsSDK from "../public/squads_sdk.webp";
import Multiflow from "../public/multiflow.webp";
import Image, { StaticImageData } from "next/image";

type Props = {
  work: Work;
};

type ImageInfo = {
  src: StaticImageData;
  alt: string;
  className?: string;
};

const IMAGES: Record<Work, ImageInfo> = {
  [Work.Slide]: { src: SlideHome, alt: "Picture of Slide homepage" },
  [Work.Squads]: {
    src: SquadsSDK,
    alt: "Squads Logo alongside a code screenshot and text saying @sqds/squads",
  },
  [Work.Multiflow]: {
    src: Multiflow,
    alt: "Picture containing QuickBooks and Xero logos with back and forth arrows toward a database",
  },
};

type LinkInfo = {
  link: string;
  text: string;
  className?: string;
};

const LINKS: Record<Work, LinkInfo[]> = {
  [Work.Slide]: [
    {
      link: "https://github.com/emdoyle/slide-programs",
      text: "Github (Backend)",
    },
    {
      link: "https://github.com/emdoyle/slide-frontend",
      text: "Github (Frontend)",
    },
    {
      link: "https://blog.0x63problems.dev/posts/building_in_web3",
      text: "Blog Post",
    },
  ],
  [Work.Squads]: [
    {
      link: "https://github.com/Squads-Protocol/squads-mpl/tree/0d86a80f78b84e5671ba64e485a7433d231fefc1/sdk",
      text: "Github",
    },
    { link: "https://www.npmjs.com/package/@sqds/sdk", text: "NPM" },
  ],
  [Work.Multiflow]: [{ link: "https://flow.multi.tech", text: "Live Site" }],
};

export const FeaturedWork: React.FC<Props> = ({ work }) => {
  const imageInfo = IMAGES[work];
  const linkInfos = LINKS[work];
  return (
    <div className="flex flex-col gap-4 justify-between items-center">
      <div className="w-full rounded-lg border border-smoke shadow-[0px_0px_8px_10px_rgba(112,112,112,.25)]">
        {/* key is REQUIRED for the placeholder effect to show when 'src' changes */}
        <Image
          key={imageInfo.src.src}
          alt={imageInfo.alt}
          className={`rounded-lg ${imageInfo.className}`}
          layout="responsive"
          placeholder="blur"
          src={imageInfo.src}
        />
      </div>
      <div className="h-24 w-full">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {!linkInfos.length && (
            <span className="text-smoke bg-offwhite py-2 px-4 rounded-lg border border-smoke">
              This project is closed-source. 🤫
            </span>
          )}
          {linkInfos.map((linkInfo) => (
            <a
              key={linkInfo.text}
              href={linkInfo.link}
              className={`py-2 px-4 text-smoke bg-offwhite rounded-lg border border-smoke hover:text-steel underline ${linkInfo.className}`}
            >
              {linkInfo.text}&nbsp;&gt;
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
