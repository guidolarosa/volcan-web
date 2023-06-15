import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import gsap from "gsap";
import { useEffect } from "react";
import Head from "next/head";
import works from "@/localization/works";
import Button from "./../components/Button/Button";
import Box from "./../components/Box/Box";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Marquee from "react-fast-marquee";
import Services from "@/components/Services/Services";
import ContactForm from "@/components/ContactForm/ContactForm";

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
          <Navbar />
        </Box>
        <main>
          <Box
            id={"hero"}
            className="flex h-[calc(100vh)] items-center justify-center mb-40"
            style={{
              backgroundImage: 'url(/homepage/line.png)',
              backgroundPosition: 'bottom',
              backgroundSize: 'cover'
            }}
          >
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
              <p className="text-md lg:text-4xl mt-8 leading-relaxed max-w-4xl mx-auto tracking-wide">
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
          <Box className="mt-40 mb-12 flex flex-col">
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-9xl font-bold mb-4">Works</h1>
                <p className="text-md md:text-2xl">
                  And maybe <strong>something else</strong>, or maybe not.
                </p>
              </div>
              <Button label={"See all"} className="whitespace-nowrap" />
            </div>
          </Box>
          <div className="mb-40">
            <Marquee pauseOnHover gradient gradientColor={[0, 0, 0]}>
              {works.map((work: any, index: number) => (
                <div
                  key={index}
                  className={
                    "h-80 w-80 mr-8 relative rounded-3xl overflow-hidden"
                  }
                >
                  <div className="absolute top-6 left-6 z-10 text-xl font-semibold">
                    {work.title}
                  </div>
                  <Image
                    src={work.thumbnail}
                    fill
                    alt={work.title}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </Marquee>
          </div>
          <Services />
          <Box className="my-40 flex flex-col">
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-9xl font-bold mb-4">We don&apos;t bite</h1>
                <p className="text-md md:text-2xl">
                  Or maybe we do but... <strong>Talk to us, </strong>dale!
                </p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </Box>
        </main>
        <Footer />
      </div>
    </>
  );
}
