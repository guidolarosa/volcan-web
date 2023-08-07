import Box from "../../Global/Box/Box";
import Image from "next/image";

const Hero = (props: any) => {
  return (
    <Box
      id={"hero"}
      className="flex h-[calc(100vh)] items-center justify-center mb-40 relative"
    >
      <Image
        src="/homepage/hero.png"
        alt="Volcan"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="w-full h-[120px] relative">
        <Image src="/homepage/Logo.svg" alt="Volcan" fill />
      </div>
    </Box>
  );
};

export default Hero;
