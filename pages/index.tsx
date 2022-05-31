import Head from "next/head";
import Image from "next/image";
import Headshot from "../public/headshot.webp";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Pill } from "../components/Pill";
import { useState } from "react";
import { Work } from "../constants";
import { FeaturedWork } from "../components/FeaturedWork";

export default function Home() {
  // equivalent to 'lg' breakpoint in Tailwind
  const wideScreen = useMediaQuery("(min-width: 1024px)");

  const [selectedWork, setSelectedWork] = useState<Work>(Work.Slide);

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
                  placeholder="blur"
                  priority
                  src={Headshot}
                />
              </div>
              <div className="w-full sm:w-1/2 lg:w-2/3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl pb-4">
                  Hi, I&apos;m Evan!
                </h1>
                <p className="sm:text-2xl lg:text-3xl pb-4">
                  I&apos;m a <strong>Full-Stack</strong> Web Developer from the
                  SF Bay Area with expertise in Fintech and Blockchain
                  applications.
                </p>
                <div className="flex justify-start items-center gap-6 md:gap-8 sm:text-lg md:text-xl lg:text-2xl">
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
        <Section height="lg:h-[600px]">
          <div className="flex flex-col justify-start items-center h-full px-8">
            <div className="flex justify-start items-center h-24 w-5/6 sm:max-w-[1100px] pb-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold">
                  Featured Work
                </h2>
                <hr className="border-2 border-dashed border-smoke" />
              </div>
            </div>
            <div className="flex flex-wrap-reverse gap-6 lg:gap-2 justify-center lg:justify-between items-center w-full max-w-[1200px] h-full">
              <div className="flex flex-col lg:w-1/2 justify-center items-center gap-2">
                <div
                  className={`w-full lg:max-w-[500px] p-4 rounded-lg border border-smoke bg-offwhite hover:scale-105 active:scale-100 cursor-pointer ${
                    selectedWork == Work.Slide
                      ? "scale-105 shadow-xl border-2"
                      : ""
                  }`}
                  onClick={() => setSelectedWork(Work.Slide)}
                >
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="w-full flex justify-between items-center gap-4">
                      <p className="text-lg sm:text-xl">👾 Slide</p>
                      <div className="flex justify-between items-center gap-2">
                        <Pill colors="border-ocean text-ocean">React</Pill>
                        <Pill colors="border-crab text-crab">Rust</Pill>
                        <Pill colors="border-royal text-royal">Solana</Pill>
                      </div>
                    </div>
                    {wideScreen && (
                      <p>
                        Expense Management for DAOs. 2nd Place Riptide Winner.
                      </p>
                    )}
                  </div>
                </div>
                <div
                  className={`w-full lg:max-w-[500px] p-4 rounded-lg border border-smoke bg-offwhite hover:scale-105 active:scale-100 cursor-pointer ${
                    selectedWork == Work.Squads
                      ? "scale-105 shadow-xl border-2"
                      : ""
                  }`}
                  onClick={() => setSelectedWork(Work.Squads)}
                >
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="w-full flex justify-between items-center gap-4">
                      <p className="text-lg sm:text-xl">🛠 Squads SDK</p>
                      <div className="flex justify-between items-center gap-2">
                        <Pill colors="border-brightblue text-brightblue">
                          Typescript
                        </Pill>
                        <Pill colors="border-royal text-royal">Solana</Pill>
                      </div>
                    </div>
                    {wideScreen && (
                      <p>
                        Typescript SDK for the Squads platform. Published to NPM
                        (@sqds/squads)
                      </p>
                    )}
                  </div>
                </div>
                <div
                  className={`w-full lg:max-w-[500px] p-4 rounded-lg border border-smoke bg-offwhite hover:scale-105 active:scale-100 cursor-pointer ${
                    selectedWork == Work.Accounting
                      ? "scale-105 shadow-xl border-2"
                      : ""
                  }`}
                  onClick={() => setSelectedWork(Work.Accounting)}
                >
                  <div className="flex flex-col justify-center items-start gap-2">
                    <div className="w-full flex justify-between items-center gap-4">
                      <p className="text-lg sm:text-xl">
                        📊 Accounting Integration
                      </p>
                      <div className="flex justify-between items-center gap-2">
                        <Pill colors="border-ocean text-ocean">React</Pill>
                        <Pill colors="border-darksnake text-darksnake">
                          Django
                        </Pill>
                      </div>
                    </div>
                    {wideScreen && (
                      <p>
                        Custom connection flows, automatic data syncs, and
                        connection status alerting for QBO/Xero.
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[45%]">
                <FeaturedWork work={selectedWork} />
              </div>
            </div>
          </div>
        </Section>
        <Section height="h-[1200px] xl:h-[600px]">
          <div className="flex flex-col justify-start items-center h-full">
            <div className="flex justify-end items-center h-24 w-5/6 lg:max-w-[1100px] pb-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold">Services</h2>
                <hr className="border-2 border-dashed border-smoke" />
              </div>
            </div>
            <div className="h-full flex flex-col xl:flex-row justify-between items-center w-5/6 xl:max-w-[1200px] text-smoke">
              <div className="flex flex-col justify-center items-center gap-2 rounded-xl bg-offwhite border border-smoke p-6 shadow-[0px_0px_2px_6px_rgba(176,178,184,.25)] h-80 w-2/3 xl:w-[30%] max-w-[500px]">
                <div className="h-1/3 sm:h-1/4 flex flex-col justify-center items-center">
                  <h1 className="font-semibold text-center text-2xl pb-2">
                    Web App Development
                  </h1>
                </div>
                <hr className="w-full margin-0 border-smoke" />
                <ul
                  role="list"
                  className="text-center pt-2 pl-2 text-lg sm:text-xl marker:text-3xl"
                >
                  <li className="list-['⚡️'] pl-2 pb-2">Performant APIs</li>
                  <li className="list-['☯️'] pl-2 pb-2">Smooth UI</li>
                  <li className="list-['🚀'] pl-2 pb-2">Scalable Hosting</li>
                </ul>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 rounded-xl bg-offwhite border border-smoke p-6 shadow-[0px_0px_2px_6px_rgba(176,178,184,.25)] h-80 w-2/3 xl:w-[30%] max-w-[500px]">
                <div className="h-1/3 sm:h-1/4 flex flex-col justify-center items-center">
                  <h1 className="font-semibold text-center text-2xl pb-2">
                    MVP Prototyping
                  </h1>
                </div>
                <hr className="w-full margin-0 border-smoke" />
                <ul
                  role="list"
                  className="text-center pt-2 pl-2 text-lg sm:text-xl marker:text-3xl"
                >
                  <li className="list-['📦️'] pl-2 pb-2">Quick Delivery</li>
                  <li className="list-['🔍️'] pl-2 pb-2">Built-in Analytics</li>
                  <li className="list-['🔁'] pl-2 pb-2">Easy Iteration</li>
                </ul>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 rounded-xl bg-offwhite border border-smoke p-6 shadow-[0px_0px_2px_6px_rgba(176,178,184,.25)] h-80 w-2/3 xl:w-[30%] max-w-[500px]">
                <div className="h-1/3 sm:h-1/4 flex flex-col justify-center items-center">
                  <h1 className="font-semibold text-center text-2xl pb-2">
                    Blockchain Program Development
                  </h1>
                </div>
                <hr className="w-full margin-0 border-smoke" />
                <ul
                  role="list"
                  className="text-center pt-2 pl-2 text-lg sm:text-xl marker:text-3xl"
                >
                  <li className="list-['🔒'] pl-2 pb-2">Secure Programs</li>
                  <li className="list-['🧱'] pl-2 pb-2">Composable Design</li>
                  <li className="list-['🦾'] pl-2 pb-2">Robust Client</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Section height="h-[600px]">
          <form className="flex flex-col justify-start items-center h-full">
            <div className="flex justify-center items-center h-24">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold">Hire Me</h2>
                <hr className="border-2 border-dashed border-smoke" />
              </div>
            </div>
            <div className="h-full flex flex-col gap-4 pb-6 justify-start items-center text-center w-5/6 sm:max-w-[600px]">
              <p className="text-lg sm:text-xl">
                Send me a message and I&apos;ll respond within 48 hours.
              </p>
              <div className="basis-10 w-full flex flex-wrap flex-row justify-between items-center gap-x-8 gap-y-4">
                <label htmlFor="name-input" className="hidden">
                  Name
                </label>
                <input
                  id="name-input"
                  name="name"
                  type="text"
                  required
                  className="h-10 w-1/3 min-w-[220px] p-2 rounded border border-smoke"
                  placeholder="Name"
                />
                <label htmlFor="email-input" className="hidden">
                  Email
                </label>
                <input
                  id="email-input"
                  name="email"
                  type="text"
                  required
                  className="h-10 grow min-w-[300px] p-2 rounded border border-smoke"
                  placeholder="Email"
                />
              </div>
              <label htmlFor="project-input" className="hidden">
                Project Description
              </label>
              <textarea
                id="project-input"
                name="project"
                required
                className="grow w-full p-2 rounded border border-smoke"
                placeholder="My project is about..."
              />
              <div className="w-full flex justify-start items-center">
                <input
                  className="h-12 w-28 cursor-pointer shadow-xl rounded-lg border border-smoke py-2 px-4 hover:scale-105 active:scale-100 bg-softgreen text-smoke"
                  type="submit"
                  value="Send"
                />
              </div>
            </div>
          </form>
        </Section>
      </Content>
      <Footer />
    </Container>
  );
}
