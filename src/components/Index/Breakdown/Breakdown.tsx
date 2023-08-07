import { CardData } from "./BreakdownData";

const Card = (props: any) => {
  return (
    <div className="card p-8 border rounded-3xl w-full lg:w-[360px] bg-gradient-card border-stone-600">
      <div className="mb-[40px]">
        <props.icon size={"62px"} />
      </div>
      <div className="mb-[40px]">
        <h2
          className="text-3xl font-bold"
          style={{
            background: `-webkit-${props.gradient}`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {props.title}
        </h2>
      </div>
      <div className="font-[16px] leading-relaxed">{props.content}</div>
    </div>
  );
};

const Breakdown = (props: any) => {
  return (
    <div>
      <ul className="flex flex-col md:flex-row gap-12 justify-center max-w-[calc(100vw-120px)] mx-auto flex-wrap">
        {CardData.map((data: any, index: number) => (
          <li key={data.title}>
            <Card
              icon={data.icon}
              title={data.title}
              gradient={data.gradient}
              content={data.content}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breakdown;
