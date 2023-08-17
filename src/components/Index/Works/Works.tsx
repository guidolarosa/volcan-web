import Image from "next/image";
import Link from "next/link";
import Box from "@/components/Global/Box/Box";
import WorkSlider from "./WorkSlider";

const Works = (props: any) => {
  return (
    <>
      <Box className="mt-40 mb-12 flex flex-col">
        <div className="flex justify-between w-full items-center">
          <div className="flex w-full relative">
            <div className="w-[475px] h-[475px] aspect-square absolute top-[-80px] right-[calc(70vw-80px)] opacity-0 lg:opacity-100">
              <Image
                src="/homepage/Pen.png"
                fill
                alt="Volcan"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col ml-0 lg:ml-auto">
              <h1 className="text-4xl md:text-[128px] md:leading-[128px] font-bold mb-4 md:text-right md:mb-8">
                Works
                <br /> <span className="font-light">that work.</span>
              </h1>
              <p className="text-md md:text-4xl md:text-right mb-4">
                This is what we did.
              </p>
              <p className="text-md md:text-4xl md:text-right mb-4">
                This is what we <strong>like to do.</strong>
              </p>
              <p className="text-md md:text-lg md:text-right mb-4">
                Want to see more? Follow us on{" "}
                <Link href="#" className="underline">
                  Instagram
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Box>
      <div className="mb-40">
        <WorkSlider />
      </div>
    </>
  );
};

export default Works;
