import Head from "next/head";
import { MetaTags } from "../components/MetaTags";
import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Container } from "../components/Container";
import { useState } from "react";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";

export default function WebAppDevelopment() {
  const [overlayMenuOpen, setOverlayMenuOpen] = useState<boolean>(false);
  return (
    <Container className={overlayMenuOpen ? "h-screen" : ""}>
      <Head>
        <title>Web App Development | Evan Doyle</title>
        <link rel="icon" href="/favicon.ico" />
        {/* TODO: customize meta tags for each content page */}
        <MetaTags />
      </Head>

      <Header
        menuIsOpen={overlayMenuOpen}
        openMenu={() => setOverlayMenuOpen(true)}
        closeMenu={() => setOverlayMenuOpen(false)}
      />
      <Content
        className={
          overlayMenuOpen ? "h-[calc(100vh-4rem)] overflow-hidden" : ""
        }
      >
        <Section>
          <h1>Hello, world</h1>
        </Section>
      </Content>
      <Footer className={overlayMenuOpen ? "hidden" : ""} />
    </Container>
  );
}
