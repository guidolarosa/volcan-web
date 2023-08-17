import Box from "../../Global/Box/Box";
import ServiceListItem from "../ServicesListItem/ServiceListItem";

const servicesData = [
  {
    title: "Branding",
    tags: ["UX / UI", "Frontend", "Backend"],
    description: `“Explicación proceso UX/UI” sit amet consectetur. Turpis
    ac feugiat sodales arcu orci. Placerat varius semper
    facilisi ullamcorper volutpat quis. Sed a elementum velit
    eleifend egestas urna tincidunt vel. Purus eu eleifend sit
    facilisis proin quis eget sit.`,
  },
  {
    title: "Web Development",
    tags: ["UX / UI", "Frontend", "Backend"],
    description: `“Explicación proceso UX/UI” sit amet consectetur. Turpis
    ac feugiat sodales arcu orci. Placerat varius semper
    facilisi ullamcorper volutpat quis. Sed a elementum velit
    eleifend egestas urna tincidunt vel. Purus eu eleifend sit
    facilisis proin quis eget sit.`,
  },
  {
    title: "Social",
    tags: ["UX / UI", "Frontend", "Backend"],
    description: `“Explicación proceso UX/UI” sit amet consectetur. Turpis
    ac feugiat sodales arcu orci. Placerat varius semper
    facilisi ullamcorper volutpat quis. Sed a elementum velit
    eleifend egestas urna tincidunt vel. Purus eu eleifend sit
    facilisis proin quis eget sit.`,
  },
];

const Services = () => {
  return (
    <Box className="my-40 flex-col">
      <div className="flex justify-between w-full items-center mb-8">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-9xl font-bold mb-4">Services</h1>
          <p className="text-md md:text-2xl">
            This is what we do to help you{" "}
            <strong>improve your business</strong>. Or kind of...
          </p>
        </div>
      </div>
      <div className="service-list">
        <ul>
          {servicesData.map((service: any, index: number) => (
            <ServiceListItem
              key={index}
              index={index}
              title={service.title}
              tags={service.tags}
              description={service.description}
            />
          ))}
        </ul>
      </div>
    </Box>
  );
};

export default Services;
