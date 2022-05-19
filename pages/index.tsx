import Head from "next/head";
import Image from "next/image";
import Headshot from "../public/headshot.jpg";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Home() {
  // equivalent to 'sm' breakpoint in Tailwind
  const wideScreen = useMediaQuery("(min-width: 680px)");
  return (
    <Container>
      <Head>
        <title>Evan Doyle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Content>
        <Section>
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center w-5/6 sm:max-w-[800px]">
            <div className="w-24 sm:w-52 rounded border border-white shadow-[0px_0px_8px_10px_rgba(112,112,112,.25)]">
              <Image
                alt="Evan Doyle Headshot"
                className="rounded"
                layout="responsive"
                src={Headshot}
              />
            </div>
            <div className="w-full sm:w-96">
              <h1 className="text-2xl sm:text-4xl pb-4">Hi, I&apos;m Evan!</h1>
              <p className="sm:text-2xl pb-4">
                I&apos;m a <strong>Full-Stack</strong> Web Developer from the SF
                Bay Area with Django and React expertise.
              </p>
              <div className="flex justify-between items-center sm:text-2xl">
                <a>
                  <span className="underline">Hire me</span> &gt;
                </a>
                <a>
                  <span className="underline">View services</span> &gt;
                </a>
              </div>
            </div>
          </div>
        </Section>
        <Section />
        <Section />
        <Section />
      </Content>
      <Footer />
    </Container>
  );
}
