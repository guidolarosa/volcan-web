import Box from "@/components/Global/Box/Box";
import Image from "next/image";

const data = [
  {
    title: "Understand",
    image: "#",
    titleGradient: "linear-gradient(135deg, #F66 0%, #FF2729 100%)",
    content: (
      <>
        <p>
          We work with an <strong>integral vision.</strong>
        </p>
        <p>
          We understand your business, set a goal and define a{" "}
          <strong>clear aim</strong> that will guide us throught the project
        </p>
      </>
    ),
  },
  {
    title: "Analyze",
    image: "#",
    titleGradient: "linear-gradient(135deg, #FF2729 0%, #FF9040 100%)",
    content: (
      <>
        <p>
          We analize the <strong>context</strong> where the{" "}
          <strong>product</strong> or <strong>brand</strong> will interact and
          define possible scenarios.
        </p>
      </>
    ),
  },
  {
    title: "Define",
    image: "#",
    titleGradient: "linear-gradient(135deg, #FF9040 0%, #7862FF 100%)",
    content: (
      <>
        <p>
          We define the best <strong>communication integral strategy</strong> to
          engage and reach the audience.
        </p>
      </>
    ),
  },
  {
    title: "Transform",
    image: "#",
    titleGradient: "linear-gradient(135deg, #7862FF 0%, #FF2729 100%)",
    content: (
      <>
        <p>
          Through design, technology and metrics we transform the buusiness to{" "}
          <strong>reach the goals.</strong>
        </p>
      </>
    ),
  },
];

const Process = (props: any) => {
  return (
    <Box className="flex flex-col">
      <h2 className="text-6xl lg:text-8xl font-semibold mb-20 lg:mb-0">
        <span className="font-light">Our</span>
        <br />
        process.
      </h2>
      <div className="relative aspect-video w-full">
        <ul className="flex flex-col w-full items-center md:flex-row justify-between gap-12">
          {data.map((item, index) => (
            <li
              key={index}
              className="group lg:relative flex flex-col w-full max-w-[380px] md:w-1/4 mb-20 lg:mb-0"
              data-aos="fade-up"
              style={{ top: `${(data.length - index) * 80}px` }}
            >
              <div className="flex align-bottom mb-4 lg:opacity-0 group-hover:opacity-100 transition translate-y-0 lg:translate-y-[-40px] group-hover:translate-y-0">
                <div className="mt-auto mr-1 opacity-50">
                  <span>{`0${index + 1}`}</span>
                </div>
                <h3
                  className="font-bold text-4xl"
                  style={{
                    background: `-webkit-${item.titleGradient}`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.title}
                </h3>
              </div>
              <div className="image aspect-square w-full relative">
                <div className="active absolute top-0 left-0 w-full h-full opacity-100 md:opacity-0 group-hover:opacity-100 transition z-10 group-hover:scale-125 duration-300">
                  <Image
                    fill
                    src={`/shapes/Shape ${index + 1} - Active.png`}
                    alt=""
                  />
                </div>
                <div className="dim absolute top-0 left-0 w-full h-full opacity-100 group-hover:opacity-0 transition duration-300">
                  <Image
                    fill
                    src={`/shapes/Shape ${index + 1} - Dim.png`}
                    alt=""
                  />
                </div>
              </div>
              <div className="opacity-100 lg:opacity-0 group-hover:opacity-100 transition translate-y-0   lg:translate-y-[40px] group-hover:translate-y-0 text-stone-300">{item.content}</div>
            </li>
          ))}
        </ul>
        {/* <Image src="/homepage/process.png" fill alt="Our process" /> */}
      </div>
    </Box>
  );
};

export default Process;
