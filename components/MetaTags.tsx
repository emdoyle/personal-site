import React from "react";

export const MetaTags: React.FC<{}> = () => {
  return (
    <>
      <meta name="description" content="Evan Doyle's freelancing site" />
      <meta
        name="keywords"
        content="Web Development, Full-Stack, Fintech, Blockchain, Django, Solana, Typescript, Rust"
      />
      <meta name="author" content="Evan Doyle" />
      <meta property="og:title" content="Evan Doyle | Web Developer" />
      <meta
        property="og:description"
        content="Evan Doyle is a Full-Stack Web Developer with 5 years of startup experience. He specializes in Fintech and Blockchain applications, and is available for hire on a contract basis."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://evandoyle.dev" />
      <meta
        property="og:image"
        content="https://evandoyle.dev/site_home_screenshot.webp"
      />
      <meta property="twitter:title" content="Evan Doyle | Web Developer" />
      <meta
        property="twitter:description"
        content="Evan Doyle's freelancing site. Evan is specialized in Fintech and Blockchain applications & available for hire!"
      />
      <meta
        property="twitter:image"
        content="https://evandoyle.dev/site_home_screenshot.webp"
      />
      <meta
        property="twitter:image:alt"
        content="A website screenshot. A headshot of Evan Doyle on the left and intro text on the right."
      />
      <meta property="twitter:creator" content="@evandoyleDEV" />
      <meta property="twitter:card" content="summary" />
    </>
  );
};
