import Box from "../../Global/Box/Box";
import Image from "next/image";

const Hero = (props: any) => {
  return (
    <Box
      id={"hero"}
      className="flex h-[calc(100dvh)] items-center justify-center mb-40 relative"
    >
      <Image
        src="/homepage/hero.png"
        alt="Volcan"
        fill
        style={{ objectFit: "cover" }}
      />
      <div data-aos="fade-up" className="w-[80vw] lg:w-full h-[120px] relative">
        <Image src="/homepage/Logo.svg" alt="Volcan" fill />
      </div>
    </Box>
  );
};

export default Hero;
