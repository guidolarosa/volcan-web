import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Box from "./../components/Box/Box";
import Button from "./../components/Button/Button";
import gsap from "gsap";
import { useEffect } from "react";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Marquee from "react-fast-marquee";
import works from "@/localization/works";

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
            className="flex h-[calc(100vh)] items-center justify-center"
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
          <Box className="mt-40 mb-12 flex flex-col">
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col">
                <h1 className="text-9xl font-bold mb-4">Works</h1>
                <p className="text-2xl">
                  And maybe <strong>something else</strong>, or maybe not.
                </p>
              </div>
              <Button label={"See all"} />
            </div>
          </Box>
          <div className="mb-40">
            <Marquee pauseOnHover gradient gradientColor={[0, 0, 0]}>
              {works.map((work : any, index : number) => (
                <div key={index} className={'h-80 w-80 mr-8 relative rounded-3xl overflow-hidden'}>
                  <Image
                    src={work.thumbnail}
                    fill
                    alt={work.title}
                    style={{
                      objectFit: 'cover'
                    }}
                  />
                </div>
              ))}
            </Marquee>
          </div>
          <Box className="my-40 flex-col">
            <div className="flex justify-between w-full items-center mb-8">
              <div className="flex flex-col">
                <h1 className="text-9xl font-bold mb-4">Services</h1>
                <p className="text-2xl">
                  This is what we do to help you{" "}
                  <strong>improve your business</strong>. Or kind of...
                </p>
              </div>
              <Button label={"See all"} />
            </div>
            <div className="service-list">
              <ul>
                <li className="border-b flex flex-col">
                  <div className="toggle flex justify-between h-24 items-center">
                    <strong className="text-4xl font-light">Branding</strong>
                    <div className="toggle relative h-8 w-8">
                      <div className="h-[1px] w-full bg-white absolute top-[50%]" />
                      <div className="h-[1px] w-full bg-white absolute top-[50%] rotate-90" />
                    </div>
                  </div>
                  <div className="body">
                    <div className="flex gap-10 mb-4">
                      <div className="border rounded-full py-1 px-4">
                        UX / UI
                      </div>
                      <div className="border rounded-full py-1 px-4">
                        Frontend
                      </div>
                      <div className="border rounded-full py-1 px-4">
                        Backend
                      </div>
                    </div>
                    <p className="mb-8 text-xl font-light">
                      “Explicación proceso UX/UI” sit amet consectetur. Turpis
                      ac feugiat sodales arcu orci. Placerat varius semper
                      facilisi ullamcorper volutpat quis. Sed a elementum velit
                      eleifend egestas urna tincidunt vel. Purus eu eleifend sit
                      facilisis proin quis eget sit.
                    </p>
                  </div>
                </li>
                <li className="border-b flex flex-col">
                  <div className="toggle flex justify-between h-24 items-center">
                    <strong className="text-4xl font-light">
                      Web Development
                    </strong>
                    <div className="toggle relative h-8 w-8">
                      <div className="h-[1px] w-full bg-white absolute top-[50%]" />
                      <div className="h-[1px] w-full bg-white absolute top-[50%] rotate-90" />
                    </div>
                  </div>
                  <div className="body">
                    <div className="flex gap-10 mb-4">
                      <div className="border rounded-full py-1 px-4">
                        UX / UI
                      </div>
                      <div className="border rounded-full py-1 px-4">
                        Frontend
                      </div>
                      <div className="border rounded-full py-1 px-4">
                        Backend
                      </div>
                    </div>
                    <p className="mb-8 text-xl font-light">
                      “Explicación proceso UX/UI” sit amet consectetur. Turpis
                      ac feugiat sodales arcu orci. Placerat varius semper
                      facilisi ullamcorper volutpat quis. Sed a elementum velit
                      eleifend egestas urna tincidunt vel. Purus eu eleifend sit
                      facilisis proin quis eget sit.
                    </p>
                  </div>
                </li>
                <li className="border-b">
                  <div className="toggle flex justify-between h-24 items-center">
                    <strong className="text-4xl font-light">Social</strong>
                    <div className="toggle relative h-8 w-8">
                      <div className="h-[1px] w-full bg-white absolute top-[50%]" />
                      <div className="h-[1px] w-full bg-white absolute top-[50%] rotate-90" />
                    </div>
                  </div>
                  <div className="body">
                    <div className="flex gap-10 mb-4">
                      <div className="border rounded-full py-1 px-4">
                        UX / UI
                      </div>
                      <div className="border rounded-full py-1 px-4">
                        Frontend
                      </div>
                      <div className="border rounded-full py-1 px-4">
                        Backend
                      </div>
                    </div>
                    <p className="mb-8 text-xl font-light">
                      “Explicación proceso UX/UI” sit amet consectetur. Turpis
                      ac feugiat sodales arcu orci. Placerat varius semper
                      facilisi ullamcorper volutpat quis. Sed a elementum velit
                      eleifend egestas urna tincidunt vel. Purus eu eleifend sit
                      facilisis proin quis eget sit.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Box>
          <Box className="my-40">
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col">
                <h1 className="text-9xl font-bold mb-4">We don&apos;t bite</h1>
                <p className="text-2xl">
                  Or maybe we do but... <strong>Talk to us,</strong>dale!
                </p>
              </div>
              <Button label={"See all"} />
            </div>
          </Box>
        </main>
        <Footer />
      </div>
    </>
  );
}
