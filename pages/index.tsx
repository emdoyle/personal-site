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
          <div className="flex flex-col justify-center items-center h-full">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center w-5/6 sm:max-w-[900px]">
              <div className="w-32 sm:w-52 rounded-lg border border-smoke shadow-[0px_0px_8px_10px_rgba(112,112,112,.25)]">
                <Image
                  alt="Evan Doyle Headshot"
                  className="rounded-lg"
                  layout="responsive"
                  src={Headshot}
                />
              </div>
              <div className="w-full sm:w-1/2 lg:w-2/3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl pb-4">
                  Hi, I&apos;m Evan!
                </h1>
                <p className="sm:text-2xl lg:text-3xl pb-4">
                  I&apos;m a <strong>Full-Stack</strong> Web Developer from the
                  SF Bay Area with Django and React expertise.
                </p>
                <div className="flex justify-start items-center gap-8 sm:text-lg md:text-xl lg:text-2xl">
                  <a href="#" className="hover:text-ash">
                    <span className="underline">Hire me</span> &gt;
                  </a>
                  <a href="#" className="hover:text-ash">
                    <span className="underline">View services</span> &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="flex flex-col justify-start items-center h-full">
            <div className="flex justify-start items-center h-24 w-5/6 sm:max-w-[1100px]">
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Featured Work
              </h2>
            </div>
            <div className="h-full flex flex-col sm:flex-row gap-4 justify-between items-center w-5/6 sm:max-w-[900px]">
              <p>Left</p>
              <p>Right</p>
            </div>
          </div>
        </Section>
        <Section height="h-[1000px] lg:h-[600px]">
          <div className="flex flex-col justify-start items-center h-full">
            <div className="flex justify-end items-center h-24 w-5/6 lg:max-w-[1100px] pb-8">
              <h2 className="text-3xl sm:text-4xl font-semibold">Services</h2>
            </div>
            <div className="h-full flex flex-col lg:flex-row justify-between items-center w-5/6 lg:max-w-[1200px]">
              <div className="flex flex-col justify-center items-center gap-4 rounded-lg bg-offwhite border border-smoke p-8 shadow-[0px_0px_2px_6px_rgba(176,178,184,.25)] h-64 lg:h-80 w-2/3 lg:w-[30%]">
                <div className="w-40 h-32 border-2 border-smoke rounded" />
                <div className="h-1/4 text-center flex flex-col justify-center items-center pt-4">
                  <h1 className="text-xl lg:text-2xl">Web App Development</h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 rounded-lg bg-offwhite border border-smoke p-8 shadow-[0px_0px_2px_6px_rgba(176,178,184,.25)] h-64 lg:h-80 w-2/3 lg:w-[30%]">
                <div className="w-40 h-32 border-2 border-smoke rounded" />
                <div className="h-1/4 text-center flex flex-col justify-center items-center pt-4">
                  <h1 className="text-xl lg:text-2xl">MVP Prototyping</h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 rounded-lg bg-offwhite border border-smoke p-8 shadow-[0px_0px_2px_6px_rgba(176,178,184,.25)] h-64 lg:h-80 w-2/3 lg:w-[30%]">
                <div className="w-40 h-32 border-2 border-smoke rounded" />
                <div className="h-1/4 text-center flex flex-col justify-center items-center pt-4">
                  <h1 className="text-xl lg:text-2xl">
                    Blockchain Program Development
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section height="h-[600px]">
          <div className="flex flex-col justify-start items-center h-full">
            <div className="flex justify-center items-center h-24">
              <h2 className="text-3xl sm:text-4xl font-semibold">Hire Me</h2>
            </div>
            <div className="h-full flex flex-col gap-4 pb-6 justify-start items-center text-center w-5/6 sm:max-w-[600px]">
              <p className="text-lg sm:text-xl">
                Send me a message and I&apos;ll respond within 48 hours.
              </p>
              <div className="h-10 w-full flex flex-row justify-between items-center gap-8">
                <input
                  className="h-full w-1/5 p-2 rounded border border-smoke"
                  placeholder="Name"
                />
                <input
                  className="h-full grow p-2 rounded border border-smoke"
                  placeholder="Email"
                />
              </div>
              <textarea
                className="grow w-full p-2 rounded border border-smoke"
                placeholder="My project is about..."
              />
              <div className="h-10 w-full border-2" />
            </div>
          </div>
        </Section>
      </Content>
      <Footer />
    </Container>
  );
}
