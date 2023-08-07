import Image from "next/image";
import Marquee from "react-fast-marquee";
import works from "@/localization/works";

const WorksMarquee = (props: any) => {
  return (
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
  );
};
