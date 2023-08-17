import { Montserrat } from "next/font/google";
import gsap from "gsap";
import { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Global/Header/Header";
import Footer from "@/components/Global/Footer/Footer";
import Services from "@/components/Index/Services/Services";
import Hero from "@/components/Index/Hero/Hero";
import Breakdown from "@/components/Index/Breakdown/Breakdown";
import Works from "@/components/Index/Works/Works";
import Contact from "@/components/Index/Contact/Contact";
import Process from '@/components/Index/Process/Process';
import TemporarySitePanel from "@/components/Index/TemporarySitePanel/TemporarySitePanel";

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
        <title>Volcan | Branding and Design Studio</title>
        <link rel="icon" href="/logo.svg" />
        <meta property="twitter:image" content="https://i.ibb.co/Wk9GBsD/thumbnail.png"></meta>
        <meta property="og:image" content="https://i.ibb.co/Wk9GBsD/thumbnail.png"></meta>
        <meta property="twitter:card" content="https://i.ibb.co/Wk9GBsD/thumbnail.png"></meta>
        <meta property="twitter:title" content="Volcan | Branding and Design Studio"></meta>
        <meta property="twitter:description" content="Branding and Design Studio"></meta>
        <meta property="description" content="Branding and Design Studio" />
        <meta property="og:image" content="https://i.ibb.co/Wk9GBsD/thumbnail.png"></meta>
        <meta property="og:title" content="Branding and Design Studio"></meta>
        <meta property="og:description" content="Branding and Design Studio" />
        <meta property="og:url" content="https://volcancollective.com"></meta>
      </Head>
      <div className={`${montserrat.className} h-[2000px]`}>
        <Header />
        <main>
          <Hero />
          <Breakdown />
          <Works />
          {/* <Services /> */}
          <Process />
          <Contact />
          <TemporarySitePanel />
        </main>
        <Footer />
      </div>
    </>
  );
}
