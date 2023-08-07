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
        <Header />
        <main>
          <Hero />
          <Breakdown />
          <Works />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
