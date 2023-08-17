import Image from "next/image";
import Box from "@/components/Global/Box/Box";

const TemporarySitePanel = ( props : any ) => {
  return (
    <Box className="relative py-80">
      <Image 
        src="/homepage/Temporary.png"
        fill
        alt="Volcan"
        className="object-contain relative z-0"
      />
      <p className="text-center text-3xl lg:text-5xl leading-normal relative z-10 max-w-[920px] mx-auto" data-aos="fade-up">This is our <strong>temporary</strong> web page. You will be able to see the full thing <strong>soon</strong>. Meanwhile you can have a <strong>good coffee</strong> and see our Instagram.  </p>
    </Box>
  )
};

export default TemporarySitePanel;