import Box from "@/components/Global/Box/Box";
import Image from "next/image";

const Process = ( props : any ) => {
  return (
    <Box className="flex flex-col">
      <h2 className="text-8xl font-semibold"><span className="font-light">Our</span><br/>process.</h2>
      <div className="relative aspect-video w-full">
        <Image 
          src="/homepage/process.png"
          fill
          alt="Our process"
        />

      </div>
    </Box>
  )
}

export default Process;