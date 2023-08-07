import Link from "next/link";
import Image from "next/image";
import Box from "@/components/Global/Box/Box";
import ContactForm from "./ContactForm";

const Contact = (props: any) => {
  return (
    <Box className="my-40 flex flex-col md:flex-row gap-12 relative z-0">
      <div className="w-[580px] h-[580px] absolute right-[-10vw] top-0">
        <Image
          src="/homepage/Email.png"
          fill
          alt="Email"
          className="object-contain"
        />
      </div>
      <div className="flex justify-between w-1/3 mb-auto">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Drop us <br/> a line
          </h1>
          <p className="text-md md:text-md mb-4">
            Introduce yourself, your project/idea, and explain why it matters to you and everyone else.
          </p>
          <p className="mb-4">
            Or contact directly through mail
          </p>
          <p>
            <Link href="mailto:info@wearevolcan.com" className="underline">
              INFO@WEAREVOLCAN.COM
            </Link>
          </p>
        </div>
      </div>
      <div className="w-2/3 mb-auto mt-12 md:mt-0 relative z-10">
        <ContactForm />
      </div>
    </Box>
  );
};

export default Contact;
