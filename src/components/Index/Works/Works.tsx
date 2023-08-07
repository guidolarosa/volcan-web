import Image from "next/image";
import Box from "@/components/Global/Box/Box";
import Button from "@/components/Global/Button/Button";
import works from "@/localization/works";
import Marquee from "react-fast-marquee";

const Works = (props: any) => {
  return (
    <>
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
              className={"h-80 w-80 mr-8 relative rounded-3xl overflow-hidden"}
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
    </>
  );
};

export default Works;
