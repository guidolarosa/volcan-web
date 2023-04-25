import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Box from "./../components/Box/Box";
import Button from "./../components/Button/Button";
import { navigation } from "@/localization/en/ui-constants";

import gsap from "gsap";
import { useEffect } from "react";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  let stagger = 2;
  let animation = gsap.timeline({
    repeat: -1,
    repeatDelay: -5,
  });

  useEffect(() => {
    animation
      .from(".rotating-text", {
        y: 240,
        opacity: 0,
        stagger: stagger,
        filter: "blur(10px)",
      })
      .to(
        ".rotating-text",
        {
          y: -240,
          opacity: 0,
          stagger: stagger,
          filter: "blur(10px)",
        },
        stagger
      );
  });


  return (
    <>
      <Head>
        <title>Volcán | Branding and Design Studio</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className={`${montserrat.className} h-[2000px]`}>
        <Box id="header" className="h-12 my-8 flex items-center fixed z-10">
          <div className="relative h-8 w-8">
            <Image fill src="/logo.svg" alt="Volcan" />
          </div>
          <nav className="rounded-full border border-stone-600 ml-8 px-8 h-16 items-center justify-center bg-stone-900 hidden md:flex backdrop-opacity-50">
            <ul className="flex gap-8">
              {navigation.map((item) => (
                <li
                  key={item.href}
                  className={
                    "tracking-widest font-light text-stone-300 hover:text-stone-100 transition-all"
                  }
                >
                  <Link href={item.label}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Box>
        <main>
          <Box className="flex h-[calc(100vh)] items-center justify-center">
            <strong className="rotating-text absolute text-6xl lg:text-9xl text-red-500 blur-0">
              Imagine
            </strong>
            <strong className="rotating-text absolute text-6xl lg:text-9xl text-orange-500 blur-0">
              Create
            </strong>
            <strong className="rotating-text absolute text-6xl lg:text-9xl text-violet-500 blur-0">
              Develop
            </strong>
          </Box>
          <Box>
            <div
              id="breakdown"
              className="flex flex-col max-w-6xl mx-auto w-full px-2 text-center py-16 rounded-2xl bg-cover"
              style={{ backgroundImage: `url(/homepage/breakdown.png)` }}
            >
              <strong className="inline-block text-5xl lg:text-8xl">
                We Are
              </strong>
              <strong className="inline-block text-5xl lg:text-8xl">
                VOLCAN
              </strong>
              <p className="text-2xl lg:text-4xl mt-8 leading-relaxed max-w-4xl mx-auto tracking-wide">
                We create and develop business ideas <br />
                and brands with{" "}
                <strong>
                  attitude and <br />
                  meaningfull impact
                </strong>
                .
              </p>
              <Button label={"About Us"} className={"mt-8 mx-auto"} />
            </div>
          </Box>
          <Box className="my-40">
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col">
                <h1 className="text-9xl font-bold mb-4">Works</h1>
                <p className="text-2xl">And maybe <strong>something else</strong>, or maybe not.</p>
              </div>
              <Button label={'See all'} />
            </div>
          </Box>
          <Box className="my-40">
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col">
                <h1 className="text-9xl font-bold mb-4">Services</h1>
                <p className="text-2xl">This is what we do to help you <strong>improve your business</strong>. Or kind of...</p>
              </div>
              <Button label={'See all'} />
            </div>
          </Box>
          <Box className="my-40">
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col">
                <h1 className="text-9xl font-bold mb-4">We don&apos;t bite</h1>
                <p className="text-2xl">Or maybe we do but... <strong>Talk to us,</strong>dale!</p>
              </div>
              <Button label={'See all'} />
            </div>
          </Box>
        </main>
      </div>
    </>
  );
}
