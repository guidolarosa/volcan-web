import Box from "@/components/Global/Box/Box";
import Button from "@/components/Global/Button/Button";

const SimpleBreakdown = (props: any) => {
  return (
    <Box>
      <div
        id="breakdown"
        className="flex flex-col max-w-6xl mx-auto w-full px-2 text-center py-16 rounded-2xl bg-cover"
        style={{ backgroundImage: `url(/homepage/breakdown.png)` }}
      >
        <strong className="inline-block text-5xl lg:text-8xl">We Are</strong>
        <strong className="inline-block text-5xl lg:text-8xl">VOLCAN</strong>
        <p className="text-md lg:text-4xl mt-8 leading-relaxed max-w-4xl mx-auto tracking-wide">
          We create and develop business ideas <br />
          and brands with{" "}
          <strong>
            attitude and <br />
            meaningfull impact
          </strong>
          .
        </p>
        <Button label={"About Us"} className={"mt-8 mx-auto"} />
      </div>
    </Box>
  );
};
