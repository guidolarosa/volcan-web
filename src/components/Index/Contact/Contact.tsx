import ContactForm from "./ContactForm";
import Box from "@/components/Global/Box/Box";

const Contact = (props: any) => {
  return (
    <Box className="my-40 flex flex-col">
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-9xl font-bold mb-4">
            We don&apos;t bite
          </h1>
          <p className="text-md md:text-2xl">
            Or maybe we do but... <strong>Talk to us, </strong>dale!
          </p>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </Box>
  );
};

export default Contact;
