import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import works from "@/localization/works";
import Box from "@/components/Global/Box/Box";

const workPillStyles = "mb-2 lg:mb-0 w-fit py-2 px-4 lg:px-8 bg-gradient-dark backdrop-blur-md text-sm lg:text-xl rounded-full font-light border border-stone-400 text-stone-200";

const WorkSlider = (props: any) => {
  return (
    <Splide
      className="h-[90vh]"
      options={{
        height: "90vh",
        autoplay: true,
        rewind: true
      }}
    >
      {works.map((work: any, index: number) => (
        <SplideSlide
          key={index}
          className={
            "mr-8 rounded-3xl overflow-hidden h-[90vh] flex flex-col relative"
          }
        >
          <Image
            src={work.largeImage}
            fill
            alt={work.title}
            style={{
              objectFit: "cover",
            }}
          />
          <Box className="flex justify-between absolute top-0 left-0 w-full py-8">
            <div className={workPillStyles}>{work.title}</div>
            <div className={workPillStyles}>
              {work.services.map((service: string, index: any) => (
                <span key={index}>{service}</span>
              ))}
            </div>
            <div className={workPillStyles}>{work.location}</div>
          </Box>
          {work.logo && (
            <div className="max-w-[60vw] w-[580px] h-[580px] relative my-auto mx-auto">
              <Image
                src={work.logo}
                fill
                alt={work.title}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          )}
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default WorkSlider;
