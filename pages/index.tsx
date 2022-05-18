import Head from "next/head";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Evan Doyle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Content>
        <Section />
        <Section />
        <Section />
        <Section />
      </Content>
      <Footer />
    </Container>
  );
}
